// translate.js — i18next configuration and translations (flat keys approach)

i18next.init({
    lng: 'en',
    keySeparator: false,
    nsSeparator: false,
    resources: {
      en: { translation: {
        tabSchedule: 'Schedule',
        tabDetails: 'Wedding Details',
        tabUpload: 'Share Your Photos',
        scheduleTitle: 'Wedding Schedule',
        // flattened schedule entries
        'schedule.0.time': '17:00',
        'schedule.0.label': 'Ceremony at the Church',
        'schedule.0.info': 'Traditional church ceremony to exchange vows.',
  
        'schedule.1.time': '18:00',
        'schedule.1.label': 'Reception at Zagroda Leśna',
        'schedule.1.info': 'Welcome drinks and appetizers in the forest venue.',
  
        'schedule.2.time': '19:00',
        'schedule.2.label': 'First Course',
        'schedule.3.time': '19:30',
        'schedule.3.label': 'First Dance',
        'schedule.4.time': '21:00',
        'schedule.4.label': 'Parents’ Tribute',
        'schedule.5.time': '23:00',
        'schedule.5.label': 'Cake Cutting',
        'schedule.6.time': '24:00',
        'schedule.6.label': 'Oczepiny',
        'schedule.6.info': 'Polish tradition where the bride’s veil is removed.',
        'schedule.7.time': '04:00',
        'schedule.7.label': 'End of Celebration',
  
        detailsTitle: 'Wedding Details',
        detailsBody: 'Join us for a day of love, laughter, and memories.',
  
        uploadTitle: 'Share Your Photos',
        chooseFiles: 'Choose photo(s):',
        uploadBtn: 'Upload',
        uploading: 'Uploading...',
        uploadFailed: 'Upload failed'
      } },
      pl: { translation: {
        tabSchedule: 'Harmonogram',
        tabDetails: 'Szczegóły',
        tabUpload: 'Prześlij zdjęcia',
        scheduleTitle: 'Harmonogram wesela',
        'schedule.0.time': '17:00',
        'schedule.0.label': 'Ceremonia w kościele',
        'schedule.1.time': '18:00',
        'schedule.1.label': 'Przyjęcie w Zagrodzie Leśnej',
        'schedule.2.time': '19:00',
        'schedule.2.label': 'Pierwsze danie',
        'schedule.3.time': '19:30',
        'schedule.3.label': 'Pierwszy taniec',
        'schedule.4.time': '21:00',
        'schedule.4.label': 'Podziękowania dla rodziców',
        'schedule.5.time': '23:00',
        'schedule.5.label': 'Krojenie tortu',
        'schedule.6.time': '24:00',
        'schedule.6.label': 'Oczepiny',
        'schedule.7.time': '04:00',
        'schedule.7.label': 'Zakończenie',
  
        detailsTitle: 'Szczegóły wesela',
        detailsBody: 'Dołącz do nas w dniu pełnym miłości, śmiechu i wspomnień.',
  
        uploadTitle: 'Podziel się zdjęciami',
        chooseFiles: 'Wybierz zdjęcie(a):',
        uploadBtn: 'Prześlij',
        uploading: 'Wysyłanie...',
        uploadFailed: 'Błąd wysyłania'
      } },
      uk: { translation: {
        tabSchedule: 'Графік',
        tabDetails: 'Деталі',
        tabUpload: 'Поділіться фото',
        scheduleTitle: 'Розклад весілля',
        'schedule.0.time': '17:00',
        'schedule.0.label': 'Церемонія в церкві',
        'schedule.0.info': 'Традиційна церковна церемонія обміну обітницями.',
        'schedule.1.time': '18:00',
        'schedule.1.label': 'Прийом у Загроді Лісній',
        'schedule.1.info': 'Привітальні напої та закуски на лісовій локації.',
        'schedule.2.time': '19:00',
        'schedule.2.label': 'Перша страва',
        'schedule.3.time': '19:30',
        'schedule.3.label': 'Перший танець',
        'schedule.4.time': '21:00',
        'schedule.4.label': 'Подяка батькам',
        'schedule.5.time': '23:00',
        'schedule.5.label': 'Розрізання торта',
        'schedule.6.time': '24:00',
        'schedule.6.label': 'Оцепини',
        'schedule.6.info': 'Польська традиція, коли знімається фата нареченої.',
        'schedule.7.time': '04:00',
        'schedule.7.label': 'Закінчення святкування',
  
        detailsTitle: 'Деталі весілля',
        detailsBody: 'Приєднуйтеся до нас у день любові, сміху та спогадів.',
  
        uploadTitle: 'Поділіть фото',
        chooseFiles: 'Виберіть фото:',
        uploadBtn: 'Завантажити',
        uploading: 'Завантаження...',
        uploadFailed: 'Помилка завантаження'
      } }
    }
  }, (err, t) => {
    // Function to update timeline items
    const updateTimeline = () => {
        document.querySelectorAll('.timeline-item').forEach(item => {
            const index = item.getAttribute('data-index');
            const timeEl = item.querySelector('.time');
            const labelEl = item.querySelector('.label');
            const infoBtn = item.querySelector('.info-btn');
            
            // Update time and label
            timeEl.textContent = t(`schedule.${index}.time`);
            labelEl.textContent = t(`schedule.${index}.label`);
            
            // Handle info button
            const infoKey = `schedule.${index}.info`;
            if (t(infoKey) !== infoKey) { // Check if translation exists
                infoBtn?.classList.remove('d-none');
                infoBtn?.setAttribute('data-i18n', infoKey);
                infoBtn?.setAttribute('data-bs-content', t(infoKey));
                
                // Initialize or update popover
                if (infoBtn && !bootstrap.Popover.getInstance(infoBtn)) {
                    new bootstrap.Popover(infoBtn, { html: true });
                }
            } else {
                infoBtn?.classList.add('d-none');
            }
        });
    };

    // Initialize static content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.getAttribute('data-i18n'));
    });

    // Initialize timeline
    updateTimeline();

    // Language switch
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lng = btn.getAttribute('data-lang');
            i18next.changeLanguage(lng, () => {
                // Update static content
                document.querySelectorAll('[data-i18n]').forEach(el => {
                    el.textContent = t(el.getAttribute('data-i18n'));
                });
                
                // Update timeline
                updateTimeline();
                
                // Update active button
                btn.closest('.btn-group').querySelectorAll('.lang-btn').forEach(b => 
                    b.classList.remove('active'));
                btn.classList.add('active');
                document.documentElement.lang = lng;
            });
        });
    });
});