{
    const welcome = () => {
        console.log("Witaj w kalkulatorze materiałów wykończeniowych!")
    }

    const onSpaceFormClick = (event, widthElement, lengthElement, spareElement, cmToM2Converter) => {
        event.preventDefault();

        const width = widthElement.value;
        const length = lengthElement.value;
        const spare = spareElement.value;

        const spaceElement = document.querySelector(".js-space");
        const space = width * length / cmToM2Converter * (1 + (spare / 100));

        spaceElement.innerText = space.toFixed(2);
    };

    const onQuantityFormClick = (event, widthElement, lengthElement, spareElement, contentElement, cmToM2Converter) => {
        event.preventDefault();

        const width = widthElement.value;
        const length = lengthElement.value;
        const spare = spareElement.value;

        const quantityElement = document.querySelector(".js-packageQuantity");

        const content = contentElement.value;

        const space = width * length / cmToM2Converter * (1 + (spare / 100));
        const quantity = space / content;

        quantityElement.innerText = Math.ceil(quantity);
    };

    const onPriceButtonClick = (widthElement, lengthElement, spareElement, contentElement, cmToM2Converter) => {
        const content = contentElement.value;

        const width = widthElement.value;
        const length = lengthElement.value;
        const spare = spareElement.value;

        const space = width * length / cmToM2Converter * (1 + (spare / 100));
        const quantity = space / content;

        const packagePriceElement = document.querySelector(".js-packagePrice");
        const packagePrice = packagePriceElement.value;

        const finalPriceElement = document.querySelector(".js-finalPrice");

        const finalPrice = (Math.ceil(quantity) * packagePrice);
        finalPriceElement.innerText = finalPrice.toFixed(2);
    };

    const init = () => {

        const widthElement = document.querySelector(".js-roomWidth");
        const lengthElement = document.querySelector(".js-roomLength");
        const spareElement = document.querySelector(".js-spare");
        const cmToM2Converter = 10000

        const contentElement = document.querySelector(".js-packageContent");

        const spaceFormElement = document.querySelector(".js-spaceForm");
        spaceFormElement.addEventListener("submit", (event) => {
            onSpaceFormClick(event, widthElement, lengthElement, spareElement, cmToM2Converter);
        });

        const quantityFormElement = document.querySelector(".js-quantityForm");
        quantityFormElement.addEventListener("submit", (event) => {
            onQuantityFormClick(event, widthElement, lengthElement, spareElement, contentElement, cmToM2Converter);
        });

        const priceButton = document.querySelector(".js-priceButton");
        priceButton.addEventListener("click", () => {
            onPriceButtonClick(widthElement, lengthElement, spareElement, contentElement, cmToM2Converter);
        });

        welcome();
    };

    init();
}