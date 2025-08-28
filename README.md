


# Amazon Scraper API (Bun + Express + Axios + JSDOM)

A simple project for a job test that creates an API to scrape data from Amazon’s search results page using Bun.

---

## 🚀 Technologies Used

- [Bun](https://bun.sh/) (fast JavaScript/TypeScript runtime)
- Express (web framework)
- Axios (HTTP requests)
- JSDOM (HTML parsing on the backend)

---

## 💻 Requirements

- Node.js is not required, but you need to have Bun installed on your system.
- To install it on Windows:
```
``powershell -c "irm bun.sh/install.ps1 | iex"``

- To install Bun in Linux or MacOS:  
  ```bash
  curl -fsSL https://bun.sh/install | bash
  source ~/.bashrc
````


---

## 🔧 How to run the backend

1. Clone this repository (or create your folder and initialize the project):

```bash
git clone https://github.com/joycejsm/test-project-repository.git
cd test-project-repository
cd backend
```

2. Install dependencies:

```bash
bun install
```

If you haven’t run `bun init` or installed dependencies yet, run:

```bash
bun init -y
bun add express axios jsdom
```

3. Start the server:

```bash
bun run server.js
```

4. Test the endpoint in your browser or Postman:

```
http://localhost:3000/api/scrape?keyword=notebook
```

You should receive a JSON with product listings from Amazon’s first search results page for the keyword "notebook".

---








# Frontend - Amazon Scraper Demo

## Description

This is a simple frontend web app built with **HTML, CSS, and vanilla JavaScript (using Vite)**. It allows the user to enter a search keyword and fetch product listings scraped from Amazon's search results through a backend API.

The results are displayed in a clean, user-friendly layout with a "lofi" aesthetic style.

---

## Features

* Input field to enter a search keyword
* Button to initiate scraping request to backend API
* Display of product image, title, rating, and number of reviews
* Loading indicator while fetching data
* Graceful error handling and messages
* Responsive and simple lofi-inspired styling

---

## How to Run

1. Make sure you have [Node.js](https://nodejs.org/) installed.

2. Clone this repository or copy the frontend folder.

3. Navigate to the frontend folder:

```bash
cd frontend
```

4. Install dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm run dev
```

6. Open your browser and access the app at the URL displayed in the terminal (usually `http://localhost:5173`).

---

## Notes

* This frontend depends on the backend API running locally on port 3000 (`http://localhost:3000/api/scrape`).
* Use the input box to enter any search term and click "Scrape" to fetch product data.
* If the backend scraping fails (e.g., due to Amazon blocking), mock data will be shown instead.
* You can customize the styling in the CSS files to better suit your preferences.

---

## Tech Stack

* Vite (build tool)
* Vanilla JavaScript (ES6+)
* HTML5 & CSS3

---


## Author & Contact 

Joyce Silva
Contact: [joycejsm@gmail.com](mailto:joycejsm@gmail.com)

```

Let me know if you want it more detailed or simpler!
```

---



