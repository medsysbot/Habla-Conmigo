const pictogramas = [
  {
    nombre: "Baño",
    imagen: "/static/pictogramas/bano.svg"
  }
  // podés sumar más pictogramas acá
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
      const frase = pictograma.nombre;
      const utter = new window.SpeechSynthesisUtterance(frase);
      utter.lang = "es-ES";
      utter.rate = 0.85;
      window.speechSynthesis.speak(utter);
    };
    zona.appendChild(btn);
  });
}

window.onload = mostrarPictogramas;
