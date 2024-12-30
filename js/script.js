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
            description: "Comienza tu aventura cubana con nuestro servicio de recogida en el Aeropuerto Internacional José Martí. \
            Nuestro conductor te estará esperando, listo para llevarte a tu destino en La Habana o Varadero hasta la puerta de tu hospedaje. ¡Sin preocupaciones ni cargos adicionales!",
            galleryImages: ["img/Traslados aeropuertos/Paseo del Prado.webp", "img/Traslados aeropuertos/grand Anston.webp", 
                "img/Traslados aeropuertos/manzana Kempinski.webp", "img/Traslados aeropuertos/blau.webp"] // Imágenes de la galería
        },
        "info2": {
            title: "Traslado desde el aeropuerto José Martí a Cienfuegos y Trinidad",
            description: "Disfruta de un traslado cómodo y seguro desde el Aeropuerto José Martí hacia las hermosas ciudades de Cienfuegos y Trinidad. Te llevaremos \
            directamente a tu hospedaje, asegurando que tu viaje comience sin estrés.",
            galleryImages: ["img/Traslados aeropuertos/Cienfuegos.webp", "img/Traslados aeropuertos/Viñales.webp", "img/Destinos/Matanzas.webp"], // Imágenes de la galería
            
        },
        "info3": {
            title: "Traslado desde el aeropuerto José Martí a Viñales",
            description: "Comienza tu viaje hacia el impresionante Valle de Viñales con nuestro servicio de traslado desde el Aeropuerto José Martí. Disfruta de un viaje \
            cómodo y seguro mientras te llevamos a uno de los destinos más hermosos de Cuba, famoso por sus paisajes naturales y plantaciones de tabaco",
            galleryImages: []

        },
        "info4": {
            title: "Traslado desde el aeropuerto Juan Gualberto Gómez a casas de alquiler y hoteles en La Habana y Varadero",
            description: "Viaja con comodidad y estilo desde el Aeropuerto Juan Gualberto Gómez hacia las casas de alquiler y hoteles en La Habana y Varadero. Nuestro servicio \
            de traslado te garantiza un inicio sin complicaciones para tus vacaciones en Cuba, con un conductor profesional que te recibirá a tu llegada.",

            galleryImages: ["img/Traslados aeropuertos/Cienfuegos.webp", "img/Traslados aeropuertos/Viñales.webp", "img/Destinos/Matanzas.webp"] // Imágenes de la galería

        },
        "info5": {
            title: "Traslado desde el aeropuerto Juan Gualberto Gómez a Cienfuegos",
            description: "Disfruta de un traslado cómodo y seguro desde el Aeropuerto Juan Gualberto Gómez hacia la hermosa ciudad de Cienfuegos. Nuestro servicio te garantiza un viaje \
            sin complicaciones, permitiéndote comenzar tu aventura cubana de la mejor manera posible.",
  
            galleryImages: []
        }
        
    };

    const infoTours = {
        "info1": {
            title: "Tour de un día desde Varadero hasta la Habana",
            description: "La Habana en un Día: Un Recorrido por la Esencia Cubana desde Varadero",
             description2: "Hora de recojida 8:00 am en la puerta de su hospedaje o la ubicación que desee, se realiza una parada en el camino\
             en 'La Piña Colada'. Al llegar a la ciudad, se visitará el Cristo de La Habana, escultura que representa al Sagrado Corazón de Jesús,\
             elaborada con mármol de Carrara, mismo material utilizado en los monumentos del Cementerio de Colón de La Habana. Posteriormente se visitará la Real \
             Fábrica de Tabaco donde se encuentra el tabaco más grande del mundo. A continuación se realizará un recorrido por La Habana Vieja admirando sus 4 plazas:\
             Plaza de la Catedral, Plaza de San Francisco de Asis, Plaza de las Palomas y Plaza Vieja.También se visitará el Parque Central, el Capitolio y el \
             famoso 'Floridita', bar favorito del escritor y periodista Ernest Hemingway quien lo frecuentaba con regularidad. Se almorzará en un restaurante\
             tipico cubano. Luego se visitará La Habana Moderna donde podrá ver la Plaza de la Revolución y el Malecón. Se regresa a las 4:00 pm con  una llegada\
             estimada al hospedaje a las 6:00 pm.",
            galleryImages: ["img/Destinos/Habana/Cristo de la Habana.webp", "img/Destinos/Habana/Malecon.webp", 
                "img/Destinos/Habana/Plaza Vieja.webp", "img/Destinos/Habana/Plaza de la Revolucion.webp"] // Imágenes de la galería
        },
        "info2": {
            title: "Tour de un día desde Varadero hasta Matanzas",
            description: "Matanzas: Un Viaje Inolvidable a la Ciudad de los Puentes",
            description2: "Hora de recojida 8:00 am en la puerta de su hospedaje o la ubicacion que desee. Se comenzará visitando el museo de la Ruta del Esclavo.\
             Luego, se visitará el parque central con sus encantadoras calles y boulevard, y se visitará la catedral. Posteriormente, se explorará el punto mas alto de Matanzas,\
             Montserrate donde se podrá observar el Valle Yumuri y la iglesia Montserrate. También se visitarán las cuevas de Bellamar que se encuentran 700 metros bajo tierra. En el camino\
             de regreso a Varadero, se realizará una parada en las Cuevas de Saturno, donde podrá disfrutar de un horario de baño libre en los manantiales de la cueva. Se almorzará\
             en un restaurante tipico cubano y, al concluir el recorrido, se visitará el mirador de Varadero para tomar fotografias. Regreso al hospedaje al concluir el recorrido.",
            galleryImages: ["img/Destinos/Matanzas/Montserrate.webp", "img/Destinos/Matanzas/Cuevas de Bellamar.webp", "img/Destinos/Matanzas/Cuevas de Saturno.webp", "img/Destinos/Matanzas/Mirador Varadero.webp"], // Imágenes de la galería
            
        },
        "info3": {
            title: "Tour Tres Ciudades",
            description: "Tres Ciudades, Tres Experiencias: Un Viaje Inolvidable por Cuba",
            description2: "Hora de recojida 6:00 am. Nuestro primer destino será Villa Clara donde,\
            se visitará el mausuleo de Ernesto Che Guevara en Santa Clara, el tren blindado y el Ingenio 'Manaca-Iznaga' donde podrá conocer sobre la producción de azúcar en la época colonial y la historia de este \
            Ingenio. Después de esta inmersión en la historia, se visitará Trinidad,\
            famosa por sus calles empedradas y su vibrante cultura, aquí podrá disfrutar de una experiencia inolvidable en el canopy, donde podrá deslizarse entre los arboles y disfrutar de vistas espectaculares. \
            Se almuerza en Trinidad donde podrá degustar la deliciosa gastronomía cubana. Finalmente nuestro ultimo destino\
            será la ciudad de Cienfuegos, donde se visitará Punta Gorda, un hermoso malecón que ofrece vistas impresionantes de la bahía. Se regresará a Varadero al finalizar el recorrido llevando consigo un recuerdo inolvidable\
            de un día lleno de aventuras y descubrimientos.",
            galleryImages: ["img/Destinos/Tres Ciudades/Trinidad.webp", "img/Destinos/Tres Ciudades/Punta Gorda.webp", "img/Destinos/Tres Ciudades/Tren blindado.webp", "img/Destinos/Tres Ciudades/Manaca-iznaga.webp"], // Imágenes de la galería

            
        },
        "info4": {
            title: "Tour Dos Ciudades",
            description: "Descubre el Encanto de Cienfuegos y Trinidad: Dos Ciudades, Una Aventura",
            description2: "Recojida 6:00 am. Nuestro primer destino será Trinidad donde podrá pasear por las calles empedradas de esta hermosa ciudad colonial.\
            Aquí podrá disfrutar de una experiencia inolvidable en el canopy,  donde podrás deslizarte entre los árboles y disfrutar de vistas espectaculares de la naturaleza circundante. Se almorzará en Trinidad, \
            donde podrá degustar la deliciosa gastronomía cubana. Posteriormente se visitará la ciudad de Cienfuegos,, donde se visitará Punta Gorda, un hermoso malecón que ofrece vistas impresionantes de la bahía. Se regresará a \
            Varadero al finalizar el recorrido llevando consigo un recuerdo inolvidable\
            de un día lleno de aventuras y descubrimientos.",
            galleryImages: ["img/Destinos/Tres Ciudades/Trinidad.webp", "img/Destinos/Tres Ciudades/Punta Gorda.webp", "img/Destinos/Tres Ciudades/Bahia Cienfuegos.webp", "img/Destinos/Tres Ciudades/Malecon Cienfuegos.webp"], // Imágenes de la galería

            
            
        },

        "info5": {
            title: "Tour del Caribe desde Varadero",
            description: "Explora la Ciénaga de Zapata: Un Viaje al Corazón de la Naturaleza Cubana",
            description2: "En este tour se le llevará a uno de los ecosistemas más ricos y diversos de Cuba.\
            Se comenzará la aventura visitando el criadero de cocodrilos en la Cienaga donde podrá observar de cerca a estos fascinantes reptiles en su habitat natural. Luego, se explorará la Cueva de\
            los peces, un lugar ideal para los amantes del buceo y el esnórquel, aquí tendrá la oportunidad de sumergirse en aguas cristalinas y descubrir una gran variedad de peces tropicales.\
            Habrá un horario de baño libre en la playa del sur donde podrá relajarse y disfrutar del sol . Se almorzará en un restaurante típico cubano llamado 'Casa del Campesino'\
            Al concluir el recorrido se regresará a Varadero. Se llevará un recuerdo inolvidable de un dia lleno de naturaleza y aventura.",
            galleryImages: ["img/Destinos/Caribe/Guama.webp", "img/Destinos/Caribe/Cueva de los peces.webp", "img/Destinos/Caribe/Paisaje Cienaga.webp", "img/Destinos/Caribe/Caleta Buena.webp"], // Imágenes de la galería

        },

        "info6": {
            title: "Tour de un dia desde Varadero hasta Viñales, Pinar del Rio",
            description: "Explora Viñales: Paisajes que Cautivan, Experiencias que Inspiran",
            description2: "Se comenzará el tour con una visita a el Valle De La Prehistoria, un lugar fascinante donde se podrá\
            apreciar esculturas gigantes de dinosaurios y aprender sobre la historia natural de la región. A continuación se explorará\
            la Cueva del Indio, una impresionante cueva que ofrece un recorrido en bote por sus aguas. También\
            se visitará el pueblo de Viñales y los sembradíos de tabaco, donde podrá interactuar con los campesinos y conocer más sobre la producción de tabaco\
            uno de los productos más famosos del país. Al finalizar el trayecto, se regresará a Varadero.",
            galleryImages: ["img/Destinos/Pinar del Rio/Cueva del Indio.webp", "img/Destinos/pinar del Rio/Valle Prehistoria.webp", "img/Destinos/Pinar del Rio/Pueblo Viñales.webp", "img/Destinos/Pinar del Rio/Siembra de Tabaco.webp"], // Imágenes de la galería
        },

        "info7": {
            title: "Tour de un dia desde Varadero hasta Soroa, Pinar del Rio",
            description: "Soroa: Un Refugio de Paz y Naturaleza en el Corazón de Cuba",
            description2: "Un tour ideal para los que buscan un escape del bullicio de la ciudad. Se comenzará el paseo visitando las impresionantes cascadas de Soroa, donde podrá disfrutar de \
             un horario libre de baño en sus refrescantes aguas. Posteriormente se visitará el Orquideareo, un jardín botánico que alberga una vasta colección de orquídeas y otras plantas\
             tropicales, aquí podrá disfrutar de un paseo tranquilo entre la naturaleza. Se almuerzará en un \
             restaurante tipico cubano, donde podra degustar platos locales. Después de reponer energías, se visitarán las Terrazas y la casa de Polo\
             Montañes, un famoso cantante cubano. Al finalizar el recorrido se regresará a Varadero. Se llevará un recuerdo inolvidable de un día lleno de naturaleza y cultura.",
            galleryImages: ["img/Destinos/Soroa/Lago.webp", "img/Destinos/Soroa/Cascadas.webp", "img/Destinos/Soroa/Casa de Polo.webp", "img/Destinos/Soroa/Orquideareo.webp"], // Imágenes de la galería

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
                $('#modal-description2').hide(); // Oculta el elemento
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
                $('#modal-description2').show(); // Muestra el elemento
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

   
     
});