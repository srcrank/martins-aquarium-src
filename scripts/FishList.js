import { getFish, getFish3, getFish5, getUnworthy } from "./FishData.js";
import { Fish } from "./Fish.js";


export const fishList = () => {
    const fish3 = getFish3();
    const fish5 = getFish5();
    const unworthy = getUnworthy();
    const allFish =fish3.concat(fish5, unworthy)
    const contentElement = document.querySelector(".fish-data")
    let fishHtmlRepresentation = "";
    for (const phish of allFish) {
        fishHtmlRepresentation += Fish(phish);
    }

    contentElement.innerHTML += `
        <section class="fishList">
            ${fishHtmlRepresentation}
        </section>
    `
}
