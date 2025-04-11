const tabBtns = document.querySelectorAll('.tab-btn');
        const serviceContents = document.querySelectorAll('.service-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove classe active de todos os botões e conteúdos
                tabBtns.forEach(btn => btn.classList.remove('active'));
                serviceContents.forEach(content => content.classList.remove('active'));

                // Adiciona classe active ao botão clicado
                btn.classList.add('active');

                // Mostra o conteúdo correspondente
                const tabId = btn.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });