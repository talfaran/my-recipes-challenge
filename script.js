var RecipeApp = function () {

    var recipes = [
        // { 
        //     name: 'Best Chicken Soup!', 
        //     image: 'https://static01.nyt.com/images/2016/11/29/dining/recipelab-chick-noodle-still/recipelab-chick-noodle-still-master675.jpg',
        //     ingredients: [
        //         { name: 'whole chicken' },
        //         { name: 'medium carrots'},
        //         { name: 'onions' },
        //     ] 
        // }
    ];

    var $recipes = $('.recipes');

    //id's for recipes
    var recId = 0;
    //id's for ingredients
    var ingId = 0;


    var findRcpById = function (addIngrButton) {

        for (var i = 0; i < recipes.length; i++) {
            if (recipes[i].id === currentRecipeId){
                var currentRecipe = recipes[i];
            return currentRecipe; // you return the variable outside of the if statment but inside of the foor loop  - mostly you return undefine!
            }  }
    }



    var createRecipe = function (name, image) {
        var recipe = {
            name: name,
            image: image,
            ingredients: [],
            id: recId
        };

        //keeps recipe ids unique 
        recId++;

        recipes.push(recipe);
    };

    var createIngredients = function (currentRecipe) {
        var $currentRecipeId = $(currentRecipe).closest('.recipe').data().id; // $ is standart for variables of jquery type. id is a number
        var recipe = findRcpById(currentRecipeId);
        var ingredientHTML = {
            name: $(recipe).siblings('.form-control').val()
        } //  no seoeration between view and data
        recipe.ingredients.push(ingridient)
    };

    var _getIngredients = function (recipe) { // should return HTML string
        for (var i = 0; i < recipe.ingredients.length; i++) {
            var indredientsList = indredientsList + reicpe.ingredients[i].name // you forgot the + sign/ don't defind vaiables inside a loop or an if statment
        }
    return (indredientsList);
};

var renderRecipes = function () {
    //empty recipes div
    $recipes.empty();

    for (var i = 0; i < recipes.length; i++) {
        //current recipe in iteration
        var recipe = recipes[i];

        //return HTML for all ingredients
        var ingredients = _getIngredients(recipe); //add code

        $recipes.append(
            '<div class="recipe col-md-6  offset-md-3 img-fluid shadow" data-id="' + recipe.id + '">' +
            '<h4 class="text-capitalize font-italic text-center">' + recipe.name + '</h4>' +
            '<img class="recipe-img" src="' + recipe.image + '"/>' +
            '<hr>' +
            '<h5 class="font-italic font-bold text-center">ingredients</h5>' +
            '<div class="input-group mb-3">' +
            '<div class="input-group-prepend">' +
            '<span class="add-ingredients input-group-text" id="basic-addon3">Add Ingredients</span>' +
            '</div>' +
            '<input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">' +

            '</div>' +
            '<ul class="ingredients">' + ingredients + '</ul>' +
            '</div>'
        );
    }
};

return {
    createRecipe: createRecipe,
    renderRecipes: renderRecipes,
    createIngredients: createIngredients,
    findRcpByClickedBtn: findRcpByClickedBtn,
    findRcpById: findRcpById
}
};

var app = RecipeApp();


//--------EVENTS

//add a recipe
$('.add-recipe').on('click', function () {
    //collect input text
    var name = $('#recipe-name').val();
    var image = $('#recipe-image').val();

    //add recipe to array and render
    app.createRecipe(name, image);
    app.renderRecipes();
});

$('.add-recipe').on('click', '.add-ingredients', function () {
   // findRcpByClickedBtn(this) // exists only inside app - app.....
    app.createIngredients(this); // _getIngredients is not relevant.
});
