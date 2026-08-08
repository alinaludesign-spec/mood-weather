
/* ---------- I18N ---------- */
const STRINGS = {
  en: {
    welcomeTitle: 'What is the weather\nin your heart today?',
    welcomeSub: 'Mood Weather is a small space where you do not have to explain how you feel. Just show the weather, and let it settle inside.',
    begin: 'Begin',
    todaySubPick: 'Pick the weather that feels closest',
    todaySubUpdate: 'Update how today feels',
    notePlaceholder: 'A few words, if you feel like it...',
    save: 'Save',
    update: 'Update',
    todayWas: 'Today was',
    noNote: 'No note added.',
    changeWeather: 'Change weather',
    archive: 'Archive',
    loggedNote: 'Logged. Thank you for checking in with yourself.',
    back: 'Back',
    heavierTitle: 'A heavier stretch lately',
    heavierDesc: 'The last few days have felt stormy or rainy. No need to fix anything right now. Maybe just a small pause, or a kind word to yourself.',
    kindnessPlaceholder: 'Something kind, for future you...',
    kindnessSaved: 'Saved. Thank you.',
    saveThought: 'Save this thought',
    familiarTitle: 'This feels familiar',
    familiarDesc: 'A bit like {date}. You wrote:',
    yourClimate: 'Your climate',
    tapDay: 'Tap a day to remember it',
    searchByWords: 'Search by words or tags',
    week: 'Week',
    month: 'Month',
    searchPlaceholder: 'Search your notes...',
    searchHint: 'Type a word or pick a tag to search.',
    noMatch: 'No entries match yet.',
    exportPalette: 'Export palette',
    seeYourSeason: 'See your season',
    noNoteDay: 'No note on this day.',
    dayEmptyTitle: 'This day stayed quiet',
    dayEmptySub: "No weather was chosen here. Some days just pass by, and that's alright too.",
    noNoteShort: 'No note',
    yourSeason: 'Your season',
    seasonTemplate: 'Your last {n} days were mostly {mood} — {count} out of {n} days. {closing}',
    closingWarm: 'It looks like warmth found its way back by the end.',
    closingHeavy: 'It has been a heavier stretch lately.',
    settings: 'Settings',
    tabHome: 'Home',
    tabArchive: 'Archive',
    tabSettings: 'Settings',
    dailyReminder: 'Daily reminder',
    reminderSub: 'A gentle nudge in the evening',
    remindAt: 'Remind me at',
    pushNote: 'Real push notifications need the app installed on your phone with permission granted. This button shows what it will feel like.',
    previewNotif: 'Preview notification',
    notifText: 'How is the weather inside today?',
    language: 'Language',
    exportTo: 'to'
  },
  ru: {
    welcomeTitle: 'Какая сегодня погода\nв твоём сердце?',
    welcomeSub: 'Mood Weather — маленькое пространство, где не нужно объяснять свои чувства. Просто покажи погоду и дай ей поселиться внутри.',
    begin: 'Начать',
    todaySubPick: 'Выбери погоду, которая ближе всего',
    todaySubUpdate: 'Обнови, как себя чувствуешь сегодня',
    notePlaceholder: 'Пара слов, если хочется...',
    save: 'Сохранить',
    update: 'Обновить',
    todayWas: 'Сегодня было',
    noNote: 'Заметка не добавлена.',
    changeWeather: 'Изменить погоду',
    archive: 'Архив',
    loggedNote: 'Записано. Спасибо, что заглянула к себе.',
    back: 'Назад',
    heavierTitle: 'Тяжёлый период',
    heavierDesc: 'Последние дни ощущались как гроза или дождь. Не нужно ничего чинить прямо сейчас. Может быть, просто пауза или доброе слово себе.',
    kindnessPlaceholder: 'Что-то доброе, для будущей себя...',
    kindnessSaved: 'Сохранено. Спасибо.',
    saveThought: 'Сохранить мысль',
    familiarTitle: 'Это кажется знакомым',
    familiarDesc: 'Немного похоже на {date}. Ты писала:',
    yourClimate: 'Твой климат',
    tapDay: 'Нажми на день, чтобы вспомнить его',
    searchByWords: 'Ищи по словам или тегам',
    week: 'Неделя',
    month: 'Месяц',
    searchPlaceholder: 'Поиск по заметкам...',
    searchHint: 'Введи слово или выбери тег для поиска.',
    noMatch: 'Пока нет совпадений.',
    exportPalette: 'Экспорт палитры',
    seeYourSeason: 'Посмотреть свой сезон',
    noNoteDay: 'В этот день нет заметки.',
    dayEmptyTitle: 'Этот день остался тихим',
    dayEmptySub: 'Здесь не была отмечена погода. Иногда дни просто проходят мимо — и это тоже нормально.',
    noNoteShort: 'Нет заметки',
    yourSeason: 'Твой сезон',
    seasonTemplate: 'Последние {n} дней у тебя были в основном {mood} — {count} из {n} дней. {closing}',
    closingWarm: 'Похоже, к концу вернулось тепло.',
    closingHeavy: 'Последнее время было непросто.',
    settings: 'Настройки',
    tabHome: 'Главная',
    tabArchive: 'Архив',
    tabSettings: 'Настройки',
    dailyReminder: 'Ежедневное напоминание',
    reminderSub: 'Мягкое напоминание вечером',
    remindAt: 'Напомнить в',
    pushNote: 'Настоящие push-уведомления требуют установки приложения на телефон с разрешением. Эта кнопка показывает, как это будет ощущаться.',
    previewNotif: 'Показать превью',
    notifText: 'Какая сегодня погода внутри?',
    language: 'Язык',
    exportTo: 'по'
  },
  uk: {
    welcomeTitle: 'Яка сьогодні погода\nв твоєму серці?',
    welcomeSub: 'Mood Weather — маленький простір, де не потрібно пояснювати свої почуття. Просто покажи погоду і дай їй оселитися всередині.',
    begin: 'Почати',
    todaySubPick: 'Обери погоду, яка найближча',
    todaySubUpdate: 'Онови, як себе почуваєш сьогодні',
    notePlaceholder: 'Кілька слів, якщо хочеться...',
    save: 'Зберегти',
    update: 'Оновити',
    todayWas: 'Сьогодні було',
    noNote: 'Нотатку не додано.',
    changeWeather: 'Змінити погоду',
    archive: 'Архів',
    loggedNote: 'Записано. Дякую, що зазирнула до себе.',
    back: 'Назад',
    heavierTitle: 'Важкий період',
    heavierDesc: 'Останні дні відчувались як гроза або дощ. Не треба нічого лагодити прямо зараз. Можливо, просто пауза або добре слово собі.',
    kindnessPlaceholder: 'Щось добре, для майбутньої себе...',
    kindnessSaved: 'Збережено. Дякую.',
    saveThought: 'Зберегти думку',
    familiarTitle: 'Це здається знайомим',
    familiarDesc: 'Трохи схоже на {date}. Ти писала:',
    yourClimate: 'Твій клімат',
    tapDay: 'Натисни на день, щоб згадати його',
    searchByWords: 'Шукай за словами або тегами',
    week: 'Тиждень',
    month: 'Місяць',
    searchPlaceholder: 'Пошук у нотатках...',
    searchHint: 'Введи слово або обери тег для пошуку.',
    noMatch: 'Поки немає збігів.',
    exportPalette: 'Експорт палітри',
    seeYourSeason: 'Побачити свій сезон',
    noNoteDay: 'У цей день немає нотатки.',
    dayEmptyTitle: 'Цей день лишився тихим',
    dayEmptySub: 'Тут не була обрана погода. Іноді дні просто минають — і це теж нормально.',
    noNoteShort: 'Без нотатки',
    yourSeason: 'Твій сезон',
    seasonTemplate: 'Останні {n} днів у тебе були переважно {mood} — {count} із {n} днів. {closing}',
    closingWarm: 'Схоже, наприкінці повернулося тепло.',
    closingHeavy: 'Останнім часом було нелегко.',
    settings: 'Налаштування',
    tabHome: 'Головна',
    tabArchive: 'Архів',
    tabSettings: 'Налаштування',
    dailyReminder: 'Щоденне нагадування',
    reminderSub: "М'яке нагадування ввечері",
    remindAt: 'Нагадати о',
    pushNote: "Справжні push-сповіщення потребують встановлення застосунку на телефон із дозволом. Ця кнопка показує, як це відчуватиметься.",
    previewNotif: 'Показати перегляд',
    notifText: 'Яка сьогодні погода всередині?',
    language: 'Мова',
    exportTo: 'по'
  }
};

