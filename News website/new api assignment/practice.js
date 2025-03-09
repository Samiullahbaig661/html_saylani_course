const API_KEY = "572f9be372ade4fac94da8cf8d1fe549"; 
const API_URL = `https://gnews.io/api/v4/search?q=Pakistan&lang=en&country=pk&max=10&page=1&apikey=${API_KEY}`;

document.getElementById("fetchNews").addEventListener("click", async () => {
    try {
        let response = await fetch(API_URL);
        let data = await response.json();

        if (data.articles.length > 0) {
            let randomIndex = Math.floor(Math.random() * data.articles.length);
            let news = data.articles[randomIndex];

            document.getElementById("newsTitle").innerText = news.title;
            document.getElementById("newsDescription").innerText = news.description;

            let imageUrl = news.image || "https://placekitten.com/300/300"; 

            const img = new Image();
            img.onload = function() {
                document.getElementById("newsImage").src = news.image;
            };
            img.onerror = function() {
                document.getElementById("newsImage").src = imageUrl;
            };
            img.src = news.image; 
        } else {
            alert("No news articles found.");
        }
    } catch (error) {
        console.error("Error fetching news:", error);
        alert("There was an error fetching the news.");
    }
});





































// let img = document.getElementById('img');
// let title = document.getElementById('title');
// // Fixed variable name (contenta -> content)
// let content = document.getElementById('content');
// // Fixed element reference (price -> readMore)
// let readMore = document.getElementById('readMore');



// const API_KEY = "2d0e11c120674c679aa397bb2b6fb163"; // Replace with your API key
// const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

// document.getElementById("fetchNews").addEventListener("click", async () => {
//     try {
//         let response = await fetch(API_URL);
//         let data = await response.json();
        
//         if (data.articles.length > 0) {
//             let randomIndex = Math.floor(Math.random() * data.articles.length); // Get random news
//             let news = data.articles[randomIndex];

//             document.getElementById("newsTitle").innerText = news.title;
//             document.getElementById("newsDescription").innerText = news.description;
//             document.getElementById("newsImage").src = news.urlToImage || "https://via.placeholder.com/300";
//         }
//     } catch (error) {
//         console.error("Error fetching news:", error);
//     }
// });















// async function fetchNews(api_url) {  
//     try { 
//         let response = await fetch(api_url)
//         let data = await response.json()
//         let articles = data.articles
        
//         if (articles.length > 0) {
//             let random_index = Math.floor(Math.random() * articles.length)
//             let randomArticle = articles[random_index]

//             img.src = randomArticle.urlToImage || "default.jpg"
//             title.innerText = randomArticle.title || "No title available"
       
//             content.innerText = randomArticle.description || "No content available"
//             readMore.href = randomArticle.url || "#"
//             readMore.innerText = "Read More"
//         } else {
//             console.log("No articles found")
//         }
//     } catch(e) {
//         console.log("Error:", e)
//     }
// }

// fetchNews("https://gnews.io/api/v4/search?q=Pakistan&lang=en&country=pk&max=10&page=1&apikey=572f9be372ade4fac94da8cf8d1fe549")