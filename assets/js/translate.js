// assets/js/translate.js

/* ─────────────────────────────────────────────────────────────
   i18n initialization
   • adds fallbackLng:"en" → strings missing in PL/UA fall back to EN
   • supplies PL/UA schedule keys that were lost during the refactor
   • keeps your English menu, schedule & UI keys unchanged (except requested edits)
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

        /* SCHEDULE */
        scheduleTitle:  'Wedding Schedule',
        'schedule.0.time':  '17:00',
        'schedule.0.label': 'Wedding ceremony in church',
        'schedule.0.info':  'Traditional Catholic ceremony at the parish church.',

        'schedule.1.time':  '17:50',
        'schedule.1.label': 'Wishes',
        'schedule.1.info':  'Guests offer good wishes (Życzenia) to the couple outside the church, right after everyone exits.',

        'schedule.2.time':  '18:30',
        'schedule.2.label': 'Transfer to venue',
        'schedule.2.info':  'Guests head to the reception venue.',

        'schedule.3.time':  '18:45',
        'schedule.3.label': 'Welcome with bread & salt · Toast',
        'schedule.3.info':  'A Polish tradition at the venue entrance: the couple is greeted with bread and salt — a symbol of hospitality and prosperity — followed by a welcome toast.',

        'schedule.4.time':  '19:00',
        'schedule.4.label': '1st Course',
        'schedule.4.info':  'The first of several delicious Polish-style meals.',

        'schedule.5.time':  '20:15',
        'schedule.5.label': 'First Dance',
        'schedule.5.info':  'The couple’s first dance together.',

        'schedule.6.time':  '21:30',
        'schedule.6.label': '2nd Course',
        'schedule.6.info':  'Another round of food to refuel for more dancing.',

        'schedule.7.time':  '22:00',
        'schedule.7.label': 'Outdoor Sparklers',
        'schedule.7.info': 'Outdoor photo with sparklers: take a lighter and one or two sparklers and wait for the signal — photographers will arrange everyone.',

        'schedule.8.time':  '22:25',
        'schedule.8.label': 'Thank You to Parents',
        'schedule.8.info': 'A heartfelt moment — we’ll say a few words and thank our parents.',

        'schedule.9.time':  '22:30',
        'schedule.9.label': 'Wedding Cake',
        'schedule.9.info': 'Ceremonial cutting of the wedding cake with the newlyweds; after photos the cake will be served.',

        'schedule.10.time': '23:15',
        'schedule.10.label': '3rd Course',
        'schedule.10.info': 'Late evening food.',

        'schedule.11.time': '00:00',
        'schedule.11.label': 'Oczepiny',
        'schedule.11.info': 'A Polish tradition marking the transition to married life. The bride holds a bouquet with ribbons; unmarried women each hold a ribbon. The bride cuts the ribbons one by one — the last uncut ribbon decides who gets married next. The groom will throw his bow tie. A short, fun dance contest follows — grab a partner and join!',

        'schedule.12.time': '01:00',
        'schedule.12.label': '4th Course',
        'schedule.12.info': 'Night meal for the persistent dancers.',

        'schedule.13.time': '03:00',
        'schedule.13.label': '5th Course',
        'schedule.13.info': 'Final snack before winding down.',

        'schedule.14.time': '04:00',
        'schedule.14.label': 'End of the Celebration',
        'schedule.14.info': 'Formal close of the wedding night.',

        'schedule.15.time': '12:30',
        'schedule.15.label': 'Poprawiny',
        'schedule.15.info': 'Traditional second-day afterparty — relaxed, joyful, and full of food and music.',

        /* MENU */
        menuTitle: 'Wedding Menu',
        menuBody: `
            <p><strong>I.</strong> Chicken &amp; beef broth with noodles and meatballs<br>
              <em>Vegetarian option:</em> Cream of roasted red vegetable soup with pumpkin seeds, herb oil &amp; chives<br></p>

            <p><strong>II.</strong> Roast duck leg with marjoram &amp; apples<br>
              Mashed potatoes with fresh ginger &amp; nutmeg<br>
              Mixed greens with vinaigrette<br>
              <em>Vegetarian option:</em> Vegetable Wellington (puff pastry filled with leek–cream sauce, zucchini, bell pepper &amp; mozzarella)</p>

            <p><strong>III.</strong> Pork neck roast in cranberry sauce<br>
              Baked Kurpiowskie dumplings<br>
              Grated beets with horseradish<br>
              <em>Vegetarian option:</em> Grilled halloumi on beet carpaccio with basil pesto</p>

            <p><strong>IV.</strong> Chicken fillet in golden breadcrumbs stuffed with mascarpone sauce<br>
              Oven-baked potatoes<br>
              Coleslaw<br>
              <em>Vegetarian option:</em> Baked zucchini stuffed with groats, vegetables &amp; tomato sauce</p>

            <p><strong>V.</strong> Baked ribs in cabbage served in bread rolls<br>
              Baked cod fillet with dill sauce<br>
              Steamed vegetables<br>

            <p><strong>VI.</strong>Vegetarian Red borscht &amp; mushroom pâté pastries</p>
          `,


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

        scheduleTitle: 'Harmonogram wesela',
        'schedule.0.time': '17:00',
        'schedule.0.label': 'Ceremonia ślubna w kościele',
        'schedule.0.info': 'Tradycyjna ceremonia katolicka w kościele parafialnym.',

        'schedule.1.time': '17:50',
        'schedule.1.label': 'Życzenia',
        'schedule.1.info': 'Goście składają życzenia Młodej Parze przed kościołem, zaraz po wyjściu z kościoła.',

        'schedule.2.time': '18:30',
        'schedule.2.label': 'Dojazd na salę',
        'schedule.2.info': 'Goście udają się na salę weselną.',

        'schedule.3.time': '18:45',
        'schedule.3.label': 'Przywitanie chlebem i solą · Toast',
        'schedule.3.info': 'Polska tradycja przy wejściu do sali: Para Młoda witana jest chlebem i solą — na gościnność i dostatek — po czym nastąpi toast powitalny.',

        'schedule.4.time': '19:00',
        'schedule.4.label': '1. Danie',
        'schedule.4.info': 'Pierwsze z kilku smacznych dań.',

        'schedule.5.time': '20:15',
        'schedule.5.label': 'Pierwszy taniec',
        'schedule.5.info': 'Pierwszy taniec Pary Młodej.',

        'schedule.6.time': '21:30',
        'schedule.6.label': '2. Danie',
        'schedule.6.info': 'Kolejne danie.',

        'schedule.7.time': '22:00',
        'schedule.7.label': 'Zimne ognie',
        'schedule.7.info': 'Zdjęcie na zewnątrz z zimnymi ogniami: weź zapalniczkę i 1–2 zimne ognie, czekaj na sygnał; fotografowie ustawią gości.',

        'schedule.8.time': '22:25',
        'schedule.8.label': 'Podziękowania dla rodziców',
        'schedule.8.info': 'Powiemy kilka słów i podziękujemy naszym rodzicom.',

        'schedule.9.time': '22:30',
        'schedule.9.label': 'Tort weselny',
        'schedule.9.info': 'Ceremonialne krojenie tortu z Parą Młodą; po zdjęciach tort zostanie podany.',

        'schedule.10.time': '23:15',
        'schedule.10.label': '3. Danie',
        'schedule.10.info': 'Kolacja dla głodnych gości.',

        'schedule.11.time': '00:00',
        'schedule.11.label': 'Oczepiny',
        'schedule.11.info': 'Polska tradycja symbolizująca wejście w życie małżeńskie: Panna Młoda trzyma bukiet z wstążkami, niezamężne kobiety chwytają wstążki; Panna Młoda przecina je po kolei — ostatnia nieprzecięta wstążka wskaże kolejną przyszłą Pannę Młodą. Pan Młody rzuci muchę. Po części tradycyjnej krótki, zabawny konkurs taneczny.',

        'schedule.12.time': '01:00',
        'schedule.12.label': '4. Danie',
        'schedule.12.info': 'Nocna przekąska.',

        'schedule.13.time': '03:00',
        'schedule.13.label': '5. Danie',
        'schedule.13.info': 'Ostatni posiłek nocy.',

        'schedule.14.time': '04:00',
        'schedule.14.label': 'Koniec imprezy',
        'schedule.14.info': 'Zakończenie weselnej nocy.',

        'schedule.15.time': '12:30',
        'schedule.15.label': 'Poprawiny',
        'schedule.15.info': 'Tradycyjny drugi dzień wesela — luźna atmosfera, dużo jedzenia i muzyki.',



        menuTitle: 'Menu weselne',
        menuBody: `
          <p><strong>I.</strong> Rosół drobiowo-wołowy z makaronem i pulpecikami drobiowymi<br>
            <em>Opcja wegetariańska:</em>  Krem z czerwonych pieczonych warzyw z pestkami dyni, oliwą ziołową i szczypiorkiem.
            Kotleciki pieczarkowo-ziemniaczane podane z puree oraz bukietem sałat<br></p>

          <p><strong>II.</strong> Noga z kaczki pieczona w majeranku z jabłkami<br>
            Puree ziemniaczane ze świeżym imbirem i gałką muszkatołową<br>
            Sałata z sosem vinaigrette<br>
            <em>Opcja wegetariańska:</em> Wellington warzywny (ciasto francuskie nadziewane sosem porowo-śmietankowym z cukinią, papryką oraz mozzarellą)</p>

          <p><strong>III.</strong> Pieczeń z karkówki w sosie żurawinowym<br>
            Kluski kurpiowskie zapiekane<br>
            Buraczki tarte z chrzanem<br>
            <em>Opcja wegetariańska:</em> Grillowane halloumi na carpaccio z buraka z pesto bazyliowym</p>

          <p><strong>IV.</strong> Filet z kurczaka w złotej panierce faszerowany sosem mascarpone<br>
            Ziemniaki zapiekane<br>
            Coleslaw<br>
            <em>Opcja wegetariańska:</em> Cukinia zapiekana z kaszą, warzywami oraz sosem pomidorowym</p>

          <p><strong>V.</strong> Żeberka zapiekane w kapuście podawane w chlebkach<br>
            Filet z dorsza pieczony z sosem koperkowym<br>
            Warzywa na parze<br>

          <p><strong>VI.</strong> Wegetariańskie danie: Barszcz czerwony &amp; paszteciki z pieczarkami</p>
        `,

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

        scheduleTitle: 'Розклад весілля',
        'schedule.0.time': '17:00',
        'schedule.0.label': 'Церемонія шлюбу в церкві',
        'schedule.0.info': 'Традиційна католицька церемонія в парафіяльному костелі.',

        'schedule.1.time': '17:50',
        'schedule.1.label': 'Побажання',
        'schedule.1.info': 'Гості вітають молодят біля церкви, одразу після виходу з храму.',

        'schedule.2.time': '18:30',
        'schedule.2.label': 'Переїзд до зали',
        'schedule.2.info': 'Гості вирушають до місця прийому.',

        'schedule.3.time': '18:45',
        'schedule.3.label': 'Хліб і сіль · Тост',
        'schedule.3.info': 'Польська традиція біля входу до зали: молодят вітають хлібом і сіллю — на гостинність і достаток. Далі — вітальний тост.',

        'schedule.4.time': '19:00',
        'schedule.4.label': '1-а страва',
        'schedule.4.info': 'Смачний початок вечері.',

        'schedule.5.time': '20:15',
        'schedule.5.label': 'Перший танець',
        'schedule.5.info': 'Перший танець пари.',

        'schedule.6.time': '21:30',
        'schedule.6.label': '2-а страва',
        'schedule.6.info': 'Наступна частина вечері.',

        'schedule.7.time': '22:00',
        'schedule.7.label': 'Бенгальські вогні',
        'schedule.7.info': 'Фото на вулиці з бенгальськими вогнями: візьміть запальничку та 1–2 вогники і чекайте сигналу; фотографи розставлять гостей.',

        'schedule.8.time': '22:25',
        'schedule.8.label': 'Подяка батькам',
        'schedule.8.info': 'Скажемо кілька слів і подякуємо нашим батькам.',

        'schedule.9.time': '22:30',
        'schedule.9.label': 'Весільний торт',
        'schedule.9.info': 'Урочисте розрізання весільного торта разом із молодятами; після фото торт подадуть.',

        'schedule.10.time': '23:15',
        'schedule.10.label': '3-я страва',
        'schedule.10.info': 'Вечеря пізно ввечері.',

        'schedule.11.time': '00:00',
        'schedule.11.label': 'Очепини',
        'schedule.11.info': 'Польський обряд переходу до подружнього життя: Наречена тримає букет із стрічками, незаміжні жінки тримають стрічки; наречена відрізає їх по одній — остання не відрізана стрічка визначить наступну наречену. Наречений кине метелика. Далі — короткий веселий танцювальний конкурс.',

        'schedule.12.time': '01:00',
        'schedule.12.label': '4-а страва',
        'schedule.12.info': 'Нічна страва.',

        'schedule.13.time': '03:00',
        'schedule.13.label': '5-а страва',
        'schedule.13.info': 'Останній перекус.',

        'schedule.14.time': '04:00',
        'schedule.14.label': 'Кінець святкування',
        'schedule.14.info': 'Кінець весільної ночі.',

        'schedule.15.time': '12:30',
        'schedule.15.label': 'Поправини',
        'schedule.15.info': 'Другий день святкування — невимушена атмосфера, багато їжі та музики.',



        menuTitle: 'Весільне меню',
        menuBody: `
          <p><strong>I.</strong> Курячо-яловичий бульйон з локшиною з мясними кульками<br>
            <em>Вегетаріанський варіант:</em> Крем-суп із запечених червоних овочів із гарбузовим насінням, трав’яною олією та зеленою цибулею
             Котлетки з печериць та картоплі, подаються з пюре та міксом салатів <br></p>

          <p><strong>II.</strong> Запечена качина ніжка з майораном та яблуками<br>
            Картопляне пюре зі свіжим імбирем та мускатним горіхом<br>
            Салат із вінегретною заправкою<br>
            <em>Вегетаріанський варіант:</em> Овочевий Веллінгтон (листкове тісто з цибулево-вершковим соусом з пореєм, цукіні, перцем та моцарелою)</p>

          <p><strong>III.</strong> Свинячий ошийок у журавлиновому соусі<br>
            Запечені курпівські кльоцки<br>
            Тертий буряк із хріном<br>
            <em>Вегетаріанський варіант:</em> Грильований халумі на карпачо з буряка з базиліковим песто</p>

          <p><strong>IV.</strong> Філе курки в золотій паніровці, фаршироване соусом маскарпоне<br>
            Запечена картопля<br>
            Коулслоу<br>
            <em>Вегетаріанський варіант:</em> Запечений кабачок, фарширований крупою, овочами та томатним соусом</p>

          <p><strong>V.</strong> Запечені реберця в капусті, подаються в булочках<br>
            Філе тріски, запечене з кроповим соусом<br>
            Овочі на пару<br>
          <p><strong>VI.</strong>Вегетаріанське блюдо: Червоний борщ &amp; паштетики з печериць</p>
        `,


        uploadTitle: 'Поділіться фото',
        chooseFiles: 'Виберіть файли зображень',
        uploadBtn:   'Завантажити'
      }
    }
  }
},
onI18nReady       // callback defined below
);

