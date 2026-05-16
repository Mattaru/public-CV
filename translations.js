const translations = {
  en: {
    heroTitle: "Full Stack Software Developer",
    heroSubtitle: "Passionate about building scalable web applications with modern technologies. Focused on clean code, performance, and delivering excellent user experiences.",
    about: "Full Stack Developer with practical experience in building complete web solutions — from frontend to backend and databases. I am a fast learner with strong problem-solving skills.",
    exp1: "Designed and implemented core full-stack features for Latausplättä, an EV charging planning platform for Finnish housing companies, focusing on scalable architecture, user workflows, and reliable web performance.",
    exp2: "Developed and launched personal and client web projects. Freelance.",
    projectDesc: "Web platform built for Lattori Oy that helps Finnish housing companies (taloyhtiöt) plan, design, and tender EV charging solutions.",
    contactText: "Open to full-time or contract opportunities in Full Stack Development."
  },
  ru: {
    heroTitle: "Full Stack Разработчик",
    heroSubtitle: "Увлечён созданием масштабируемых веб-приложений с использованием современных технологий. Акцент на чистом коде, производительности и отличном пользовательском опыте.",
    about: "Full Stack разработчик с практическим опытом создания полноценных веб-решений — от фронтенда до бэкенда и баз данных. Быстро обучаюсь, обладаю сильными навыками решения задач.",
    exp1: "Проектировал и реализовывал ключевые full-stack функции для Latausplttä, платформы планирования зарядки электромобилей для финских жилищных компаний, с акцентом на масштабируемую архитектуру, пользовательские сценарии и надёжную работу веб-приложения.",
    exp2: "Разработка и запуск частных клиентских веб-проектов. Фриланс.",
    projectDesc: "Веб-платформа, созданная для Lattori Oy, которая помогает финским жилищным компаниям (taloyhtiöt) планировать, проектировать и проводить тендеры на решения для зарядки электромобилей.",
    contactText: "Открыт для постоянной работы или контрактов в сфере Full Stack разработки."
  }
};

function switchLanguage(lang) {
  document.documentElement.lang = lang;

  // Update toggle state
  const enLink = document.getElementById('lang-en');
  const ruLink = document.getElementById('lang-ru');
  
  if (lang === 'ru') {
    enLink.classList.remove('active');
    enLink.classList.add('inactive');
    ruLink.classList.remove('inactive');
    ruLink.classList.add('active');
  } else {
    enLink.classList.remove('inactive');
    enLink.classList.add('active');
    ruLink.classList.remove('active');
    ruLink.classList.add('inactive');
  }

  // Map of element IDs to translation keys
  const elementUpdates = {
    'hero-title': 'heroTitle',
    'hero-subtitle': 'heroSubtitle',
    'about-text': 'about',
    'exp1': 'exp1',
    'exp2': 'exp2',
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

  // Close mobile menu after language switch
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
  }
}

function detectLanguage() {
  const userLang = navigator.language || navigator.userLanguage || 'en';
  return userLang.startsWith('ru') ? 'ru' : 'en';
};