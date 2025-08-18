function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (name && email && subject && message) {
        formMessage.textContent = "Thank you, " + name + "! Your message has been received.";
        formMessage.style.color = "green";
        formMessage.classList.remove("hidden");

        // Reset form
        document.getElementById("contactForm").reset();
    } else {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        formMessage.classList.remove("hidden");
    }
});