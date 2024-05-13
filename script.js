function updatePrices() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin&vs_currencies=usd')
        .then(response => response.json()) //conversione a json
        .then(data => {
            // Aggiorna il prezzo di Bitcoin
            const btcPriceElement = document.getElementById('btcPrice');
            btcPriceElement.textContent = "$" + data.bitcoin.usd;

            // Aggiorna il prezzo di Ethereum
            const ethPriceElement = document.getElementById('ethPrice');
            ethPriceElement.textContent = "$" + data.ethereum.usd;

            // Aggiorna il prezzo di Binance Coin
            const bnbPriceElement = document.getElementById('bnbPrice');
            bnbPriceElement.textContent = "$" + data.binancecoin.usd;
        })
        .catch(error => {
            console.error('Errore:', error);
        });
}
updatePrices();

