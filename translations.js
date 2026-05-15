const translations = {
  en: {
    heroTitle: "Full Stack Software Developer",
    heroSubtitle: "Passionate about building scalable web applications with modern technologies. Focused on clean code, performance, and delivering excellent user experiences.",
    about: "Full Stack Developer with practical experience in building complete web solutions — from frontend to backend and databases. I am a fast learner with strong problem-solving skills.",
    exp1: "Developing full-stack features and maintaining web applications.",
    exp2: "Developed and launched personal and client web projects. Freelance.",
    exp3: "Organizing and conducting video broadcasts, working with audiences, advertisers and sponsors.",
    exp4: "Settled in Finland, prepared documents, studied Finnish language courses, and completed working language practices.",
    exp5: "Formation of applications for the production of hoses. Working with clients, preparation of price lists, and organization of warehouse premises.",
    exp6: "Checking the quality of manufactured products. Identification and localization of defects.",
    exp7: "General machine operation in manufacturing environment.",
    projectDesc: "Web platform that helps Finnish housing companies (taloyhtiöt) plan, design, and tender EV charging solutions.",
    contactText: "Open to full-time or contract opportunities in Full Stack Development."
  },
  ru: {
    heroTitle: "Full Stack Разработчик",
    heroSubtitle: "Страстно увлечён созданием масштабируемых веб-приложений с использованием современных технологий. Акцент на чистом коде, производительности и отличном пользовательском опыте.",
    about: "Full Stack разработчик с практическим опытом создания полноценных веб-решений — от фронтенда до бэкенда и баз данных. Быстро обучаюсь, обладаю сильными навыками решения задач.",
    exp1: "Разработка full-stack функционала и поддержка веб-приложений.",
    exp2: "Разработка и запуск частных клиентских веб-проектов. Фриланс.",
    exp3: "Организация и проведение видеотрансляций, работа с аудиторией, рекламодателями и спонсорами.",
    exp4: "Переезд в Финляндию, подготовка документов, изучение финского языка и прохождение языковой практики.",
    exp5: "Формирование заявок на производство шлангов. Работа с клиентами, подготовка прайс-листов, организация складских помещений.",
    exp6: "Проверка качества изготовленной продукции. Выявление и локализация дефектов.",
    exp7: "Работа на универсальных станках в производственной среде.",
    projectDesc: "Веб-платформа, которая помогает финским жилищным компаниям (taloyhtiöt) планировать, проектировать и проводить тендеры на решения для зарядки электромобилей.",
    contactText: "Открыт для постоянной работы или контрактов в сфере Full Stack разработки."
  }
};

function switchLanguage(lang) {
  document.documentElement.lang = lang;

  // Style active button
  document.getElementById('btn-en').classList.toggle('bg-blue-600', lang === 'en');
  document.getElementById('btn-en').classList.toggle('text-white', lang === 'en');
  document.getElementById('btn-ru').classList.toggle('bg-blue-600', lang === 'ru');
  document.getElementById('btn-ru').classList.toggle('text-white', lang === 'ru');

  // Update content
  document.getElementById('hero-title').textContent = translations[lang].heroTitle;
  document.getElementById('hero-subtitle').textContent = translations[lang].heroSubtitle;
  document.getElementById('about-text').innerHTML = translations[lang].about;
  document.getElementById('exp1').textContent = translations[lang].exp1;
  document.getElementById('exp2').textContent = translations[lang].exp2;
  document.getElementById('exp3').textContent = translations[lang].exp3;
  document.getElementById('exp4').textContent = translations[lang].exp4;
  document.getElementById('exp5').textContent = translations[lang].exp5;
  document.getElementById('exp6').textContent = translations[lang].exp6;
  document.getElementById('exp7').textContent = translations[lang].exp7;
  document.getElementById('project-desc').textContent = translations[lang].projectDesc;
  document.getElementById('contact-text').textContent = translations[lang].contactText;

  // Update all elements with data-en / data-ru
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

function detectLanguage() {
  const userLang = navigator.language || navigator.userLanguage || 'en';
  return userLang.startsWith('ru') ? 'ru' : 'en';
}