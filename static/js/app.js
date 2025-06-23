const pictogramas = [
  { nombre: "Baño", imagen: "/static/pictogramas/bano.svg" },
  { nombre: "Hola", imagen: "/static/pictogramas/hola.svg" },
  { nombre: "Tengo hambre", imagen: "/static/pictogramas/hambre.svg" },
  { nombre: "Tengo sed", imagen: "/static/pictogramas/sed.svg" },
  { nombre: "Dormir", imagen: "/static/pictogramas/dormir.svg" },
  { nombre: "Jugar", imagen: "/static/pictogramas/jugar.svg" },
  { nombre: "Me duele", imagen: "/static/pictogramas/dolor.svg" },
  { nombre: "Triste", imagen: "/static/pictogramas/triste.svg" },
  { nombre: "Contento", imagen: "/static/pictogramas/contento.svg" }
];

// ... (el resto de tu código JS queda igual)

let fraseActual = [];

function mostrarPictogramas() {
  const zona = document.getElementById("zona-pictogramas");
  zona.innerHTML = "";
  pictogramas.forEach((pictograma, idx) => {
    const btn = document.createElement("button");
    btn.className = "pictograma-btn";
    btn.innerHTML = `
      <img src="${pictograma.imagen}" alt="${pictograma.nombre}" />
      <span class="pictograma-texto">${pictograma.nombre}</span>
    `;
    btn.onclick = () => agregarAlVisor(idx);
    zona.appendChild(btn);
  });
}

function agregarAlVisor(idx) {
  fraseActual.push(pictogramas[idx]);
  actualizarVisor();
}

function actualizarVisor() {
  const visorPictos = document.getElementById("visor-pictogramas");
  visorPictos.innerHTML = "";
  fraseActual.forEach(pictograma => {
    const img = document.createElement("img");
    img.src = pictograma.imagen;
    img.alt = pictograma.nombre;
    img.className = "visor-picto";
    visorPictos.appendChild(img);
  });
  const visorTexto = document.getElementById("visor-texto");
  visorTexto.innerText = fraseActual.map(p => p.nombre).join(" ");
}

function decirFrase() {
  const frase = fraseActual.map(p => p.nombre).join(" ");
  if (frase) {
    const utter = new window.SpeechSynthesisUtterance(frase);
    utter.lang = "es-ES";
    utter.rate = 0.85;
    window.speechSynthesis.speak(utter);
  }
}

function borrarFrase() {
  fraseActual = [];
  actualizarVisor();
}

window.onload = function() {
  mostrarPictogramas();
  actualizarVisor();
  document.getElementById("btn-decir").onclick = decirFrase;
  document.getElementById("btn-borrar").onclick = borrarFrase;
};
