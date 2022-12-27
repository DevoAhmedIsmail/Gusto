const urlCategories = 'https://www.themealdb.com/api/json/v1/1/categories.php'; 
let slidesContainer = document.querySelector('.slides-container');
let sortsContainer = document.querySelector('.sorts-cards-container');
let des = document.querySelector('.sorts-recipe-description');
let categoryName = document.querySelector('.category-name');
let categoryHeader = document.querySelector('.category-header');

// To get query from url
let params = new URLSearchParams(window.location.search) ;
let categoryQuery = params.get('category');
console.log(categoryQuery);
const urlRecipes = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryQuery}`;


// Functions to cut paragraph and put at the end {...} 
const cutParagraph = (text)=>{
    let newDes = []
    let desArr = text.split('');
    // console.log(desArr.length)
    for(i=0;desArr.length > 100; i++){
        if(i>100){
            newDes.push(' ...')
            break;
        }
            newDes.push(desArr[i]);
    }
    console.log(newDes.join(""))
    return newDes.join("");
}

// Get from api => all categories names
fetch(urlCategories).then((response) => {
    return response.json()
}).then((data) => {
    data.categories.forEach(category=>{
        console.log(category);
        slidesContainer.innerHTML += `
                    <div class="swiper-slide flex flex-col">
                        <a href="/recipes.html?category=${category.strCategory}">
                            <img src="${category.strCategoryThumb}" alt="${category.strCategoryThumb}" class="">
                            <h3 class="text-yellowColor text-2xl">${category.strCategory}</h3>
                        </a>
                      </div>
                      `
    })
});

/* 
    .strCategory                => get category name
    .strCategoryThumb           => get category photo
    .strCategoryDescription     => get category description
*/

// Get from api => recipes 
fetch(urlRecipes).then((response) => {
    return response.json()
}).then((data) => {
    console.log(data.meals)
    if(data.meals == null){
        // categoryName.textContent = 'Sorry There is no items';
        categoryHeader.innerHTML = `<h3 class="category-name text-yellowColor text-3xl">There is no meals provide</h3>`
    }else{
        categoryHeader.innerHTML = `<h3 class="category-name text-yellowColor text-3xl relative after:conent-[''] after:absolute after:w-12 after:h-0.5 after:bg-yellowColor after:-bottom-2 after:left-2">${categoryQuery}</h3>`;
        data.meals.forEach(meal=>{
            console.log(meal);
            sortsContainer.innerHTML += `
            <div class="sorts-card border mb-5  border-yellow-500 rounded-tr-3xl overflow-hidden lg:w-1/3 md:w-1/2 ">
                <a href="/meal.html?id=${meal.idMeal}">
                    <img src="${meal.strMealThumb}" alt="" class="sort-card-img">
                    <div class="card-body p-2">
                        <h3 class="text-yellowColor text-xl capitalize sorts-recipe-name">${meal.strMeal}</h3>
                        <p class="text-md mt-2 sorts-recipe-description"></p>
                    </div>
                </a>
            </div>
                          `
        })
    }
    
    console.log(data.meals)
});

// Test




// cutParagraph(des.textContent)