const MOODS_I18N = {
  en: { sun:{label:'Sunny',phrase:'Clear and light inside'}, cloud:{label:'Cloudy',phrase:'A calm, soft-focus kind of day'}, rain:{label:'Rainy',phrase:'A quiet kind of sad, and that is okay'}, storm:{label:'Stormy',phrase:'It was a lot to carry today'}, rainbow:{label:'Rainbow',phrase:'Warmth found its way back'}, snow:{label:'Snowy',phrase:'Everything went quiet and soft'} },
  ru: { sun:{label:'Солнечно',phrase:'Ясно и легко внутри'}, cloud:{label:'Облачно',phrase:'Спокойный, размытый день'}, rain:{label:'Дождливо',phrase:'Тихая грусть, и это нормально'}, storm:{label:'Гроза',phrase:'Сегодня было тяжело'}, rainbow:{label:'Радуга',phrase:'Тепло вернулось'}, snow:{label:'Снежно',phrase:'Всё стало тихим и мягким'} },
  uk: { sun:{label:'Сонячно',phrase:'Ясно і легко всередині'}, cloud:{label:'Хмарно',phrase:'Спокійний, розмитий день'}, rain:{label:'Дощово',phrase:'Тихий смуток, і це нормально'}, storm:{label:'Гроза',phrase:'Сьогодні було важко'}, rainbow:{label:'Веселка',phrase:'Тепло повернулося'}, snow:{label:'Сніжно',phrase:"Все стало тихим і м'яким"} }
};
const MOOD_COLORS = { sun:'#F3AE72', cloud:'#96A3CC', rain:'#7FAEC0', storm:'#8175A0', rainbow:'#DE9FBC', snow:'#A9C6E0' };
const MOOD_KEYS = ['sun','cloud','rain','storm','rainbow','snow'];

const TAG_IDS = ['work','sleep','relationships','health'];
const TAG_LABELS = {
  en: { work:'Work', sleep:'Sleep', relationships:'Relationships', health:'Health' },
  ru: { work:'Работа', sleep:'Сон', relationships:'Отношения', health:'Здоровье' },
  uk: { work:'Робота', sleep:'Сон', relationships:'Стосунки', health:"Здоров'я" }
};
const TAG_KEYWORDS = {
  en: { work:['work','deadline','meeting','boss','job','project'], sleep:['tired','exhausted','sleep','insomnia','slept','nap'], relationships:['friend','family','partner','fight','argument','love','mom','dad'], health:['sick','pain','headache','workout','run','doctor'] },
  ru: { work:['работа','дедлайн','встреча','начальник','проект'], sleep:['устала','устал','вымотана','сон','бессонница','не выспалась','поспала'], relationships:['друг','подруга','семья','партнер','партнёр','ссора','любовь','мама','папа'], health:['болею','боль','голова болит','тренировка','пробежка','врач'] },
  uk: { work:['робота','дедлайн','зустріч','начальник','проект'], sleep:['втомилася','втомився','сон','безсоння','не виспалась','поспала'], relationships:['друг','подруга',"сім'я",'партнер','сварка','кохання','мама','тато'], health:['хвора','хворий','біль','головний біль','тренування','пробіжка','лікар'] }
};

const WEEKDAYS_I18N = {
  en: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
  ru: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
  uk: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб']
};
const MONTHS_I18N = {
  en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  ru: ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'],
  uk: ['січня','лютого','березня','квітня','травня','червня','липня','серпня','вересня','жовтня','листопада','грудня']
};

function t(key){ return STRINGS[state.lang][key]; }
function moodInfo(key){ return MOODS_I18N[state.lang][key]; }
function tagLabel(id){ return TAG_LABELS[state.lang][id]; }

/* ---------- HEART GEOMETRY ---------- */
const HEART_TEMPLATE = [
  ['M',50,87],['C',50,87,7,54,7,28],['C',7,13,18,3,32,3],['C',41,3,49,10,49,20],
  ['C',49,10,58,3,69,3],['C',83,3,94,13,94,28],['C',94,54,50,87,50,87],['Z']
];
function buildHeartPath(w,h){
  const sx = w/100, sy = h/90;
  return HEART_TEMPLATE.map(seg=>{
    if(seg[0]==='Z') return 'Z';
    const cmd = seg[0];
    const nums = seg.slice(1);
    const scaled = [];
    for(let i=0;i<nums.length;i+=2){ scaled.push((nums[i]*sx).toFixed(2), (nums[i+1]*sy).toFixed(2)); }
    return cmd + scaled.join(',');
  }).join(' ');
}
const HEART_PATHS = { lg: buildHeartPath(150,140), md: buildHeartPath(112,101), sm: buildHeartPath(86,77) };

