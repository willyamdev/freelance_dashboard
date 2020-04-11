let minRangeValue = 20;
let maxRangeValue = 300;

let priceText = document.querySelector("#hourly-price");
let range = document.querySelector("#price-range");

range.setAttribute("min", minRangeValue);
range.setAttribute("max", maxRangeValue);
range.value = 122;
priceText.innerHTML = "$" + 122 + " /hour"

range.addEventListener("input", (e)=>{
    priceText.innerHTML = "$" + e.target.value + " /hour"
});