// ===== LIGHTBOX (GALERÍA) =====
const imagenes = document.querySelectorAll(".galeria img");
const lightbox = document.getElementById("lightbox");
const imgGrande = document.getElementById("imagen-grande");
const cerrar = document.getElementById("cerrar");

imagenes.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        imgGrande.src = img.src;
    });
});

cerrar.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// ===== ANIMACIÓN AL HACER SCROLL =====
const elementos = document.querySelectorAll("section");

const mostrarScroll = () => {
    const trigger = window.innerHeight * 0.8;

    elementos.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add("visible");
        }
    });
};

// Agregar clase inicial
elementos.forEach(el => el.classList.add("oculto"));

window.addEventListener("scroll", mostrarScroll);

// ===== VALIDACIÓN FORMULARIO =====
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    const nombre = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const mensaje = form.querySelector("textarea").value;

    if (nombre === "" || email === "" || mensaje === "") {
        e.preventDefault();
        alert("Por favor completa todos los campos");
    } else {
        alert("Mensaje enviado correctamente ✅");
    }
});
