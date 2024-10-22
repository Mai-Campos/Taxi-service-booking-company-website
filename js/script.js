$(document).ready(function () {

    $("#flag-us").click(function () { 

        const src = $(this).attr("src");
        if(src.endsWith("us-flag.svg")){

            $(this).attr("src", "img/es-flag.svg");

            //Codigo para cambiar textos a ingles

        }else{

            $(this).attr("src", "img/us-flag.svg");

            //Codigo para cambiar textos a espannol

        }

     });

});