const toggleBtn = document.getElementById("mobile-toggle");
const navlinks = document.getElementById("navlinks");

toggleBtn.addEventListener("click", function() {
    navlinks.classList.toggle("show");
});