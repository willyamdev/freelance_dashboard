let paymentMethods = 0;

let paymentMethodsContainer = document.querySelector(".payment-details-container");
let addPaymentMethodButton = document.querySelector("#add-payment");
let paymentPanel = document.querySelector("#payment-panel");
let shadowPanel = document.querySelector(".shadow");

//form inputs
let selectedCard = document.querySelector("#cards");
let holderName = document.querySelector("#holder-name");
let cardNumber = document.querySelector("#card-number");
let mm = document.querySelector("#mm");
let aa = document.querySelector("#aa");
let cvc = document.querySelector("#cvc");
let addMethodButton = document.querySelector("#panel-add-method");

addPaymentMethodButton.addEventListener("click", (e) => {
    paymentPanel.classList.toggle("hide");
});

shadowPanel.addEventListener("click", (e) => {
    paymentPanel.classList.toggle("hide");
});

addMethodButton.addEventListener("click", (e) => {
    addNewCard();
    paymentPanel.classList.toggle("hide");
});

function addNewCard() {

    let creditCard = {
        selectedCard: selectedCard.value,
        name: holderName.value,
        cardNumber: cardNumber.value,
        mm: mm.value,
        aa: aa.value,
        cvc: cvc.value
    }

    let creditCardDiv = document.createElement("div");
    creditCardDiv.setAttribute("class", "credit-card");

    let firstDiv = document.createElement("div");
    let secondDiv = document.createElement("div");
    let cardIconImg = getCardIcon(creditCard.selectedCard);
    firstDiv.appendChild(cardIconImg);

    let textCredit = document.createElement("h4");
    let textCardNumber = document.createElement("h5");
    textCredit.innerHTML = "Credit card";
    textCardNumber.innerHTML = creditCard.cardNumber;

    secondDiv.appendChild(textCredit);
    secondDiv.appendChild(textCardNumber);

    creditCardDiv.appendChild(firstDiv);
    creditCardDiv.appendChild(secondDiv);
    // paymentMethodsContainer.appendChild(creditCardDiv);
    paymentMethodsContainer.insertBefore(creditCardDiv, paymentMethodsContainer.children[2]);

    if(paymentMethods == 0){
        paymentMethodsContainer.removeChild(paymentMethodsContainer.children[1]);
    }

    paymentMethods++;
}

function getCardIcon(cardSelected) {

    let cardIconImg = document.createElement("img");
    cardIconImg.src = "";

    switch (cardSelected) {
        case "mastercard":
            cardIconImg.src = "images/credit-cards-icon/mastercard.png";
            break;

        case "visa":
            cardIconImg.src = "images/credit-cards-icon/visa.png";
            break;
    }

    return cardIconImg;
}