import { generateChart } from './chart.js';

document.addEventListener("DOMContentLoaded", async function () {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('coin')) {
        const coin = urlParams.get('coin');
        await generateChart(coin);

        // Aggiornamento delle informazioni aggiuntive sulla criptovaluta
        try {
            // Chiamata API per ottenere informazioni sulla criptovaluta
            const coinInfoResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${coin.toLowerCase()}`);
            const coinInfoData = await coinInfoResponse.json();

            // Chiamata API per ottenere il prezzo attuale
            const priceResponse = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin.toLowerCase()}&vs_currencies=usd`);
            const priceData = await priceResponse.json();

            const cardTitle = document.querySelector(".card-title");
            const cardText = document.querySelector(".card-text");
            const cardImg = document.querySelector(".card-img-top");

            cardTitle.textContent = coinInfoData.name;
            cardText.textContent = `$${priceData[coin.toLowerCase()].usd}`; // Visualizza il prezzo
            cardImg.src = coinInfoData.image.large; // Utilizza l'URL dell'immagine di dimensioni "large"
            cardImg.classList.add("img-fluid", "mx-auto");
            cardImg.style.width = "10rem"; // Puoi regolare le dimensioni a tuo piacimento
            cardImg.style.height = "10rem";
            cardImg.style.marginTop = "30px";
       
        } catch (error) {
            console.error('Errore nel caricamento delle informazioni aggiuntive:', error);
        }
    } else {
        console.log('Il parametro "coin" non è stato trovato nell\'URL');
        window.location.href = `error.html`;
    }
});
