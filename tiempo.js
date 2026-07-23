const frase = document.getElementById("frase");
const boton = document.getElementById("continuar");

const frases = [

    "Detendría el tiempo cuando nos cagamos de risa.",

    "Porque en esos segundos todo parece estar como antes.",

    "Detendría el tiempo cuando me abrazas.",

    "Porque ahí siento que no necesito nada más en TODO EL MUNDO.",

    "Detendría el tiempo cuando me miras...",

    "Porque en tus ojos encontré un lugar donde siempre quiero estar.",

    "Pero el tiempo nunca se detiene...",

    "Así que solo me queda seguir creando recuerdos contigo. 🤍"

];

let indice = -1;
let escribiendo = false;

function escribir(texto){

    escribiendo = true;

    frase.textContent = "";

    let i = 0;

    const intervalo = setInterval(()=>{

        frase.style.animation = "none";

void frase.offsetWidth;

frase.style.animation = "cambiarFrase .5s ease";

        frase.textContent += texto.charAt(i);

        i++;

        if(i >= texto.length){

            clearInterval(intervalo);

            escribiendo = false;

        }

    },40);

}

document.addEventListener("click",(e)=>{

    if(e.target === boton) return;

    if(escribiendo) return;

    indice++;

    if(indice < frases.length){

        escribir(frases[indice]);

    }

    if(indice === frases.length-1){

    setTimeout(()=>{

        boton.classList.remove("oculto");
        boton.classList.add("mostrar");

    },2000);

}

});

boton.addEventListener("click",()=>{

    // De momento no hace nada.
    // Aquí luego pondremos el siguiente capítulo.

    alert("Mañana continuaremos esta historia... 🤍");

});

const particles = document.getElementById("particles");

for(let i=0;i<120;i++){

    const estrella=document.createElement("div");

    estrella.className="estrella";

    estrella.style.left=Math.random()*100+"%";
    estrella.style.top=Math.random()*100+"%";

    estrella.style.animationDelay=Math.random()*3+"s";

    particles.appendChild(estrella);

}