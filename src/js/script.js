document.addEventListener("DOMContentLoaded", function () {
  const vacancyInput = document.querySelector(".vacancy-selection__input");
  const vacancyDropdown = document.querySelector(
    ".vacancy-selection__dropdown"
  );
  const vacancyButton = document.querySelector(
    ".vacancy-selection__arrow-button"
  );

  const experienceInput = document.querySelector(
    ".experience-selection__input"
  );
  const experienceDropdown = document.querySelector(
    ".experience-selection__dropdown"
  );
  const experienceButton = document.querySelector(
    ".experience-selection__arrow-button"
  );

  const cityInput = document.querySelector(".city-selection__input");
  const cityDropdown = document.querySelector(".city-selection__dropdown");
  const cityButton = document.querySelector(".city-selection__arrow-button");

  const scheduleInput = document.querySelector(".schedule-selection__input");
  const scheduleDropdown = document.querySelector(
    ".schedule-selection__dropdown"
  );
  const scheduleButton = document.querySelector(
    ".schedule-selection__arrow-button"
  );

  // Ваши вакансии, опыт, города и графики
  const vacancies = [
    "Backend",
    "Data Analyst",
    "Data Engineer",
    "Data Scientist",
    "DevOps",
    "Frontend",
    "Mobile",
    "Product Manager",
    "Project Manager",
    "QA инженер",
    "Бизнес аналитик",
    "Веб дизайнер",
    "Системный аналитик",
  ];

  const experiences = ["0-1", "1-3 года", "3-6 лет", "> 6"];

  const cities = [
    "Алматы",
    "Астана",
    "Барнаул",
    "Владивосток",
    "Волгоград",
    "Воронеж",
    "Екатеринбург",
    "Ижевск",
    "Иркутск",
    "Казань",
    "Калининград",
    "Краснодар",
    "Красноярск",
    "Минск",
    "Москва",
    "Нижний Новгород",
    "Новосибирск",
    "Омск",
    "Пермь",
    "Ростов-на-Дону",
    "Рязань",
    "Самара",
    "Санкт-Петербург",
    "Саратов",
    "Ташкент",
    "Тбилиси",
    "Томск",
  ];

  const schedules = ["Гибкий график", "Полный день", "Удаленная работа"];

  // Функция для обновления выпадающих списков
  function updateDropdown(query, list, dropdown) {
    dropdown.innerHTML = ""; // Очистить список
    const filteredItems = list.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredItems.length > 0) {
      filteredItems.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add(`${dropdown.classList[0]}-item`);
        div.textContent = item;
        div.addEventListener("click", function () {
          const input = dropdown.previousElementSibling.querySelector("input");
          input.value = item;
          dropdown.style.display = "none"; // Скрыть выпадающее меню после выбора
        });
        dropdown.appendChild(div);
      });
      dropdown.style.display = "block"; // Показать выпадающий список
    } else {
      dropdown.style.display = "none"; // Скрыть список, если нет результатов
    }
  }

  // Функция для закрытия всех выпадающих меню
  function closeAllDropdowns() {
    vacancyDropdown.style.display = "none";
    experienceDropdown.style.display = "none";
    cityDropdown.style.display = "none";
    scheduleDropdown.style.display = "none";
  }

  // Обработчики событий для ввода текста и кликов по кнопкам
  vacancyInput.addEventListener("input", function () {
    const query = vacancyInput.value;
    if (query) {
      updateDropdown(query, vacancies, vacancyDropdown);
    } else {
      vacancyDropdown.style.display = "none";
    }
  });

  vacancyButton.addEventListener("click", function () {
    if (vacancyDropdown.style.display === "block") {
      vacancyDropdown.style.display = "none";
    } else {
      closeAllDropdowns();
      updateDropdown(vacancyInput.value, vacancies, vacancyDropdown);
    }
  });

  experienceInput.addEventListener("input", function () {
    const query = experienceInput.value;
    if (query) {
      updateDropdown(query, experiences, experienceDropdown);
    } else {
      experienceDropdown.style.display = "none";
    }
  });

  experienceButton.addEventListener("click", function () {
    if (experienceDropdown.style.display === "block") {
      experienceDropdown.style.display = "none";
    } else {
      closeAllDropdowns();
      updateDropdown(experienceInput.value, experiences, experienceDropdown);
    }
  });

  cityInput.addEventListener("input", function () {
    const query = cityInput.value;
    if (query) {
      updateDropdown(query, cities, cityDropdown);
    } else {
      cityDropdown.style.display = "none";
    }
  });

  cityButton.addEventListener("click", function () {
    if (cityDropdown.style.display === "block") {
      cityDropdown.style.display = "none";
    } else {
      closeAllDropdowns();
      updateDropdown(cityInput.value, cities, cityDropdown);
    }
  });

  scheduleInput.addEventListener("input", function () {
    const query = scheduleInput.value;
    if (query) {
      updateDropdown(query, schedules, scheduleDropdown);
    } else {
      scheduleDropdown.style.display = "none";
    }
  });

  scheduleButton.addEventListener("click", function () {
    if (scheduleDropdown.style.display === "block") {
      scheduleDropdown.style.display = "none";
    } else {
      closeAllDropdowns();
      updateDropdown(scheduleInput.value, schedules, scheduleDropdown);
    }
  });

  // Скрывать выпадающий список, если пользователь кликает вне него
  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".vacancy-selection__input-wrapper") &&
      !event.target.closest(".experience-selection__input-wrapper") &&
      !event.target.closest(".city-selection__input-wrapper") &&
      !event.target.closest(".schedule-selection__input-wrapper")
    ) {
      closeAllDropdowns();
    }
  });
});
