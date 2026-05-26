#!/usr/bin/env node

import { Command } from "commander";
import { execa } from "execa";
import ora from "ora";
import chalk from "chalk";
import http from "http";
import fs from "fs";
import axios from "axios";
import open from "open";
import readline from "readline/promises";

const program = new Command();

const API = "https://api.backdoor.adityabhatkar.dev";
const SSH_HOST = "api.backdoor.adityabhatkar.dev";
const USER = "tunnel";

const CONFIG_DIR = `${process.env.HOME}/.backdoor`;
const CONFIG = `${CONFIG_DIR}/config.json`;

program.name("backdoor").description("Expose localhost publicly");

program.command("login").action(async () => {
  const TARGET_PORT = 4242; 

  const server = http.createServer((req, res) => {
    const urlObj = new URL(req.url, `http://localhost:${TARGET_PORT}`);

    if (urlObj.pathname === "/callback") {
      const token = urlObj.searchParams.get("token");

      if (token) {
        fs.mkdirSync(CONFIG_DIR, { recursive: true });
        fs.writeFileSync(CONFIG, JSON.stringify({ token }, null, 2));

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
          <html>
            <body style="margin:0;display:flex;justify-content:center;align-items:center;height:100vh;background:#111;color:#fff;font-family:sans-serif;text-align:center;">
              <div>
                <h1>Authenticated Successfully!</h1>
                <p>You can close this tab and return to your terminal.</p>
              </div>
            </body>
          </html>
        `);

        console.log(
          chalk.green(
            "\nLogged in successfully and authenticated token captured!",
          ),
        );

        req.socket.destroy();
        server.close(() => {
          process.exit(0);
        });
      } else {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Authentication token missing.");
      }
    }
  });

  server.listen(TARGET_PORT, async () => {
    const url = `${API}/auth/github?cliPort=${TARGET_PORT}`;
    console.log(
      chalk.blue(`Opening your browser for secure authentication workflow...`),
    );

    try {
      await open(url);
    } catch {
      console.log(
        chalk.yellow(
          `\nBrowser failed to open automatically. Please open manually:\n${url}`,
        ),
      );
    }
  });
});

program
  .command("share")
  .argument("<port>")
  .action(async (port) => {
    await main(Number(port));
  });

await program.parseAsync(process.argv);

async function checkLocalhost(port) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${port}`, () => resolve(true));
    req.on("error", () => resolve(false));
    req.setTimeout(2000, () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function main(port) {
  if (!port || isNaN(port)) {
    console.log(chalk.red("Please provide a valid port number."));
    return;
  }

  if (!fs.existsSync(CONFIG)) {
    console.log(chalk.red(`Not logged in\n\nRun:\n  backdoor login\n`));
    process.exit(1);
  }

  let token;
  try {
    token = JSON.parse(fs.readFileSync(CONFIG)).token;
  } catch {
    console.log(
      chalk.red("Config file corrupted. Please run 'backdoor login' again."),
    );
    process.exit(1);
  }

  const running = await checkLocalhost(port);
  if (!running) {
    console.log(chalk.red(`Nothing running on localhost:${port}`));
    process.exit(1);
  }

  const spinner = ora("Allocating tunnel...").start();

  try {
    const res = await axios.post(
      `${API}/create-tunnel`,
      {},
      { headers: { Authorization: `Bearer ${token}` } },
    );

    const tunnelPort = res.data.port;
    const sshPassword = res.data.sshPassword; // Extract the 8-digit password payload
    spinner.succeed("Tunnel allocated!");

    const tunnel = execa(
      "sshpass",
      [
        "-p",
        sshPassword, // Pass the clean password length constraint string
        "ssh",
        "-N",
        "-R",
        `0.0.0.0:${tunnelPort}:localhost:${port}`,
        "-o",
        "StrictHostKeyChecking=accept-new",
        "-o",
        "PubkeyAuthentication=no",
        `${USER}@${SSH_HOST}`,
      ],
      { stdio: "inherit" },
    );

    console.log(`
🌍 ${chalk.bold.green(`https://${tunnelPort}.backdoor.adityabhatkar.dev`)}
📦 Exposing -> localhost:${port}

Press Ctrl+C to stop the tunnel
`);

    process.on("SIGINT", () => {
      spinner.info("Closing tunnel...");
      tunnel.kill("SIGINT");
      process.exit(0);
    });

    await tunnel;
  } catch (err) {
    spinner.fail("Failed to create tunnel");
    console.log(chalk.red(err.response?.data?.error || err.message));
    process.exit(1);
  }
}
