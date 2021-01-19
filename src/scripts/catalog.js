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

export const countPlants = (harvestedFoodArray) => {

    const contentElement = document.querySelector(".container");
    
    const typesSorted = ["Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"].sort()

    const iconAsparagus=`https://www.flaticon.com/svg/vstatic/svg/3823/3823250.svg?token=exp=1611064930~hmac=fa715e9e96c17883c1832d95e2888576`
    const iconCorn=`https://www.flaticon.com/svg/vstatic/svg/1147/1147593.svg?token=exp=1611065272~hmac=2d4d8d2df3fa5cf31b15556b6f4b39b0`
    const iconPotato=`https://www.flaticon.com/svg/vstatic/svg/933/933248.svg?token=exp=1611065274~hmac=c5fa8b020c4e42f8bf80bbbabccf4c0a`
    const iconSoybean=`https://www.flaticon.com/svg/vstatic/svg/204/204707.svg?token=exp=1611065273~hmac=ceecb54ecf517f64b6dd53d4718fc9dc`
    const iconSunflower=`https://www.flaticon.com/svg/vstatic/svg/616/616441.svg?token=exp=1611065275~hmac=b6948ae807fcdbc7f9477d5a4eeb40dd`
    const iconWheat=`https://www.flaticon.com/svg/vstatic/svg/575/575435.svg?token=exp=1611065275~hmac=9a040b210a881ce028db2baf89aaad79`
    
    let imgIcon="";

    //iterate thru plant types and fiter sorted array for each type
    //the length of that array is the county of the plant
    let plantHTML="<section class=plant><div>Plant</div><div>Img</div><div>Count</div></section>";
    for (let index = 0; index < typesSorted.length; index++) {

        switch(typesSorted[index]) {
            case "Asparagus":
                imgIcon=iconAsparagus;
              break;
            case "Corn":
                imgIcon=iconCorn;
            break;
            case "Potato":
                imgIcon=iconPotato;
            break;
            case "Soybean":
                imgIcon=iconSoybean;
            break;
            case "Sunflower":
                imgIcon=iconSunflower;
            break;
            case "Wheat":
                imgIcon=iconWheat;
            break;
            default:
                break;
          }

        const resultArray = harvestedFoodArray.filter(plant => plant.type === typesSorted[index]);
        plantHTML+=`
        <section class=plant>
        <div>${typesSorted[index]}</div>
        <div><img class=icon src="${imgIcon}"></div>
        <div>${resultArray.length}</div>
        </section>
        `;
    }

    contentElement.innerHTML = plantHTML;
}

