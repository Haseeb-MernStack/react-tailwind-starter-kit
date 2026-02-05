# React + Vite

A minimal React starter kit built with Vite and Tailwind CSS. This repository provides a small component set, sensible defaults, and an opinionated project structure to get you prototyping UIs quickly.

## What this repo is

This is the `react-tailwind-starter-kit` — a lightweight starter that combines React, Vite, and Tailwind CSS with a few reusable UI components and a minimal ESLint setup. It's intended for rapid prototyping, learning, and bootstrapping new front-end projects.

## Tech stack

- **Framework:** React
- **Bundler / Dev server:** Vite
- **Styling:** Tailwind CSS
- **Linting:** ESLint (config included)
- **Optional React plugins:** `@vitejs/plugin-react` or `@vitejs/plugin-react-swc` (see notes below)
- **Languages / tooling:** JavaScript (ESNext), PostCSS

Notes: The template can use either the Babel-based plugin or the SWC-based plugin for fast refresh. Pick the one that best fits your performance needs.

## Folder structure

Top-level structure (important files and folders):

```
.
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── public/
│   └── screenshots/    # place screenshots here for README
├── src/
│   ├── main.jsx
│   ├── index.css
│   ├── App.jsx
│   ├── assets/
│   ├── components/
│   │   ├── Cards.jsx
│   │   ├── CTA.jsx
│   │   ├── Hero.jsx
│   │   └── layout/
│   │       └── ui/
│   │           ├── Button.jsx
│   │           ├── Card.jsx
│   │           ├── Footer.jsx
│   │           ├── Input.jsx
│   │           └── Modal.jsx
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   │   └── LandingPage.jsx
│   └── utils/
└── README.md
```

## How to run

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

If your `package.json` uses `yarn` or `pnpm`, replace `npm` with the appropriate package manager command.

## Screenshots

Add screenshots to `public/screenshots` and reference them in this README. Example (replace images with your own):

![Landing page](public/screenshots/landing-1.png)
![Components showcase](public/screenshots/components-1.png)

If you don't have screenshots yet, create them and drop them in `public/screenshots` so they are served by Vite in development.

## Who should use it

- Developers who want a small, fast React starter configured with Tailwind CSS.
- Designers and front-end engineers prototyping UI components.
- Learners who want a simple, well-structured example of a React + Vite project.

---

For more details about the Vite React template, plugins, and advanced configuration, see the official Vite docs and the `@vitejs/plugin-react` plugin README.
