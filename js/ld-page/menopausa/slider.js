document.addEventListener('DOMContentLoaded', function() {
  const benefitItems = document.querySelectorAll('.benefit-item');
  
  // Configura o Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Delay progressivo para cada item (efeito cascata)
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 150 * index); // 150ms de intervalo entre cada item
      }
    });
  }, {
    threshold: 0.1, // Dispara quando 10% do item estiver visível
    rootMargin: '0px 0px -50px 0px' // Considera o elemento visível 50px antes de entrar na tela
  });

  // Observa cada benefit-item
  benefitItems.forEach(item => {
    observer.observe(item);
  });
});