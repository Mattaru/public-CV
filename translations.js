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

  // Style active buttons
  ['btn-en', 'btn-ru'].forEach(btnId => {
    const isActive = (btnId === 'btn-en' && lang === 'en') || (btnId === 'btn-ru' && lang === 'ru');
    const btn = document.getElementById(btnId);
    btn.classList.toggle('bg-blue-600', isActive);
    btn.classList.toggle('text-white', isActive);
  });

  // Map of element IDs to translation keys
  const elementUpdates = {
    'hero-title': 'heroTitle',
    'hero-subtitle': 'heroSubtitle',
    'about-text': 'about',
    'exp1': 'exp1',
    'exp2': 'exp2',
    'exp3': 'exp3',
    'exp4': 'exp4',
    'exp5': 'exp5',
    'exp6': 'exp6',
    'exp7': 'exp7',
    'project-desc': 'projectDesc',
    'contact-text': 'contactText'
  };

  // Update content from mapping
  Object.entries(elementUpdates).forEach(([elementId, translationKey]) => {
    const el = document.getElementById(elementId);
    if (el) {
      const isHtml = elementId === 'about-text';
      if (isHtml) {
        el.innerHTML = translations[lang][translationKey];
      } else {
        el.textContent = translations[lang][translationKey];
      }
    }
  });

  // Update all elements with data-en / data-ru
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

function detectLanguage() {
  const userLang = navigator.language || navigator.userLanguage || 'en';
  return userLang.startsWith('ru') ? 'ru' : 'en';
};