function mwInitHeartClips(){
  document.querySelectorAll('.mw-heart-clip').forEach(el=>{
    let size = 'md';
    if(el.classList.contains('mw-heart-lg')) size = 'lg';
    else if(el.classList.contains('mw-heart-sm')) size = 'sm';
    el.style.clipPath = 'path("' + HEART_PATHS[size] + '")';
  });
}

/* ---------- WEATHER INSIDE HEART ---------- */
function rnd(min,max){ return min + Math.random()*(max-min); }

function mwRenderWeatherInside(container, mood){
  if(container._stormInterval){ clearInterval(container._stormInterval); container._stormInterval = null; }
  container.innerHTML = '';
  const w = container.clientWidth || 110, h = container.clientHeight || 100;

  if(!mood){
    const mist = document.createElement('div');
    mist.className = 'mw-w-mist';
    const size = w*0.7;
    mist.style.width = size+'px'; mist.style.height = (size*0.5)+'px';
    mist.style.left = (w*0.15)+'px'; mist.style.top = (h*0.4)+'px';
    mist.style.animationDuration = rnd(9,13)+'s';
    container.appendChild(mist);
    return;
  }

  if(mood==='sun'){
    const glow = document.createElement('div'); glow.className='mw-w-sunglow';
    glow.style.animationDuration = rnd(4.2,6)+'s'; container.appendChild(glow);
    const rays = document.createElement('div'); rays.className='mw-w-rays';
    rays.style.animationDuration = rnd(55,85)+'s';
    const n = 6;
    for(let i=0;i<n;i++){
      const ray = document.createElement('div'); ray.className='mw-w-ray';
      ray.style.height = (h*0.42)+'px';
      ray.style.background = 'linear-gradient(to bottom, rgba(255,236,190,.98), rgba(255,224,168,0))';
      const angle = (360/n)*i + rnd(-8,8);
      ray.style.transform = 'translateX(-50%) rotate('+angle+'deg)';
      rays.appendChild(ray);
    }
    container.appendChild(rays);
  }

  else if(mood==='cloud' || mood==='fog'){
    const count = mood==='fog' ? 5 : 3;
    for(let i=0;i<count;i++){
      const c = document.createElement('div'); c.className='mw-w-cloud';
      const cw = rnd(w*0.5, w*0.8), ch = cw*rnd(0.32,0.4);
      c.style.width = cw+'px'; c.style.height = ch+'px';
      c.style.left = rnd(-10, w*0.3)+'px';
      c.style.top = rnd(h*0.15, h*0.75)+'px';
      c.style.background = 'rgba(196,203,228,'+rnd(0.55,0.8).toFixed(2)+')';
      c.style.animationDuration = rnd(7,13)+'s';
      c.style.animationDelay = '-'+rnd(0,8).toFixed(1)+'s';
      container.appendChild(c);
    }
  }

  else if(mood==='rain' || mood==='storm'){
    const count = mood==='storm' ? 8 : 9;
    for(let i=0;i<count;i++){
      const d = document.createElement('div'); d.className='mw-w-drop';
      d.style.height = rnd(12,20)+'px';
      d.style.left = rnd(6, w-6)+'px';
      d.style.top = rnd(-14,-2)+'%';
      d.style.setProperty('--fall', (h*rnd(0.55,0.68))+'px');
      d.style.opacity = rnd(0.5,0.92).toFixed(2);
      d.style.animationDuration = rnd(2.4,4.2)+'s';
      d.style.animationDelay = '-'+rnd(0,4).toFixed(1)+'s';
      if(mood==='storm') d.style.background = 'linear-gradient(rgba(80,72,105,.15), rgba(58,50,82,.95))';
      container.appendChild(d);
    }
    if(mood==='storm'){
      const smokeCount = 3;
      for(let i=0;i<smokeCount;i++){
        const sm = document.createElement('div'); sm.className='mw-w-smoke';
        sm.style.width = rnd(w*0.7,w*1.05)+'px';
        sm.style.height = sm.style.width;
        sm.style.left = rnd(-w*0.2, w*0.3)+'px';
        sm.style.top = rnd(-h*0.15, h*0.55)+'px';
        sm.style.animationDuration = rnd(9,15)+'s';
        sm.style.animationDelay = '-'+rnd(0,10).toFixed(1)+'s';
        container.appendChild(sm);
      }
      const flash = document.createElement('div'); flash.className='mw-w-flash';
      container.appendChild(flash);
      const fire = ()=>{
        const pulses = [ [0,0.95], [70,0.15], [130,1], [230,0] ];
        pulses.forEach(([delay,op])=>{
          setTimeout(()=>{
            flash.style.transition = delay===0 ? 'none' : 'opacity 90ms ease-out';
            flash.style.opacity = String(op);
          }, delay);
        });
      };
      setTimeout(fire, rnd(400,1600));
      container._stormInterval = setInterval(fire, rnd(4200,7000));
    }
  }

  else if(mood==='snow'){
    const count = 13;
    for(let i=0;i<count;i++){
      const s = document.createElement('div'); s.className='mw-w-snow';
      const size = rnd(3.5,6);
      s.style.width = size+'px'; s.style.height = size+'px';
      s.style.left = rnd(4, w-10)+'px';
      s.style.top = rnd(-16,-2)+'%';
      s.style.setProperty('--fall', (h*rnd(0.85,1.05))+'px');
      s.style.opacity = rnd(0.65,1).toFixed(2);
      s.style.animationDuration = rnd(7,11)+'s';
      s.style.animationDelay = '-'+rnd(0,9).toFixed(1)+'s';
      container.appendChild(s);
    }
  }

  else if(mood==='rainbow'){
    const count = 4;
    for(let i=0;i<count;i++){
      const b = document.createElement('div'); b.className='mw-w-bow';
      b.style.top = rnd(h*0.2, h*0.7)+'px';
      b.style.animationDuration = rnd(7,11)+'s';
      b.style.animationDelay = '-'+rnd(0,6).toFixed(1)+'s';
      container.appendChild(b);
    }
  }
}

