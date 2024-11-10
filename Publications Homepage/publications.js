// JavaScript Document
// Sample data representing article stubs, now including topics
const articles = [
  {
    title: "The Role of Inflation in Today's Global Economy",
    summary: "Dive into how inflation rates impact economies worldwide and what it means for future growth.",
    topic: "global-economy",
    url: "article-inflation-global-economy.html",
  },
  {
    title: "How Technology Drives Economic Innovation",
    summary: "An exploration of technology's transformative role in economic sectors across the globe.",
    topic: "us-economy",
    url: "article-tech-economic-innovation.html",
  },
  {
    title: "Understanding Sustainable Investment Trends",
    summary: "A guide to the growing field of sustainable finance and its implications for investors.",
    topic: "finance-investment",
    url: "article-sustainable-investment.html",
  },
  {
    title: "Analyzing the Post-Pandemic Job Market",
    summary: "Examining changes in job market dynamics after the pandemic and future labor trends.",
    topic: "us-economy",
    url: "article-post-pandemic-job-market.html",
  },
  {
    title: "Climate Change and Its Economic Impacts",
    summary: "Insights into how climate change is reshaping economic policies worldwide.",
    topic: "sustainability",
    url: "article-climate-economics.html",
  },
  {
    title: "Global Supply Chains: Navigating Challenges",
    summary: "A look at disruptions in global supply chains and the strategies for resilience.",
    topic: "global-economy",
    url: "article-supply-chain-challenges.html",
  },
  // Add more articles as needed
];

// Function to render articles based on the selected filters
function renderArticles(articleList) {
  const container = document.getElementById("stubsContainer");
  container.innerHTML = ""; // Clear previous articles

  articleList.forEach(article => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h2");
    title.textContent = article.title;

    const summary = document.createElement("p");
    summary.textContent = article.summary;

    const link = document.createElement("a");
    link.href = article.url;
    link.textContent = "Read more →";

    // Append elements to card
    card.appendChild(title);
    card.appendChild(summary);
    card.appendChild(link);

    // Append card to container
    container.appendChild(card);
  });
}

// Initial render of all articles
renderArticles(articles);

// Filter functionality
document.getElementById("searchInput").addEventListener("input", filterArticles);
document.getElementById("topicFilter").addEventListener("change", filterArticles);

function filterArticles() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const selectedTopic = document.getElementById("topicFilter").value;

  const filteredArticles = articles.filter(article => {
    const matchesTopic = selectedTopic === "all" || article.topic === selectedTopic;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm) || 
                          article.summary.toLowerCase().includes(searchTerm);
    return matchesTopic && matchesSearch;
  });

  renderArticles(filteredArticles);
}