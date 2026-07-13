const titulo="Hola, mi princesita 🤍";

const texto='Antes de empezar, Esta página no busca convencerte de nada. Solo quiero recordarte amor mio, todo lo que somos, hemos sido, y hacerte imaginar todo lo que tu, yo y arcangel VAMOS A LLEGAR A SER';

function escribir(id,mensaje,velocidad){

let i=0;

const elemento=document.getElementById(id);

elemento.innerHTML="";

const intervalo=setInterval(()=>{

elemento.innerHTML+=mensaje.charAt(i);

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

for(let i=0;i<120;i++){

const estrella=document.createElement("div");

estrella.classList.add("star");

estrella.style.left=Math.random()*100+"%";

estrella.style.top=Math.random()*100+"%";

estrella.style.animationDelay=Math.random()*3+"s";

document.getElementById("particles").appendChild(estrella);

}
const boton=document.getElementById("boton");

const card=document.querySelector(".card");

const historia=document.querySelector(".historia");

const historiaTexto=`Yo pienso mucho en aquel día en el que empezamos a hablar y me cuesta creer todo lo que hemos vivido desde entonces, sabiendo como soy.

Hemos tenido momentos muy felices, otros muy MUY difíciles, y también errores de los dos.

Esta página no existe para borrar lo malo.

Existe porque todo lo lindo que hemos construido merece ser recordado...`;

boton.addEventListener("click",()=>{

    card.classList.add("fadeOut");

    setTimeout(()=>{

        card.style.display="none";

        historia.classList.remove("oculto");

        historia.classList.add("fadeIn");

        escribirHistoria();

    },700);

});

function escribirHistoria(){

    let i=0;

    const elemento=document.getElementById("historiaTexto");

    elemento.innerHTML="";

    const intervalo=setInterval(()=>{

        elemento.innerHTML+=historiaTexto.charAt(i);

        i++;

        if(i>=historiaTexto.length){

            clearInterval(intervalo);

        }

    },25);

}

const botonContinuar = document.getElementById("continuar");

botonContinuar.addEventListener("click", () => {

    const historia = document.querySelector(".historia");
    const timeline = document.querySelector(".timeline");

    historia.classList.remove("fadeIn");
    historia.classList.add("fadeOut");

    setTimeout(() => {

        historia.style.display = "none";

        timeline.classList.remove("oculto");
        timeline.classList.add("fadeIn");

        mostrarTimeline();

    }, 700);

});
const recuerdos = [

{
    fecha:"23 de diciembre 10:52 pm de 2025",
    titulo:"Todo comenzó aquí 🤍",
    texto:"Ese día probablemente ninguno de los dos imaginaba todo lo que iba a pasar después, solo un mensaje nos abrio tanto en esta vida",
    imagen: "img/recuerdo1.jpeg"
},

{
    fecha:"28 de enero 10:28 pm de 2026",
    titulo:"Nuestra primera vez juntos",
    texto:"Ese día dejó de ser una pantalla y porfin pude conocer al amor de mi vida, por mas que no se dejaba ver porque mi espalda estaba muy linda al parecer.",
    imagen: "img/recuerdo2.jpeg"
},

{
    fecha:"2 de febrero de 2026",
    titulo:"El comienzo de nuestra historia ❤️",
    texto:"Fue el día en que te pedi que fueramos novios, una decicion de la cual nunca me voy a arrepentir",
    imagen: "img/recuerdo3.jpeg"
},

{
    fecha:"7 de febrero de 2026",
    titulo:"NUESTRO PRIMER SKINCAREE",
    texto:"no voy a olvidar nunca esto porque ni antes ni despues de ese dia (hay que volver a hacerlo jssjjs) nunca he hecho eso CON NADIE MAS ",
    imagen: "img/recuerdo4.jpeg"
},

{
    fecha:"8 de febrero de 2026",
    titulo:"Cuando fuimos al parque del cafe",
    texto:"jsadjasjd la primera semana de novios y ya andabamos por alla ajajaj hay que volver a ir mi amor LA PASAMOS INCREIBLE ",
    imagen: "img/recuerdo5.jpeg"
},

{
    fecha:"10 de febrero de 2026",
    titulo:"Cuando pintamos al gato y la hada",
    texto:"de verdad que este es de mis favoritos por el simple hecho de que tu me impulsas a mi a hacer cosas que nunca haria por mi cuenta jajaja PINTAR CONTIGO FUE TAN INCREIBLEEE",
    imagen: "img/recuerdo7.jpeg"
},

{
    fecha:"11 de febrero de 2026",
    titulo:"tomandonos fotos y videitos en el portal",
    texto:"Segun yo es el primer prime de la relacion jssjjs, ERA TODO PERFECTO Y PODIAMOS IR AL PORTAL SIN TENER PROBLEMAS Y A TOMARNOS FOTITOS SUPER FELICEEES",
    imagen: "img/recuerdo8.jpeg"
},

{
    fecha:"13 de febrero de 2026",
    titulo:"la primera vez que salimos con tu grupo",
    texto:"jasdjsa la primera vez que salimos con tu grupo mas cercano, NOS VEIAMOS TAN FELICESSS",
    imagen: "img/recuerdo9.jpeg"
},

{
    fecha:"14 de febrero de 2026",
    titulo:"TEODORO",
    texto:"Aunque ya no esta con nosotros, recuerdo mucho la ilusion que teniamos de tener un hamster juntitos, QPD",
    imagen: "img/recuerdo10.jpeg"
},

{
    fecha:"18 de febrero de 2026",
    titulo:"Primera vez puebliando",
    texto:"Pues no fue maravillosa porque nos tomaron fotos a escondidas y era de noche, disfrute mucho porfin puebliar con alguien, pero ame que ese alguien fueras tu 🤍",
    imagen: "img/recuerdo11.jpeg"
},

{
    fecha:"24 de febrero de 2026",
    titulo:"El amor de mi vida y mi moto",
    texto:"Eres la unica persona a la cual le he prestado y le he enseñado a manejar usando el objeto fisico que mas valor tiene para mi, ver a mi princesa encima de mi moto era como ver uno de mis objetivos en la vida cumplidos",
    imagen: "img/recuerdo12.jpeg"
},

{
    fecha:"4 de marzo de 2026",
    titulo:"MI PELIRIZADA HERMOSHA",
    texto:"JDSAJDSA creo que nunca habias visto esta cierto?",
    imagen: "img/recuerdo13.jpeg"
},

{
    fecha:"7 de marzo de 2026",
    titulo:"Animal house",
    texto:"Se que peleamos feo antes de ir alla, pero me da igual, pase muy bien ese dia contigo la verdad, hay que repetir la ida este semestre",
    imagen: "img/recuerdo14.jpeg"
},

{
    fecha:"9 de marzo de 2026",
    titulo:"QUE LINDOSSS",
    texto:"jdasjd me encanta la foto la verdad, nos vemos muy felices y solo habia amor ahi, espero volvamos a estar asi amor mio, creeme que este semestre sera mucho mejor",
    imagen: "img/recuerdo15.jpeg"
},

{
    fecha:"14 de marzo de 2026",
    titulo:"PEREIRA",
    texto:"JDSAJD EL PRIMER VIAJE A OTRA CIUDAD MI AMORRR jasdja este semestre que vuelvas vamos a manizales shiii?, por cierto YO AMO QUE SEAS MI COMPAÑERITA DE VIAJEEEE <333",
    imagen: "img/recuerdo17.jpeg"
},

];

function mostrarTimeline(){

    const contenedor = document.getElementById("timelineContainer");

    contenedor.innerHTML = "";

    recuerdos.forEach((recuerdo, indice)=>{

        const tarjeta = document.createElement("div");

        tarjeta.className = "recuerdo";

        tarjeta.style.animationDelay = `${indice * 0.4}s`;

        let multimedia = "";

if (recuerdo.imagen) {

    multimedia = `
        <img
            src="${recuerdo.imagen}"
            class="fotoRecuerdo"
            data-titulo="${recuerdo.titulo}"
            data-texto="${recuerdo.texto}">
    `;

} else if (recuerdo.video) {

    multimedia = `
        <video
            class="videoRecuerdo"
            data-video="${recuerdo.video}"
            data-titulo="${recuerdo.titulo}"
            data-texto="${recuerdo.texto}"
            muted>

            <source src="${recuerdo.video}" type="video/mp4">

        </video>
    `;

}

tarjeta.innerHTML = `

    ${multimedia}

    <h3>${recuerdo.fecha}</h3>

    <h4>${recuerdo.titulo}</h4>

    <p>${recuerdo.texto}</p>

`;

        contenedor.appendChild(tarjeta);

    });
    

}

const visor = document.getElementById("visor");

const imagenGrande = document.getElementById("imagenGrande");

const visorTitulo = document.getElementById("visorTitulo");

const visorTexto = document.getElementById("visorTexto");

document.addEventListener("click", (e) => {

    console.log(e.target);

    if (e.target.classList.contains("fotoRecuerdo")) {

        console.log("¡Le diste clic a una foto!");

        imagenGrande.src = e.target.src;

        visorTitulo.textContent = e.target.dataset.titulo;

        visorTexto.textContent = e.target.dataset.texto;

        visor.classList.remove("oculto");
    }

});

document.getElementById("cerrarVisor").onclick=()=>{

    visor.classList.add("oculto");

};

visor.onclick=(e)=>{

    if(e.target===visor){

        visor.classList.add("oculto");

    }

};

const botonCapituloFinal = document.getElementById("continuarHistoria");

botonCapituloFinal.addEventListener("click", () => {

    const timeline = document.querySelector(".timeline");
    const capituloFinal = document.querySelector(".capituloFinal");

    timeline.classList.remove("fadeIn");
    timeline.classList.add("fadeOut");

    setTimeout(() => {

        timeline.style.display = "none";

        capituloFinal.classList.remove("oculto");
        capituloFinal.classList.add("fadeIn");

    }, 700);

});

