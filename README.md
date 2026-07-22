# Ravindu Pathirana — Portfolio

A modern, dark-themed personal portfolio built with **React + Vite + Tailwind CSS**, animated with **Framer Motion** and **Lucide** icons. It ships with a full **CI/CD pipeline** (GitHub Actions → GitHub Pages) and a **Docker** setup so you can learn hosting end-to-end.

> All your text content lives in **one file**: `src/data.js`. Edit that to update your bio, skills, projects, links, etc.

---

## 0. Install the tools you need (one time)

- **Node.js 20+** — https://nodejs.org (this gives you `node` and `npm`)
- **Git** — https://git-scm.com
- **Docker Desktop** (for Part 2) — https://www.docker.com/products/docker-desktop
- A **GitHub account** — you already have one: `Ravindu-Pathirana`

Check they work:

```bash
node -v      # should print v20 or higher
npm -v
git --version
```

---

## 1. Run the site on your own computer

Open a terminal **inside this folder** and run:

```bash
npm install      # downloads the libraries (creates node_modules/)
npm run dev      # starts a local dev server
```

Open the URL it prints (usually `http://localhost:5173`). Edit files and the page updates instantly.

To make a production build (the optimized files that actually get hosted):

```bash
npm run build    # outputs the finished site into dist/
npm run preview  # serves dist/ locally so you can test the real build
```

**What just happened?** `npm run build` bundles your React code into a few small static files (HTML, CSS, JS) in the `dist/` folder. Hosting = putting that `dist/` folder on a server that anyone can reach.

---

# PART 1 — Host on GitHub Pages (this is your CI/CD)

**The goal:** every time you `git push`, GitHub automatically builds the site and publishes it to `https://ravindu-pathirana.github.io`. That automation is **CI/CD** — Continuous Integration / Continuous Deployment.

### Which repo name to use?

You have two options. **Pick ONE.**

| Option | Repo name | Your site URL | base path |
|---|---|---|---|
| **A. User site (recommended)** | `Ravindu-Pathirana.github.io` | `https://ravindu-pathirana.github.io` | `/` |
| **B. Project site** | `portfolio` (any name) | `https://ravindu-pathirana.github.io/portfolio/` | `/portfolio/` |

The included GitHub Actions workflow **detects this automatically** and sets the correct base path either way — you don't have to configure anything.

### Step 1 — Create the repository on GitHub

1. Go to https://github.com/new
2. **Repository name:** `Ravindu-Pathirana.github.io` (Option A) — type it exactly, matching your username.
3. Keep it **Public**. Do **not** add a README/gitignore (we already have them).
4. Click **Create repository**.

### Step 2 — Push this code to GitHub

In a terminal inside this folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Ravindu-Pathirana/Ravindu-Pathirana.github.io.git
git push -u origin main
```

> If you chose Option B, replace the URL with your project repo, e.g. `.../portfolio.git`.

### Step 3 — Turn on GitHub Pages (once)

1. On GitHub, open your repo → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. That's it. Don't pick a branch — "GitHub Actions" is the modern way and matches our workflow.

### Step 4 — Watch it deploy

1. Go to the **Actions** tab of your repo.
2. You'll see the **"Deploy to GitHub Pages"** workflow running (triggered by your push).
3. It has two jobs: **build** (installs deps + `npm run build`) and **deploy** (publishes `dist/`).
4. When both show green checkmarks (~1–2 min), your site is live at the URL from the table above. 🎉

### From now on: the CI/CD loop

```bash
# make an edit (e.g. in src/data.js), then:
git add .
git commit -m "Update projects"
git push
```

Every push re-runs the workflow and updates your live site automatically. **That is CI/CD.** The pipeline is defined in `.github/workflows/deploy.yml` — open it, the comments explain each step.

---

# PART 2 — Docker (run your site in a container)

**Why Docker?** A container packages your app **plus everything it needs to run** (a web server, config, the built files) into one portable image. "It works on my machine" becomes "it works everywhere," because the machine travels with the app. Cloud platforms run containers, so this is your bridge to cloud hosting.

### How our setup works

Look at the `Dockerfile`. It has **two stages**:

1. **Build stage** (`node:20-alpine`) — installs dependencies and runs `npm run build` to produce `dist/`.
2. **Serve stage** (`nginx:alpine`) — copies just the finished `dist/` into a tiny nginx web server.

The final image contains **only the website + a web server** — no Node, no source code, no `node_modules`. That's why it's small and fast. This pattern is called a **multi-stage build**.

### Step 1 — Build the image

Make sure Docker Desktop is running, then:

```bash
docker build -t ravindu-portfolio .
```

- `docker build` reads the `Dockerfile`.
- `-t ravindu-portfolio` names ("tags") the image.
- `.` means "use this folder as the build context."

### Step 2 — Run the container

```bash
docker run -d -p 8080:80 --name portfolio ravindu-portfolio
```

- `-d` = run in the background (detached).
- `-p 8080:80` = map port **8080 on your computer** to port **80 inside the container** (where nginx listens).
- Open **http://localhost:8080** — your site is now served by nginx from inside a container.

### Handy commands

```bash
docker ps                  # list running containers
docker logs portfolio      # see nginx logs
docker stop portfolio      # stop it
docker rm portfolio        # remove the stopped container
docker images              # list your images
```

### Even simpler: docker compose

We included `docker-compose.yml`, so you can do it all in one line:

```bash
docker compose up --build   # build + run, then visit http://localhost:8080
docker compose down         # stop and clean up
```

---

# PART 3 — Deploy the container to the cloud

GitHub Pages only hosts **static files**. To host an actual **running container** (and learn how the cloud works), use a platform that runs Docker images. All of these have free tiers and are beginner-friendly.

### Understanding the cloud in one paragraph

A "cloud host" is just someone else's computer that's always on and reachable from the internet. You hand it your Docker image; it runs the container and gives you a public URL + HTTPS. You don't manage the server, OS, or networking — that's the "platform as a service" idea. You push code, it builds and runs it.

### Option A — Render (easiest for Docker)

1. Create an account at https://render.com and connect your GitHub.
2. **New → Web Service** → pick your repo.
3. Render detects the `Dockerfile`. Set:
   - **Runtime:** Docker
   - **Instance type:** Free
4. **Important:** nginx listens on port **80**, so set the **Port** to `80` (Render → Settings → Environment, or it may auto-detect from `EXPOSE 80`).
5. Click **Create Web Service**. Render builds the image and gives you a URL like `https://ravindu-portfolio.onrender.com`.
6. Every push to `main` triggers an automatic redeploy — that's cloud CI/CD.

