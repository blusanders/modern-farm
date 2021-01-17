console.log("Welcome to the main module")

import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";


//create random field plan
const yearlyPlan=createPlan();

//for each seed in each row, create plant objects
//returns an array of all the plants needed for the plan  
const allThePlants = plantSeeds(yearlyPlan);
//console.log(allThePlants);

