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

     
     $('.btn-change.prev').hide(); //Ocultar la flecha de la tarjeta hacia atras al cargar la pagina

     $('.btn-change.next').click(function() {

        // Cambiar el contenido de la tarjeta
        const card = $(this).closest('.card');
        const newContent = {
            title: "Tour Dos Ciudades: Cienfuegos y Trinidad desde Varadero",
            description: "Ver Información",
            image: "img/Destinos/Tres Ciudades.webp" 
        };

        // Actualizar el contenido de la tarjeta
        card.find('h3').text(newContent.title);
        card.find('.description a').text(newContent.description);
        card.find('img').attr('src', newContent.image);

        $(this).addClass('rotate-right'); // Agregar la clase de rotación hacia la derecha
        
                $(this).hide(); // Ocultar después de que se desvanezca
                $('.prev').show().removeClass('rotate-left').css('opacity', 1); // Mostrar la flecha anterior
      
    });

    $('.btn-change.prev').click(function() {
        // Cambiar el contenido de la tarjeta
        const card = $(this).closest('.card');
        const newContent = {
            title: "Tour Tres Ciudades: Villa Clara, Cienfuegos y Trinidad desde Varadero",
            description: "Ver Información",
            image: "img/Destinos/Tres Ciudades.webp" 
        };

        // Actualizar el contenido de la tarjeta
        card.find('h3').text(newContent.title);
        card.find('.description a').text(newContent.description);
        card.find('img').attr('src', newContent.image);

        $(this).addClass('rotate-left'); // Agregar la clase de rotación hacia la izquierda
       
                $(this).hide(); // Ocultar después de que se desvanezca
                $('.next').show().removeClass('rotate-right').css('opacity', 1); // Mostrar la flecha siguiente
       
    });

    $('.modal').hide();

     const infoTraslados = {
        "info1": {
            title: "Traslado desde el aeropuerto José Martí a casas de alquiler y hoteles en La Habana y Varadero",
            description: "Usted puede solicitar nuestro servicio de recogida al Aeropuerto Internacional José Martí, La Habana, donde nuestro conductor\
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
            description: "Detalles sobre el traslado desde el aeropuerto Juan Gualberto Gómez a casas de alquiler y hoteles en La Habana y Varadero.",
            
        },
        "info5": {
            title: "Traslado desde el aeropuerto Juan Gualberto Gómez a Cienfuegos",
            description: "Detalles sobre el traslado desde el aeropuerto Juan Gualberto Gómez a Cienfuegos.",
            
        }
        
    };

    const infoTours = {
        "info1": {
            title: "Tour de un día desde Varadero hasta la Habana",
            description: "Le invitamos a recorrer La Habana en nuestros taxis",
             description2: "Hora de salida 8am",
             
            galleryImages: ["img/Traslados aeropuertos/Paseo del Prado.webp", "img/Traslados aeropuertos/grand Anston.webp", 
                "img/Traslados aeropuertos/manzana Kempinski.webp", "img/Traslados aeropuertos/blau.webp"] // Imágenes de la galería
        },
        "info2": {
            title: "Traslado  a Cienfuegos y sfdsfd Trinidad",
            description: "Detalles sobre el traslado desde el aeropuerto José Martí a Cienfuegos y Trinidad.",
            description2: "",
            galleryImages: ["img/Traslados aeropuertos/Cienfuegos.webp", "img/Traslados aeropuertos/Viñales.webp", "img/Destinos/Matanzas.webp"], // Imágenes de la galería
            
        },
        "info3": {
            title: "Traslado desde el aeropuerto José Martí a Viñales",
            description: "Detalles sobre el traslado desde el aeropuerto José Martí a Viñales.",
            description2: "Detalles segundo texto"
        },
        "info4": {
            title: "Traslado desde el aeropuerto Juan Gualberto Gómez a La Habana y Varadero",
            description: "Detalles sobre el traslado desde el aeropuerto Juan Gualberto Gómez a casas de alquiler y hoteles en La Habana y Varadero.",
            description2: "",
            
            
        },
        "info5": {
            title: "Traslado desde el aeropuerto Juan Gualberto Gómez a Cienfuegos",
            description: "Detalles sobre el traslado desde el aeropuerto Juan Gualberto Gómez a Cienfuegos.",
            description2: ""
            
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