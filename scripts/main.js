console.log("hey girly!")
import {fishList} from './FishList.js'

import { getFish } from './FishData.js'
const allTheFish = getFish ()
for (const fish of allTheFish) {
    console.log(fish)
}

fishList ()