/* ---------- HEART BREATHING ---------- */
const HEART_REGISTRY = [];
function mwRegisterHeart(heartEl){
  if(heartEl.dataset.registered) return;
  heartEl.dataset.registered = '1';
  const glow = heartEl.querySelector('.mw-heart-glow');
  HEART_REGISTRY.push({
    el: heartEl, glow,
    phase: Math.random()*Math.PI*2,
    swayPhase: Math.random()*Math.PI*2,
    amp: rnd(0.014,0.024),
    freqPeriod: rnd(5.2,7.6),
    swayPeriod: rnd(9,13),
    driftAt: performance.now() + rnd(6000,12000)
  });
}
let mwLastT = null;
function mwBreatheLoop(t){
  if(mwLastT===null) mwLastT = t;
  const dt = (t-mwLastT)/1000; mwLastT = t;
  const now = performance.now();
  HEART_REGISTRY.forEach(h=>{
    if(now > h.driftAt){
      h.amp = rnd(0.013,0.026);
      h.freqPeriod = rnd(5.0,7.8);
      h.swayPeriod = rnd(8,14);
      h.driftAt = now + rnd(9000,15000);
    }
    h.phase += dt * (2*Math.PI/h.freqPeriod);
    h.swayPhase += dt * (2*Math.PI/h.swayPeriod);
    const s = 1 + h.amp*Math.sin(h.phase);
    const sway = Math.sin(h.swayPhase) * 0.7;
    h.el.style.transform = 'scale(' + s.toFixed(4) + ') rotate(' + sway.toFixed(3) + 'deg)';
    if(h.glow){
      const osc = 0.5 + 0.5*Math.sin(h.phase);
      h.glow.style.opacity = (0.3 + 0.3*osc).toFixed(3);
    }
  });
  requestAnimationFrame(mwBreatheLoop);
}

function mwFlourish(heartEl){
  heartEl.classList.remove('flourish');
  void heartEl.offsetWidth;
  heartEl.classList.add('flourish');
  setTimeout(()=> heartEl.classList.remove('flourish'), 750);
}

function mwMountHeart(heartId, mood, opts){
  const heartEl = document.getElementById(heartId);
  if(!heartEl) return;
  mwRegisterHeart(heartEl);
  const inside = heartEl.querySelector('.mw-heart-inside');
  const tint = heartEl.querySelector('.mw-heart-tint');
  mwRenderWeatherInside(inside, mood);
  const tintOpacity = { sun:0.20, cloud:0.13, rain:0.19, storm:0.52, rainbow:0.17, snow:0.13 };
  if(mood){
    tint.style.animation = '';
    tint.style.background = '';
    tint.style.opacity = tintOpacity[mood] ?? 0.16;
  } else if(opts && opts.solidNeutral){
    tint.style.animation = 'none';
    tint.style.background = 'linear-gradient(155deg, rgba(255,255,255,.15) 0%, rgba(201,192,217,.9) 100%)';
    tint.style.opacity = '1';
  } else {
    tint.style.animation = '';
    tint.style.background = '';
    tint.style.opacity = 0.05;
  }
  heartEl.dataset.mood = mood || '';
  if(opts && opts.flourish) mwFlourish(heartEl);
}

function mwIcon(key, size=26){
  const s = size;
  const icons = {
    sun: `<defs><radialGradient id="g-sun" cx="35%" cy="30%"><stop offset="0%" stop-color="#FFE1B0"/><stop offset="100%" stop-color="#EF9A4E"/></radialGradient></defs>
      <circle cx="12" cy="12" r="4.6" fill="url(#g-sun)"/>
      <g stroke="#EF9A4E" stroke-width="1.8" stroke-linecap="round"><line x1="12" y1="1.8" x2="12" y2="4.4"/><line x1="12" y1="19.6" x2="12" y2="22.2"/><line x1="1.8" y1="12" x2="4.4" y2="12"/><line x1="19.6" y1="12" x2="22.2" y2="12"/><line x1="4.6" y1="4.6" x2="6.4" y2="6.4"/><line x1="17.6" y1="17.6" x2="19.4" y2="19.4"/><line x1="4.6" y1="19.4" x2="6.4" y2="17.6"/><line x1="17.6" y1="6.4" x2="19.4" y2="4.6"/></g>`,
    cloud: `<defs><linearGradient id="g-cloud" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#B7C2EA"/><stop offset="100%" stop-color="#7E8DC0"/></linearGradient></defs>
      <path d="M6.5 17.5a4 4 0 0 1-.4-8 5.2 5.2 0 0 1 10-1.6 3.8 3.8 0 0 1-.8 9.6z" fill="url(#g-cloud)" stroke="#6B7AB0" stroke-width="1"/>`,
    rain: `<defs><linearGradient id="g-rain" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#A9D8DF"/><stop offset="100%" stop-color="#5E9CAE"/></linearGradient></defs>
      <path d="M6.5 13a4 4 0 0 1-.4-8 5.2 5.2 0 0 1 10-1.4 3.8 3.8 0 0 1-.9 7.9z" fill="url(#g-rain)" stroke="#4E8699" stroke-width="1"/>
      <g stroke="#5E9CAE" stroke-width="1.9" stroke-linecap="round"><line x1="8" y1="17.5" x2="6.8" y2="21.2"/><line x1="12" y1="17.5" x2="10.8" y2="21.2"/><line x1="16" y1="17.5" x2="14.8" y2="21.2"/></g>`,
    storm: `<defs><linearGradient id="g-storm" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#B39FD8"/><stop offset="100%" stop-color="#6E5896"/></linearGradient>
      <linearGradient id="g-bolt" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FFD873"/><stop offset="100%" stop-color="#F0A93E"/></linearGradient></defs>
      <path d="M6.5 12.6a4 4 0 0 1-.4-7.9 5.2 5.2 0 0 1 10-1.5 3.8 3.8 0 0 1-.8 9.4z" fill="url(#g-storm)" stroke="#6E5896" stroke-width="1"/>
      <path d="M13 13.5l-3.4 5.6h2.7l-1.7 4.6 4.6-6.2h-2.7z" fill="url(#g-bolt)"/>`,
    fog: `<defs><linearGradient id="g-fog" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#C8B9CE"/><stop offset="100%" stop-color="#9A899E"/></linearGradient></defs>
      <g stroke="url(#g-fog)" stroke-width="2.1" stroke-linecap="round"><line x1="3.5" y1="8" x2="20.5" y2="8"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="3.5" y1="16" x2="20.5" y2="16"/></g>`,
    rainbow: `<path d="M3 16a9 9 0 0 1 18 0" fill="none" stroke="#E39BC0" stroke-width="2.1" stroke-linecap="round"/>
      <path d="M6.3 16a5.7 5.7 0 0 1 11.4 0" fill="none" stroke="#E39BC0" stroke-width="2.1" stroke-linecap="round" opacity="0.75"/>`,
    snow: `<g fill="none" stroke="#9FBEDD" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12.00" y1="12.00" x2="16.60" y2="4.03"/>
        <line x1="12.00" y1="12.00" x2="7.40" y2="4.03"/>
        <line x1="12.00" y1="12.00" x2="2.80" y2="12.00"/>
        <line x1="12.00" y1="12.00" x2="7.40" y2="19.97"/>
        <line x1="12.00" y1="12.00" x2="16.60" y2="19.97"/>
        <path d="M17.70 12.00L19.29 7.44 M17.70 12.00L19.29 16.56 M14.85 7.06L11.70 3.41 M14.85 7.06L19.59 7.96 M9.15 7.06L4.41 7.96 M9.15 7.06L12.30 3.41 M6.30 12.00L4.71 16.56 M6.30 12.00L4.71 7.44 M9.15 16.94L12.30 20.59 M9.15 16.94L4.41 16.04 M14.85 16.94L19.59 16.04 M14.85 16.94L11.70 20.59"/>
      </g>`
  };
  return `<svg viewBox="0 0 24 24" width="${s}" height="${s}">${icons[key]}</svg>`;
}

