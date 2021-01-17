// sample planting plan. real one called from main.js
// let plantingPlan=[
//     ["Potato", "Soybean", "Soybean", "Corn"],
//     ["Wheat", "Corn", "Wheat", "Asparagus"],
//     ["Asparagus", "Wheat", "Soybean", "Corn"],
//     ["Asparagus", "Soybean", "Potato", "Wheat"]
// ]

import { addPlant  } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

export const plantSeeds = (yearlyPlan) =>{
    //interate thru each rown of array (x)
    yearlyPlan.forEach(rowOfPlants => {
        //iterate thru each array (y) on each x
        rowOfPlants.forEach(plantInRow => {
            //call plant function to get plant object
            //console.log(plantInRow);

            switch(plantInRow) {
                case "Asparagus":
                    addPlant(createAsparagus());
                  break;
                case "Corn":
                    addPlant(createCorn());
                break;
                case "Potato":
                    addPlant(createPotato());
                break;
                case "Soybean":
                    addPlant(createSoybean());
                break;
                case "Sunflower":
                    addPlant(createSunflower());
                break;
                case "Wheat":
                    addPlant(createWheat());
                break;
                default:
                    break;
              }
        })
    });
}

