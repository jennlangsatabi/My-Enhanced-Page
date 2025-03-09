const quotes = [
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Believe you can and you're halfway there."
];

document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];

window.onscroll = function() {
    document.getElementById("backToTop").style.display = window.scrollY > 100 ? "block" : "none";
};

document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("All fields are required!");
        return false;
    }
    return true;
}