const state = {
  screen:'welcome', selectedMood:null, entries:[], archiveView:'week',
  editingToday:false, activeTags:[], reminderOn:false, searching:false, activeSearchTags:[],
  lang:'en', lastDetailEntry:null, lastDetailDate:null
};

const STORAGE_KEY = 'moodWeatherData';

function mwSaveState(){
  try{
    const data = {
      entries: state.entries.map(e => ({...e, date: e.date.toISOString()})),
      lang: state.lang,
      reminderOn: state.reminderOn
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }catch(err){
    console.error('Mood Weather: failed to save to localStorage', err);
  }
}

function mwLoadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return;
    const data = JSON.parse(raw);
    if(Array.isArray(data.entries)){
      state.entries = data.entries.map(e => ({...e, date: new Date(e.date)}));
    }
    if(data.lang) state.lang = data.lang;
    if(typeof data.reminderOn === 'boolean') state.reminderOn = data.reminderOn;
  }catch(err){
    console.error('Mood Weather: failed to load from localStorage', err);
  }
}

function mwGuessTags(text){
  if(!text) return [];
  const lower = text.toLowerCase();
  const kw = TAG_KEYWORDS[state.lang];
  const found = [];
  TAG_IDS.forEach(id=>{
    if(kw[id].some(k=>lower.includes(k))) found.push(id);
  });
  return found.slice(0,2);
}

function seedDemoData(){
  const today = new Date();
  const cycle = ['sun','cloud','storm','cloud','rain','snow','sun','rainbow'];
  const notes = [
    'A calm, good day at work.',
    'A quiet, in-between kind of day.',
    'A hard conversation with a friend in the evening.',
    'Nothing special, just quiet. Slept badly though.',
    'A little sad, no real reason.',
    'First snow of the year, felt still.',
    'Met a friend, felt lighter.',
    'Slow morning, good coffee before work.'
  ];
  for(let i=27;i>=1;i--){
    const d = new Date(today);
    d.setDate(d.getDate()-i);
    const idx = (27-i) % cycle.length;
    const note = i<=7 ? notes[idx % notes.length] : '';
    state.entries.push({date:d, mood:cycle[idx], note, tags: mwGuessTags(note)});
  }
}
/* seedDemoData() intentionally not called — archive only reflects real user entries */

function fmtDate(d){
  const lang = state.lang;
  const m = MONTHS_I18N[lang][d.getMonth()];
  return lang==='en' ? (m+' '+d.getDate()) : (d.getDate()+' '+m);
}
function isSameDay(a,b){ return a.toDateString()===b.toDateString(); }
function todayEntry(){ const t=new Date(); return state.entries.find(e=>isSameDay(e.date,t)); }

/* ---------- LANGUAGE ---------- */
const LANG_META = {
  en: { flag:'🇬🇧', name:'English' },
  ru: { flag:'🇷🇺', name:'Русский' },
  uk: { flag:'🇺🇦', name:'Українська' }
};

function mwToggleLangMenu(){
  document.getElementById('lang-menu').classList.toggle('open');
  document.getElementById('lang-current').classList.toggle('open');
}

function mwSelectLang(lang){
  mwSetLang(lang);
  document.getElementById('lang-menu').classList.remove('open');
  document.getElementById('lang-current').classList.remove('open');
}

function mwSetLang(lang){
  state.lang = lang; mwSaveState();
  document.getElementById('mw-html').lang = lang;
  document.getElementById('lang-current-flag').textContent = LANG_META[lang].flag;
  document.getElementById('lang-current-name').textContent = LANG_META[lang].name;
  ['en','ru','uk'].forEach(l=> document.getElementById('lang-option-'+l).classList.toggle('active', l===lang));
  mwApplyStaticStrings();

  if(state.screen==='today') mwRenderToday();
  if(state.screen==='archive'){ mwRenderSearchTagPills(); if(state.searching) mwRunSearch(); else mwRenderArchive(); }
  if(state.screen==='detail' && state.lastDetailDate) mwShowDetail(state.lastDetailEntry, true, state.lastDetailDate);
  if(state.screen==='season') mwRenderSeason();
  if(state.screen==='confirm' && state.lastMood) mwUpdateConfirmTexts();
}

function mwApplyStaticStrings(){
  document.getElementById('welcome-title').textContent = t('welcomeTitle');
  document.getElementById('welcome-sub').textContent = t('welcomeSub');
  document.getElementById('begin-btn').textContent = t('begin');
  document.getElementById('mood-note').placeholder = t('notePlaceholder');
  document.getElementById('change-weather-btn').textContent = t('changeWeather');
  document.getElementById('today-archive-btn').textContent = t('archive');
  document.getElementById('confirm-note').textContent = t('loggedNote');
  document.getElementById('confirm-back-btn').textContent = t('back');
  document.getElementById('confirm-archive-btn').textContent = t('archive');
  document.getElementById('archive-title').textContent = t('yourClimate');
  document.getElementById('search-input').placeholder = t('searchPlaceholder');
  document.getElementById('toggle-week').textContent = t('week');
  document.getElementById('toggle-month').textContent = t('month');
  document.getElementById('export-btn').textContent = t('exportPalette');
  document.getElementById('season-btn').textContent = t('seeYourSeason');
  document.getElementById('season-btn-month').textContent = t('seeYourSeason');
  document.getElementById('detail-back-label').textContent = t('archive');
  document.getElementById('season-back-label').textContent = t('archive');
  document.getElementById('season-title').textContent = t('yourSeason');
  document.getElementById('settings-back-label').textContent = t('back');
  document.getElementById('settings-title').textContent = t('settings');
  document.getElementById('tab-home-label').textContent = t('tabHome');
  document.getElementById('tab-archive-label').textContent = t('tabArchive');
  document.getElementById('tab-settings-label').textContent = t('tabSettings');
  document.getElementById('language-label').textContent = t('language');
  document.getElementById('reminder-label').textContent = t('dailyReminder');
  document.getElementById('reminder-sub').textContent = t('reminderSub');
  document.getElementById('remind-at-label').textContent = t('remindAt');
  document.getElementById('push-note').textContent = t('pushNote');
  document.getElementById('preview-btn').textContent = t('previewNotif');
  document.getElementById('notif-text').textContent = t('notifText');
  document.getElementById('archive-sub').textContent = state.searching ? t('searchByWords') : t('tapDay');
}

