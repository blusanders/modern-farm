let plantsInFieldArray = [];

export const addPlant = (seed) => {

    if (Array.isArray(seed)) {
        //if seed is array then iterate thru array and push each
        seed.forEach(element => {
            plantsInFieldArray.push(element);
         });
    }else{
        plantsInFieldArray.push(seed);
    }
}

//returns a copy of every individual plant object from field plan
//if plant is corn then it's added it twice
//console.log(plantsInFieldArray)

export const usePlants = () => {
    return plantsInFieldArray.slice();
}

