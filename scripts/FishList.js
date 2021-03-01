import { getFish, getSoldierFish } from "./FishData.js";
import { Fish } from "./Fish.js";
//import { getMostHolyFish, getSoldierFish, getUnworthy} from "./FishData.js";

export const fishList = () => {

    const contentElement = document.querySelector(".fish-data")
    const fishes = getFish()
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