<!-- translate.js -->
```javascript
// translate.js — i18next configuration and translations

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        tabSchedule: 'Schedule',
        tabDetails: 'Wedding Details',
        tabUpload: 'Share Your Photos',
        scheduleTitle: 'Wedding Schedule',
        schedule: [
          { time: '17:00', label: 'Ceremony at the Church', info: 'Traditional church ceremony to exchange vows.' },
          { time: '18:00', label: 'Reception at Zagroda Leśna', info: 'Welcome drinks and appetizers in the forest venue.' },
          { time: '19:00', label: 'First Course' },
          { time: '19:30', label: 'First Dance' },
          { time: '21:00', label: 'Parents’ Tribute' },
          { time: '23:00', label: 'Cake Cutting' },
          { time: '24:00', label: 'Oczepiny', info: 'Polish tradition where the bride’s veil is removed.' },
          { time: '04:00', label: 'End of Celebration' }
        ],
        detailsTitle: 'Wedding Details',
        detailsBody: 'Join us for a day of love, laughter, and memories.' ,
        uploadTitle: 'Share Your Photos',
        chooseFiles: 'Choose photo(s):',
        uploadBtn: 'Upload',
        uploading: 'Uploading...',
        uploadFailed: 'Upload failed'
      }
    },
    pl: {
      translation: {
        tabSchedule: 'Harmonogram',
        tabDetails: 'Szczegóły',
        tabUpload: 'Prześlij zdjęcia',
        scheduleTitle: 'Harmonogram wesela',
        schedule: [
          { time: '17:00', label: 'Ceremonia w kościele' },
          { time: '18:00', label: 'Przyjęcie w Zagrodzie Leśnej' },
          { time: '19:00', label: 'Pierwsze danie' },
          { time: '19:30', label: 'Pierwszy taniec' },
          { time: '21:00', label: 'Podziękowania dla rodziców' },
          { time: '23:00', label: 'Krojenie tortu' },
          { time: '24:00', label: 'Oczepiny' },
          { time: '04:00', label: 'Zakończenie' }
        ],
        detailsTitle: 'Szczegóły wesela',
        detailsBody: 'Dołącz do nas w dniu pełnym miłości, śmiechu i wspomnień.',
        uploadTitle: 'Podziel się zdjęciami',
        chooseFiles: 'Wybierz zdjęcie(a):',
        uploadBtn: 'Prześlij',
        uploading: 'Wysyłanie...',
        uploadFailed: 'Błąd wysyłania'
      }
    },
    uk: {
      translation: {
        tabSchedule: 'Графік',
        tabDetails: 'Деталі',
        tabUpload: 'Поділіться фото',
        scheduleTitle: 'Розклад весілля',
        schedule: [
          { time: '17:00', label: 'Церемонія в церкві', info: 'Традиційна церковна церемонія обміну обітницями.' },
          { time: '18:00', label: 'Прийом у Загроді Лісній', info: 'Привітальні напої та закуски на лісовій локації.' },
          { time: '19:00', label: 'Перша страва' },
          { time: '19:30', label: 'Перший танець' },
          { time: '21:00', label: 'Подяка батькам' },
          { time: '23:00', label: 'Розрізання торта' },
          { time: '24:00', label: 'Оцепини', info: 'Польська традиція, коли знімається фата нареченої.' },
          { time: '04:00', label: 'Закінчення святкування' }
        ],
        detailsTitle: 'Деталі весілля',
        detailsBody: 'Приєднуйтеся до нас у день любові, сміху та спогадів.',
        uploadTitle: 'Поділіть фото',
        chooseFiles: 'Виберіть фото:',
        uploadBtn: 'Завантажити',
        uploading: 'Завантаження...',
        uploadFailed: 'Помилка завантаження'
      }
    }
  }
}, function(err, t) {
  // Initialize page content
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    el.textContent = t(el.getAttribute('data-i18n'));
  });

  // Language switch buttons
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      i18next.changeLanguage(btn.getAttribute('data-lang'), function() {
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
          el.textContent = t(el.getAttribute('data-i18n'));
        });
        // toggle info buttons visibility
        var lang = btn.getAttribute('data-lang');
        document.querySelectorAll('.info-btn').forEach(function(b) {
          b.classList.toggle('d-none', lang === 'pl');
        });
      });
    });
  });
});
