
# Backdoor 

A minimalist reverse proxy and tunneling tool that instantly exposes local development servers to the internet over secure HTTPS using custom subdomains.

---

##  Features

* **Instant Tunneling:** Expose any local port via a single command.
* **Secure by Default:** Automated end-to-end TLS 1.3 encryption.
* **GitHub Auth:** Seamless command-line OAuth login flow.

---

##  Usage

### 1. Authenticate
```bash
backdoor login
```

### 2. Expose a Local Port

Spin up your local app (e.g., port `3000`), then share it:

```bash
backdoor share 3000
```

**Output:**

```text
Your local tunnel is live at:
https://47150.backdoor.adityabhatkar.dev

```
