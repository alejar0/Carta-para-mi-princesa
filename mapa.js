// =========================================
// ESTRELLAS
// =========================================

const particles = document.getElementById("particles");

for(let i=0;i<220;i++){

    const estrella=document.createElement("div");

    estrella.className="estrella";

    const size=Math.random()*3+1;

    estrella.style.width=size+"px";
    estrella.style.height=size+"px";

    estrella.style.left=Math.random()*100+"vw";
    estrella.style.top=Math.random()*100+"vh";

    estrella.style.animationDelay=Math.random()*5+"s";

    particles.appendChild(estrella);

}

// =========================================
// REFERENCIAS
// =========================================

const armenia=document.getElementById("armenia");
const paipa=document.getElementById("paipa");

const texto=document.getElementById("textoPrincipal");

const travel=document.getElementById("travelContainer");

const camino=document.getElementById("camino");

const mensajeFinal=document.getElementById("mensajeFinal");

const boton=document.getElementById("continuar");

// =========================================
// FRASES
// =========================================

const frases=[

"Hoy tú estás en Paipa...",

"Y yo sigo aquí, en Armenia...",

"Hay kilómetros entre nosotros...",

"Pero jamás habrá distancia entre nuestros corazones."

];

let indice=0;

function mostrarFrases(){

    if(indice>=frases.length){

        setTimeout(iniciarCamino,1000);

        return;

    }

    texto.classList.remove("visible");

    setTimeout(()=>{

        texto.textContent=frases[indice];

        texto.classList.add("visible");

        indice++;

        setTimeout(mostrarFrases,2600);

    },600);

}

setTimeout(mostrarFrases,1000);

// =========================================
// DIBUJAR EL CAMINO
// =========================================

function iniciarCamino(){

    const a=armenia.getBoundingClientRect();

    const p=paipa.getBoundingClientRect();

    const x1=a.left+a.width/2;

    const y1=a.top+a.height/2;

    const x2=p.left+p.width/2;

    const y2=p.top+p.height/2;

    const cx=(x1+x2)/2-10;
    
    const cy=(y1+y2)/2-210;

    camino.setAttribute(

        "d",

        `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`

    );

    recorrerCamino(x1,y1,cx,cy,x2,y2);

}

// =========================================
// RECORRIDO
// =========================================

function recorrerCamino(x1,y1,cx,cy,x2,y2){

    for(let i=0;i<=170;i++){

        setTimeout(()=>{

            crearParticula(

                x1,
                y1,

                cx,
                cy,

                x2,
                y2,

                i/170

            );

        },i*28);

    }

    setTimeout(()=>{

        mensajeFinal.classList.add("visible");

    },5200);

    setTimeout(()=>{

        boton.classList.add("visible");

    },6500);

}

// =========================================
// PARTÍCULAS DE LUZ
// =========================================

function crearParticula(x1,y1,cx,cy,x2,y2,t){

    const punto=bezier(x1,y1,cx,cy,x2,y2,t);

    const estrella=document.createElement("div");

    estrella.className="travel";

    estrella.style.left=punto.x+"px";

    estrella.style.top=punto.y+"px";

    travel.appendChild(estrella);

    estrella.animate(

        [

            {

                transform:"translate(-50%,-50%) scale(.2)",

                opacity:0

            },

            {

                transform:"translate(-50%,-50%) scale(1)",

                opacity:1,

                offset:.4

            },

            {

                transform:"translate(-50%,-50%) scale(.3)",

                opacity:0

            }

        ],

        {

            duration:1400,

            easing:"ease-out"

        }

    );

    setTimeout(()=>{

        estrella.remove();

    },1400);

}

// =========================================
// CURVA BÉZIER
// =========================================

function bezier(x1,y1,cx,cy,x2,y2,t){

    const x=

        (1-t)*(1-t)*x1+

        2*(1-t)*t*cx+

        t*t*x2;

    const y=

        (1-t)*(1-t)*y1+

        2*(1-t)*t*cy+

        t*t*y2;

    return{

        x:x,

        y:y

    };

}

// =========================================
// BOTÓN
// =========================================

boton.addEventListener("click",()=>{

    document.body.style.transition="opacity 1s ease";

    document.body.style.opacity="0";

    setTimeout(()=>{

        window.location.href="capitulo3.html";

    },1000);

});

// =========================================
// EFECTO EXTRA
// =========================================

setInterval(()=>{

    armenia.querySelector(".corazon").animate(

        [

            {transform:"scale(1)"},

            {transform:"scale(1.18)"},

            {transform:"scale(1)"}

        ],

        {

            duration:1500

        }

    );

    paipa.querySelector(".corazon").animate(

        [

            {transform:"scale(1)"},

            {transform:"scale(1.18)"},

            {transform:"scale(1)"}

        ],

        {

            duration:1500

        }

    );

},2200);
