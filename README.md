# rsj-systems website

Plain HTML/CSS/JS — no build step, no dependencies. Edit a file, save, push to GitHub, done.

## Files
- `index.html` — homepage
- `solutions.html` — apps/platform page
- `company.html` — about page
- `contact.html` — contact form
- `assets/styles.css` — all styling (colors, fonts, spacing — edit this to restyle the whole site)
- `assets/script.js` — mobile menu + scroll animations
- `assets/logo.svg` — the logo mark

## How to make a small edit
1. Open the `.html` file for the page you want to change in any text editor (even Notepad, but VS Code is free and easier).
2. Find the text in quotes/tags and change it.
3. Save the file.
4. Push to GitHub (see below) — the live site updates automatically within a minute or two.

## Publishing this to rsjsystems.com

### Step 1 — Push the code to your GitHub repo
Since your `rsj-systems` repo already exists with a README, run this from inside this folder:

```
git init
git remote add origin https://github.com/reitrcal41/rsj-systems.git
git add .
git commit -m "New website"
git branch -M main
git pull origin main --allow-unrelated-histories
git push origin main
```

If it asks you to resolve a conflict on README.md, just keep this one and continue.

### Step 2 — Turn on GitHub Pages
1. On GitHub, go to your `rsj-systems` repo → **Settings** → **Pages** (left sidebar).
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`. Click **Save**.
4. Wait ~1 minute. GitHub will show you a URL like `https://reitrcal41.github.io/rsj-systems/` — open it to confirm the site works.

### Step 3 — Point rsjsystems.com at GitHub Pages
This replaces the current server (3.106.239.70) that got flagged as malicious, with GitHub's servers.

1. In GitHub: repo → **Settings** → **Pages** → under "Custom domain" enter `rsjsystems.com` → **Save**. This creates a `CNAME` file in your repo automatically.
2. In CrazyDomains: go to **DNS Settings** for rsjsystems.com (the page in your screenshot) and:
   - **Delete** the existing `A Record` for `rsjsystems.com` (the one pointing at 3.106.239.70).
   - **Add** four new `A Records` for `rsjsystems.com`, pointing to GitHub Pages' IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Leave the `www.rsjsystems.com` record, but edit it from an A record to a **CNAME record** pointing to `reitrcal41.github.io`.
   - **Leave `benmaxservice.rsjsystems.com` exactly as it is** — don't touch it. That's a separate app on your existing server and this change won't affect it.
3. Back in GitHub → Settings → Pages, tick **Enforce HTTPS** once it becomes available (may take up to 24 hours for the certificate).

DNS changes can take anywhere from a few minutes to a few hours to take effect everywhere.

### Step 4 — Get the contact form working
The contact form needs somewhere to send submissions since this is a static site with no backend.
1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form, copy the Form ID it gives you (looks like `xayzabcd`).
3. In `contact.html`, find this line near the top of the form:
   ```
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your real ID, save, and push to GitHub.

## About the "malicious site" warning
That flag was almost certainly triggered by whatever was previously running on the server at `3.106.239.70` (phishing kits, malware, or a compromised app — not the domain itself). Moving `rsjsystems.com` to GitHub Pages, as above, takes the domain off that server entirely, which should clear the warning once browsers/VPN blocklists re-scan it (can take a few days). If you also plan to keep using that server for anything else, it's worth having it scanned/rebuilt separately, since the flag follows the server, not just the domain.
