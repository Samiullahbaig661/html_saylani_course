// Fix the method names
let img = document.getElementById('img');
let title = document.getElementById('title');
let content = document.getElementById('content');
let more = document.getElementById('price');

async function fetchNews(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data, "===data");

        let articles = data.articles;
console.log(articles)
        // Check if there are articles
        if (articles && articles.length > 0) {
            let firstArticle = articles[0]; // Only displaying the first news item

            img.style.backgroundImage = `url(${firstArticle.urlToImage})`;
            img.style.backgroundSize = "cover"; // Ensures image fits properly

            title.textContent = firstArticle.title;
            content.textContent = firstArticle.description;
            more.innerHTML = `<a href="${firstArticle.url}" target="_blank">Read More</a>`;
        } else {
            console.log("No articles found.");
        }
    } catch (error) {
        console.log("Error fetching news:", error);
    }
}

// Call the function with the correct API URL
fetchNews("https://gnews.io/api/v4/search?q=example&apikey=572f9be372ade4fac94da8cf8d1fe549");
