// Multilingual content
const translations = {
    es: {
        greeting: "Hola, soy",
        name: "Jose Carlos Muñoz",
        tagline: "Full Stack Developer en Formación",
        bio: "Estudiante de Fullstack con enfoque en Java y JavaScript. Mi pasión es desarrollar soluciones digitales mientras aprendo tanto frontend como backend en entornos modernos. Con experiencia en liderazgo de equipos y resolución de problemas.",
        location: "Höör, Suecia",
        btnConnect: "Contáctame",
        btnExperience: "Ver Experiencia",
        
        // About
        aboutTitle: "Sobre Mí",
        aboutP1: "Actualmente estudio para ser Fullstackutvecklare con enfoque en Java y JavaScript, con especial interés en la aplicación práctica a través de LIA (Aprendizaje en el Trabajo). Tengo experiencia trabajando de forma orientada a objetivos y estructurada, y estoy acostumbrado a la resolución de problemas y al trabajo en equipo.",
        aboutP2: "Mi motivación es desarrollar mis habilidades técnicas y contribuir con soluciones que crean valor en proyectos digitales, mientras aprendo a construir soluciones tanto de frontend como de backend en entornos modernos de desarrollo web.",
        
        // Skills
        skillsTitle: "Habilidades Técnicas",
        skillsCat1: "Desarrollo Web",
        skillsCat2: "Próximamente (2026-2027)",
        skillsCat3: "Diseño & Herramientas",
        skillsCat4: "Soft Skills",
        
        // Experience
        experienceTitle: "Experiencia Laboral",
        job1Title: "Driftledare/Arbetsledare",
        job1Company: "Max Burger",
        job1Period: "2024 - Actualidad",
        job1Resp1: "Dirección de operaciones diarias, incluyendo apertura, cierre y tareas administrativas",
        job1Resp2: "Atención al cliente y coordinación con colaboradores para lograr una organización eficiente",
        job1Resp3: "Resolución de problemas en tiempo real para garantizar la satisfacción del cliente",
        job1Resp4: "Gestión de quejas de clientes e implementación de soluciones efectivas",
        job1Resp5: "Control de inventario y supervisión de operaciones diarias",
        
        job2Title: "Medarbetare",
        job2Company: "Pugerups & Böketofta Jordbrukskompani AB",
        job2Period: "2024 - 2025",
        job2Resp1: "Trabajo en diversas actividades agrícolas, incluyendo conducción de tractor",
        job2Resp2: "Tareas de jardinería, carpintería y pintura",
        
        job3Title: "Medarbetare",
        job3Company: "Max Burger",
        job3Period: "2021 - 2024",
        job3Resp1: "Realicé diversas tareas dentro de las operaciones del restaurante mientras adquiría conocimientos y experiencia para avanzar a posiciones de liderazgo",
        job3Resp2: "Completé la formación para Driftledare en febrero de 2023",
        job3Resp3: "Servicio al cliente personalizado con enfoque en alta calidad",
        job3Resp4: "Desarrollé habilidades en gestión de quejas y resolución de conflictos",
        
        job4Title: "Samarbetare",
        job4Company: "StudentConsult - DHL Freight, Värnamo",
        job4Period: "2021",
        
        // Education
        educationTitle: "Educación",
        edu1Title: "Fullstackutvecklare",
        edu1Institution: "Teknikhögskolan Lund",
        edu1Period: "2025 - 2027",
        edu1Detail1: "Desarrollo fullstack con enfoque en Java, JavaScript, React, Node.js",
        edu1Detail2: "HTML, CSS, gestión de bases de datos (SQL y NoSQL)",
        edu1Detail3: "Control de versiones con Git a nivel básico e intermedio",
        liaTitle: "Prácticas LIA:",
        lia1: "📅 LIA 1: 7 Dic 2026 - 19 Feb 2027",
        lia2: "📅 LIA 2: 1 Mar 2027 - 4 Jun 2027",
        
        edu2Title: "CAD Konstruktor",
        edu2Institution: "Jönköping University",
        edu2Period: "2021 - 2023",
        edu2Detail1: "Conocimientos en Solidworks, diseño gráfico y CAD",
        edu2Detail2: "Nivel básico e intermedio",
        
        edu3Title: "IT",
        edu3Institution: "NTI-Gymnasie Kristianstad",
        edu3Period: "2018 - 2020",
        edu3Detail1: "Formación en tecnología, desarrollo web y programación",
        edu3Detail2: "Experiencia en HTML, PHP, C#, Javascript y SQL",
        
        // Certifications
        certificationsTitle: "Cursos & Certificaciones",
        cert1: "SE Me & MAX Operations Employee",
        cert2: "Seguridad Alimentaria",
        cert3: "PCI-DSS y Conciencia de Seguridad",
        cert4: "Trabajo Sistemático del Medio Ambiente (SAM)",
        cert5: "Reclutamiento - Personal de Oficina",
        cert6: "Sostenibilidad - Oficina",
        
        // Languages
        languagesTitle: "Idiomas",
        langSpanish: "Español",
        langSwedish: "Sueco",
        langEnglish: "Inglés",
        langNative: "Nativo",
        langFluent: "Fluido",
        langBasic: "Básico",
        
        // Contact
        contactTitle: "Contacto",
        contactIntro: "¿Tienes un proyecto en mente o buscas un developer para LIA? Me encantaría saber de ti. Siempre estoy abierto a nuevas oportunidades y colaboraciones.",
        contactEmail: "Email",
        contactPhone: "Teléfono",
        contactLinkedIn: "LinkedIn",
        contactLocation: "Ubicación",
        referencesTitle: "Referencias Disponibles",
        
        footer: "Diseñado y desarrollado con pasión."
    },
    
    sv: {
        greeting: "Hej, jag är",
        name: "Jose Carlos Muñoz",
        tagline: "Full Stack Utvecklare under Utbildning",
        bio: "Fullstackstudent med fokus på Java och JavaScript. Min passion är att utveckla digitala lösningar samtidigt som jag lär mig både frontend och backend i moderna miljöer. Med erfarenhet av teamledning och problemlösning.",
        location: "Höör, Sverige",
        btnConnect: "Kontakta mig",
        btnExperience: "Se Erfarenhet",
        
        aboutTitle: "Om Mig",
        aboutP1: "Jag studerar för närvarande till Fullstackutvecklare med fokus på Java och JavaScript, med särskilt intresse för praktisk tillämpning genom LIA (Lärande i arbete). Jag har erfarenhet av att arbeta målinriktat och strukturerat, och är van vid problemlösning och samarbete i team.",
        aboutP2: "Min drivkraft är att utveckla mina tekniska färdigheter och bidra med lösningar som skapar värde i digitala projekt, samtidigt som jag lär mig att bygga både front- och backendlösningar i moderna webbutvecklingsmiljöer.",
        
        skillsTitle: "Tekniska Färdigheter",
        skillsCat1: "Webbutveckling",
        skillsCat2: "Kommande (2026-2027)",
        skillsCat3: "Design & Verktyg",
        skillsCat4: "Mjuka Färdigheter",
        
        experienceTitle: "Arbetslivserfarenhet",
        job1Title: "Driftledare/Arbetsledare",
        job1Company: "Max Burger",
        job1Period: "2024 - Nuvarande",
        job1Resp1: "Ledning av dagliga verksamheten, inklusive öppning, stängning och administrativa uppgifter",
        job1Resp2: "Kundbemötande och samordning med medarbetare för att uppnå effektiv organisation",
        job1Resp3: "Problemlösning i realtid för att säkerställa kundnöjdhet",
        job1Resp4: "Hantering av kundklagomål och implementering av effektiva lösningar",
        job1Resp5: "Lagerkontroll inventariehantering och övervakning av dagliga operationer",
        
        job2Title: "Medarbetare",
        job2Company: "Pugerups & Böketofta Jordbrukskompani AB",
        job2Period: "2024 - 2025",
        job2Resp1: "Arbete med olika jordbruksaktiviteter, inklusive traktorkörning",
        job2Resp2: "Trädgårdssysslor, snickeri och måleri",
        
        job3Title: "Medarbetare",
        job3Company: "Max Burger",
        job3Period: "2021 - 2024",
        job3Resp1: "Utförde olika arbetsuppgifter inom restaurangens drift samtidigt som jag förvärvade kunskap och erfarenhet för att avancera till ledarskapspositioner",
        job3Resp2: "Slutförde utbildningen för Driftledare i februari 2023",
        job3Resp3: "Personlig kundservice med fokus på hög kvalitet",
        job3Resp4: "Utvecklade färdigheter i klagomålshantering och konflikthantering",
        
        job4Title: "Samarbetare",
        job4Company: "StudentConsult - DHL Freight, Värnamo",
        job4Period: "2021",
        
        educationTitle: "Utbildning",
        edu1Title: "Fullstackutvecklare",
        edu1Institution: "Teknikhögskolan Lund",
        edu1Period: "2025 - 2027",
        edu1Detail1: "Fullstackutveckling med fokus på Java, JavaScript, React, Node.js",
        edu1Detail2: "HTML, CSS, databashantering (SQL och NoSQL)",
        edu1Detail3: "Versionshantering med Git på grund- och medelnivå",
        liaTitle: "LIA-praktik:",
        lia1: "📅 LIA 1: 7 Dec 2026 - 19 Feb 2027",
        lia2: "📅 LIA 2: 1 Mar 2027 - 4 Jun 2027",
        
        edu2Title: "CAD Konstruktor",
        edu2Institution: "Jönköping University",
        edu2Period: "2021 - 2023",
        edu2Detail1: "Kunskaper i Solidworks, grafisk design och CAD",
        edu2Detail2: "Grund- och medelnivå",
        
        edu3Title: "IT",
        edu3Institution: "NTI-Gymnasie Kristianstad",
        edu3Period: "2018 - 2020",
        edu3Detail1: "Utbildning inom teknik, webbutveckling och programmering",
        edu3Detail2: "Erfarenhet av HTML, PHP, C#, Javascript och SQL",
        
        certificationsTitle: "Kurser & Certifieringar",
        cert1: "SE Me & MAX Operations Employee",
        cert2: "Matsäkerhet",
        cert3: "PCI-DSS och säkerhetsmedvetenhet",
        cert4: "Systematiskt Arbetsmiljöarbete (SAM)",
        cert5: "Rekrytering - Kontorspersonal",
        cert6: "Hållbarhet - Kontor",
        
        languagesTitle: "Språk",
        langSpanish: "Spanska",
        langSwedish: "Svenska",
        langEnglish: "Engelska",
        langNative: "Modersmål",
        langFluent: "Flytande",
        langBasic: "Grundläggande",
        
        contactTitle: "Kontakt",
        contactIntro: "Har du ett projekt i åtanke eller söker en utvecklare för LIA? Jag skulle älska att höra från dig. Jag är alltid öppen för nya möjligheter och samarbeten.",
        contactEmail: "E-post",
        contactPhone: "Telefon",
        contactLinkedIn: "LinkedIn",
        contactLocation: "Plats",
        referencesTitle: "Referenser Tillgängliga",
        
        footer: "Designad och utvecklad med passion."
    },
    
    en: {
        greeting: "Hi, I'm",
        name: "Jose Carlos Muñoz",
        tagline: "Full Stack Developer in Training",
        bio: "Full Stack student focused on Java and JavaScript. My passion is developing digital solutions while learning both frontend and backend in modern environments. With experience in team leadership and problem-solving.",
        location: "Höör, Sweden",
        btnConnect: "Contact Me",
        btnExperience: "View Experience",
        
        aboutTitle: "About Me",
        aboutP1: "I am currently studying to become a Full Stack Developer with a focus on Java and JavaScript, with particular interest in practical application through LIA (Learning in the Workplace). I have experience working in a goal-oriented and structured manner, and am accustomed to problem-solving and teamwork.",
        aboutP2: "My drive is to develop my technical skills and contribute solutions that create value in digital projects, while learning to build both frontend and backend solutions in modern web development environments.",
        
        skillsTitle: "Technical Skills",
        skillsCat1: "Web Development",
        skillsCat2: "Coming Soon (2026-2027)",
        skillsCat3: "Design & Tools",
        skillsCat4: "Soft Skills",
        
        experienceTitle: "Work Experience",
        job1Title: "Operations Manager/Team Leader",
        job1Company: "Max Burger",
        job1Period: "2024 - Present",
        job1Resp1: "Management of daily operations, including opening, closing and administrative tasks",
        job1Resp2: "Customer service and coordination with staff to achieve efficient organization",
        job1Resp3: "Real-time problem solving to ensure customer satisfaction",
        job1Resp4: "Handling customer complaints and implementing effective solutions",
        job1Resp5: "Inventory control and supervision of daily operations",
        
        job2Title: "Employee",
        job2Company: "Pugerups & Böketofta Jordbrukskompani AB",
        job2Period: "2024 - 2025",
        job2Resp1: "Work with various agricultural activities, including tractor driving",
        job2Resp2: "Gardening tasks, carpentry and painting",
        
        job3Title: "Employee",
        job3Company: "Max Burger",
        job3Period: "2021 - 2024",
        job3Resp1: "Performed various tasks within the restaurant's operations while acquiring knowledge and experience to advance to leadership positions",
        job3Resp2: "Completed training for Operations Manager in February 2023",
        job3Resp3: "Personal customer service with focus on high quality",
        job3Resp4: "Developed skills in complaint handling and conflict resolution",
        
        job4Title: "Collaborator",
        job4Company: "StudentConsult - DHL Freight, Värnamo",
        job4Period: "2021",
        
        educationTitle: "Education",
        edu1Title: "Full Stack Developer",
        edu1Institution: "Teknikhögskolan Lund",
        edu1Period: "2025 - 2027",
        edu1Detail1: "Full stack development focused on Java, JavaScript, React, Node.js",
        edu1Detail2: "HTML, CSS, database management (SQL and NoSQL)",
        edu1Detail3: "Version control with Git at basic and intermediate level",
        liaTitle: "LIA Internships:",
        lia1: "📅 LIA 1: Dec 7, 2026 - Feb 19, 2027",
        lia2: "📅 LIA 2: Mar 1, 2027 - Jun 4, 2027",
        
        edu2Title: "CAD Designer",
        edu2Institution: "Jönköping University",
        edu2Period: "2021 - 2023",
        edu2Detail1: "Knowledge in Solidworks, graphic design and CAD",
        edu2Detail2: "Basic and intermediate level",
        
        edu3Title: "IT",
        edu3Institution: "NTI-Gymnasie Kristianstad",
        edu3Period: "2018 - 2020",
        edu3Detail1: "Education in technology, web development and programming",
        edu3Detail2: "Experience in HTML, PHP, C#, Javascript and SQL",
        
        certificationsTitle: "Courses & Certifications",
        cert1: "SE Me & MAX Operations Employee",
        cert2: "Food Safety",
        cert3: "PCI-DSS and Security Awareness",
        cert4: "Systematic Work Environment Management (SAM)",
        cert5: "Recruitment - Office Personnel",
        cert6: "Sustainability - Office",
        
        languagesTitle: "Languages",
        langSpanish: "Spanish",
        langSwedish: "Swedish",
        langEnglish: "English",
        langNative: "Native",
        langFluent: "Fluent",
        langBasic: "Basic",
        
        contactTitle: "Contact",
        contactIntro: "Have a project in mind or looking for a developer for LIA? I'd love to hear from you. I'm always open to new opportunities and collaborations.",
        contactEmail: "Email",
        contactPhone: "Phone",
        contactLinkedIn: "LinkedIn",
        contactLocation: "Location",
        referencesTitle: "References Available",
        
        footer: "Designed and developed with passion."
    }
};

