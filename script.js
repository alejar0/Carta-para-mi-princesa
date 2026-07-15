const titulo = "Hola, mi princesita 🤍";

const texto = 'Antes de empezar, Esta página no busca convencerte de nada. Solo quiero recordarte amor mio, todo lo que somos, hemos sido, y hacerte imaginar todo lo que tu, yo y arcangel VAMOS A LLEGAR A SER';

function escribir(id, mensaje, velocidad) {
    let i = 0;
    const elemento = document.getElementById(id);
    elemento.innerHTML = "";

    const intervalo = setInterval(() => {
        elemento.innerHTML += mensaje.charAt(i);
        i++;
        if (i >= mensaje.length) {
            clearInterval(intervalo);
        }
    }, velocidad);
}

// Escritura inicial
escribir("titulo", titulo, 80);

setTimeout(() => {
    escribir("texto", texto, 25);
}, 2000);

// Partículas (estrellas)
for (let i = 0; i < 120; i++) {
    const estrella = document.createElement("div");
    estrella.classList.add("star");
    estrella.style.left = Math.random() * 100 + "%";
    estrella.style.top = Math.random() * 100 + "%";
    estrella.style.animationDelay = Math.random() * 3 + "s";
    document.getElementById("particles").appendChild(estrella);
}

// Elementos principales
const boton = document.getElementById("boton");
const card = document.querySelector(".card");
const historia = document.querySelector(".historia");
const timeline = document.querySelector(".timeline");
const volver = document.querySelector(".volver");
const capituloFinal = document.querySelector(".capituloFinal");

// Historia
const historiaTexto = `Yo pienso mucho en aquel día en el que empezamos a hablar y me cuesta creer todo lo que hemos vivido desde entonces, sabiendo como soy.

Hemos tenido momentos muy felices, otros muy MUY difíciles, y también errores de los dos.

Esta página no existe para borrar lo malo.
Existe porque todo lo lindo que hemos construido merece ser recordado...`;

boton.addEventListener("click", () => {
    card.classList.add("fadeOut");

    setTimeout(() => {
        card.style.display = "none";
        historia.classList.remove("oculto");
        historia.classList.add("fadeIn");
        escribir("historiaTexto", historiaTexto, 25);
    }, 700);
});

// Continuar a Timeline
const botonContinuar = document.getElementById("continuar");

botonContinuar.addEventListener("click", () => {
    historia.classList.add("fadeOut");

    setTimeout(() => {
        historia.style.display = "none";
        timeline.classList.remove("oculto");
        timeline.classList.add("fadeIn");
        mostrarTimeline();
    }, 700);
});

