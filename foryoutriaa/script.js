/* ==========================================
   BLOOM FOR YOU ❤️
   Script by ChatGPT & Maulana
========================================== */

AOS.init({
    duration: 1000,
    once: true
});

/* ==========================================
        EDIT BAGIAN INI SAJA
========================================== */

const GIRL_NAME = "Tria";
const YOUR_NAME = "Maulana";

/* =====================================================
   TULIS PESAN KAMU NANTI DI SINI
===================================================== */

const LOVE_LETTER = `































































































`;



/* ==========================================
        LOADING
========================================== */

window.addEventListener("load", () => {

    const loading = document.getElementById("loading-screen");

    setTimeout(() => {

        loading.style.opacity = "0";

        loading.style.transition = "1s";

        setTimeout(() => {

            loading.style.display = "none";

        },1000);

    },2500);

});


/* ==========================================
        TYPEWRITER
========================================== */

const text = LOVE_LETTER;

let index = 0;

function typeWriter(){

    const target = document.getElementById("typewriter");

    if(index < text.length){

        target.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,30);

    }

}


/* ==========================================
        START LETTER
========================================== */

function startLetter(){

    typeWriter();

}


/* ==========================================
        MUSIC
========================================== */

const music = document.getElementById("bgMusic");

function playMusic(){

    music.play();

}


/* ==========================================
        CONFETTI
========================================== */

function party(){

    confetti({

        particleCount:200,

        spread:120,

        origin:{y:0.6}

    });

}


/* ==========================================
        FIREWORK
========================================== */

function firework(){

    setInterval(()=>{

        confetti({

            particleCount:6,

            angle:60,

            spread:70,

            origin:{x:0}

        });

        confetti({

            particleCount:6,

            angle:120,

            spread:70,

            origin:{x:1}

        });

    },1500);

}


/* ==========================================
        FLOWER
========================================== */

window.onload = ()=>{

    const flower = document.getElementById("flower");

    flower.animate(

        [

            {

                transform:"scale(0)"

            },

            {

                transform:"scale(1.2)"

            },

            {

                transform:"scale(1)"

            }

        ],

        {

            duration:2500,

            fill:"forwards"

        }
     

    );

};
/* ======================================
        STARS
====================================== */

const stars = document.getElementById("stars");

for(let i=0;i<180;i++){

    const star=document.createElement("span");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*5+"s";

    stars.appendChild(star);

}
