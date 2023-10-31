const axios = require('axios');

cmd({
    pattern: "news",
    desc: "Get the latest news headlines.",
    category: "search",
}, async (Void, citel) => {
    try {
        const apiKey = 'd18be034e9aec58a6c4d286ef886e9bc'; // Replace with your GNews API key
        const response = await axios.get(`https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${apiKey}`);

        if (response.status === 200 && response.data.articles && response.data.articles.length > 0) {
            const articles = response.data.articles;
            let newsMessage = "Latest news headlines:\n";

            articles.slice(0, 5).forEach((article, index) => {
                newsMessage += `${index + 1}. ${article.title}\n`;
            });

            await citel.reply(newsMessage);
        } else {
            await citel.reply("No news headlines found.");
        }
    } catch (error) {
        console.error("Error fetching news:", error);
        await citel.reply("An error occurred while fetching news headlines. Please try again later.");
    }
});
