AOS.init();
document.addEventListener("DOMContentLoaded", async function () {
  const container = document.getElementById("rowId");
  const URL = '../utils/json/main.json';
  //const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
  try {
      const response = await fetch(URL);
      const data = await response.json();

      if (data != null) {
          data.forEach(crypto => {
              const card = document.createElement("div");
              card.className = "col";
              card.innerHTML = `
                  <div class="card shadow-sm bg-black text-white" >
                      <div class="logo-container text-center pt-4" >${getLogoHTML(crypto.image)}</div>
                      <div class="card-body">
                          <div class="text-container">
                              <p class="crypto-name text-center">${crypto.name}</p>
                          </div>
                      </div>
                      <p class="price text-center">$${crypto.current_price}</p>
                  </div>
              `;
              
              card.addEventListener("click", function () {
                  window.location.href = `details/index.html?coin=${crypto.id}`;
              });

              container.appendChild(card);
          });
      }
  } catch (error) {
      console.error('Errore nel caricamento dei dati:', error);
  }
});


function getLogoHTML(imageUrl) {
  const logo = document.createElement("img");
  logo.src = imageUrl;
  logo.className = "crypto-logo";
  return logo.outerHTML;
}
