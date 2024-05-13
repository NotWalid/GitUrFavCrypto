import { fetchData } from '../../utils/api.js';
import { getRandomRGBColor } from '../../utils/index.js';

export async function generateChart(coin) {
    const URL = `https://api.coingecko.com/api/v3/coins/${coin.toLowerCase()}/market_chart?vs_currency=usd&days=30`;
    // const URL = "../../other.json"
    const cryptoPrices = await fetchData(URL);
    const options = { day: '2-digit', month: '2-digit' };
    const timestamps = cryptoPrices.prices.map(data => new Date(data[0]).toLocaleDateString("it-IT", options));
    const prices = cryptoPrices.prices.map(data => data[1]);
    console.log(timestamps);

    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: timestamps,
            datasets: [{
                label: coin + ' Prices',
                data: prices,
                borderColor: getRandomRGBColor(),
            }]
        },
        options: {
            
            scales: {
              
                xAxes: [{
                    type: 'linear',
                    position: 'bottom'
                }]
            }
        }
    });

}

