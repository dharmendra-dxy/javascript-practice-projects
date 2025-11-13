const API_KEY= "3b5c6db1ba564b69aa6492b24f0735dd";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

function reload() {
    window.location.reload();
}


async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apikey=${API_KEY}`);
    const data = await res.json();
    console.log(data);

    // function:
    bindData(data.articles);
}

function bindData(articles) {
    const cardContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardContainer.innerHTML = "";

    articles.forEach( (article) => {

        if(!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);

        // function:
        fillDatainCard(cardClone, article);

        cardContainer.appendChild(cardClone);

    } );

}

function fillDatainCard(cardClone, article) {

    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;


    const date = new Date(article.publishedAt).toLocaleString("en-Us", {
        timeZone : "Asia/Jakarta"
    }) ;

    newsSource.innerHTML = `${article.source.name} : ${date}`;

    cardClone.firstElementChild.addEventListener("click", ()=>{
        window.open(article.url, "_blank");
    });

}

let currentSelectedNav = null

function onNavClick(id) {
    fetchNews(id);

    const navItem = document.getElementById(id);

    currentSelectedNav?.classList.remove("active");
    currentSelectedNav = navItem;
    currentSelectedNav.classList.add("active");
}

const searchText = document.getElementById("search-text");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", ()=>{
    const query = searchText.value ;

    if(!query) return;
    fetchNews(query);

    currentSelectedNav?.classList.remove("active");
    currentSelectedNav = null;

})

