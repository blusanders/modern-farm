export const harvestPlants = (plantArray) => {

    let plantOutputArray=[];
    let correctOutput=0;

    //for each loop
    plantArray.forEach(x => {

        //console.log("Harvest Obj: ", x.output);
        //loop thru array and add output element to return array
        //# x output

        //if corn then cut output in half
        // let correctOutput=0;
        // debugger
        if (x.type==="corn"){
            correctOutput=x.output/2;
        }else{
            correctOutput=x.output;
        }

        //iterate correct # of times based on corn 
        for (let y = 0; y < correctOutput; y++) {
            plantOutputArray.push(x);
        };
    });

    return plantOutputArray;
};