// Array de recuerdos (lo dejé igual que tú)
const recuerdos = [
    {
        fecha: "23 de diciembre 10:52 pm de 2025",
        titulo: "Todo comenzó aquí 🤍",
        texto: "Ese día probablemente ninguno de los dos imaginaba todo lo que iba a pasar después, solo un mensaje nos abrio tanto en esta vida",
        imagen: "img/recuerdo1.jpeg"
    },
    {
        fecha: "28 de enero 10:28 pm de 2026",
        titulo: "Nuestra primera vez juntos",
        texto: "Ese día dejó de ser una pantalla y porfin pude conocer al amor de mi vida, por mas que no se dejaba ver porque mi espalda estaba muy linda al parecer.",
        imagen: "img/recuerdo2.jpeg"
    },
    {
        fecha: "2 de febrero de 2026",
        titulo: "El comienzo de nuestra historia ❤️",
        texto: "Fue el día en que te pedi que fueramos novios, una decicion de la cual nunca me voy a arrepentir",
        imagen: "img/recuerdo3.jpeg"
    },
    {
        fecha: "7 de febrero de 2026",
        titulo: "NUESTRO PRIMER SKINCAREE",
        texto: "no voy a olvidar nunca esto porque ni antes ni despues de ese dia (hay que volver a hacerlo jssjjs) nunca he hecho eso CON NADIE MAS",
        imagen: "img/recuerdo4.jpeg"
    },
    {
        fecha: "8 de febrero de 2026",
        titulo: "Cuando fuimos al parque del cafe",
        texto: "jsadjasjd la primera semana de novios y ya andabamos por alla ajajaj hay que volver a ir mi amor LA PASAMOS INCREIBLE",
        imagen: "img/recuerdo5.jpeg"
    },
    {
        fecha: "10 de febrero de 2026",
        titulo: "Cuando pintamos al gato y la hada",
        texto: "de verdad que este es de mis favoritos por el simple hecho de que tu me impulsas a mi a hacer cosas que nunca haria por mi cuenta jajaja PINTAR CONTIGO FUE TAN INCREIBLEEE",
        imagen: "img/recuerdo7.jpeg"
    },
    {
        fecha: "11 de febrero de 2026",
        titulo: "tomandonos fotos y videitos en el portal",
        texto: "Segun yo es el primer prime de la relacion jssjjs, ERA TODO PERFECTO Y PODIAMOS IR AL PORTAL SIN TENER PROBLEMAS Y A TOMARNOS FOTITOS SUPER FELICEEES",
        imagen: "img/recuerdo8.jpeg"
    },
    {
        fecha: "13 de febrero de 2026",
        titulo: "la primera vez que salimos con tu grupo",
        texto: "jasdjsa la primera vez que salimos con tu grupo mas cercano, NOS VEIAMOS TAN FELICESSS",
        imagen: "img/recuerdo9.jpeg"
    },
    {
        fecha: "14 de febrero de 2026",
        titulo: "TEODORO",
        texto: "Aunque ya no esta con nosotros, recuerdo mucho la ilusion que teniamos de tener un hamster juntitos, QPD",
        imagen: "img/recuerdo10.jpeg"
    },
    {
        fecha: "18 de febrero de 2026",
        titulo: "Primera vez puebliando",
        texto: "Pues no fue maravillosa porque nos tomaron fotos a escondidas y era de noche...",
        imagen: "img/recuerdo11.jpeg"
    },
    {
        fecha: "24 de febrero de 2026",
        titulo: "El amor de mi vida y mi moto",
        texto: "Eres la unica persona a la cual le he prestado y le he enseñado a manejar usando el objeto fisico que mas valor tiene para mi...",
        imagen: "img/recuerdo12.jpeg"
    },
    {
        fecha: "4 de marzo de 2026",
        titulo: "MI PELIRIZADA HERMOSHA",
        texto: "JDSAJDSA creo que nunca habias visto esta cierto?",
        imagen: "img/recuerdo13.jpeg"
    },
    {
        fecha: "7 de marzo de 2026",
        titulo: "Animal house",
        texto: "Se que peleamos feo antes de ir alla, pero me da igual, pase muy bien ese dia contigo...",
        imagen: "img/recuerdo14.jpeg"
    },
    {
        fecha: "9 de marzo de 2026",
        titulo: "QUE LINDOSSS",
        texto: "jdasjd me encanta la foto la verdad, nos vemos muy felices...",
        imagen: "img/recuerdo15.jpeg"
    },
    {
        fecha: "14 de marzo de 2026",
        titulo: "PEREIRA",
        texto: "JDSAJD EL PRIMER VIAJE A OTRA CIUDAD MI AMORRR...",
        imagen: "img/recuerdo17.jpeg"
    }
];

function mostrarTimeline() {
    const contenedor = document.getElementById("timelineContainer");
    contenedor.innerHTML = "";

    recuerdos.forEach((recuerdo, indice) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "recuerdo";
        tarjeta.style.animationDelay = `${indice * 0.4}s`;

        tarjeta.innerHTML = `
            <img src="${recuerdo.imagen}" class="fotoRecuerdo" 
                 data-titulo="${recuerdo.titulo}" 
                 data-texto="${recuerdo.texto}">
            <h3>${recuerdo.fecha}</h3>
            <h4>${recuerdo.titulo}</h4>
            <p>${recuerdo.texto}</p>
        `;

        contenedor.appendChild(tarjeta);
    });
}

