document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully!");

    // Search functionality
    document.querySelector('.search-bar button').addEventListener("click", function () {
        let query = document.querySelector('.search-bar input').value.toLowerCase();
        alert("Search feature is under development for: " + query);
    });

    // Product hover effect
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener("mouseover", function () {
            this.style.borderColor = "white";
        });
        card.addEventListener("mouseleave", function () {
            this.style.borderColor = "red";
        });
    });
});
