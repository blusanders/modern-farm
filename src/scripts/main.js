console.log("Welcome to the main module")
import { addPlant, usePlants } from "./field.js";
// import { createPlan } from "../scripts/plan.js";
// import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
// import { createPotato } from "./seeds/potato.js";
// import { createSoybean } from "./seeds/soybean.js";
// import { createSunflower } from "./seeds/sunflower.js";
// import { createWheat } from "./seeds/wheat.js";

// const yearlyPlan=createPlan();
// const asparagusSeed=createAsparagus();
// const cornSeed=createCorn();
// const potatoSeed=createPotato();
// const soybeanSeed=createSoybean();
// const sunflowerSeed=createSunflower();
// const wheatSeed=createWheat();

addPlant(createCorn());
const checkCorn=usePlants();
console.log(checkCorn);

