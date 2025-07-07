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
          "Join us at St. Anthony of Padua Church at 17:00 on 23 August 2025, the celebration will continue at Zagroda Lesna banquett hall.",
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
          "Dołącz do nas w Kościele św. Antoniego z Padwy o 17:00 23 sierpnia 2025, a następnie świętowanie będzie kontynuowane w sali bankietowej Zagroda Leśna.",
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
          "Приєднуйтесь до нас у церкві Святого Антонія Падуанського о 17:00 23 серпня 2025 року, святкування продовжиться в банкетній залі Zagroda Lesna.",
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