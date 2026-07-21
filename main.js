// Покраска карточек

const firstproductCard = document.querySelector(".products__item");
const changeColorFirstCardButton = document.querySelector("#change-color-first-card");
const productCards = document.querySelectorAll(".products__item");
const changeColorAllCardsButton = document.querySelector("#change-color-all-cards");
const сyanColorHash = "#00ffff";
const сoralColorHarh = "#F57A8A";

changeColorFirstCardButton.addEventListener("click", () => {
    firstproductCard.style.backgroundColor = сoralColorHarh;
})
changeColorAllCardsButton.addEventListener("click", () => {
    productCards.forEach((card) => card.style.backgroundColor = сyanColorHash);
})
                                                
// Открыть google

const openGoogleButten = document.querySelector("#open-google");

openGoogleButten.addEventListener("click", openGoogle); {
    window.open("https://google.com")
}

function openGoogle() {
    const answer = confirm("Вы действительно хотите открыть Google?");
    if (answer === true) {
        window.open("https://google.com")
    } else {
        return;
    }
}
                                                
// Вывод консоль лог

const outputLogButton = document.querySelector("#output-console-log");

outputLogButton.addEventListener("click", () => outputConsoleLog("ДЗ №6"));

function outputConsoleLog(message) {
    alert(message)
    console.log(message)
}
                                                
// Упражнение №6

const title = document.querySelector(".title");

title.addEventListener('mouseover', function () {
    console.log(title.textContent)
})
                                                
// Упражнение №7

const button = document.querySelector("#button-buy");

button.addEventListener("click", ()=> {
    button.classList.toggle("btn1")
})