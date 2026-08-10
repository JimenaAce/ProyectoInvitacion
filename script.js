// Abrir invitación y reproducir música
function openInvitation() {
    const opening = id('opening');
    const music = id('bg-music');
    const musicBtn = id('music-control');

    // Ocultar la pantalla de apertura
    if (opening) {
        opening.classList.add('hide');
    }

    // Configurar y reproducir música de fondo
    if (music) {
        music.volume = 0.3; // Volumen al 30% (moderado/bajo, ajusta de 0.0 a 1.0)
        music.play().then(() => {
            if (musicBtn) musicBtn.style.display = 'flex'; // Mostrar botón de control
        }).catch((error) => {
            console.log("Autoplay bloqueado por el navegador:", error);
            if (musicBtn) musicBtn.style.display = 'flex';
        });
    }
}

// Función para pausar o reanudar la música manualmente
function toggleMusic() {
    const music = id('bg-music');
    const musicBtn = id('music-control');

    if (music.paused) {
        music.play();
        musicBtn.innerHTML = '🔊';
        musicBtn.classList.remove('muted');
    } else {
        music.pause();
        musicBtn.innerHTML = '🔇';
        musicBtn.classList.add('muted');
    }
}

// Función auxiliar rápida
function id(elementId) {
    return document.getElementById(elementId);
}