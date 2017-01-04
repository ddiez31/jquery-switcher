var species = {
    cat: "cat.jpg",
    bear: "bear.jpg",
    fish: "fish.jpg"
};

function main() {
    /* 
    tout votre code doit se trouver dans cette fonction,
    vous pouvez biensur créer d'autres fonctions si nécessaire
    */

    // 1. placez un listener sur le click des éléments <button>
    $(".button").click(function() {

        // 2. dans le callback récupérez le data attribute animal
        var animal = $(this).attr("data-animal");

        // 3. récupérerez dans l'objet species la valeur correspond à l'attribut récupéré
        var animalSelect = $(species.val);
        console.log(animalSelect);

        // 4. ajoutez élément img en assignant à son attibut src la valeur précédemment récupérée
        var img = $("img").attr({ src: "species" });


        // 5. inserez cet élément dans l'élément ayant l'id holder
        /* $("#holder").before('<img src="img/bear.jpg" alt="description">'); */

        // 
        // Conseils : avancez étape par étape, console.log et debugger autant que nécessaires !



    })
}

$(document).ready(function() {
    main();
});