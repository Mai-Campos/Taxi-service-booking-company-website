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
     const destinos = [
        { provincia: "Matanzas", nombre: "Cuevas de Bellamar", img: "img/Destinos/Matanzas/Cuevas de Bellamar.webp" },
        { provincia: "Matanzas", nombre: "Cuevas de Saturno", img: "img/Destinos/Matanzas/Cuevas de Saturno.webp" },
        { provincia: "Matanzas", nombre: "Varadero", img: "img/Destinos/Matanzas/Varadero.webp" },
        { provincia: "Matanzas", nombre: "Guama", img: "img/Destinos/Matanzas/Guama.webp" },
        { provincia: "Matanzas", nombre: "Caleta Buena", img: "img/Destinos/Matanzas/Caleta Buena.webp" },
        { provincia: "La Habana", nombre: "La Habana Vieja", img: "img/Destinos/Habana/Capitolio.webp" },
        { provincia: "La Habana", nombre: "Malecón", img: "img/Destinos/Habana/Habana Vieja.webp" },
        { provincia: "La Habana", nombre: "Plaza de la Revolución", img: "img/Destinos/Habana/Morro.webp" },
        { provincia: "La Habana", nombre: "Capitolio", img: "img/Destinos/Habana/Jardin Botanico.webp" },
        { provincia: "La Habana", nombre: "Castillo del Morro", img: "img/Destinos/Habana/Malecon.webp" },
      
        
        
    ];

    function generarTarjetas() {
        destinos.forEach(destino => {
            const cardHTML = `
                <div class="card" data-provincia="${destino.provincia}">
                    <img src="${destino.img}" alt="${destino.nombre}">
                    <h3>${destino.nombre}</h3>
                    <p><a href="">Ver en el mapa</a></p>
                </div>
            `;
            $(".galery").append(cardHTML); // Agrega la tarjeta a la galería
        });
    }

    // Generar las tarjetas al cargar la página
    generarTarjetas();

    $(".galery .card").hide();

    $("input[name='provincia'][value='Matanzas']").prop('checked', true);
    $(".galery .card[data-provincia='Matanzas']").show();


   

    $("input[name='provincia']").change(function() {
        var selectedValue = $(this).val(); 

        $(".galery .card").hide();

        $(".galery .card[data-provincia='" + selectedValue + "']").show();
    });

   


});