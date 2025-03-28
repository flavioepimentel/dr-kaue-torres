document.addEventListener("DOMContentLoaded", function () {
    const openModalButtons = document.querySelectorAll(".open-modal");

    function createModal() {
        const modal = document.createElement("div");
        modal.id = "customModal";
        modal.classList.add("modal-overlay");
        modal.style.display = "none";

        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div id="modalContentWrapper">
                    <img id="modalImage" src="" alt="Imagem do Modal">
                    <div id="modalText"></div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        return modal;
    }

    let modal = createModal();
    let modalImage = document.getElementById("modalImage");
    let modalText = document.getElementById("modalText");
    let closeModal = document.querySelector(".close-modal");

    openModalButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            const imageSrc = this.getAttribute("data-image");
            const textContent = this.getAttribute("data-text");

            modalImage.src = imageSrc;
            modalText.innerHTML = textContent;

            // Reset scroll position
            modal.querySelector('.modal-content').scrollTop = 0;
            
            modal.style.display = "flex";
            document.body.style.overflow = "hidden"; // Impede rolagem da página principal
        });
    });

    function closeModalFunction() {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Restaura rolagem da página principal
    }

    closeModal.addEventListener("click", closeModalFunction);

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModalFunction();
        }
    });

    // Fechar modal com ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === "flex") {
            closeModalFunction();
        }
    });
});