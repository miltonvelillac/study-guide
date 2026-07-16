# Fullstack Engineer Study Guide

Interactive technical interview study guide in Spanish and English.

## Features

- Dark mode
- Stepper navigation by topic
- Accordion answers
- TypeScript, Node.js, React, AWS Serverless, architecture, AI agents, testing and situational questions
- Responsive layout
- Spanish/English language selector with saved preference
- Questions and answers stored separately from the HTML templates
- No external dependencies

## Content and translations

Study content lives in `data/es.js` and `data/en.js`. Both files use the same
section slugs and question IDs. The HTML files are small templates; `script.js`
renders the selected language and stores the preference in `localStorage`.

## Local use

Open `index.html` in a browser.

## GitHub Pages

The repository includes a GitHub Actions workflow in `.github/workflows/deploy-pages.yml`.
