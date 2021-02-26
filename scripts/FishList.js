
import { getFish } from "./FishData"

export const FishList = () => {
    const contentElement = document.querySelector("insert selector here")
    const fishes = getFish()
    
    contentElement.innerHTML += `
    <section class="fishList">
        All the fish go here!
    </section>
    `
}