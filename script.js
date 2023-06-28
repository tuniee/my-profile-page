const toggleMode = document.getElementById("toggle-mode");
const body = document.body;
const contactForm = document.getElementById("contact-form");
const socialLinks = document.getElementById("social-links");

toggleMode.addEventListener("change", function () {
  body.classList.toggle("dark-mode");
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.querySelector("textarea");

  if (
    nameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    messageInput.value.trim() === ""
  ) {
    alert("Please fill out the form correctly");
  } else {
    // Form is filled correctly, proceed with form submission or other actions
    // You can remove this else block if you don't have any additional logic for form submission
    // Replace it with your desired functionality, such as sending the form data to a server
    alert("Form submitted successfully!");
    contactForm.reset(); // Reset the form after submission
  }
});

// Add event listener to social media icons
socialLinks.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") {
    const confirmation = confirm("You are about to leave the current page. Continue?");
    if (!confirmation) {
      event.preventDefault(); // Cancel the default link behavior
    }
  }
});

const profileImage = document.querySelector(".profile-image");

profileImage.addEventListener("click", function () {
  this.classList.toggle("open");
  const tooltip = this.querySelector(".tooltip");
  tooltip.textContent = this.classList.contains("open") ? "Minimize Image" : "Click Image";
  const image = this.querySelector("img");
  if (this.classList.contains("open")) {
    image.style.transform = "scale(4)";
    image.style.zIndex = "999";
    image.style.position = "absolute";
  } else {
    image.style.transform = "none";
    image.style.zIndex = "auto";
    image.style.position = "static";
  }
});

 