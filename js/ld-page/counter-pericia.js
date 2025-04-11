// Adicione este script no final do seu arquivo HTML, antes do </body>

document.addEventListener('DOMContentLoaded', function() {
    const statItems = document.querySelectorAll('.stat-item h3');
    const statsSection = document.querySelector('.stats-section');
    const finalValues = [72, 85, 3]; // Valores finais das estatísticas
    let animationTriggered = false;

    // Função para animar a contagem
    function animateStats() {
        if (animationTriggered) return;
        animationTriggered = true;
        
        statItems.forEach((item, index) => {
            const target = finalValues[index];
            const suffix = item.textContent.includes('%') ? '%' : 
                          item.textContent.includes('x') ? 'x' : '';
            const duration = 2000; // 2 segundos
            const startTime = Date.now();
            
            // Se for a porcentagem ou multiplicador, começa de 0
            const startValue = suffix === '%' || suffix === 'x' ? 0 : parseInt(item.textContent);
            
            function updateNumber() {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const currentValue = Math.floor(progress * target);
                
                item.textContent = currentValue + suffix;
                
                if (progress < 1) {
                    requestAnimationFrame(updateNumber);
                }
            }
            
            updateNumber();
        });
    }

    // Disparar animação quando a seção entrar na viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // 50% da seção visível

    observer.observe(statsSection);

    // Disparar também no carregamento inicial se a seção já estiver visível
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        animateStats();
    }
});