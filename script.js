// =========================
// INTRODUCCIÓN
// =========================


const titulo = "Hola, mi princesita 🤍";


const texto = 
"Antes de empezar, esta página no busca convencerte de nada. Solo quiero recordarte amor mío, todo lo que somos, hemos sido, y todo lo que tú, yo y Arcángel podemos llegar a ser.";



function escribir(id, mensaje, velocidad){

    const elemento = document.getElementById(id);

    elemento.innerHTML="";

    let i=0;


    const intervalo=setInterval(()=>{

        elemento.innerHTML += mensaje.charAt(i);

        i++;


        if(i>=mensaje.length){

            clearInterval(intervalo);

        }

    },velocidad);

}



escribir("titulo",titulo,80);



setTimeout(()=>{

    escribir("texto",texto,25);

},2000);



// =========================
// ESTRELLAS
// =========================


for(let i=0;i<120;i++){

    const estrella=document.createElement("div");

    estrella.classList.add("star");


    estrella.style.left=Math.random()*100+"%";

    estrella.style.top=Math.random()*100+"%";

    estrella.style.animationDelay=Math.random()*3+"s";


    document
    .getElementById("particles")
    .appendChild(estrella);

}



// =========================
// ELEMENTOS
// =========================


const boton=document.getElementById("boton");

const card=document.querySelector(".card");

const historia=document.querySelector(".historia");

const timeline=document.querySelector(".timeline");

const volver=document.querySelector(".volver");

const contadorSeccion=document.getElementById("contadorSeccion");

const nuncaDije=document.querySelector(".nuncaDije");




// =========================
// HISTORIA
// =========================


const historiaTexto = `Yo pienso mucho en aquel día en el que empezamos a hablar y me cuesta creer todo lo que hemos vivido desde entonces, sabiendo cómo soy.

Hemos tenido momentos muy felices, otros muy difíciles, y también errores de los dos.

Esta página no existe para borrar lo malo.

Existe porque todo lo lindo que hemos construido merece ser recordado 🤍`;



boton.addEventListener("click",()=>{


    card.classList.add("fadeOut");


    setTimeout(()=>{


        card.classList.add("oculto");

        historia.classList.remove("oculto");

        historia.classList.add("fadeIn");


        escribir(
            "historiaTexto",
            historiaTexto,
            25
        );


    },700);


});



// =========================
// PASAR A TIMELINE
// =========================


document
.getElementById("continuar")
.addEventListener("click",()=>{


    historia.classList.add("fadeOut");


    setTimeout(()=>{


        historia.classList.add("oculto");


        timeline.classList.remove("oculto");

        timeline.classList.add("fadeIn");


        mostrarTimeline();


    },700);


});
// =========================
// RECUERDOS
// =========================