// Language switcher
let currentLang = 'en';

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
    
    // Fade out effect
    document.querySelector('.greeting').style.opacity = '0';
    document.querySelector('.tagline').style.opacity = '0';
    document.querySelector('.bio').style.opacity = '0';
    
    setTimeout(() => {
        // Hero Section
        document.querySelector('.greeting').textContent = content.greeting;
        document.querySelector('h1').textContent = content.name;
        document.querySelector('.tagline').textContent = content.tagline;
        document.querySelector('.bio').textContent = content.bio;
        document.querySelector('.location').innerHTML = '📍 ' + content.location;
        
        // Buttons
        document.querySelectorAll('.btn-primary')[0].textContent = content.btnConnect;
        document.querySelectorAll('.btn-secondary')[0].textContent = content.btnExperience;
        
        // About Section
        document.querySelector('#about .section-title').textContent = content.aboutTitle;
        const aboutParagraphs = document.querySelectorAll('#about .about-content p');
        aboutParagraphs[0].textContent = content.aboutP1;
        aboutParagraphs[1].textContent = content.aboutP2;
        
        // Skills Section
        document.querySelector('#skills .section-title').textContent = content.skillsTitle;
        const skillHeaders = document.querySelectorAll('.skill-category h3');
        skillHeaders[0].textContent = content.skillsCat1;
        skillHeaders[1].textContent = content.skillsCat2;
        skillHeaders[2].textContent = content.skillsCat3;
        skillHeaders[3].textContent = content.skillsCat4;
        
        // Experience Section
        document.querySelector('#experience .section-title').textContent = content.experienceTitle;
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        // Job 1
        timelineItems[0].querySelector('h3').textContent = content.job1Title;
        timelineItems[0].querySelector('.company').textContent = content.job1Company;
        timelineItems[0].querySelector('.period').textContent = content.job1Period;
        const job1Resp = timelineItems[0].querySelectorAll('.responsibilities li');
        job1Resp[0].textContent = content.job1Resp1;
        job1Resp[1].textContent = content.job1Resp2;
        job1Resp[2].textContent = content.job1Resp3;
        job1Resp[3].textContent = content.job1Resp4;
        job1Resp[4].textContent = content.job1Resp5;
        
        // Job 2
        timelineItems[1].querySelector('h3').textContent = content.job2Title;
        timelineItems[1].querySelector('.company').textContent = content.job2Company;
        timelineItems[1].querySelector('.period').textContent = content.job2Period;
        const job2Resp = timelineItems[1].querySelectorAll('.responsibilities li');
        job2Resp[0].textContent = content.job2Resp1;
        job2Resp[1].textContent = content.job2Resp2;
        
        // Job 3
        timelineItems[2].querySelector('h3').textContent = content.job3Title;
        timelineItems[2].querySelector('.company').textContent = content.job3Company;
        timelineItems[2].querySelector('.period').textContent = content.job3Period;
        const job3Resp = timelineItems[2].querySelectorAll('.responsibilities li');
        job3Resp[0].textContent = content.job3Resp1;
        job3Resp[1].textContent = content.job3Resp2;
        job3Resp[2].textContent = content.job3Resp3;
        job3Resp[3].textContent = content.job3Resp4;
        
        // Job 4
        timelineItems[3].querySelector('h3').textContent = content.job4Title;
        timelineItems[3].querySelector('.company').textContent = content.job4Company;
        timelineItems[3].querySelector('.period').textContent = content.job4Period;
        
        // Education Section
        document.querySelector('#education .section-title').textContent = content.educationTitle;
        const eduCards = document.querySelectorAll('.education-card');
        
        eduCards[0].querySelector('h3').textContent = content.edu1Title;
        eduCards[0].querySelector('.institution').textContent = content.edu1Institution;
        eduCards[0].querySelector('.period').textContent = content.edu1Period;
        const edu1Details = eduCards[0].querySelectorAll('.education-details li');
        edu1Details[0].textContent = content.edu1Detail1;
        edu1Details[1].textContent = content.edu1Detail2;
        edu1Details[2].textContent = content.edu1Detail3;
        
        // Update LIA info
        const liaInfo = eduCards[0].querySelector('.lia-info');
        if (liaInfo) {
            liaInfo.querySelector('h4').textContent = content.liaTitle;
            const liaDates = liaInfo.querySelectorAll('p');
            liaDates[0].textContent = content.lia1;
            liaDates[1].textContent = content.lia2;
        }
        
        eduCards[1].querySelector('h3').textContent = content.edu2Title;
        eduCards[1].querySelector('.institution').textContent = content.edu2Institution;
        eduCards[1].querySelector('.period').textContent = content.edu2Period;
        const edu2Details = eduCards[1].querySelectorAll('.education-details li');
        edu2Details[0].textContent = content.edu2Detail1;
        edu2Details[1].textContent = content.edu2Detail2;
        
        eduCards[2].querySelector('h3').textContent = content.edu3Title;
        eduCards[2].querySelector('.institution').textContent = content.edu3Institution;
        eduCards[2].querySelector('.period').textContent = content.edu3Period;
        const edu3Details = eduCards[2].querySelectorAll('.education-details li');
        edu3Details[0].textContent = content.edu3Detail1;
        edu3Details[1].textContent = content.edu3Detail2;
        
        // Certifications
        document.querySelector('#certifications .section-title').textContent = content.certificationsTitle;
        const certs = document.querySelectorAll('.cert-badge p');
        certs[0].textContent = content.cert1;
        certs[1].textContent = content.cert2;
        certs[2].textContent = content.cert3;
        certs[3].textContent = content.cert4;
        certs[4].textContent = content.cert5;
        certs[5].textContent = content.cert6;
        
        // Languages
        document.querySelector('#languages .section-title').textContent = content.languagesTitle;
        const langCards = document.querySelectorAll('.language-card');
        langCards[0].querySelector('h3').textContent = content.langSpanish;
        langCards[0].querySelector('.language-level span').textContent = content.langNative;
        langCards[1].querySelector('h3').textContent = content.langSwedish;
        langCards[1].querySelector('.language-level span').textContent = content.langFluent;
        langCards[2].querySelector('h3').textContent = content.langEnglish;
        langCards[2].querySelector('.language-level span').textContent = content.langBasic;
        
        // Contact
        document.querySelector('#contact .section-title').textContent = content.contactTitle;
        document.querySelector('.contact-intro').textContent = content.contactIntro;
        const contactCards = document.querySelectorAll('.contact-card h3');
        contactCards[0].textContent = content.contactEmail;
        contactCards[1].textContent = content.contactPhone;
        contactCards[2].textContent = content.contactLinkedIn;
        contactCards[3].textContent = content.contactLocation;
        
        document.querySelector('.references h3').textContent = content.referencesTitle;
        
        // Footer
        document.querySelector('footer p').innerHTML = `&copy; 2024 Jose Carlos Muñoz. ${content.footer}`;
        
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

// Initialize with English language on page load
window.addEventListener('DOMContentLoaded', () => {
    updateContent('en');
});