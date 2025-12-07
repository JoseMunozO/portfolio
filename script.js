// Multilingual content
const translations = {
    es: {
        greeting: "Hola, soy",
        tagline: "Full Stack Developer in Training",
        bio: "Estudiante apasionado por el desarrollo web, combinando creatividad e impulso para crear experiencias digitales únicas. Actualmente dominando JavaScript, HTML y CSS, próximamente expandiendo hacia Java, React y Node.js.",
        location: "Höör, Suecia",
        btnConnect: "Conectemos",
        btnProjects: "Ver Proyectos",
        aboutTitle: "Sobre Mí",
        aboutP1: "Soy un desarrollador en formación con una mentalidad creativa y un enfoque impulsivo que me lleva a explorar nuevas tecnologías constantemente. Actualmente enfocado en mejorar mi calidad de vida mientras construyo bases sólidas en desarrollo full stack.",
        aboutP2: "Mi viaje en el código comenzó con las tecnologías fundamentales del web, y en enero de 2025 daré el siguiente paso hacia Java, React y Node.js. Cada línea de código es una oportunidad para crear algo significativo.",
        skillsTitle: "Habilidades",
        skillsCurrent: "Actualmente",
        skillsUpcoming: "Próximamente (Enero 2025)",
        skillsSoft: "Soft Skills",
        softSkill1: "Pensamiento Creativo",
        softSkill2: "Toma de Decisiones Rápida",
        softSkill3: "Aprendizaje Continuo",
        softSkill4: "Resolución de Problemas",
        softSkill5: "Adaptabilidad",
        projectsTitle: "Proyectos",
        projectStatus: "En Desarrollo",
        project1Title: "Boutique de Velas Artesanales",
        project1Desc: "Un proyecto híbrido que combina e-commerce con blog personal. Diseñado con una estética vintage que refleja la artesanía de las velas hechas a mano. Este proyecto explora la intersección entre funcionalidad comercial y narrativa personal, creando una experiencia única para los visitantes.",
        project2Title: "Proyecto Personal",
        project2Desc: "Segundo proyecto en desarrollo. Detalles próximamente...",
        contactTitle: "Contacto",
        contactIntro: "¿Tienes un proyecto en mente o simplemente quieres conectar? Me encantaría saber de ti. Siempre estoy abierto a nuevas oportunidades y colaboraciones.",
        footer: "Diseñado y desarrollado con creatividad e impulso."
    },
    sv: {
        greeting: "Hej, jag är",
        tagline: "Full Stack Utvecklare under Utbildning",
        bio: "Passionerad webbutvecklingsstudent som kombinerar kreativitet och driv för att skapa unika digitala upplevelser. För närvarande behärskar JavaScript, HTML och CSS, snart expanderar till Java, React och Node.js.",
        location: "Höör, Sverige",
        btnConnect: "Låt oss koppla",
        btnProjects: "Se Projekt",
        aboutTitle: "Om Mig",
        aboutP1: "Jag är en utvecklare under utbildning med ett kreativt tankesätt och en impulsiv approach som driver mig att ständigt utforska nya teknologier. För närvarande fokuserad på att förbättra min livskvalitet samtidigt som jag bygger en solid grund inom full stack-utveckling.",
        aboutP2: "Min resa i kod började med webbens grundläggande teknologier, och i januari 2025 tar jag nästa steg mot Java, React och Node.js. Varje rad kod är en möjlighet att skapa något meningsfullt.",
        skillsTitle: "Färdigheter",
        skillsCurrent: "För Närvarande",
        skillsUpcoming: "Snart (Januari 2025)",
        skillsSoft: "Mjuka Färdigheter",
        softSkill1: "Kreativt Tänkande",
        softSkill2: "Snabba Beslut",
        softSkill3: "Kontinuerligt Lärande",
        softSkill4: "Problemlösning",
        softSkill5: "Anpassningsförmåga",
        projectsTitle: "Projekt",
        projectStatus: "Under Utveckling",
        project1Title: "Handgjorda Ljus Butik",
        project1Desc: "Ett hybridprojekt som kombinerar e-handel med personlig blogg. Designad med en vintage estetik som speglar hantverket bakom handgjorda ljus. Detta projekt utforskar skärningspunkten mellan kommersiell funktionalitet och personligt berättande, vilket skapar en unik upplevelse för besökare.",
        project2Title: "Personligt Projekt",
        project2Desc: "Andra projektet under utveckling. Detaljer kommer snart...",
        contactTitle: "Kontakt",
        contactIntro: "Har du ett projekt i åtanke eller vill bara koppla? Jag skulle älska att höra från dig. Jag är alltid öppen för nya möjligheter och samarbeten.",
        footer: "Designad och utvecklad med kreativitet och driv."
    },
    en: {
        greeting: "Hi, I'm",
        tagline: "Full Stack Developer in Training",
        bio: "Passionate web development student combining creativity and drive to create unique digital experiences. Currently mastering JavaScript, HTML, and CSS, soon expanding to Java, React, and Node.js.",
        location: "Höör, Sweden",
        btnConnect: "Let's Connect",
        btnProjects: "View Projects",
        aboutTitle: "About Me",
        aboutP1: "I'm a developer in training with a creative mindset and an impulsive approach that drives me to constantly explore new technologies. Currently focused on improving my quality of life while building solid foundations in full stack development.",
        aboutP2: "My journey in code began with web fundamentals, and in January 2025 I'll take the next step towards Java, React, and Node.js. Every line of code is an opportunity to create something meaningful.",
        skillsTitle: "Skills",
        skillsCurrent: "Currently",
        skillsUpcoming: "Coming Soon (January 2025)",
        skillsSoft: "Soft Skills",
        softSkill1: "Creative Thinking",
        softSkill2: "Quick Decision Making",
        softSkill3: "Continuous Learning",
        softSkill4: "Problem Solving",
        softSkill5: "Adaptability",
        projectsTitle: "Projects",
        projectStatus: "In Development",
        project1Title: "Artisan Candle Boutique",
        project1Desc: "A hybrid project combining e-commerce with a personal blog. Designed with a vintage aesthetic that reflects the craftsmanship of handmade candles. This project explores the intersection between commercial functionality and personal storytelling, creating a unique experience for visitors.",
        project2Title: "Personal Project",
        project2Desc: "Second project in development. Details coming soon...",
        contactTitle: "Contact",
        contactIntro: "Have a project in mind or just want to connect? I'd love to hear from you. I'm always open to new opportunities and collaborations.",
        footer: "Designed and developed with creativity and drive."
    }
};

