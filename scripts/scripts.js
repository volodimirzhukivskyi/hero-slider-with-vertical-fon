const slides = document.querySelectorAll('.slide');
let currentSlide = 0; // Поточний слайд
let slideInterval; // Для збереження інтервалу

// Функція для показу слайду за індексом
function showSlide(index) {
  slides.forEach((s) => {
    s.classList.remove('active', 'inactive'); // Очищаємо класи всіх слайдів
    const details = s.querySelector('.details');
    const vertical_text = s.querySelector('.vertical-text');
    details.style.display = 'none'; // Ховаємо всі деталі
    details.classList.remove('active');
    vertical_text.classList.remove('active');
  });

  const current = slides[index]; // Отримуємо поточний слайд
  const details = current.querySelector('.details');
  const vertical_text = current.querySelector('.vertical-text');
  current.classList.add('active'); // Додаємо активний клас до поточного слайду
  details.style.display = 'block'; // Показуємо деталі поточного слайду
  vertical_text.classList.add('active');
  setTimeout(() => {
    details.classList.add('active'); // Додаємо анімацію для деталей
  }, 10);

  // Позначаємо всі інші слайди як неактивні
  slides.forEach((s, i) => {
    if (i !== index) {
      s.classList.add('inactive');
    }
  });

  currentSlide = index; // Оновлюємо поточний індекс слайду
}

// Функція для автоматичної зміни слайдів
function startSlideShow() {
  slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length; // Переходимо до наступного слайду, якщо досягли кінця — починаємо спочатку
    showSlide(currentSlide); // Показуємо поточний слайд
  }, 100000); // Зміна кожні 3 секунди
}

// Ініціалізація слайдера (показ першого слайду)
showSlide(currentSlide);

// Запускаємо автоматичну зміну слайдів
startSlideShow();

// Якщо потрібно зупинити автоматичне відтворення, можна додати функцію для паузи
function stopSlideShow() {
  clearInterval(slideInterval);
}

// Додаємо обробник подій для кліку по кожному слайду
slides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    stopSlideShow(); // Зупиняємо автоматичну зміну слайдів після кліку
    showSlide(index); // Показуємо клікнутий слайд
    startSlideShow(); // Перезапускаємо автоматичне відтворення
  });
});
