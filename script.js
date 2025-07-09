document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const query = document.getElementById("searchInput").value.trim();
  if (query) {
    // Redirect to Google Search
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
});

function feelingLucky() {
  const query = document.getElementById("searchInput").value.trim();
  if (query) {
    // Redirect to Google "I'm Feeling Lucky"
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=I`;
  }
}
