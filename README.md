# Todo List App

A vanilla JavaScript todo list application built as part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum. Organize tasks into projects, track details like priority and due dates, and persist everything locally in the browser.

## Features

- Create, edit, and delete todos
- Organize todos into separate projects
- Mark todos as complete
- View and edit todo details (priority, due date, notes) in a sliding detail panel
- Data persists across sessions via `localStorage`

## Built With

- **JavaScript (ES6+)** — factory functions and the module pattern for architecture
- **Webpack** — module bundling and dev server
- **CSS** — custom styling
- **ESLint** — code quality and bug catching
- **Prettier** — consistent code formatting

## Project Structure

```
src/
├── Todo.js       # Todo factory/object logic
├── Project.js    # Project factory/object logic
├── App.js        # Application state and coordination
├── Storage.js    # localStorage save/load logic
├── UI.js         # DOM rendering and event handling
└── index.js      # Entry point
```

## Getting Started

Clone the repo and install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

Build for production:

```bash
npm run build
```

## Linting & Formatting

This project uses ESLint for catching bugs and code issues, and Prettier for consistent formatting.

```bash
# Check for lint issues
npx eslint .

# Check formatting
npx prettier --check .

# Auto-format files
npx prettier --write .
```

## Live Demo

[View the deployed app](https://the-blockman.github.io/todo/) <!-- Add your GitHub Pages / deployment link here -->

## Acknowledgments

Built as part of [The Odin Project](https://www.theodinproject.com/) full-stack JavaScript curriculum.
