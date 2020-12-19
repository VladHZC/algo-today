function updatePrice() {
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
            chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});
            chrome.browserAction.setBadgeText({text: response['algorand'].usd.toString()});
        }
    }
}
updatePrice();
setInterval(updatePrice, 60000);