/* =========================
   APERTURA DE INVITACIÓN
========================= */
function openInvitation() {
    const opening = document.getElementById("opening");
    if (!opening) return;

    opening.classList.add("hide");

    setTimeout(() => {
        opening.style.display = "none";
    }, 1000);
}

/* =========================
   PÉTALOS
========================= */
function createPetal() {
    // No crear pétalos si la página no está visible para optimizar rendimiento
    if (document.hidden) return;

    const petal = document.createElement("div");
    petal.classList.add("petal");

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (5 + Math.random() * 5) + "s";
    petal.style.opacity = Math.random();

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);
}

setInterval(createPetal, 800);

/* =========================
   APARICIÓN AL HACER SCROLL
========================= */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".message, .details, .location, .gallery, .rsvp").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