function onI18nReady(err, t) {
  if (err) { console.error(err); return; }

  const disposeAllPopovers = () =>
    document.querySelectorAll('[data-bs-toggle="popover"]')
            .forEach(btn => bootstrap.Popover.getInstance(btn)?.dispose());

  const hideAllPopovers = () =>
    document.querySelectorAll('[data-bs-toggle="popover"]')
            .forEach(btn => bootstrap.Popover.getInstance(btn)?.hide());

  // helper to add "≈" for approximate times (venue onwards)
  const formatApproxTime = (timeStr, index) => {
    return (index >= 3 && index <= 19) ? `≈${timeStr}` : timeStr;
  };

  const updateTimeline = () => {
    disposeAllPopovers();
    document.querySelectorAll('.timeline-item').forEach(item => {
      const i   = item.dataset.index;
      const btn = item.querySelector('.info-btn');
      const rawTime = t(`schedule.${i}.time`);
      item.querySelector('.time').textContent  = formatApproxTime(rawTime, parseInt(i, 10));
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

  const updateContent = () => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = t(key);
      el.hasAttribute('data-i18n-html')
        ? el.innerHTML = val
        : el.textContent = val;
    });
    updateTimeline();
  };

  updateContent();

  // Unify all language buttons (desktop + mobile)
  const langButtons = document.querySelectorAll('.lang-btn');

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lng = btn.dataset.lang;
      hideAllPopovers();
      i18next.changeLanguage(lng, () => {
        updateContent();

        // Sync all language buttons
        langButtons.forEach(b => {
          b.classList.toggle('active', b.dataset.lang === lng);
        });

        document.documentElement.lang = lng;
      });
    });
  });

  document.querySelectorAll('[data-bs-toggle="tab"]')
    .forEach(tab => tab.addEventListener('shown.bs.tab', hideAllPopovers));

  document.addEventListener('click', e => {
    if (!e.target.closest('.info-btn') && !e.target.closest('.popover')) {
      hideAllPopovers();
    }
  });

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

