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