const recuerdos = [

{
fecha:"23 de diciembre 10:52 pm de 2025",
titulo:"Todo comenzó aquí 🤍",
texto:"Ese día probablemente ninguno de los dos imaginaba todo lo que iba a pasar después, solo un mensaje nos abrió tanto en esta vida.",
imagen:"img/recuerdo1.jpeg"
},

{
fecha:"28 de enero 10:28 pm de 2026",
titulo:"Nuestra primera vez juntos",
texto:"Ese día dejó de ser una pantalla y por fin pude conocer al amor de mi vida.",
imagen:"img/recuerdo2.jpeg"
},

{
fecha:"2 de febrero de 2026",
titulo:"El comienzo de nuestra historia ❤️",
texto:"Fue el día en que te pedí que fuéramos novios, una decisión de la cual nunca me voy a arrepentir.",
imagen:"img/recuerdo3.jpeg"
},

{
fecha:"7 de febrero de 2026",
titulo:"NUESTRO PRIMER SKINCARE",
texto:"Nunca había hecho algo así con nadie más. Fue un momento demasiado especial contigo.",
imagen:"img/recuerdo4.jpeg"
},

{
fecha:"8 de febrero de 2026",
titulo:"Cuando fuimos al Parque del Café",
texto:"La primera semana de novios y ya estábamos viviendo aventuras juntos. La pasamos increíble.",
imagen:"img/recuerdo5.jpeg"
},

{
fecha:"10 de febrero de 2026",
titulo:"Cuando pintamos al gato y la hada",
texto:"Me encanta porque contigo hago cosas que probablemente nunca haría solo. Pintar contigo fue increíble.",
imagen:"img/recuerdo7.jpeg"
},

{
fecha:"11 de febrero de 2026",
titulo:"Fotos y videitos en el portal",
texto:"Según yo, el primer prime de la relación. Éramos demasiado felices.",
imagen:"img/recuerdo8.jpeg"
},

{
fecha:"13 de febrero de 2026",
titulo:"La primera vez con tu grupo",
texto:"La primera vez saliendo con las personas más cercanas a ti. Nos veíamos demasiado felices.",
imagen:"img/recuerdo9.jpeg"
},

{
fecha:"14 de febrero de 2026",
titulo:"TEODORO 🤍",
texto:"Aunque ya no está con nosotros, recuerdo la ilusión que teníamos de tener un hamster juntos.",
imagen:"img/recuerdo10.jpeg"
},

{
fecha:"18 de febrero de 2026",
titulo:"Primera vez puebliando",
texto:"Aunque no fue perfecto, igual fue un momento que recuerdo mucho contigo.",
imagen:"img/recuerdo11.jpeg"
},

{
fecha:"24 de febrero de 2026",
titulo:"El amor de mi vida y mi moto",
texto:"Eres la única persona a la que le he prestado y enseñado algo tan importante para mí.",
imagen:"img/recuerdo12.jpeg"
},

{
fecha:"4 de marzo de 2026",
titulo:"MI PELIRIZADA HERMOSHA",
texto:"Creo que nunca habías visto esta foto jajaja.",
imagen:"img/recuerdo13.jpeg"
},

{
fecha:"7 de marzo de 2026",
titulo:"Animal House",
texto:"Aunque tuvimos momentos difíciles antes de ir, disfruté muchísimo ese día contigo.",
imagen:"img/recuerdo14.jpeg"
},

{
fecha:"9 de marzo de 2026",
titulo:"QUE LINDOSSS",
texto:"Me encanta esta foto porque nos vemos muy felices.",
imagen:"img/recuerdo15.jpeg"
},

{
fecha:"14 de marzo de 2026",
titulo:"PEREIRA ❤️",
texto:"Nuestro primer viaje a otra ciudad juntos.",
imagen:"img/recuerdo17.jpeg"
}

];



// =========================
// CREAR TIMELINE
// =========================


function mostrarTimeline(){


const contenedor=document.getElementById("timelineContainer");


contenedor.innerHTML="";



recuerdos.forEach((recuerdo,index)=>{


const tarjeta=document.createElement("div");


tarjeta.className="recuerdo";


tarjeta.style.animationDelay=
`${index*0.25}s`;



tarjeta.innerHTML=`

<img 
src="${recuerdo.imagen}" 
class="fotoRecuerdo"
data-titulo="${recuerdo.titulo}"
data-texto="${recuerdo.texto}"
>


<h3>${recuerdo.fecha}</h3>


<h4>${recuerdo.titulo}</h4>


<p>${recuerdo.texto}</p>


`;



contenedor.appendChild(tarjeta);



});


}



// =========================
// VISOR DE FOTOS
// =========================


const visor=document.getElementById("visor");

const imagenGrande=document.getElementById("imagenGrande");

const videoGrande=document.getElementById("videoGrande");

const visorTitulo=document.getElementById("visorTitulo");

const visorTexto=document.getElementById("visorTexto");



document.addEventListener("click",(e)=>{


if(e.target.classList.contains("fotoRecuerdo")){


imagenGrande.src=e.target.src;


visorTitulo.textContent=
e.target.dataset.titulo;


visorTexto.textContent=
e.target.dataset.texto;



visor.classList.remove("oculto");


}


});



document
.getElementById("cerrarVisor")
.onclick=()=>{


visor.classList.add("oculto");


};



visor.onclick=(e)=>{


if(e.target===visor){

visor.classList.add("oculto");

}


};



// =========================
// CONTINUAR A "SI PUDIERA VOLVER"
// =========================


document
.getElementById("continuarHistoria")
.addEventListener("click",()=>{


timeline.classList.add("fadeOut");



setTimeout(()=>{


timeline.classList.add("oculto");


volver.classList.remove("oculto");


volver.classList.add("fadeIn");



mostrarFrases();


},700);



});




// =========================
// FRASES
// =========================


const frasesVolver=[


"Si pudiera volver...",


"Al 23 de diciembre de 2025...",


"Volvería a escribirte.",


"Porque sin saberlo, ese día cambió mi vida.",


"Al 28 de enero de 2026...",


"Volvería a abrazarte exactamente igual.",


"Porque ese abrazo sigue siendo uno de mis lugares favoritos.",


"Al 2 de febrero de 2026...",


"Volvería a elegirte.",


"Una y mil veces más 🤍",


"Porque nunca me he arrepentido de que nuestras vidas se hayan cruzado."

];



