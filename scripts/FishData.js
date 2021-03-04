const fishCollection = [
  {
    saltWater: true,
    harvestLocation: "Pacific Ocean",
    diet: "algae",
    name: "Malcolm",
    species: "Blue Tang",
    length: 13,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: true,
    harvestLocation: "Bali",
    diet: "really small fish",
    name: "Bob",
    species: "Guppy",
    length: 3,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: true,
    harvestLocation: "Atlantic Ocean",
    diet: "squid",
    name: "BigBoss",
    species: "Amber Jack",
    length: 60,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: true,
    harvestLocation: "Pacific Ocean",
    diet: "shellfish",
    name: "Jerry",
    species: "swordfish",
    length: 80,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: true,
    harvestLocation: "Gulf of Mexico",
    diet: "tiny fish",
    name: "Predator",
    species: "catfish",
    length: 20,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: true,
    harvestLocation: "Atlantic Ocean",
    diet: "Herring",
    name: "Sabre",
    species: "Swordfish",
    length: 117.6,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: false,
    harvestLocation: "Amazon Basin",
    diet: "brine shrimp",
    name: "Myrti",
    image: "../img/bluefish.jpg",
    length: 12,
    species: "angel fish",
  },
  {
    saltWater: true,
    harvestLocation: "Atlantic Ocean",
    diet: "Plankton",
    name: "Nemo",
    species: "Clownfish",
    length: 4,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: false,
    harvestLocation: "Mississippi River",
    diet: "Everything",
    name: "Vacuum",
    species: "Catfish",
    length: 24,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: false,
    harvestLocation: "Bobbies Fish Emporium",
    diet: "minnows",
    name: "Ralph",
    species: "Smallmouth Bass",
    length: 14,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: false,
    harvestLocation: "Cumberland River",
    diet: "anything",
    name: "Whiskers",
    species: "Ictalurus furcatus",
    length: 39,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: true,
    harvestLocation: "South Pacific",
    diet: "shrimp",
    length: 64,
    species: "Tuna",
    name: "Bruno",
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: false,
    harvestLocation: "Petsmart",
    diet: "algae",
    name: "Dorothy",
    species: "goldfish",
    length: 3,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: false,
    harvestLocation: "Lake Tahoe",
    diet: "insects",
    name: "Trent",
    species: "Rainbow Trout",
    length: 21,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: true,
    harvestLocation: "Carribean Sea",
    diet: "shrimp",
    name: "Stephen",
    species: "Angler",
    length: 23,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: true,
    harvestLocation: "Barbados",
    diet: "anchovies",
    name: "Pizza",
    species: "Tuna",
    length: 40,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: false,
    harvestLocation: "TN River",
    diet: "Bacon",
    name: "Finn",
    species: "Bass",
    length: 20,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: true,
    diet: "mollusks",
    name: "Simba",
    species: "lionfish",
    harvestLocation: "Red Sea",
    length: 10,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: true,
    harvestLocation: "New Zealand",
    diet: "Lost Sailors",
    name: "Tiki",
    species: "Parrot Fish",
    length: 36,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: true,
    harvestLocation: "Red Sea",
    diet: "algae",
    name: "Bobo",
    species: "Clown Fish",
    length: 5,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: true,
    harvestLocation: "Atlantic Sea",
    name: "flipper",
    length: 12,
    image: "../img/bluefish.jpg",
    diet: "worms",
    species: "garibaldi",
  },
  {
    saltWater: true,
    harvestLocation: "Bikini Bottom",
    diet: "Big Ole Fish",
    name: "Pearl",
    species: "Whale",
    length: 1000,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: false,
    harvestLocation: "Port Innsmouth",
    diet: "Primeval Shadows",
    name: "Cthulhu",
    species: "Old One",
    length: 999,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: false,
    harvestLocation: "Amazon River",
    diet: "smaller fish",
    name: "Bitey",
    species: "Piranha",
    length: 7.5,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: true,
    harvestLocation: "St.Croix",
    diet: "squid",
    name: "Crush",
    species: "blue ting",
    length: 7,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: false,
    harvestLocation: "Minnesota",
    diet: "Cherry Tomatoes",
    name: "Frank",
    species: "Piranha",
    length: 7,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: true,
    harvestLocation: "Atlantic, Pacific, and southern sea",
    diet: "smaller fish",
    name: "bluefin tuna",
    species: "Thunnus thynnus",
    length: 84,
    image: "../img/bluefish.jpg",
  },
  {
    saltWater: true,
    harvestLocation: "Baltic Sea",
    diet: "smaller fish",
    name: "Fil",
    species: "goldFish",
    length: 40,
    image: "../img/bluefish.jpg",
  },
];

/*
export const getFish = () => {
  const holyFishArray = []
  const soldierFishArray = []
  const unworthyArray = []
  for (const fishObj of fishCollection) {
    if(fishObj.length % 3 === 0){
      holyFishArray.push(fishObj);
      // return holyFishArray;
    }
   else if(fishObj.length % 5 === 0){
     soldierFishArray.push(fishObj);
    //  return soldierFishArray;
   } 
   else {
     unworthyArray.push(fishObj);
    //  return unworthyArray;
   }
  }
  return holyFishArray;
};
*/

export const getFish = () => {
  return fishCollection;
};

export const getFish3 = () => {
   const holyFishArray = []
    for (const fishObj of fishCollection) {
      if(fishObj.length % 3 === 0){
        holyFishArray.push(fishObj);
      }
  }
  return holyFishArray
};

export const getFish5 = () => {
  const soldierFishArray = []
  for (const fishObj of fishCollection) {
    if(fishObj.length % 5 === 0 && fishObj.length % 3 !== 0){
      soldierFishArray.push(fishObj);
    }
  }
  return soldierFishArray
};

export const getUnworthy = () => {
  // Any fish not a multiple of 3 or 5
  const unworthyArray = []
  for(const fishObj of fishCollection) {
    if(fishObj.length % 5 !== 0 && fishObj.length % 3!==0){
      unworthyArray.push(fishObj);
    }
  }
  return unworthyArray;
}