function applyDynamicSpacing() {
  const SPACING_PER_HOUR = 40;
  const items = Array.from(document.querySelectorAll('.timeline-item'));
  if (!items.length) return;

  const parseHM = (txt) => {
    const clean = txt.trim().replace(/[^\d:]/g, ''); // strips "≈", etc., keeps hh:mm
    let [h, m] = clean.split(':').map(n => parseInt(n, 10));
    // Normalize rare "24:00" to midnight of next day
    if (h === 24 && m === 0) { h = 0; m = 0; return { h, m, is24: true }; }
    return { h, m, is24: false };
  };

  let dayOffset = 0;       // how many midnights passed
  let prevAbsMin = null;   // absolute minutes from start (monotonic)

  items.forEach((item, idx) => {
    const { h, m, is24 } = parseHM(item.querySelector('.time').textContent);
    const curMin = h * 60 + m;

    // If clock wrapped (e.g., 23:30 -> 00:00), bump to next day.
    // Also treat explicit "24:00" as the next day’s 00:00.
    if (idx > 0) {
      const prevTOD = prevAbsMin % 1440;
      if (is24 || curMin < prevTOD) dayOffset += 1;
    } else if (is24) {
      dayOffset = 1;
    }

    const absMin = curMin + dayOffset * 1440;
    const gapHours = idx === 0 ? 0 : (absMin - prevAbsMin) / 60;

    item.style.marginTop = idx === 0 ? '0px' : `${gapHours * SPACING_PER_HOUR}px`;

    // Optional: expose day index for styling/separators
    item.dataset.dayIndex = String(dayOffset);

    prevAbsMin = absMin;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const infoBtns = Array.from(document.querySelectorAll('.info-btn'));

  infoBtns.forEach(btn => {
    // 1) Instantiate the popover
    bootstrap.Popover.getOrCreateInstance(btn, {
      html: true,
      sanitize: false,
      container: document.body
    });

    // 2) On click: hide ALL the others, then Bootstrap will toggle this one
    btn.addEventListener('click', () => {
      infoBtns.forEach(other => {
        if (other !== btn) {
          const inst = bootstrap.Popover.getInstance(other);
          inst && inst.hide();
        }
      });
    });
  });
});
