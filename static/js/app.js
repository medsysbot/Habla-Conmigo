document.addEventListener('DOMContentLoaded', () => {
  fetch('/data/frases_basicas.json')
    .then(res => res.json())
    .then(frases => {
      const zona = document.getElementById('zona-pictogramas');
      frases.forEach(f => {
        const btn = document.createElement('button');
        btn.textContent = f.texto;
        btn.onclick = () => hablar(f.texto);
        zona.appendChild(btn);
      });
    });
});

function hablar(texto) {
  const msg = new SpeechSynthesisUtterance(texto);
  msg.lang = 'es-ES';
  window.speechSynthesis.speak(msg);
}
