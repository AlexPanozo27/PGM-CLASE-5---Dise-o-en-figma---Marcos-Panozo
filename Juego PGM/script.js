document.addEventListener("DOMContentLoaded", function() {

    const categories = document.querySelectorAll(".category");
    categories.forEach(category => {
        category.addEventListener("click", function() {
            categories.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });


    document.querySelector(".fav-btn").addEventListener("click", function() {
        this.textContent = this.textContent === "❤️" ? "🤍" : "❤️";
    });
});