export const Catalog = (harvestedFoodArray) => {

    const contentElement = document.querySelector(".container");
    let plantHTML="";

    harvestedFoodArray.forEach(plant => {
        plantHTML+="<section class=plant>" + plant.type + "</section>";
        //plantHTML+="";
    });
    contentElement.innerHTML = plantHTML;
//    console.log(plantHTML)
}

