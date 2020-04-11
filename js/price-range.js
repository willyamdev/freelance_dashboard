let hourly = true;
let rangeValue = 122;
let minRangeValue = 20;
let maxRangeValue = 300;

let hourlyDiv = document.querySelector("#hourly-div");
let fixedDiv = document.querySelector("#fixed-div");
let priceText = document.querySelector("#hourly-price");
let range = document.querySelector("#price-range");
let rangesValuesText = document.querySelectorAll(".range-values h3");

updateRange();

function updateRange() {
    rangesValuesText[0].innerHTML = "$"+minRangeValue;
    rangesValuesText[1].innerHTML = "$"+maxRangeValue;
    range.setAttribute("min", minRangeValue);
    range.setAttribute("max", maxRangeValue);
    range.value = rangeValue;

    if(hourly){
        priceText.innerHTML = "$" + rangeValue + " /hour"
    }else{
        priceText.innerHTML = "$" + rangeValue + " /month"
    }

}

range.addEventListener("input", (e) => {
    rangeValue = e.target.value;
    updateRange();
    // priceText.innerHTML = "$" + e.target.value + " /hour"
});

hourlyDiv.addEventListener("click", (e) => {
    hourly = true;
    minRangeValue = 20;
    maxRangeValue = 300;
    rangeValue = 122;
    updateRange();

    hourlyDiv.classList.add("selected-pricing");
    fixedDiv.classList.remove("selected-pricing");
})

fixedDiv.addEventListener("click", (e) => {
    hourly = false;
    minRangeValue = 512;
    maxRangeValue = 6400;
    rangeValue = 4500;
    updateRange();

    hourlyDiv.classList.remove("selected-pricing");
    fixedDiv.classList.add("selected-pricing");
})