// Language switcher
let currentLang = 'es';

// Sticky header scroll effect
const header = document.getElementById('header');
const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        if (scrollIndicator) {
            scrollIndicator.style.opacity = '0';
        }
    } else {
        header.classList.remove('scrolled');
        if (scrollIndicator) {
            scrollIndicator.style.opacity = '';
        }
    }
});

function updateContent(lang) {
    const content = translations[lang];
    
    // Update all text content with smooth transition
    document.querySelector('.greeting').style.opacity = '0';
    document.querySelector('.tagline').style.opacity = '0';
    document.querySelector('.bio').style.opacity = '0';
    
    setTimeout(() => {
        document.querySelector('.greeting').textContent = content.greeting;
        document.querySelector('.tagline').textContent = content.tagline;
        document.querySelector('.bio').textContent = content.bio;
        document.querySelector('.location').innerHTML = '📍 ' + content.location;
        
        // Buttons
        document.querySelectorAll('.btn-primary')[0].textContent = content.btnConnect;
        document.querySelectorAll('.btn-secondary')[0].textContent = content.btnProjects;
        
        // About section
        document.querySelector('#about .section-title').textContent = content.aboutTitle;
        const aboutParagraphs = document.querySelectorAll('#about p');
        aboutParagraphs[0].textContent = content.aboutP1;
        aboutParagraphs[1].textContent = content.aboutP2;
        
        // Skills section
        document.querySelector('#skills .section-title').textContent = content.skillsTitle;
        const skillHeaders = document.querySelectorAll('.skill-category h3');
        skillHeaders[0].textContent = content.skillsCurrent;
        skillHeaders[1].textContent = content.skillsUpcoming;
        skillHeaders[2].textContent = content.skillsSoft;
        
        // Soft skills
        const softSkills = document.querySelectorAll('.skill-category:last-child .skill-list li');
        softSkills[0].textContent = content.softSkill1;
        softSkills[1].textContent = content.softSkill2;
        softSkills[2].textContent = content.softSkill3;
        softSkills[3].textContent = content.softSkill4;
        softSkills[4].textContent = content.softSkill5;
        
        // Projects section
        document.querySelector('#projects .section-title').textContent = content.projectsTitle;
        const projectStatuses = document.querySelectorAll('.project-status');
        projectStatuses.forEach(status => status.textContent = content.projectStatus);
        
        const projectTitles = document.querySelectorAll('.project-card h3');
        const projectDescs = document.querySelectorAll('.project-card p');
        projectTitles[0].textContent = content.project1Title;
        projectDescs[0].textContent = content.project1Desc;
        projectTitles[1].textContent = content.project2Title;
        projectDescs[1].textContent = content.project2Desc;
        
        // Contact section
        document.querySelector('#contact .section-title').textContent = content.contactTitle;
        document.querySelector('#contact > p').textContent = content.contactIntro;
        
        // Footer
        document.querySelector('footer p').innerHTML = `&copy; 2024 Jose Muñoz. ${content.footer}`;
        
        // Fade back in
        document.querySelector('.greeting').style.opacity = '1';
        document.querySelector('.tagline').style.opacity = '1';
        document.querySelector('.bio').style.opacity = '1';
    }, 200);
}

// Language button handlers
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        currentLang = lang;
        
        // Update active state
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update content
        updateContent(lang);
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});