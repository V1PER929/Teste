// Seleciona todos os flashcards
const cards = document.querySelectorAll(".card");

// Adiciona o evento de clique em cada um
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flip");
    });
});
