// Typing effect
const text = "Today is special because YOU were born 💕";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

typeWriter();

// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}