function mwGo(screen){
  document.querySelectorAll('.mw-screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('scr-'+screen).classList.add('active');
  state.screen = screen;
  if(screen==='today') mwRenderToday();
  if(screen==='archive'){ mwUpdateDots(); mwCloseSearch(); }
  document.getElementById('mw-phone').setAttribute('data-mood', mwCurrentBgMood());
  mwSyncTabbar(screen);
}

function mwSyncTabbar(screen){
  const tabOf = { welcome:'home', today:'home', confirm:'home', archive:'archive', detail:'archive', season:'archive', settings:'settings' };
  const active = tabOf[screen] || 'home';
  document.getElementById('tab-home').classList.toggle('active', active==='home');
  document.getElementById('tab-archive').classList.toggle('active', active==='archive');
  document.getElementById('tab-settings').classList.toggle('active', active==='settings');
}

function mwTabGo(tab){
  if(tab==='home') mwGo('today');
  else if(tab==='archive'){ mwRenderArchive(); mwGo('archive'); }
  else if(tab==='settings') mwGo('settings');
}

function mwCurrentBgMood(){
  if(state.screen==='welcome') return '';
  if(state.screen==='today') return state.selectedMood || '';
  if(state.screen==='detail') return state.lastMood || '';
  if((state.screen==='confirm' || state.screen==='season') && state.lastMood) return state.lastMood;
  if(state.entries.length) return state.entries[state.entries.length-1].mood;
  return '';
}

/* ---------- TODAY SCREEN ---------- */
function mwRenderToday(){
  const existing = todayEntry();
  const today = new Date();
  document.getElementById('today-week').textContent = WEEKDAYS_I18N[state.lang][today.getDay()];
  document.getElementById('today-date').textContent = fmtDate(today);

  if(existing && !state.editingToday){
    document.getElementById('today-form').style.display = 'none';
    document.getElementById('today-view').style.display = 'block';
    document.getElementById('view-week').textContent = WEEKDAYS_I18N[state.lang][today.getDay()];
    document.getElementById('view-date').textContent = fmtDate(today);
    document.getElementById('view-mood').textContent = t('todayWas') + ' ' + moodInfo(existing.mood).label.toLowerCase();
    document.getElementById('view-note').textContent = existing.note ? existing.note : t('noNote');
    document.getElementById('change-weather-btn').textContent = t('changeWeather');
    document.getElementById('today-archive-btn').textContent = t('archive');
    mwMountHeart('view-heart', existing.mood, { flourish:false });
    document.getElementById('mw-phone').setAttribute('data-mood', existing.mood);
    return;
  }

  document.getElementById('today-form').style.display = 'block';
  document.getElementById('today-view').style.display = 'none';
  document.getElementById('today-form-sub').textContent = existing ? t('todaySubUpdate') : t('todaySubPick');

  const grid = document.getElementById('mood-grid');
  grid.innerHTML = '';
  state.selectedMood = existing ? existing.mood : null;
  state.activeTags = existing ? existing.tags.slice() : [];
  document.getElementById('save-btn').disabled = !state.selectedMood;
  document.getElementById('save-btn').textContent = existing ? t('update') : t('save');

  mwMountHeart('today-heart', state.selectedMood, { flourish:false });

  MOOD_KEYS.forEach(key=>{
    const btn = document.createElement('div');
    btn.className = 'mw-mood-btn' + (state.selectedMood===key ? ' selected' : '');
    btn.innerHTML = mwIcon(key) + `<span>${moodInfo(key).label}</span>`;
    btn.onclick = ()=>{
      document.querySelectorAll('.mw-mood-btn').forEach(b=>b.classList.remove('selected'));
      btn.classList.add('selected');
      state.selectedMood = key;
      document.getElementById('save-btn').disabled = false;
      document.getElementById('mw-phone').setAttribute('data-mood', key);
      mwMountHeart('today-heart', key, { flourish:true });
    };
    grid.appendChild(btn);
  });
  document.getElementById('mood-note').value = existing ? existing.note : '';
  document.getElementById('mood-note').placeholder = t('notePlaceholder');
  mwRenderTagRow();
}

function mwEditToday(){
  state.editingToday = true;
  mwRenderToday();
}

function mwOnNoteInput(){ mwRenderTagRow(); }

function mwRenderTagRow(){
  const row = document.getElementById('tag-row');
  row.innerHTML = '';
  TAG_IDS.forEach(id=>{
    const chip = document.createElement('div');
    const isOn = state.activeTags.includes(id);
    chip.className = 'mw-tag' + (isOn ? ' on' : '');
    chip.textContent = tagLabel(id);
    chip.onclick = ()=>{
      if(isOn){
        state.activeTags = state.activeTags.filter(x=>x!==id);
      } else {
        if(state.activeTags.length >= 2) return;
        state.activeTags.push(id);
      }
      mwRenderTagRow();
    };
    row.appendChild(chip);
  });
}

function mwCheckHardStreak(entriesSorted){
  const last3 = entriesSorted.slice(-3);
  if(last3.length<3) return false;
  return last3.every(e=> e.mood==='storm' || e.mood==='rain');
}

function mwFindSimilarDay(mood, beforeDate){
  const matches = state.entries.filter(e=> e.mood===mood && e.note && e.date < beforeDate);
  if(!matches.length) return null;
  matches.sort((a,b)=> b.date-a.date);
  return matches[0];
}

function mwBuildConfirmExtras(){
  const extra = document.getElementById('confirm-extra');
  extra.innerHTML = '';
  const mood = state.lastMood;
  if(!mood) return;

  const hasStreak = mwCheckHardStreak(state.entries);
  if(hasStreak){
    const card = document.createElement('div');
    card.className = 'mw-extra-card';
    card.innerHTML = `
      <h3>${t('heavierTitle')}</h3>
      <p>${t('heavierDesc')}</p>
      <textarea placeholder="${t('kindnessPlaceholder')}" id="kindness-input"></textarea>
      <button class="mw-btn mw-small" style="margin-top:10px;" onclick="mwSaveKindness()">${t('saveThought')}</button>
    `;
    extra.appendChild(card);
  }

  const todayD = new Date(new Date().setHours(0,0,0,0));
  const similar = mwFindSimilarDay(mood, todayD);
  if(similar){
    const card = document.createElement('div');
    card.className = 'mw-extra-card';
    card.innerHTML = `
      <h3>${t('familiarTitle')}</h3>
      <p>${t('familiarDesc').replace('{date}', fmtDate(similar.date))}</p>
      <div class="mw-note-quote">"${mwEscape(similar.note)}"</div>
    `;
    extra.appendChild(card);
  }
}

function mwUpdateConfirmTexts(){
  document.getElementById('confirm-msg').textContent = moodInfo(state.lastMood).phrase;
  document.getElementById('confirm-note').textContent = t('loggedNote');
  document.getElementById('confirm-back-btn').textContent = t('back');
  document.getElementById('confirm-archive-btn').textContent = t('archive');
  mwBuildConfirmExtras();
}

function mwSave(){
  if(!state.selectedMood) return;
  const note = document.getElementById('mood-note').value.trim();
  const existing = todayEntry();
  const mood = state.selectedMood;
  const tags = state.activeTags.slice();

  if(existing){ existing.mood = mood; existing.note = note; existing.tags = tags; }
  else { state.entries.push({date:new Date(), mood, note, tags}); }
  state.entries.sort((a,b)=>a.date-b.date); mwSaveState();
  state.lastMood = mood;
  state.editingToday = false;

  mwMountHeart('confirm-heart', mood, { flourish:true });
  mwUpdateConfirmTexts();
  mwGo('confirm');
}

function mwSaveKindness(){
  const input = document.getElementById('kindness-input');
  const val = input.value.trim();
  if(!val) return;
  const e = todayEntry();
  if(e) e.kindness = val; mwSaveState();
  input.placeholder = t('kindnessSaved');
  input.value = '';
}

function mwEscape(str){
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

/* ---------- ARCHIVE / SEARCH ---------- */
function mwSetView(view){
  state.archiveView = view;
  document.getElementById('toggle-week').classList.toggle('on', view==='week');
  document.getElementById('toggle-month').classList.toggle('on', view==='month');
  document.getElementById('archive-grid').style.display = view==='week' ? 'grid' : 'none';
  document.getElementById('archive-grid-month').style.display = view==='month' ? 'grid' : 'none';
  document.getElementById('month-actions').style.display = view==='month' ? 'flex' : 'none';
  document.getElementById('season-btn').style.display = view==='month' ? 'none' : 'block';
  mwRenderArchive();
}

let mwMonthEntries = [];

function mwFindEntry(date){
  return state.entries.find(e=> isSameDay(e.date, date)) || null;
}

function mwRenderArchive(){
  const today = new Date();
  const palette = document.getElementById('archive-palette');
  palette.innerHTML = '';
  const wd = WEEKDAYS_I18N[state.lang];

  if(state.archiveView==='week'){
    const grid = document.getElementById('archive-grid');
    grid.innerHTML = '';
    const days = [];
    for(let i=7;i>=0;i--){ const d=new Date(today); d.setDate(d.getDate()-i); days.push(d); }
    days.forEach(date=>{
      const entry = mwFindEntry(date);
      const cell = document.createElement('div');
      const isToday = isSameDay(date, today);
      cell.className = 'mw-day-cell' + (isToday ? ' today' : '') + (entry ? '' : ' no-entry');
      cell.innerHTML = (entry ? mwIcon(entry.mood, 20) : '') + `<span class="mw-day-label">${wd[date.getDay()]}</span>`;
      cell.onclick = ()=> mwShowDetail(entry, false, date);
      grid.appendChild(cell);
    });
    days.forEach(date=>{
      const entry = mwFindEntry(date);
      const sw = document.createElement('span');
      sw.style.background = entry ? MOOD_COLORS[entry.mood] : 'var(--line)';
      palette.appendChild(sw);
    });
  } else {
    const grid = document.getElementById('archive-grid-month');
    grid.innerHTML = '';
    const year = today.getFullYear(), month = today.getMonth();
    const daysInMonth = new Date(year, month+1, 0).getDate();
    const firstDow = new Date(year, month, 1).getDay();
    for(let i=0;i<firstDow;i++){
      const empty = document.createElement('div');
      empty.className = 'mw-day-cell empty';
      grid.appendChild(empty);
    }
    const monthDays = [];
    for(let day=1; day<=daysInMonth; day++){
      const date = new Date(year, month, day);
      monthDays.push(date);
      const entry = mwFindEntry(date);
      const cell = document.createElement('div');
      const isToday = isSameDay(date, today);
      cell.className = 'mw-day-cell' + (isToday ? ' today' : '') + (entry ? '' : ' no-entry');
      cell.innerHTML = (entry ? mwIcon(entry.mood, 15) : '') + `<span class="mw-day-label">${day}</span>`;
      cell.onclick = ()=> mwShowDetail(entry, false, date);
      grid.appendChild(cell);
    }
    mwMonthEntries = monthDays.map(d=> mwFindEntry(d)).filter(Boolean);
    monthDays.forEach(date=>{
      const entry = mwFindEntry(date);
      const sw = document.createElement('span');
      sw.style.background = entry ? MOOD_COLORS[entry.mood] : 'var(--line)';
      palette.appendChild(sw);
    });
  }
}

function mwToggleSearch(){
  state.searching = !state.searching;
  document.getElementById('search-block').style.display = state.searching ? 'block' : 'none';
  document.getElementById('normal-block').style.display = state.searching ? 'none' : 'block';
  document.getElementById('archive-sub').textContent = state.searching ? t('searchByWords') : t('tapDay');
  if(state.searching){ document.getElementById('search-input').focus(); mwRunSearch(); }
}
function mwCloseSearch(){
  state.searching = false;
  document.getElementById('search-block').style.display = 'none';
  document.getElementById('normal-block').style.display = 'block';
  document.getElementById('search-input').value = '';
  state.activeSearchTags = [];
  mwRenderSearchTagPills();
}

function mwRenderSearchTagPills(){
  const wrap = document.getElementById('search-tag-pills');
  wrap.innerHTML = '';
  TAG_IDS.forEach(id=>{
    const chip = document.createElement('div');
    chip.className = 'mw-tag' + (state.activeSearchTags.includes(id) ? ' on' : '');
    chip.textContent = tagLabel(id);
    chip.onclick = ()=>{
      if(state.activeSearchTags.includes(id)) state.activeSearchTags = state.activeSearchTags.filter(x=>x!==id);
      else state.activeSearchTags.push(id);
      mwRenderSearchTagPills();
      mwRunSearch();
    };
    wrap.appendChild(chip);
  });
}
mwRenderSearchTagPills();

function mwRunSearch(){
  const q = document.getElementById('search-input').value.trim().toLowerCase();
  const results = document.getElementById('search-results');
  results.innerHTML = '';
  const hasFilter = q || state.activeSearchTags.length;
  if(!hasFilter){
    const hint = document.createElement('div');
    hint.className = 'mw-sub';
    hint.style.textAlign = 'center'; hint.style.padding = '20px 0';
    hint.textContent = t('searchHint');
    results.appendChild(hint);
    return;
  }
  const matches = state.entries.filter(e=>{
    const textOk = !q || (e.note && e.note.toLowerCase().includes(q));
    const tagsOk = state.activeSearchTags.length===0 || state.activeSearchTags.every(id=>(e.tags||[]).includes(id));
    return textOk && tagsOk;
  });
  matches.slice().reverse().forEach(entry=>{
    const item = document.createElement('div');
    item.className = 'mw-list-item';
    item.innerHTML = `${mwIcon(entry.mood, 24)}<div class="mw-li-text"><div class="mw-li-date">${fmtDate(entry.date)}</div><div class="mw-li-note">${entry.note ? mwEscape(entry.note) : t('noNoteShort')}</div></div>`;
    item.onclick = ()=> mwShowDetail(entry);
    results.appendChild(item);
  });
  if(!matches.length){
    const empty = document.createElement('div');
    empty.className = 'mw-sub';
    empty.style.textAlign = 'center'; empty.style.padding = '20px 0';
    empty.textContent = t('noMatch');
    results.appendChild(empty);
  }
}

function mwExportMonth(){
  const entries = mwMonthEntries.length ? mwMonthEntries : state.entries.slice(-28);
  if(!entries.length) return;
  const barW = 22, h = 160, pad = 20;
  const canvas = document.createElement('canvas');
  canvas.width = entries.length*barW + pad*2;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#F6F1F8';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#4A4458';
  ctx.font = '600 15px sans-serif';
  const months = MONTHS_I18N[state.lang];
  const first = entries[0].date, last = entries[entries.length-1].date;
  ctx.fillText(`Mood Weather — ${months[first.getMonth()]} ${first.getDate()} ${t('exportTo')} ${months[last.getMonth()]} ${last.getDate()}`, pad, 26);
  entries.forEach((entry, i)=>{
    ctx.fillStyle = MOOD_COLORS[entry.mood];
    const x = pad + i*barW;
    const barH = h - 50;
    const r = 6;
    ctx.beginPath();
    ctx.moveTo(x+r, 40);
    ctx.arcTo(x+barW-2, 40, x+barW-2, 40+r, r);
    ctx.lineTo(x+barW-2, 40+barH);
    ctx.lineTo(x, 40+barH);
    ctx.arcTo(x, 40, x+r, 40, r);
    ctx.closePath();
    ctx.fill();
  });
  const link = document.createElement('a');
  link.download = 'mood-weather-palette.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

function mwShowDetail(entry, skipNav, dateForEmpty){
  state.lastDetailEntry = entry;
  const date = entry ? entry.date : dateForEmpty;
  state.lastDetailDate = date;
  document.getElementById('detail-week').textContent = WEEKDAYS_I18N[state.lang][date.getDay()];
  document.getElementById('detail-date').textContent = fmtDate(date);
  const tagRow = document.getElementById('detail-tags');
  tagRow.innerHTML = '';
  if(entry){
    document.getElementById('detail-mood').textContent = moodInfo(entry.mood).label;
    document.getElementById('detail-note').textContent = entry.note ? entry.note : t('noNoteDay');
    mwMountHeart('detail-heart', entry.mood, { flourish:false });
    (entry.tags||[]).forEach(id=>{
      const chip = document.createElement('div');
      chip.className = 'mw-tag on';
      chip.textContent = tagLabel(id);
      tagRow.appendChild(chip);
    });
    state.lastMood = entry.mood;
  } else {
    document.getElementById('detail-mood').textContent = t('dayEmptyTitle');
    document.getElementById('detail-note').textContent = t('dayEmptySub');
    mwMountHeart('detail-heart', null, { flourish:false, solidNeutral:true });
    state.lastMood = null;
  }
  if(!skipNav) mwGo('detail');
}

/* ---------- SEASON ---------- */
function mwRenderSeason(){
  const set = state.entries.slice(-30);
  const counts = {};
  set.forEach(e=> counts[e.mood] = (counts[e.mood]||0)+1);
  let dominant = 'cloud', max = 0;
  Object.keys(counts).forEach(k=>{ if(counts[k]>max){ max=counts[k]; dominant=k; } });

  const last = set[set.length-1];
  let closing = t('closingCalm');
  if(last){
    if(last.mood==='sun' || last.mood==='rainbow') closing = t('closingWarm');
    else if(last.mood==='storm' || last.mood==='rain') closing = t('closingHeavy');
    else if(last.mood==='snow') closing = t('closingSnow');
  }

  const text = t('seasonTemplate')
    .replace(/\{n\}/g, set.length)
    .replace('{mood}', moodInfo(dominant).label.toLowerCase())
    .replace('{count}', max)
    .replace('{closing}', closing);
  document.getElementById('season-text').textContent = text;
  document.getElementById('mw-phone').setAttribute('data-mood', dominant);
  state.lastMood = dominant;
  mwMountHeart('season-heart', dominant, { flourish:false });

  const palette = document.getElementById('season-palette');
  palette.innerHTML = '';
  set.forEach(e=>{
    const sw = document.createElement('span');
    sw.style.background = MOOD_COLORS[e.mood];
    palette.appendChild(sw);
  });
}

/* ---------- SETTINGS ---------- */
function mwToggleReminder(){
  state.reminderOn = !state.reminderOn;
  document.getElementById('reminder-switch').classList.toggle('on', state.reminderOn);
  document.getElementById('reminder-time-row').style.display = state.reminderOn ? 'flex' : 'none';
}
function mwPreviewNotif(){
  const banner = document.getElementById('mw-notif');
  banner.classList.add('show');
  setTimeout(()=> banner.classList.remove('show'), 3200);
}

const dotScreens = ['welcome','today','archive'];
function mwUpdateDots(){ /* replaced by tabbar navigation */ }
mwUpdateDots();

if (typeof window !== 'undefined') {
  window.mwGo = mwGo;
  window.mwEditToday = mwEditToday;
  window.mwSave = mwSave;
  window.mwSaveKindness = mwSaveKindness;
  window.mwRenderArchive = mwRenderArchive;
  window.mwSetView = mwSetView;
  window.mwToggleSearch = mwToggleSearch;
  window.mwRunSearch = mwRunSearch;
  window.mwExportMonth = mwExportMonth;
  window.mwRenderSeason = mwRenderSeason;
  window.mwOnNoteInput = mwOnNoteInput;
  window.mwPreviewNotif = mwPreviewNotif;
  window.mwToggleReminder = mwToggleReminder;
  window.mwTabGo = mwTabGo;
}

/* ---------- INIT ---------- */
mwInitHeartClips();
mwLoadState();
mwSetLang(state.lang);
mwMountHeart('welcome-heart', null, { flourish:false });
requestAnimationFrame(mwBreatheLoop);