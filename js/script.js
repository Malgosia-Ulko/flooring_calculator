console.log("Witaj w kalkulatorze materiałów wykończeniowych!")

let spaceFormElement = document.querySelector(".js-spaceForm");
let widthElement = document.querySelector(".js-roomWidth");
let LengthElement = document.querySelector(".js-roomLength");
let spareElement = document.querySelector(".js-spare");
let spaceElement = document.querySelector(".js-space");
let cmToM2Converter = 10000

spaceFormElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let width = widthElement.value;
    let Length = LengthElement.value;
    let spare = spareElement.value;

    let space = width * Length / cmToM2Converter * (1 + (spare / 100));

    spaceElement.innerText = space.toFixed(2);
});

let quantityFormElement = document.querySelector(".js-quantityForm");
let contentElement = document.querySelector(".js-packageContent");
let quantityElement = document.querySelector(".js-packageQuantity");

quantityFormElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let content = contentElement.value;

    let width = widthElement.value;
    let Length = LengthElement.value;
    let spare = spareElement.value;

    let space = width * Length / cmToM2Converter * (1 + (spare / 100));

    let quantity = space / content;

    quantityElement.innerText = Math.ceil(quantity);
})

let priceButton = document.querySelector(".js-priceButton");
let packagePriceElement = document.querySelector(".js-packagePrice");
let finalPriceElement = document.querySelector(".js-finalPrice");

priceButton.addEventListener("click", () => {
    let content = contentElement.value;

    let width = widthElement.value;
    let Length = LengthElement.value;
    let spare = spareElement.value;

    let space = width * Length / cmToM2Converter * (1 + (spare / 100));

    let quantity = space / content;

    let packagePrice = packagePriceElement.value;

    let finalPrice = (Math.ceil(quantity) * packagePrice);

    finalPriceElement.innerText = finalPrice.toFixed(2);
});