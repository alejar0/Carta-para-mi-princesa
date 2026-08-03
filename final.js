
const texto=document.getElementById("texto");
const cursor=document.getElementById("cursor");
const final=document.getElementById("pantallaFinal");
const audio=document.getElementById("musica");
const stars=document.getElementById("stars");
for(let i=0;i<180;i++){let s=document.createElement("div");s.className="star";s.style.left=Math.random()*100+"%";s.style.top=Math.random()*100+"%";stars.appendChild(s);}
const escenas=[
"Para Alexandra.",
"Si estás leyendo esto...\nes porque decidiste llegar hasta el final.",
`Si te amo, COMO NO IMAGINAS

No puedo recordar exactamente la primera vez que empezamos a hablar, pero desde ese momento mi vida dio un cambio como no imaginas, nunca habia dado cartas, regalos, florecitas, jajaja, yo era un gangster completo, y no quiero volver a ser ese, quiero ser tu niño que te haga muy felizy poder redimir todo lo malo.`,
"Hay recuerdos que nunca desaparecerán.",
`Te extraño mucho

Extraño todos los momentos lindos que pasamos, espero podamos construir muchisimos mas, asi tu ya no tengas planes conmigo yo si los tengo, porque yo nunca deje de visualizar un futuro contigo, sigo sin imaginar un futuro en el que ya no estes conmigo.`,
"Hay algo que también necesito decirte.",
`Espero que nunca pienses que no me importas, y tampoco espero que llegues a pensar alguna vez que yo he visto con otros ojos a alguien mas que no seas tu, yo te espere estos 2 meses, me hiciste muchisima falta asi no creas que es asi :c

Tu eres la pieza mas importante de mi vida, y de verda te quiero pedir perdon por el mal rato que te hice pasar, de verdad que yo me arrepiento mucho de haber basado mis sentimientos en la rabia de el problema que tuvimos antes, me senti muy presionado y no supe pedirte las cosas que necesitaba, no mereces eso, pero se que puedo mejorar para hacerte sentir mucho mejor y que vuelvas a amarme, no como antes si no quieres, pero que sigamos siendo tu y yo, ALE Y ALE.`,
"Y aun así...",
`Aqui hay mucho mas

Tu y yo tenemos muchisimas mas cosas por hacer, te amo demasiado y no quiero perderte nunca espero puedas perdonarme, de verdad me arrepiento por todo, te amo mucho mi princesita, TE AAAAAAAAAAAMOOOOOOOOOOOOOOOOOOO.`
];
const wait=ms=>new Promise(r=>setTimeout(r,ms));
async function escribir(t){
 texto.textContent="";
 for(const ch of t){
   texto.textContent+=ch;
   await wait(ch=="\n"?120:35);
 }
}
async function iniciar(){
 document.removeEventListener("click",iniciar);
 audio.play().catch(()=>{});
 for(const e of escenas){
   await escribir(e);
   await wait(e.includes("MENSAJE")?10000:2500);
   texto.textContent="";
   await wait(600);
 }
 document.getElementById("escena").style.display="none";
 final.style.display="flex";
}
document.addEventListener("click",iniciar,{once:true});
texto.textContent="Haz clic para comenzar…";
