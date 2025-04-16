const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

// Fungsi untuk menampilkan slide dan update dot
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });

  dots.forEach((dot, i) => {
    dot.classList.remove('active');
    if (i === index) dot.classList.add('active');
  });
}

// Slide berikutnya
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Slide sebelumnya
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Event klik tombol next/prev
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Klik pada dot indikator
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

// Auto-slide setiap 5 detik
setInterval(nextSlide, 5000);

// Tampilkan slide pertama saat halaman dimuat
showSlide(currentIndex);
