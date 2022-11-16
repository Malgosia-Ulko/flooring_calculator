{
    const welcome = () => {
        console.log("Witaj w kalkulatorze materiałów wykończeniowych!")
    }

    welcome();

    const spaceFormElement = document.querySelector(".js-spaceForm");
    const widthElement = document.querySelector(".js-roomWidth");
    const lengthElement = document.querySelector(".js-roomLength");
    const spareElement = document.querySelector(".js-spare");
    const spaceElement = document.querySelector(".js-space");
    const cmToM2Converter = 10000

    // pierwsza f.
    
    const onSpaceFormClick = (event) => {
        event.preventDefault();

        const width = widthElement.value;
        const length = lengthElement.value;
        const spare = spareElement.value;

        const space = width * length / cmToM2Converter * (1 + (spare / 100));

        spaceElement.innerText = space.toFixed(2);
    };

    spaceFormElement.addEventListener("submit", onSpaceFormClick);

    const quantityFormElement = document.querySelector(".js-quantityForm");
    const contentElement = document.querySelector(".js-packageContent");
    const quantityElement = document.querySelector(".js-packageQuantity");

    // druga f.

    const onQuantityFormClick = (event) => {
        event.preventDefault();

        const content = contentElement.value;

        const width = widthElement.value;
        const length = lengthElement.value;
        const spare = spareElement.value;

        const space = width * length / cmToM2Converter * (1 + (spare / 100));

        const quantity = space / content;

        quantityElement.innerText = Math.ceil(quantity);
    };

    quantityFormElement.addEventListener("submit", onQuantityFormClick);

    const priceButton = document.querySelector(".js-priceButton");
    const packagePriceElement = document.querySelector(".js-packagePrice");
    const finalPriceElement = document.querySelector(".js-finalPrice");

    // trzecia f.

    const onPriceButtonClick = () => {
    const content = contentElement.value;

    const width = widthElement.value;
    const length = lengthElement.value;
    const spare = spareElement.value;

    const space = width * length / cmToM2Converter * (1 + (spare / 100));

    const quantity = space / content;

    const packagePrice = packagePriceElement.value;

    const finalPrice = (Math.ceil(quantity) * packagePrice);

    finalPriceElement.innerText = finalPrice.toFixed(2);
};

    priceButton.addEventListener("click", onPriceButtonClick);
}