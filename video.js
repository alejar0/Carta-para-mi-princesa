const video = document.getElementById("video");
const finalVideo = document.getElementById("finalVideo");
const boton = document.getElementById("continuar");
const pantallaFinal = document.getElementById("pantallaFinal");

video.addEventListener("ended",()=>{

    finalVideo.classList.add("visible");

});

boton.addEventListener("click",()=>{

    document.getElementById("contenedorVideo").style.opacity="0";
    finalVideo.style.opacity="0";

    setTimeout(()=>{

        document.getElementById("contenedorVideo").style.display="none";
        finalVideo.style.display="none";

        pantallaFinal.classList.add("visible");

    },800);

});