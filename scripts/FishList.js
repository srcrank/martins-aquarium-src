import { getFish3, getFish5, getUnworthy } from "./FishData.js";
import { Fish } from "./Fish.js";


export const fishList = () => {

    const contentElement = document.querySelector(".fish-data")
    const fishes = getFish3(), getFish5()
    let fishHtmlRepresentation = "";
    for (const phish of fishes) {
        fishHtmlRepresentation += Fish(phish);
    }

    contentElement.innerHTML += `
        <section class="fishList">
            ${fishHtmlRepresentation}
        </section>
    `
}

/*
getFish,
getFish3();
getFish5();
getUnworthy();
*/