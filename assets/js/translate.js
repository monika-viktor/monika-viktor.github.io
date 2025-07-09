// assets/js/translate.js

/* ─────────────────────────────────────────────────────────────
   i18n initialization
   • adds fallbackLng:"en" → strings missing in PL/UA fall back to EN
   • supplies PL/UA schedule keys that were lost during the refactor
   • keeps your English menu, schedule & UI keys unchanged
   ──────────────────────────────────────────────────────────── */
   i18next.init(
    {
      lng: 'en',
      fallbackLng: 'en',
      debug: false,
      keySeparator: false,
      nsSeparator: false,
      resources: {
        /* ───── ENGLISH ───── */
        en: {
          translation: {
            /* NAV */
            tabSchedule:    'Schedule',
            tabMenu:        'Menu',
            tabUpload:      'Share Your Photos',
            tabBusSchedule: 'Bus Schedule',
   
            /* SCHEDULE */
            scheduleTitle:  'Wedding Schedule',
            'schedule.0.time':  '18:00',
            'schedule.0.label': 'Wishes',
            'schedule.0.info':  'Wishes will be made in the church after the service.',
            'schedule.1.time':  '18:45',
            'schedule.1.label': 'Transfer to Zagroda Leśna',
            'schedule.1.info':  '',
            'schedule.2.time':  '19:00',
            'schedule.2.label': 'Arrival at Zagroda Leśna',
            'schedule.2.info':  '',
            'schedule.3.time':  '19:15',
            'schedule.3.label': 'Reception',
            'schedule.3.info':  '',
            'schedule.4.time':  '19:30',
            'schedule.4.label': 'First dish',
            'schedule.4.info':  '',
            'schedule.5.time':  '20:30',
            'schedule.5.label': 'First dance',
            'schedule.5.info':  '',
            'schedule.6.time':  '04:00',
            'schedule.6.label': 'End of party',
            'schedule.6.info':  '',
            'schedule.7.time':  '13:00',
            'schedule.7.label': 'After-party',
            'schedule.7.info':  '',
   
            /* BUS SCHEDULE */
            busScheduleTitle:'Shuttle Schedule',
            'bs.header.time': 'Time',
            'bs.0.0': 'Hotel → Church',
            'bs.1.0': 'Church → Zagroda Leśna',
            'bs.2.0': 'Zagroda Leśna → Hotel',
            'bs.3.0': 'Hotel → Zagroda Leśna',
            'bs.4.0': 'Zagroda Leśna → Hotel',
            'bs.5.0': 'Hotel → Church',
            'bs.0.1': 'Hotel → Zagroda Leśna',
            'bs.1.1': '',
            'bs.2.1': '',
            'bs.3.1': '',
            'bs.4.1': '',
            'bs.5.1': 'Zagroda Leśna → City',
   
            /* MENU */
            menuTitle: 'Wedding Menu',
            menuBody: `
              <ol class="list-unstyled">
                <li class="mb-3">
                  <h5>Amuse-Bouche <i class="bi bi-leaf-fill text-success" title="Vegetarian"></i></h5>
                  <small class="text-muted">Heirloom tomato consommé, basil oil (no onions)</small>
                </li>
                <!-- ...rest of menu items... -->
              </ol>`,
   
            /* UPLOAD */
            uploadTitle: 'Share Your Photos',
            chooseFiles: 'Choose image files',
            uploadBtn:   'Upload'
          }
        },
   
        /* ───── POLISH ───── */
        pl: {
          translation: {
            tabSchedule:    'Harmonogram',
            tabMenu:        'Menu',
            tabUpload:      'Prześlij zdjęcia',
            tabBusSchedule: 'Rozkład autobusów',
   
            scheduleTitle:  'Harmonogram wesela',
            'schedule.0.time':  '18:00',
            'schedule.0.label': 'Życzenia',
            'schedule.0.info':  'Zyczenia składaje sie kościele po mszą.',
            'schedule.1.time':  '18:45',
            'schedule.1.label': 'Transfer do Zagrody Leśnej',
            'schedule.1.info':  '',
            'schedule.2.time':  '19:00',
            'schedule.2.label': 'Przyjazd do Zagrody Leśnej',
            'schedule.2.info':  '',
            'schedule.3.time':  '19:15',
            'schedule.3.label': 'Przyjęcie',
            'schedule.3.info':  '',
            'schedule.4.time':  '19:30',
            'schedule.4.label': 'Pierwsze danie',
            'schedule.4.info':  '',
            'schedule.5.time':  '20:30',
            'schedule.5.label': 'Pierwszy taniec',
            'schedule.5.info':  '',
            'schedule.6.time':  '04:00',
            'schedule.6.label': 'Zakończenie imprezy',
            'schedule.6.info':  '',
            'schedule.7.time':  '13:00',
            'schedule.7.label': 'Poprawiny',
            'schedule.7.info':  '',
   
            busScheduleTitle: 'Rozkład autobusów',
            'bs.header.time': 'Czas',
            'bs.0.0': 'Hotel → Kościół',
            'bs.1.0': 'Kościół → Zagroda Leśna',
            'bs.2.0': 'Zagroda Leśna → Hotel',
            'bs.3.0': 'Hotel → Zagroda Leśna',
            'bs.4.0': 'Zagroda Leśna → Hotel',
            'bs.5.0': 'Hotel → Kościół',
            'bs.0.1': 'Hotel → Zagroda Leśna',
            'bs.1.1': '',
            'bs.2.1': '',
            'bs.3.1': '',
            'bs.4.1': '',
            'bs.5.1': 'Zagroda Leśna → Miasto',
   
            menuTitle: 'Menu weselne',
            menuBody: `
              <ol class="list-unstyled">
                <li class="mb-3">
                  <h5>Amuse-Bouche <i class="bi bi-leaf-fill text-success" title="Wegetariańskie"></i></h5>
                  <small class="text-muted">Consommé z pomidorów, olej bazyliowy (bez cebuli)</small>
                </li>
                <!-- ...reszta pozycji menu... -->
              </ol>`,
   
            uploadTitle: 'Prześlij zdjęcia',
            chooseFiles: 'Wybierz pliki obrazów',
            uploadBtn:   'Prześlij'
          }
        },
   
        /* ───── UKRAINIAN ───── */
        uk: {
          translation: {
            tabSchedule:    'Графік',
            tabMenu:        'Меню',
            tabUpload:      'Поділіться фото',
            tabBusSchedule: 'Розклад автобусів',
   
            scheduleTitle:  'Розклад весілля',
            'schedule.0.time':  '18:00',
            'schedule.0.label': 'Побажання',
            'schedule.0.info':  'Побажання складаються в церкві після служби.',
            'schedule.1.time':  '18:45',
            'schedule.1.label': 'Трансфер до Загроди Лісної',
            'schedule.1.info':  '',
            'schedule.2.time':  '19:00',
            'schedule.2.label': 'Прибуття до Загроди Лісної',
            'schedule.2.info':  '',
            'schedule.3.time':  '19:15',
            'schedule.3.label': 'Прийом',
            'schedule.3.info':  '',
            'schedule.4.time':  '19:30',
            'schedule.4.label': 'Перша страва',
            'schedule.4.info':  '',
            'schedule.5.time':  '20:30',
            'schedule.5.label': 'Перший танець',
            'schedule.5.info':  '',
            'schedule.6.time':  '04:00',
            'schedule.6.label': 'Закінчення вечірки',
            'schedule.6.info':  '',
            'schedule.7.time':  '13:00',
            'schedule.7.label': 'Поправини',
            'schedule.7.info':  '',
   
            busScheduleTitle: 'Розклад автобусів',
            'bs.header.time': 'Час',
            'bs.0.0': 'Готель → Церква',
            'bs.1.0': 'Церква → Загрода Лісна',
            'bs.2.0': 'Загрода Лісна → Готель',
            'bs.3.0': 'Готель → Загрода Лісна',
            'bs.4.0': 'Загрода Лісна → Готель',
            'bs.5.0': 'Готель → Церква',
            'bs.0.1': 'Готель → Загрода Лісна',
            'bs.1.1': '',
            'bs.2.1': '',
            'bs.3.1': '',
            'bs.4.1': '',
            'bs.5.1': 'Загрода Лісна → Місто',
   
            menuTitle: 'Весільне меню',
            menuBody: `
              <ol class="list-unstyled">
                <li class="mb-3">
                  <h5>Амюз-буш <i class="bi bi-leaf-fill text-success" title="Вегетаріанське"></i></h5>
                  <small class="text-muted">Томатний консоме, базилікова олія (без цибулі)</small>
                </li>
                <!-- ...решта меню... -->
              </ol>`,
   
            uploadTitle: 'Поділіться фото',
            chooseFiles: 'Виберіть файли зображень',
            uploadBtn:   'Завантажити'
          }
        }
      }
    },
    onI18nReady       // callback defined below
   );
   
   /* ─────────────────────────────────────────────────────────────
      DOM wiring & dynamic updates
      ──────────────────────────────────────────────────────────── */
   function onI18nReady(err, t) {
     if (err) { console.error(err); return; }
   
     const disposeAllPopovers = () =>
       document.querySelectorAll('[data-bs-toggle="popover"]')
               .forEach(btn => bootstrap.Popover.getInstance(btn)?.dispose());
   
     const hideAllPopovers = () =>
       document.querySelectorAll('[data-bs-toggle="popover"]')
               .forEach(btn => bootstrap.Popover.getInstance(btn)?.hide());
   
     /* ------- SCHEDULE ------- */
     const updateTimeline = () => {
       disposeAllPopovers();
       document.querySelectorAll('.timeline-item').forEach(item => {
         const i   = item.dataset.index;
         const btn = item.querySelector('.info-btn');
         item.querySelector('.time').textContent  = t(`schedule.${i}.time`);
         item.querySelector('.label').textContent = t(`schedule.${i}.label`);
         const info = t(`schedule.${i}.info`);
         if (info && info !== `schedule.${i}.info`) {
           btn.classList.remove('d-none');
           new bootstrap.Popover(btn, {
             html: true,
             trigger: 'click',
             placement: 'top',
             content: info
           });
         } else {
           btn.classList.add('d-none');
         }
       });
   
       applyDynamicSpacing();
     };
   
     /* ------- EVERYTHING ELSE ------- */
     const updateContent = () => {
       document.querySelectorAll('[data-i18n]').forEach(el => {
         const key = el.dataset.i18n;
         const val = t(key);
         el.hasAttribute('data-i18n-html')
           ? el.innerHTML  = val
           : el.textContent = val;
       });
       updateTimeline();
     };
   
     /* initial render */
     updateContent();
   
     /* language switch */
     document.querySelectorAll('.lang-btn').forEach(btn =>
       btn.addEventListener('click', () => {
         const lng = btn.dataset.lang;
         hideAllPopovers();
         i18next.changeLanguage(lng, updateContent);
         btn.parentElement.querySelectorAll('.lang-btn')
            .forEach(b => b.classList.toggle('active', b === btn));
         document.documentElement.lang = lng;
       })
     );
   
     /* close popovers on tab change / click-away */
     document.querySelectorAll('[data-bs-toggle="tab"]')
       .forEach(tab => tab.addEventListener('shown.bs.tab', hideAllPopovers));
     document.addEventListener('click', e => {
       if (!e.target.closest('.info-btn') && !e.target.closest('.popover'))
         hideAllPopovers();
     });
   
     /* dummy upload handler – left untouched */
     document.getElementById('uploadForm')?.addEventListener('submit', e => {
       e.preventDefault();
       const status = document.getElementById('uploadStatus');
       const files  = document.getElementById('photoFiles').files;
       if (!files.length) {
         status.innerHTML = '<div class="alert alert-warning">Please select at least one file.</div>';
         return;
       }
       status.innerHTML = '<div class="alert alert-info">Uploading...</div>';
       setTimeout(() => {
         status.innerHTML = '<div class="alert alert-success">Files uploaded successfully!</div>';
       }, 2000);
     });
   }
   
   /**
    * Computes vertical spacing for each .timeline-item based on the
    * time difference from the previous event.
    *  • SPACING_PER_HOUR: pixels per one hour gap
    *  • handles events past midnight by rolling times past the first event
    */
   function applyDynamicSpacing() {
     const SPACING_PER_HOUR = 40;
     const items = Array.from(document.querySelectorAll('.timeline-item'));
     if (!items.length) return;
   
     // parse first event hour
     const firstTime = items[0].querySelector('.time').textContent.trim();
     const firstHour = parseInt(firstTime.split(':')[0], 10);
   
     // build list of { item, datetime } with wrap-around past midnight
     const events = items.map(item => {
       const timeStr = item.querySelector('.time').textContent.trim();
       let [h, m] = timeStr.split(':').map(s => parseInt(s, 10));
       if (h === 24) h = 24;                    // treat "24:00" as hour 24
       if (h < firstHour) h += 24;             // roll early-morning into next day
       const dt = new Date();
       dt.setHours(h, m, 0, 0);
       return { item, datetime: dt };
     });
   
     // apply margins
     events.forEach((ev, idx) => {
       if (idx === 0) {
         ev.item.style.marginTop = '0px';
       } else {
         const prev = events[idx - 1];
         const hoursDiff = (ev.datetime - prev.datetime) / (1000 * 60 * 60);
         ev.item.style.marginTop = `${hoursDiff * SPACING_PER_HOUR}px`;
       }
     });
   }
   