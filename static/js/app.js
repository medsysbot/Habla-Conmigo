document.addEventListener('DOMContentLoaded', () => {
  fetch('/data/frases_basicas.json')
    .then(res => res.json())
    .then(frases => mostrarPictogramas(frases))
    .catch(err => console.error('Error al cargar las frases', err));
});

function mostrarPictogramas(frases) {
  const zona = document.getElementById('zona-pictogramas');
  frases.forEach(f => {
    const btn = document.createElement('button');
    btn.className = 'pictograma-btn';

    if (f.imagen) {
      const img = document.createElement('img');
      img.src = f.imagen;
      img.alt = f.texto;
      btn.appendChild(img);
    }

    const texto = document.createElement('span');
    texto.textContent = f.texto;
    btn.appendChild(texto);

    btn.addEventListener('click', () => hablar(f.texto));
    zona.appendChild(btn);
  });
}

function hablar(texto) {
  const msg = new SpeechSynthesisUtterance(texto);
  msg.lang = 'es-ES';
  window.speechSynthesis.speak(msg);
}
