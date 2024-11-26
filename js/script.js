$(document).ready(function () {

    //Javascript para el boton de cambiar idioma
    $("#flag-us").click(function () { 

        const src = $(this).attr("src");
        if(src.endsWith("us-flag.svg")){

            $(this).attr("src", "img/es-flag.svg");

        }else{

            $(this).attr("src", "img/us-flag.svg");

        }

     });


    $('.modal').hide();

     const infoTraslados = {
        "info1": {
            title: "Traslado desde el aeropuerto José Martí a casas de alquiler y hoteles en La Habana y Varadero",
            description: "Usted puede solicitar nuestro servicio de recojida al aeropuerto internacional José Martí, La Habana, donde nuestro conductor\
            le esperará frente a la puerta por donde usted saldrá con un cartel con su nombre para trasladarlo al hospedaje que desee en la ciudad de La Habana\
             o Varadero, ofrecemos servicios los 7 días de la semana las 24 horas del día. \
             Lo llevamos hasta la puerta de su hospedaje sin cargos adicionales.",
            galleryImages: ["img/Traslados aeropuertos/Paseo del Prado.webp", "img/Traslados aeropuertos/grand Anston.webp", 
                "img/Traslados aeropuertos/manzana Kempinski.webp", "img/Traslados aeropuertos/blau.webp"] // Imágenes de la galería
        },
        "info2": {
            title: "Traslado desde el aeropuerto José Martí a Cienfuegos y sfdsfd Trinidad",
            description: "Detalles sobre el traslado desde el aeropuerto José Martí a Cienfuegos y Trinidad.",
            galleryImages: ["img/Traslados aeropuertos/Cienfuegos.webp", "img/Traslados aeropuertos/Viñales.webp", "img/Destinos/Matanzas.webp"], // Imágenes de la galería
            
        },
        "info3": {
            title: "Traslado desde el aeropuerto José Martí a Viñales",
            description: "Detalles sobre el traslado desde el aeropuerto José Martí a Viñales.",
            galleryImages: ["img/Traslados aeropuertos/Cienfuegos.webp", "img/Traslados aeropuertos/Viñales.webp", "img/Destinos/Matanzas.webp"] // Imágenes de la galería
            

        },
        "info4": {
            title: "Traslado desde el aeropuerto Juan Gualberto Gómez a La Habana y Varadero",
            description: "Hola sobre el traslado desde el aeropuerto Juan Gualberto Gómez a casas de alquiler y hoteles en La Habana y Varadero.",
            galleryImages: ["img/Traslados aeropuertos/Cienfuegos.webp", "img/Traslados aeropuertos/Viñales.webp", "img/Destinos/Matanzas.webp"] // Imágenes de la galería

        },
        "info5": {
            title: "Traslado desde el aeropuerto Juan Gualberto Gómez a Cienfuegos",
            description: "Detalles sobre el traslado desde el aeropuerto Juan Gualberto Gómez a Cienfuegos.",
            
        }
        
    };

    const infoTours = {
        "info1": {
            title: "Tour de un día desde Varadero hasta la Habana",
            description: "La Habana en un Día: Un Recorrido por la Esencia Cubana desde Varadero",
             description2: "Hora de recojida 8 : 00 am en la puerta de su hospedaje o la ubicación que desee, se realiza una parada en el camino\
             en 'La Piña Colada'. Llegando a la ciudad se visita el Cristo de La Habana escultura que representa al Sagrado Corazón de Jesús,\
             hecha de mármol de Carrara, el mismo que se utilizó en los monumentos del Cementerio de Colón de La Habana. Luego se visita la Real \
             Fábrica de Tabaco donde se encuentra el tabaco más grande del mundo. Posteriormente realiza un recorrido por La Habana Vieja con sus 4 plazas\
             , Plaza de la Catedral, Plaza de San Francisco de Asis, plaza de las Palomas y Plaza Vieja. Se visita el Parque Central , el Capitolio y el \
             'Floridita', bar favorito del escritor y periodista Ernest Hemingway quien acostumbraba a visitarlo con frecuencia. Se almuerza en un restaurante\
             tipico cubano. Luego se visita La Habana Moderna donde podra ver la Plaza de la Revolucion y el malecon. Se regresa a las 4 : 00pm con lleagada\
             estimada al hospedaje a las 6 : 00pm",
             
            galleryImages: ["img/Destinos/Habana/Cristo de la Habana.webp", "img/Destinos/Habana/Malecon.webp", 
                "img/Destinos/Habana/Plaza Vieja.webp", "img/Destinos/Habana/Plaza de la Revolucion.webp"] // Imágenes de la galería
        },
        "info2": {
            title: "Tour de un día desde Varadero hasta Matanzas",
            description: "Matanzas: Un Viaje Inolvidable a la Ciudad de los Puentes",
            description2: "Hora de recojida 8 : 00 am en la puerta de su hospedaje o la ubicacion que desee. Se visitara el museo de la Ruta del Esclavo.\
             Luego se visita el parque central con sus calles y boulevard, se visita la catedral. Posteriormente se visita el punto mas alto de Matanzas,\
             Montserrate donde se podra observar el Valle Yumuri y la iglesia Montserrate. Se visitan las cuevas de Bellamar 700 metros bajo tierra. Se regresa\
             a Varadero con parada en las Cuevas de Saturno, donde podra disfrutar de un horario de bagno libre en los manantiales de la cueva. Se almuerza\
             en un restaurante tipico cubano. En varadero se visita el mirador de Varadero para fotografias. Regreso al hospedaje al concluir el recorrido",
            galleryImages: ["img/Destinos/Matanzas/Montserrate.webp", "img/Destinos/Matanzas/Cuevas de Bellamar.webp", "img/Destinos/Matanzas/Cuevas de Saturno.webp", "img/Destinos/Matanzas/Mirador Varadero.webp"], // Imágenes de la galería
            
        },
        "info3": {
            title: "Tour Tres Ciudades",
            description: "Tres Ciudades, Tres Experiencias: Un Viaje Inolvidable por Cuba",
            description2: "Hora de recojida 6 : 00 am. Nuestro primer destino será Villa Clara donde\
            visitará el mausuleo de Ernesto Che Guevara en Santa Clara, el tren blindado y el Ingenio 'Manaca-Iznaga'. Luego se visitará Trinidad con\
            sus calles empedradas, se visitará el canopy donde podrá disfrutar una experiencia inolvidable. Se almuerza en Trinidad. Nuestro ultimo destino\
            será la ciudad de Cienfuegos donde visitaremos Punta Gorda. Se regresará a Varadero al finalizar el recorrido",
            galleryImages: ["img/Destinos/Tres Ciudades/Trinidad.webp", "img/Destinos/Tres Ciudades/Punta Gorda.webp", "img/Destinos/Tres Ciudades/Tren blindado.webp", "img/Destinos/Tres Ciudades/Manaca-iznaga.webp"], // Imágenes de la galería

            
        },
        "info4": {
            title: "Tour Dos Ciudades",
            description: "Descubre el Encanto de Cienfuegos y Trinidad: Dos Ciudades, Una Aventura",
            description2: "Recojida 6: 00 am. Nuestro primer destino será Trinidad con\
            sus calles empedradas, se visitará el canopy donde podrá disfrutar una experiencia inolvidable. Se almuerza en Trinidad. Luego \
            se visitará la ciudad de Cienfuegos donde visitaremos Punta Gorda. Se regresará a Varadero al finalizar el recorrido",
            galleryImages: ["img/Destinos/Tres Ciudades/Trinidad.webp", "img/Destinos/Tres Ciudades/Punta Gorda.webp", "img/Destinos/Tres Ciudades/Bahia Cienfuegos.webp", "img/Destinos/Tres Ciudades/Malecon Cienfuegos.webp"], // Imágenes de la galería

            
            
        },
        "info5": {
            title: "Tour del Caribe desde Varadero",
            description: "Explora la Ciénaga de Zapata: Un Viaje al Corazón de la Naturaleza Cubana",
            description2: "Se visitará el criadero de cocodrilos en la Cienaga. Luego se visitará la Cueva de\
            los peces donde podrá bucear. Horario de bagno libre en la playa del sur. Se almuerza en un restaurante tipico cubano 'Casa del campesino'\
            Se regresa a Varadero al concluir el tour.",
            galleryImages: ["img/Destinos/Caribe/Guama.webp", "img/Destinos/Caribe/Cueva de los peces.webp", "img/Destinos/Caribe/Paisaje Cienaga.webp", "img/Destinos/Caribe/Caleta Buena.webp"], // Imágenes de la galería

        }
        
    };


    // Mostrar el modal
    $('.card p a').on('click', function(event) {
        event.preventDefault();
        const card = $(this).closest('.card'); // Obtener la tarjeta
        const isTraslado = card.closest('.galery1').length > 0; // Verificar si está en la galería de traslados
        const cardIndex = card.index(); // Obtener el índice de la tarjeta

        let infoKey;
        if (isTraslado) {
            infoKey = "info" + (cardIndex + 1); // Crear la clave para traslados
            if (infoTraslados[infoKey]) {
                $('#modal-title').text(infoTraslados[infoKey].title);
                $('#modal-description').text(infoTraslados[infoKey].description);
                $('#modal-description2').text("");
                $('#modal-description3').text("");
                $('.modal-gallery').empty();
                infoTraslados[infoKey].galleryImages.forEach(image => {
                    $('.modal-gallery').append(`<img src="${image}" alt="Galería imagen" />`);
                });
            }
        } else {
            infoKey = "info" + (cardIndex + 1); // Crear la clave para tours
            if (infoTours[infoKey]) {
                $('#modal-title').text(infoTours[infoKey].title);
                $('#modal-description').text(infoTours[infoKey].description);
                $('#modal-description2').text(infoTours[infoKey].description2);
                $('.modal-gallery').empty();
                infoTours[infoKey].galleryImages.forEach(image => {
                    $('.modal-gallery').append(`<img src="${image}" alt="Galería imagen" />`);
                });
            }
        }

        // Mostrar el modal
        $('#modal').show();
        

        // Ocultar las tarjetas
        $('.services').hide();
    });

    // Cerrar el modal con back
    $('.btn-back').on('click', function() {
        $('#modal').css('display', 'none');

        // Mostrar nuevamente las tarjetas al cerrar el modal
        $('.services').show();
    });

    $('.close').on('click', function() {
        $('#modal').css('display', 'none');

        // Mostrar nuevamente las tarjetas al cerrar el modal
        $('.services').show();
    });

    $(window).on('click', function(event) {
        if (event.target.id === 'modal') {
            $('#modal').css('display', 'none');

            // Mostrar nuevamente las tarjetas al cerrar el modal
            $('.services').show();
        }
    });
     
});