> Note: free instances sleep after inactivity and take a few seconds to wake. Fine for a portfolio.

### Option B — Railway

1. https://railway.app → **New Project → Deploy from GitHub repo**.
2. Railway detects the `Dockerfile` and builds it.
3. Under **Settings → Networking → Generate Domain**, expose port **80** to get a public URL.

### Option C — Fly.io (closest to "real" cloud, uses the CLI)

```bash
# install flyctl from https://fly.io/docs/hands-on/install-flyctl/
fly auth signup
fly launch          # detects the Dockerfile, asks a few questions, sets internal port 80
fly deploy          # builds and ships your container worldwide
```

### Which should you pick?

Start with **Render** — it's the least friction for a Dockerfile. Once comfortable, try **Fly.io** to learn a CLI-driven workflow that feels closer to how companies deploy.

---

## Customizing your portfolio

| I want to change... | Edit this |
|---|---|
| Bio, name, title, links | `src/data.js` → `profile`, `socials` |
| Skills | `src/data.js` → `skills` |
| Projects (and add GitHub links) | `src/data.js` → `projects` |
| Research interests / objective | `src/data.js` → `researchInterests`, `careerObjective` |
| Certifications (hidden until you add any) | `src/data.js` → `certifications` |
| Add your photo | Put e.g. `profile.jpg` in `public/`, then set `profile.photo = '/profile.jpg'` |
| Add your CV | Put the PDF in `public/`, then set `profile.resumeUrl = '/YourCV.pdf'` |
| Colors / theme | `tailwind.config.js` and `src/index.css` |

### Add your repository links

Three projects currently say "Coming soon" because the repo links are empty. In `src/data.js`, fill the `github:` field for each project, e.g.:

```js
github: 'https://github.com/Ravindu-Pathirana/HealthWise-AI',
```

---

## Project structure

```
portfolio/
├─ .github/workflows/deploy.yml   # CI/CD: auto-build + deploy to GitHub Pages
├─ public/                        # static assets (favicon, your photo, CV)
├─ src/
│  ├─ components/                 # each section of the page
│  ├─ data.js                     # ← YOUR CONTENT lives here
│  ├─ App.jsx                     # assembles the sections
│  ├─ main.jsx                    # React entry point
│  └─ index.css                   # Tailwind + custom styles
├─ Dockerfile                     # multi-stage build → nginx
├─ nginx.conf                     # web server config
├─ docker-compose.yml             # one-command local container run
├─ vite.config.js                 # build config (handles base path)
├─ tailwind.config.js             # theme colors + animations
└─ package.json                   # scripts + dependencies
```

## Cheat sheet

```bash
npm install            # install dependencies
npm run dev            # local dev server (hot reload)
npm run build          # production build → dist/
git push               # → triggers GitHub Actions → live on GitHub Pages
docker compose up --build   # run in a container at localhost:8080
```

---

Built by Ravindu Pathirana · University of Moratuwa
