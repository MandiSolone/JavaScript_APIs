console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let searchBtn = document.querySelector("#submitSearch"); 
let input = document.querySelector("#searchWord"); 
let imageEl = document.querySelector("#image1");
let feedBackP = document.querySelector("#feedBackPara");
let form = document.querySelector("#form1");

const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";

const GIPHY_KEY = "FAesj2nRckKxKWaoPy39C7RopRKdsIiY";

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${input.value}`)
    .then((res) => {
        return res.json();
    })
    .then((body) => {
        console.log(body);
        imageEl.src = body.data.images.original.url; 
        imageEl.alt = body.data.title; 
        feedBackP.textContent = input.value;
    })
    .catch((err) => {
        console.error(err);
        feedBackP.textContent = err.message;
    })
    .finally(() => {
        input.value = ""; 
    });
});