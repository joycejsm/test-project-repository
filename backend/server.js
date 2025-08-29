import express from "express";
import axios from "axios";
import { JSDOM } from "jsdom";
import cors from "cors";

const app = express();
const PORT = 3000;
app.use(cors({ origin: "*"}));
// Route to handle scraping request
app.get("/api/scrape", async (req, res) => {
  const keyword = req.query.keyword;

  // Validate query parameter
  if (!keyword) {
    return res.status(400).json({ error: "Missing keyword query parameter" });
  }

  try {
    // Construct Amazon search URL based on keyword
    const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
    console.log("Fetching URL:", url);

     // Make HTTP request to Amazon with realistic headers to avoid blocking
    const { data: html } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Referer": "https://www.amazon.com/",
      },
    });
 // Load HTML into JSDOM for parsing
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const items = [...document.querySelectorAll("div.s-result-item[data-component-type='s-search-result']")];
// Extract product details: title, rating, reviews count, and image URL
    const results = items.map((item) => {
      const title = item.querySelector("h2 a span")?.textContent?.trim() || null;
      const rating = item.querySelector("i span.a-icon-alt")?.textContent?.trim() || null;
      const reviews =
        item.querySelector("span[aria-label$='ratings']")?.textContent?.trim() ||
        item.querySelector("span.a-size-base")?.textContent?.trim() ||
        null;
      const image = item.querySelector("img.s-image")?.src || null;

      return { title, rating, reviews, image };
    });

    res.json(results);
  } catch (error) {
    console.error("Error scraping Amazon:", error);
    
    // If scraping fails (e.g., Amazon blocks the request), return fallback mock data
    res.json([
      {
        title: "Mock Product 1",
        rating: "4.5 out of 5 stars",
        reviews: "123",
        image: "https://dummyimage.com/300x150/000/fff&text=lalalala",
      },
      {
        title: "Mock Product 2",
        rating: "4.8 out of 5 stars",
        reviews: "456",
        image: "https://dummyimage.com/300x150/000/fff&text=lalalala",
      },
    ]);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

