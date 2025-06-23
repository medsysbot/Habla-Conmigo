// static/js/app.js

// Lista de pictogramas reales en tu proyecto
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
      <span>${pictograma.nombre}</span>
    `;
    btn.onclick = () => alert(`Elegiste: ${pictograma.nombre}`);
    zona.appendChild(btn);
  });
}

// Ejecutar al cargar la página
window.onload = mostrarPictogramas;
