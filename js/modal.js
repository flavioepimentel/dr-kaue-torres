document.addEventListener("DOMContentLoaded", function () {
        const openModalButtons = document.querySelectorAll(".open-modal");

        function createModal() {
            // Criando o container principal do modal
            const modal = document.createElement("div");
            modal.id = "customModal";
            modal.classList.add("modal-overlay");
            modal.style.display = "none"; // Garante que ele inicie oculto

            // Criando o conteúdo do modal
            modal.innerHTML = `
                <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div id="divText">
                    <img id="modalImage" src="" alt="Imagem do Modal">
                        <p id="modalText">Aqui vai o texto do modal.</p>
                    </div>
                </div>
            `;

            // Adiciona o modal ao final do <body>
            document.body.appendChild(modal);

            return modal;
        }

        // Criando o modal e armazenando a referência
        let modal = createModal();
        let modalImage = document.getElementById("modalImage");
        let modalText = document.getElementById("modalText");
        let closeModal = document.querySelector(".close-modal");

        // Adiciona evento de clique para abrir o modal
        openModalButtons.forEach(button => {
            button.addEventListener("click", function (event) {
                event.preventDefault();

                const imageSrc = this.getAttribute("data-image");
                const textContent = this.getAttribute("data-text");

                modalImage.src = imageSrc;
                modalText.innerHTML = textContent;

                modal.style.display = "flex"; // Exibe o modal
            });
        });

        // Fechar o modal ao clicar no botão de fechar
        closeModal.addEventListener("click", function () {
            modal.style.display = "none";
        });

        // Fechar o modal ao clicar fora dele
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });