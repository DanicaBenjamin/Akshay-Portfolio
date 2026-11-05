
const cards = document.querySelectorAll(".skill-card");
const prevButton = document.getElementById("prevCard");
const nextButton = document.getElementById("nextCard");
const counter = document.getElementById("cardCounter");
const dots = document.querySelectorAll(".deck-dot");

let currentCard = 0;

function updateDeck() {
    cards.forEach((card, index) => {
        card.classList.remove("active", "prev", "next");

        if (index === currentCard) {
            card.classList.add("active");
        } else if (
            index === (currentCard - 1 + cards.length) % cards.length
        ) {
            card.classList.add("prev");
        } else if (
            index === (currentCard + 1) % cards.length
        ) {
            card.classList.add("next");
        }
    });

    counter.textContent =
        String(currentCard + 1).padStart(2, "0") +
        " / " +
        String(cards.length).padStart(2, "0");

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentCard);
    });
}

nextButton.addEventListener("click", () => {
    currentCard = (currentCard + 1) % cards.length;
    updateDeck();
});

prevButton.addEventListener("click", () => {
    currentCard = (currentCard - 1 + cards.length) % cards.length;
    updateDeck();
});

updateDeck();
