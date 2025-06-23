// static/js/app.js

// Lista de pictogramas reales
const pictogramas = [
  {
    nombre: "Baño",
    imagen: "/static/pictogramas/bano.svg"
  },
  {
    nombre: "Hambre",
    imagen: "/static/pictogramas/hambre.svg"
  },
  {
    nombre: "Hola",
    imagen: "/static/pictogramas/hola.svg"
  }
];

function mostrarPictogramas() {
  const zona = document.getElementById("zona-pictogramas");
  zona.innerHTML = "";
  pictogramas.forEach(pictograma => {
    const btn = document.createElement("button");
    btn.className = "pictograma-btn";
    btn.innerHTML = `
      <img src="${pictograma.imagen}" alt="${pictograma.nombre}" />
      <span class="pictograma-texto">${pictograma.nombre}</span>
    `;
    btn.onclick = () => {
      // Voz sintética accesible
      const frase = pictograma.nombre;
      const utter = new window.SpeechSynthesisUtterance(frase);
      utter.lang = "es-ES"; // o "es-AR", "es-MX", etc.
      utter.rate = 0.85;    // Más lento para niños pequeños
      window.speechSynthesis.speak(utter);
    };
    zona.appendChild(btn);
  });
}

window.onload = mostrarPictogramas;
