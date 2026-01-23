# Docusaurus DevSecOps Portfolio

## Description

This repository contains my DevSecOps portfolio built with **Docusaurus, React, and TypeScript**.

It showcases my experience in **Linux, automation, CI/CD, infrastructure, and modern frontend development** through real projects and documented work.

## Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Quickstart](#quickstart)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Build & Deployment](#build--deployment)

## Prerequisites

- Node.js (18+ recommended)
- pnpm
- Optional: V-Server for deployment

## Quickstart

1. Clone the repository:

```bash
git clone git@github.com:Bodev13/devsecops-blog.git
cd devsecops-blog
```

2. Install dependencies and start locally

```bash
pnpm install
pnpm start
```

3. Build and deploy

```bash
pnpm build
pnpm deploy
```

## Project Structure

The repository is organized as follows

`src/components/` — Contains reusable React components for portfolio sections such as Header, Hero, Skills, Projects, Contact, and Footer. Each component is written in TypeScript and styled using CSS Modules

`src/pages/` — Defines page layouts and assembles components into the main site structure (including the homepage)

`static/` — Stores static assets such as images, icons, and other media used across the portfolio

`docusaurus.config.ts` — Main configuration file for Docusaurus, including site metadata, routing, theme settings, and deployment options

`README.md` — Project documentation, setup instructions, and usage guidelines


## Usage

Portfolio content and layout are managed through React components located in `src/components/`.

Each major section (Header, Hero, Skills, Projects, Contact, Footer) is implemented as a separate TypeScript component and styled using CSS Modules.

You can customize the portfolio by:

- Editing text content and layout in `src/components/*`
- Updating project data in the Projects component
- Replacing images and icons in the `static/` directory
- Adjusting global site settings in `docusaurus.config.ts`
- Modifying routes and page structure in `src/pages/`

The project follows clean component architecture, TypeScript typing (no `any` usage), and responsive design principles for desktop, tablet, and mobile layouts.


## Build & Deployment

- Build the static site

```bash
pnpm build
```

- Deploy to GitHub Pages
```bash
pnpm deploy
```

The generated build/ folder can also be deployed using NGINX, Docker, or any static hosting provider

