console.log("Welcome to the main module")

import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";

//random 3x6 array of plant plan
const yearlyPlan=createPlan();
//console.log("YP: ", yearlyPlan)

//plant seeds w the plan created above
//returning an array of individual plants
const allThePlants = plantSeeds(yearlyPlan);
console.log(allThePlants)

//create array with per #of objects of each plant
//corn half output
console.log(harvestPlants(allThePlants));

