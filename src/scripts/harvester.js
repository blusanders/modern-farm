export const harvestPlants = (plantArray) => {

    let plantOutputArray=[];
    let correctOutput=0;

    plantArray.forEach(x => {

        //loop thru plant array and add output property to return array

        //if corn then cut output in half
        if (x.type==="Corn"){
            correctOutput=x.output/2;
        }else{
            correctOutput=x.output;
        }

        for (let y = 0; y < correctOutput; y++) {
            plantOutputArray.push(x);
        };
    });

    return plantOutputArray;
};
