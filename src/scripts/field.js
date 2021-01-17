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

export const usePlants = () => {
    return plantsInFieldArray.slice();
}

