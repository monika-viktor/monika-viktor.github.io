/* global i18next */
const resources = {
    en: {
      translation: {
        tabHome: "Our Story",
        tabDetails: "Wedding Details",
        tabUpload: "Share Your Photos",
        headline: "We're getting married!",
        welcomeText:
          "Welcome to our wedding site. We're thrilled to celebrate with you.",
        detailsTitle: "Ceremony & Reception",
        detailsBody:
          "Join us at St. Mary's Church at 15:00 on 5 September 2025, followed by dinner at The Grand Hall.",
        uploadTitle: "Upload your favourite shots",
        chooseFiles: "Select images",
        uploadBtn: "Upload",
      },
    },
    pl: {
      translation: {
        tabHome: "Nasza historia",
        tabDetails: "Szczegóły ślubu",
        tabUpload: "Podziel się zdjęciami",
        headline: "Bierzemy ślub!",
        welcomeText:
          "Witamy na naszej stronie ślubnej. Cieszymy się, że będziesz z nami świętować.",
        detailsTitle: "Ceremonia i przyjęcie",
        detailsBody:
          "Dołącz do nas w Kościele św. Marii o 15:00 5 września 2025, a następnie kolacja w The Grand Hall.",
        uploadTitle: "Prześlij swoje ulubione ujęcia",
        chooseFiles: "Wybierz zdjęcia",
        uploadBtn: "Wyślij",
      },
    },
    uk: {
      translation: {
        tabHome: "Наша історія",
        tabDetails: "Деталі весілля",
        tabUpload: "Поділіться фото",
        headline: "Ми одружуємося!",
        welcomeText:
          "Ласкаво просимо на наш весільний сайт. Ми раді святкувати з вами.",
        detailsTitle: "Церемонія та банкет",
        detailsBody:
          "Приєднуйтесь до нас у церкві Св. Марії о 15:00 5 вересня 2025, після чого вечеря в The Grand Hall.",
        uploadTitle: "Завантажте свої найкращі фото",
        chooseFiles: "Виберіть зображення",
        uploadBtn: "Завантажити",
      },
    },
  };
  
  // Initialise i18next and fill labels
  i18next
    .init({ lng: "en", debug: false, resources })
    .then(() => updateContent());
  
  function updateContent() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.innerText = i18next.t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === i18next.language);
    });
    // copyright year
    document.getElementById("year").textContent = new Date().getFullYear();
  }
  
  document.querySelectorAll(".lang-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      i18next.changeLanguage(btn.dataset.lang).then(updateContent);
    })
  );