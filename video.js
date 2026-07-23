const video = document.getElementById("video");
const finalVideo = document.getElementById("finalVideo");
const boton = document.getElementById("continuar");

// Cuando termina el video
video.addEventListener("ended", () => {

    finalVideo.classList.add("visible");

});

// Cuando pulsa Continuar
boton.addEventListener("click", () => {

    document.body.style.transition = "opacity .8s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "capitulo4.html";

    }, 800);

});
