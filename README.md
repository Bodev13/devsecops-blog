# Docusaurus DevSecOps Portfolio

## Description

This repository contains my **DevSecOps portfolio**, built with **Docusaurus, React, and TypeScript**.

The project demonstrates my hands-on experience in **Linux systems, automation, CI/CD pipelines, infrastructure engineering, and modern frontend development**.  
It serves as a **technical portfolio** showcasing real projects, clean component architecture, structured Git workflows, and responsive UI design.

---

## Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Quickstart](#quickstart)
- [How to Start](#how-to-start)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Build & Deployment](#build--deployment)

---

## Prerequisites

- Node.js (18+ recommended)
- pnpm
- Git

---

## Quickstart

- Clone the repository:

```bash
git clone git@github.com:Bodev13/devsecops-blog.git
cd devsecops-blog
```

- Install dependencies

```bash
pnpm install
```

- Start local Dev Server

```bash
pnpm start
```
- The site will be available at

```bash
http://localhost:3000
```

- Build and deploy

```bash
pnpm build
pnpm run deploy
```
## How to start

- To run the project locally from scratch

```bash
pnpm install
pnpm start
```
This launches Docusaurus in development mode with live reload enabled

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

You can customize the portfolio by

- Editing text content and layout in `src/components/*`
- Updating project data in the Projects component
- Replacing images and icons in the `static/` directory
- Adjusting global site settings in `docusaurus.config.ts`
- Modifying routes and page structure in `src/pages/`

The project follows best practices including

- Fully typed TypeScript (no any)

- Modular component architecture

- Responsive design for Desktop, Tablet, and Mobile

- Clean and maintainable code structure

## Build & Deployment

- Build the static site

```bash
pnpm build
```

- Deploy to GitHub Pages

```bash
pnpm run deploy
```

The generated `build/` folder can also be deployed using NGINX, Docker, or any static hosting provider

