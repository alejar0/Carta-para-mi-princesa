/* =====================================================
   CAPÍTULO II
   Mientras exista un camino...
===================================================== */

// ===============================================
// ELEMENTOS
// ===============================================

const particles = document.getElementById("particles");
const intro = document.getElementById("intro");
const escena = document.getElementById("escena");

const typewriter = document.getElementById("typewriter");

const armenia = document.getElementById("armenia");
const paipa = document.getElementById("paipa");

const finalText = document.getElementById("finalText");
const finalPhrase = document.getElementById("finalPhrase");

const continueBtn = document.getElementById("continueBtn");

const svg = document.getElementById("constelacion");

const travelContainer = document.getElementById("travelContainer");


// ===============================================
// FRASES
// ===============================================

const frases = [

"A veces pensé que la distancia era demasiado grande...",

"Pero cada llamada...",

"Cada mensaje...",

"Cada 'buenas noches'...",

"Nos seguía acercando."

];


// ===============================================
// FONDO DE ESTRELLAS
// ===============================================

function crearFondo(){

    for(let i=0;i<220;i++){

        const star=document.createElement("div");

        star.className="star";

        star.style.left=Math.random()*100+"vw";

        star.style.top=Math.random()*100+"vh";

        star.style.animationDelay=Math.random()*5+"s";

        star.style.opacity=Math.random();

        const s=Math.random()*3+1;

        star.style.width=s+"px";
        star.style.height=s+"px";

        particles.appendChild(star);

    }

}

crearFondo();


// ===============================================
// MAQUINA DE ESCRIBIR
// ===============================================

let fraseActual=0;

function escribir(){

    if(fraseActual>=frases.length){

        terminarIntro();

        return;

    }

    typewriter.innerHTML="";

    let letra=0;

    const texto=frases[fraseActual];

    const maquina=setInterval(()=>{

        typewriter.innerHTML+=texto.charAt(letra);

        letra++;

        if(letra>=texto.length){

            clearInterval(maquina);

            setTimeout(()=>{

                fraseActual++;

                escribir();

            },1800);

        }

    },40);

}

escribir();


// ===============================================
// TERMINA INTRO
// ===============================================

function terminarIntro(){

    intro.classList.add("fadeOut");

    setTimeout(()=>{

        intro.style.display="none";

        escena.classList.remove("hidden");

        iniciarEscena();

    },2000);

}

// ===============================================
// ESCENA PRINCIPAL
// ===============================================

function iniciarEscena(){

    // Aparece Armenia

    setTimeout(()=>{

        armenia.classList.add("show");
        armenia.querySelector(".heart").classList.add("beat");

    },1000);


    // Aparece Paipa

    setTimeout(()=>{

        paipa.classList.add("show");
        paipa.querySelector(".heart").classList.add("beat");

    },2800);


    // Empieza a formarse el camino

    setTimeout(()=>{

        crearConstelacion();

    },5000);

}



// ===============================================
// CAMINO DE ESTRELLAS
// ===============================================

function crearConstelacion(){

    svg.innerHTML = "";

    // Posición REAL de Armenia
    const universo = document.getElementById("universo");

const rectUniverso = universo.getBoundingClientRect();

const rectArmenia = armenia.querySelector(".heart").getBoundingClientRect();
const rectPaipa = paipa.querySelector(".heart").getBoundingClientRect();

const x1 = rectArmenia.left - rectUniverso.left + rectArmenia.width/2;
const y1 = rectArmenia.top - rectUniverso.top + rectArmenia.height/2;

const x2 = rectPaipa.left - rectUniverso.left + rectPaipa.width/2;
const y2 = rectPaipa.top - rectUniverso.top + rectPaipa.height/2;

    const total = 120;

    for(let i = 0; i < total; i++){

        const t = i / (total - 1);

        // Interpolación
        let x = x1 + (x2 - x1) * t;
        let y = y1 + (y2 - y1) * t;

        // Curva elegante
        y -= Math.sin(t * Math.PI) * 90;

        // Pequeña dispersión para que no parezca una carretera
        x += (Math.random() - .5) * 10;
        y += (Math.random() - .5) * 10;

        const estrella = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
        );

        estrella.setAttribute("cx", x);
        estrella.setAttribute("cy", y);

        estrella.setAttribute("r", Math.random() * 2.5 + 1);

        estrella.setAttribute(
            "fill",
            Math.random() > .75 ? "#ff4f6f" : "white"
        );

        estrella.style.opacity = 0;

        estrella.style.transition = ".6s";

        svg.appendChild(estrella);

        setTimeout(() => {

            estrella.style.opacity = 1;

        }, i * 35);

    }

    setTimeout(() => {

        iniciarViajes();

    }, 5000);

}

// ===============================================
// LUCES VIAJANDO
// ===============================================

function iniciarViajes(){

    for(let i=0;i<10;i++){

        setTimeout(()=>{

            viajar();

        },i*1200);

    }

}

// ===============================================
// LUZ VIAJANDO
// ===============================================

function viajar(){

    const luz = document.createElement("div");

    luz.className = "travel";

    travelContainer.appendChild(luz);

    // Mismos puntos del camino
    const x1 = 151;
    const y1 = 549;

    const x2 = 749;
    const y2 = 101;

    let t = 0;

    const animacion = setInterval(()=>{

        t += 0.008;

        if(t >= 1){

            clearInterval(animacion);

            luz.remove();

            // Hace latir el corazón de Paipa
            const h = paipa.querySelector(".heart");

            h.classList.remove("beat");

            void h.offsetWidth;

            h.classList.add("beat");

            return;

        }

        let x = x1 + (x2 - x1) * t;
        let y = y1 + (y2 - y1) * t;

        // Misma curva usada para la constelación
        y -= Math.sin(t * Math.PI) * 90;

        luz.style.left = x + "px";
        luz.style.top = y + "px";

    },16);

}
