// Отримуємо кнопки
const modal = document.getElementById("modal");
const contactBtn = document.getElementById("contactBtn");
const closeBtn = document.querySelector(".close");

// Відкриття модального вікна
contactBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Закриття модального вікна
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Закриття при кліку поза вікном
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