// Visor
const visor = document.getElementById("visor");
const imagenGrande = document.getElementById("imagenGrande");
const visorTitulo = document.getElementById("visorTitulo");
const visorTexto = document.getElementById("visorTexto");

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("fotoRecuerdo")) {
        imagenGrande.src = e.target.src;
        visorTitulo.textContent = e.target.dataset.titulo;
        visorTexto.textContent = e.target.dataset.texto;
        visor.classList.remove("oculto");
    }
});

document.getElementById("cerrarVisor").onclick = () => {
    visor.classList.add("oculto");
};

visor.onclick = (e) => {
    if (e.target === visor) visor.classList.add("oculto");
};

// Ir a sección "Si pudiera volver"
const botonCapituloFinal = document.getElementById("continuarHistoria");

botonCapituloFinal.addEventListener("click", () => {
    timeline.classList.add("fadeOut");

    setTimeout(() => {
        timeline.style.display = "none";
        volver.classList.remove("oculto");
        volver.classList.add("fadeIn");
        mostrarFrases();
    }, 700);
});

// Frases "Si pudiera volver"
const frasesVolver = [
    "Si pudiera volver...", "Al 23 de diciembre de 2025...", "Volvería a escribirte.",
    "Porque sin saberlo, ese día cambió mi vida.", "Al 28 de enero de 2026...",
    "Volvería a abrazarte exactamente igual.", "Porque ese abrazo sigue siendo uno de mis lugares favoritos.",
    "Al 2 de febrero de 2026...", "Volvería a elegirte.", "Una y mil veces más.",
    "Porque nunca me he arrepentido de que nuestras vidas se hayan cruzado, espero de verdad que tu seas mi compañera de vida. 🤍"
];

function mostrarFrases() {
    const el = document.getElementById("volverTexto");
    const btn = document.getElementById("seguirHistoria");
    let i = 0;

    function siguiente() {
        if (i >= frasesVolver.length) {
            btn.classList.remove("oculto");
            btn.classList.add("mostrar");
            return;
        }
        el.style.opacity = "0";
        setTimeout(() => {
            el.textContent = frasesVolver[i++];
            el.style.opacity = "1";
            setTimeout(siguiente, 2200);
        }, 500);
    }
    siguiente();
}

// ==================== BOTÓN FINAL + CONTADOR ====================
document.getElementById("seguirHistoria").addEventListener("click", () => {
    volver.classList.add("fadeOut");

    setTimeout(() => {
        volver.style.display = "none";
        
        // Ocultamos el capítulo final anterior
        capituloFinal.classList.add("oculto");
        
        // Mostramos el nuevo contador
        const contadorSeccion = document.getElementById("contadorSeccion");
        contadorSeccion.classList.remove("oculto");
        contadorSeccion.classList.add("fadeIn");
        
        // Actualizar contador inmediatamente
        actualizarContador();
    }, 700);
});

// ==================== NUEVO CÓDIGO DEL CONTADOR ====================

const contadorSeccion = document.getElementById("contadorSeccion");
const botonVolverInicio = document.getElementById("volverInicio");

// Función para actualizar el contador
function actualizarContador() {
    const fechaInicio = new Date("2026-02-02T22:11:00").getTime();
    const ahora = new Date().getTime();
    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = 
        `${dias} días<br>${horas} horas<br>${minutos} minutos<br>${segundos} segundos`;
}

// Actualizar cada segundo
setInterval(actualizarContador, 1000);

// Ir al contador desde el capítulo final
document.getElementById("seguirHistoria").addEventListener("click", () => {
    volver.classList.add("fadeOut");
    
    setTimeout(() => {
        volver.style.display = "none";
        capituloFinal.classList.add("oculto");   // Ocultamos el capítulo final
        contadorSeccion.classList.remove("oculto");
        contadorSeccion.classList.add("fadeIn");
        actualizarContador(); // Primera actualización
    }, 700);
});

// Botón para volver al inicio
botonVolverInicio.addEventListener("click", () => {
    contadorSeccion.classList.add("fadeOut");
    
    setTimeout(() => {
        contadorSeccion.classList.add("oculto");
        contadorSeccion.classList.remove("fadeOut");
        // Volver a la primera pantalla
        document.querySelector(".card").classList.remove("oculto");
        document.querySelector(".card").classList.add("fadeIn");
    }, 800);
});
