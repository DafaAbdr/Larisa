let currentClicks = 0;
const totalClicks = 23;
const balloonText = document.getElementById("balloon-text");

const beepSound = document.getElementById("beep-sound");
const fireworksSound = document.getElementById("fireworks-sound");

document.getElementById("balloon").addEventListener("click", function() {
    if (currentClicks < totalClicks) {
        currentClicks++;
        balloonText.textContent = currentClicks;
        beepSound.play();
        
        // Tambahkan efek pecah pada balon
        this.classList.add("pop");

        // Setelah beberapa detik, kembalikan balon agar tidak hilang terus
        setTimeout(() => {
            this.classList.remove("pop");
        }, 500);

        if (currentClicks === totalClicks) {
            document.getElementById("done-message").style.display = "block";
            document.getElementById("balloon").style.pointerEvents = "none";
            
            showFireworks();
            fireworksSound.play();

            setTimeout(() => {
                window.location.href = "index.html";
            }, 5000);
        }
    }
});


function showFireworks() {
    const container = document.getElementById("fireworks-container");
    container.style.display = "block";

    for (let i = 0; i < 30; i++) {
        const firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = Math.random() * 100 + "vw";
        firework.style.top = Math.random() * 100 + "vh";
        firework.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        container.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 5000);
    }
}

