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
// Show back to top button
window.onscroll = function() {
  let btn = document.getElementById("topBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
