// Typing effect
const text = "to my dear slowpoke , puffer fish , miss cat persona & anyaaaa hehe:)  💕";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 90);
  }
}

typeWriter();

// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}
