document.addEventListener("DOMContentLoaded", function() {
  // Fungsi untuk efek mengetik pada pre-title
const preTitleText = "Hallo all, It's me!";
const preTitleElement = document.getElementById("fade-in-typing");

function typeWriterEffect(text, element, speed) {
    let i = 0;
    const typingInterval = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i > text.length) {
            clearInterval(typingInterval);
        }
    }, speed);
}

typeWriterEffect(preTitleText, preTitleElement, 100);

  // Mendapatkan gambar yang akan diberi efek fade-in
const fadeInImg = document.querySelector('.fade-in-img img');

  // Menambahkan efek fade-in pada gambar
fadeInImg.style.transition = "opacity 1s ease";
fadeInImg.style.opacity = 1;

  // Memanggil fungsi untuk menambahkan kelas "fade-in" ke gambar
fadeInImg.classList.add("fade-in");

  // Selektor untuk tombol-tombol
const fadeInButtons = document.querySelectorAll('.btn-fade-in');

  // Menambahkan efek fade-in pada tombol-tombol
fadeInButtons.forEach(function(button) {
    button.style.transition = "opacity 1s ease";
    button.style.opacity = 1;
});
});


