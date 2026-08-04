/* =========================
   APERTURA DE INVITACIÓN
========================= */


function openInvitation(){

    const opening = document.getElementById("opening");

    opening.classList.add("hide");


    setTimeout(()=>{

        opening.style.display="none";

    },1000);


}



/* =========================
   CONTADOR
========================= */


const eventDate = new Date(
    "September 25, 2026 19:00:00"
).getTime();



function updateCountdown(){


    const now = new Date().getTime();


    const distance = eventDate - now;



    if(distance <= 0){

        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        document.getElementById("seconds").innerHTML="00";

        return;

    }



    const days = Math.floor(
        distance /
        (1000*60*60*24)
    );


    const hours = Math.floor(
        (distance %
        (1000*60*60*24))
        /
        (1000*60*60)
    );


    const minutes = Math.floor(
        (distance %
        (1000*60*60))
        /
        (1000*60)
    );


    const seconds = Math.floor(
        (distance %
        (1000*60))
        /
        1000
    );



    document.getElementById("days")
    .innerHTML =
    String(days).padStart(2,"0");


    document.getElementById("hours")
    .innerHTML =
    String(hours).padStart(2,"0");


    document.getElementById("minutes")
    .innerHTML =
    String(minutes).padStart(2,"0");


    document.getElementById("seconds")
    .innerHTML =
    String(seconds).padStart(2,"0");


}



setInterval(
    updateCountdown,
    1000
);


updateCountdown();





/* =========================
   PETALOS
========================= */


function createPetal(){


    const petal =
    document.createElement("div");


    petal.classList.add("petal");



    petal.style.left =
    Math.random()*100+"vw";



    petal.style.animationDuration =
    (5+Math.random()*5)+"s";



    petal.style.opacity =
    Math.random();



    document.body.appendChild(petal);



    setTimeout(()=>{


        petal.remove();


    },10000);



}



setInterval(
    createPetal,
    800
);





/* =========================
   APARICIÓN AL HACER SCROLL
========================= */


const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add(
            "show"
        );


    }


});


},

{

threshold:.2

}

);



document
.querySelectorAll(
".message, .details, .gallery, .rsvp"
)
.forEach(section=>{


    section.classList.add(
        "hidden"
    );


    observer.observe(section);


});