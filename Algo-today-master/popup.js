function converter(numero) {
  var request = new XMLHttpRequest();
  request.open("GET", "https://api.coingecko.com/api/v3/simple/price?ids=algorand&vs_currencies=USD&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true");
  request.send();
  request.onload = () => {
    if (request.status == 200) {
      var response = JSON.parse(request.responseText);
        }
    }

  request.onload = () => {
    if (request.status == 200) {
      var response = JSON.parse(request.responseText);
      var result_tofix = response['algorand'].usd * numero
        document.querySelector('#result').textContent = result_tofix.toFixed(4) + " USD" ;

    }
  }
}

document.addEventListener("DOMContentLoaded",function(){

document.querySelector('#btn').addEventListener('click',function(){

  let numero = document.querySelector('#numero').value;

  converter(numero);}
)
})