# GitHub Developer Explorer

A simple web application built using HTML, CSS and Vanilla JavaScript that allows users to search GitHub profiles and explore repositories.

---

## Features

- Search GitHub users
- View profile information
- View repositories
- Search repositories
- Filter by language
- Sort repositories
- Dark/Light mode
- Error handling
- Responsive design

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- GitHub REST API

---

## Folder Structure

github-developer-explorer/

├── index.html

├── css/
│ └── style.css

├── js/
│ ├── main.js
│ ├── api.js
│ ├── ui.js
│ └── utils.js

└── README.md

---

## API Endpoints

### Get User

GET

https://api.github.com/users/{username}

### Get Repositories

GET

https://api.github.com/users/{username}/repos

---

## How It Works

1. User enters a GitHub username.
2. Application fetches profile data.
3. Application fetches repositories.
4. Profile information is displayed.
5. Repository list is displayed.
6. User can filter and sort repositories.

---

## Modules

### main.js

Controls application flow and event handling.

### api.js

Handles GitHub API requests.

### ui.js

Updates and renders the user interface.

### utils.js

Contains helper functions for sorting, filtering and formatting.

---

## Run Project

Clone repository:

```bash
git clone <repository-url># GitHub-Developer-Explorer
