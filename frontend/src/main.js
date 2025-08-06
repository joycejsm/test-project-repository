const scrapeBtn = document.getElementById("scrapeBtn");
const keywordInput = document.getElementById("keywordInput");
const resultsDiv = document.getElementById("results");

// Handle button click to start scraping
scrapeBtn.addEventListener("click", async () => {
  const keyword = keywordInput.value.trim();

   // Validate input
  if (!keyword) {
    alert("Please enter a keyword");
    return;
  }

  resultsDiv.innerHTML = "Loading...";

  // Make request to backend API
  try {
    const response = await fetch(`/api/scrape?keyword=${encodeURIComponent(keyword)}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const products = await response.json();
// If no products found, show message
    if (products.length === 0) {
      resultsDiv.innerHTML = "<p>No products found.</p>";
      return;
    }
 // Clear previous results
    resultsDiv.innerHTML = "";
// Display each product in the results div
    products.forEach((product) => {
      const div = document.createElement("div");
      div.classList.add("product");

      div.innerHTML = `
        <img src="${product.image || ''}" alt="Product Image" />
        <div class="product-info">
          <h3>${product.title || "No title"}</h3>
          <p><strong>Rating:</strong> ${product.rating || "N/A"}</p>
          <p><strong>Reviews:</strong> ${product.reviews || "N/A"}</p>
        </div>
      `;

      resultsDiv.appendChild(div);
    });
  } catch (err) {
    // Handle and display error
    resultsDiv.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
  }
});

