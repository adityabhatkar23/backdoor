import express from "express";
import passport from "passport";
import GitHubStrategy from "passport-github2";
import session from "express-session";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cors from "cors";
import { exec } from "child_process";
import util from "util";

const execPromise = util.promisify(exec);
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "https://api.backdoor.adityabhatkar.dev/auth/github/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    },
  ),
);

app.get("/", (req, res) => {
  res.send("API running");
});

app.get("/auth/github", passport.authenticate("github"));

app.get("/auth/github", (req, res, next) => {
  const cliPort = req.query.cliPort || "4242"; 
  passport.authenticate("github", { state: cliPort })(req, res, next);
});

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { session: false }),
  (req, res) => {
    try {
      const cliPort = req.query.state || "4242";

      const token = jwt.sign(
        { id: req.user.id, username: req.user.username },
        process.env.JWT_SECRET,
        { expiresIn: "30d" },
      );

      res.redirect(`http://localhost:${cliPort}/callback?token=${token}`);
    } catch (err) {
      console.error(err);
      res.status(500).send("Auth failed");
    }
  }
);

app.post("/create-tunnel", async (req, res) => {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({ error: "login first" });
  }

  try {
    const token = auth.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);

    console.log("User authorized:", user.username);

    const port = Math.floor(Math.random() * (50000 - 40000)) + 40000;

    const tempPassword = Math.floor(
      10000000 + Math.random() * 90000000,
    ).toString();

    await execPromise(`echo "tunnel:${tempPassword}" | sudo chpasswd`);

    res.json({ port, sshPassword: tempPassword });
  } catch (err) {
    console.error("Tunnel error:", err);
    if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
      return res.status(401).json({ error: "bad token" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
});

process.on("uncaughtException", (err) => console.error(err));
process.on("unhandledRejection", (err) => console.error(err));

app.listen(process.env.PORT || 8080, "0.0.0.0", () => {
  console.log(`API running on port ${process.env.PORT || 8080}`);
});
