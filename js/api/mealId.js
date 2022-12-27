let mealName = document.querySelector('.meal-name');
let ingredientsItemsUL  =document.querySelector('.ingredients-items ul');
let instractionContent  =document.querySelector('.instraction-content');
let mealImg = document.querySelector('.meal-img');
let param = new URLSearchParams(window.location.search) ;
let mealId = param.get('id');


const urlMealApi = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;


// Get Meal information from api
fetch(urlMealApi).then((response) => {
    return response.json()
}).then((data) => {
    let mealInfo = data.meals[0];
    // console.log(mealInfo)
    mealName.textContent = mealInfo.strMeal;
    mealImg.innerHTML = `<img src="${mealInfo.strMealThumb}" alt="${mealInfo.strMeal}">`
    instractionContent.textContent = mealInfo.strInstructions;

    for(i=1;i<20;i++){
        if(mealInfo[`strIngredient${i}`] == ''){
            break;
        }
        console.log("Meal ingredients: " + mealInfo[`strIngredient${i}`])
        ingredientsItemsUL.innerHTML += `
        <li>- ${mealInfo[`strMeasure${i}`]} ${mealInfo[`strIngredient${i}`]}</li>
        `
    }

    
});