function newMotivation() {
    const messages = [
        "You are doing better than you think! ✨",
        "Small steps still count. 🌸",
        "Be proud of yourself today! 💕",
        "You don't have to be perfect. 🌷",
        "Take a breath. You've got this! ☀️",
        "Give yourself some kindness today. 💖"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);

    document.getElementById("motivation").textContent =
        messages[randomIndex];
}


function newTip() {
    const tips = [
        "Don't forget sunscreen every morning! ☀️",
        "Be gentle while cleansing your face. 🫧",
        "Moisturizer helps keep your skin comfortable. 💧",
        "Keep your skincare routine simple and consistent. 🌸",
        "Give your skin some care, but don't overdo it! 💕",
        "Remember to be gentle with your skincare routine. 🌷"
    ];

    const randomIndex = Math.floor(Math.random() * tips.length);

    document.getElementById("tip").textContent = tips[randomIndex];
}


function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}


function newChallenge() {
    const challenges = [
        "Drink a glass of water 💧",
        "Take 5 minutes to relax 🧘",
        "Write down one thing you're grateful for 🌷",
        "Take a short break from your screen 👀",
        "Do something that makes you smile 💕",
        "Spend a few quiet minutes relaxing today. 🌸"
    ];

    const randomIndex = Math.floor(Math.random() * challenges.length);

    document.getElementById("challenge").textContent =
        challenges[randomIndex];
}


document.querySelector(".contact form").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you for reaching out! 💕");
    this.reset();
});