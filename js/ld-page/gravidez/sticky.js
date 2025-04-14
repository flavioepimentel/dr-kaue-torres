document.addEventListener('DOMContentLoaded', function() {
        const section = document.querySelector('.sticky-parent');
        const stickyImg = document.querySelector('.sticky-image');
        
        if (stickyImg && section) {
            const headerHeight = document.querySelector('header') ? document.querySelector('header').offsetHeight : 80;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const imgHeight = stickyImg.offsetHeight;
            
            // Ajusta o top inicial baseado no header
            stickyImg.style.top = `${headerHeight + 20}px`;
            
            window.addEventListener('scroll', function() {
                const scrollPosition = window.scrollY;
                const sectionBottom = sectionTop + sectionHeight;
                
                // Calcula quando a imagem deve parar de descer
                const stopPosition = sectionBottom - imgHeight - headerHeight - 40;
                
                if (scrollPosition > sectionTop && scrollPosition < stopPosition) {
                    // Dentro da seção - comportamento sticky normal
                    stickyImg.style.transform = 'translateY(0)';
                } else if (scrollPosition >= stopPosition) {
                    // Passou do final da seção - trava a imagem
                    const offset = scrollPosition - stopPosition;
                    stickyImg.style.transform = `translateY(${offset}px)`;
                } else {
                    // Acima da seção - reseta
                    stickyImg.style.transform = 'translateY(0)';
                }
            });
        }
    });