function mostrarFrases(){


const texto=document.getElementById("volverTexto");

const boton=document.getElementById("seguirHistoria");


let i=0;



function siguiente(){


if(i>=frasesVolver.length){


boton.classList.remove("oculto");

boton.classList.add("mostrar");


return;


}



texto.style.opacity=0;



setTimeout(()=>{


texto.textContent=frasesVolver[i];


texto.style.opacity=1;


i++;


setTimeout(siguiente,2200);



},500);



}



siguiente();



}
// =========================
// PASAR A CONTADOR
// =========================


document
.getElementById("seguirHistoria")
.addEventListener("click",()=>{


    volver.classList.add("fadeOut");


    setTimeout(()=>{


        volver.classList.add("oculto");


        contadorSeccion.classList.remove("oculto");

        contadorSeccion.classList.add("fadeIn");


        actualizarContador();


    },700);


});




// =========================
// CONTADOR DE TIEMPO
// =========================


function actualizarContador(){


    const inicio = new Date(
        "2026-02-02T22:11:00"
    ).getTime();



    const ahora = new Date().getTime();



    const diferencia = ahora - inicio;



    if(diferencia < 0) return;



    const dias = Math.floor(
        diferencia /
        (1000*60*60*24)
    );



    const horas = Math.floor(
        (diferencia %
        (1000*60*60*24))
        /
        (1000*60*60)
    );



    const minutos = Math.floor(
        (diferencia %
        (1000*60*60))
        /
        (1000*60)
    );



    const segundos = Math.floor(
        (diferencia %
        (1000*60))
        /
        1000
    );



    document.getElementById("dias")
    .textContent=dias;


    document.getElementById("horas")
    .textContent=horas;


    document.getElementById("minutos")
    .textContent=minutos;


    document.getElementById("segundos")
    .textContent=segundos;



}



setInterval(
    actualizarContador,
    1000
);




// =========================
// CONTINUAR DESDE CONTADOR
// =========================


document
.getElementById("continuarNuncaDije")
.addEventListener("click",()=>{


    contadorSeccion.classList.add("fadeOut");



    setTimeout(()=>{


        contadorSeccion.classList.add("oculto");


        nuncaDije.classList.remove("oculto");


        nuncaDije.classList.add("fadeIn");



        iniciarNuncaDije();



    },700);



});


// =========================
// LO QUE NUNCA TE DIJE
// =========================


const mensajesNuncaDije=[


{

titulo:"Gracias",

texto:
"Gracias por aparecer cuando menos imaginaba que alguien podía cambiar tanto mi vida."

},


{

titulo:"Perdóname",

texto:
"Perdón por las veces en las que mis errores fueron mas grandes que todo el amor que sentía por ti."

},


{

titulo:"Admiración",

texto:
"Siempre he admirado tu forma de seguir adelante incluso cuando las cagadas eran gigantes."

},


{

titulo:"Mi elección",

texto:
"Si pudiera volver al pasado, volvería a elegir escribirte aquel primer mensaje mil y un veces."

},


{

titulo:"Lo único que deseo",

texto:
"Seguir construyendo recuerdos contigo durante muchísimo tiempo más."

},


{

titulo:"sigamos construyendo",

texto:
"Sigamos formando bien esta relacion, No quiero que tenga fin nunca."

}

];


function iniciarNuncaDije(){


const contenedor =
document.getElementById(
"polaroidContainer"
);



const boton =
document.getElementById(
"continuarCarta"
);



contenedor.innerHTML="";


let indice=0;



function mostrar(){



if(indice >= mensajesNuncaDije.length){


boton.classList.remove("oculto");


boton.classList.add("mostrar");


return;


}




const mensaje =
mensajesNuncaDije[indice];




contenedor.innerHTML=`

<div class="polaroid">

<h3>${mensaje.titulo}</h3>

<p>${mensaje.texto}</p>

</div>

`;



indice++;



setTimeout(
mostrar,
4500
);



}



mostrar();



}




// =========================
// FINAL DE LA PÁGINA
// =========================


document
.getElementById("continuarCarta")
.addEventListener("click",()=>{


alert(
"Gracias por leer todo esto 🤍"
);


});
