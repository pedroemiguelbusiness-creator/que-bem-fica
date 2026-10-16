// Que Bem Fica - comportamento do site (JavaScript puro)

// Menu móvel: abre e fecha, e atualiza o estado para leitores de ecrã
const botao = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
if (botao && menu) {
  botao.addEventListener('click', () => {
    const aberto = menu.classList.toggle('aberto');
    botao.setAttribute('aria-expanded', aberto);
  });
  menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      menu.classList.remove('aberto');
      botao.setAttribute('aria-expanded', 'false');
    }
  });
}

// Entrada suave dos blocos ao fazer scroll (só fade, sem exageros)
const alvos = document.querySelectorAll('.revelar');
if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add('visivel');
        obs.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  alvos.forEach((el) => obs.observe(el));
} else {
  alvos.forEach((el) => el.classList.add('visivel'));
}

// Ano atual no rodapé
const ano = document.getElementById('ano');
if (ano) ano.textContent = new Date().getFullYear();
