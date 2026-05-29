export type Lang = "en" | "fr" | "de";

export const languages: { code: Lang; flag: string; label: string }[] = [
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "fr", flag: "🇫🇷", label: "FR" },
  { code: "de", flag: "🇩🇪", label: "DE" },
];

export type TranslationKeys = {
  nav: { about: string; skills: string; journey: string; projects: string; contact: string };
  hero: { badge: string; line1: string; line2: string; line3: string; line4: string; sub: string; btn1: string; btn2: string };
  about: {
    label: string; title1: string; title2: string; badge: string; text: string;
    focus: string; focusVal: string; stack: string; style: string; styleVal: string;
    location: string; locationSub: string; languages: string; langList: string; langSub: string;
    driving: string; drivingSub: string;
  };
  skills: {
    label: string; title1: string; title2: string;
    card1: { title: string; sub: string };
    card2: { title: string; sub: string };
    card3: { title: string; sub: string; s1: string; s2: string; s3: string };
  };
  journey: {
    label: string; title: string;
    card1: { title: string; sub: string; text: string };
    card2: { title: string; sub: string; text: string };
    card3: { title: string; sub: string; text: string };
  };
  projects: {
    label: string; title1: string; title2: string; title3: string; sub: string; github: string;
    p1: { type: string; title: string; desc: string };
    p2: { type: string; title: string; desc: string };
    p3: { type: string; title: string; desc: string };
  };
  contact: { label: string; title1: string; title2: string; desc: string; email: string };
  footer: string;
};

export const translations: Record<Lang, TranslationKeys> = {
  en: {
    nav: { about: "About", skills: "Skills", journey: "Journey", projects: "Projects", contact: "Contact" },
    hero: {
      badge: "MERN Stack Developer",
      line1: "Building", line2: "modern", line3: "digital", line4: "experiences",
      sub: "MERN Stack Developer & Photographer crafting premium web interfaces with clean code and modern design.",
      btn1: "View Projects", btn2: "My Journey",
    },
    about: {
      label: "About", title1: "A modern", title2: "developer.",
      badge: "MERN STACK · Photographer · Social Media Manager",
      text: "I am a student with a background in Economics and currently studying Applied Economics at university. Passionate about technology, development and real-world systems, I enjoy building digital experiences while exploring mechanics and truck driving culture. My interests combine JavaScript development, editing, automotive photography and discovering new skills. My long-term ambition is to become a Software Engineer and connect software with the world of mechanics and engineering.",
      focus: "Focus", focusVal: "MERN Stack Apps", stack: "Stack", style: "Style", styleVal: "Modern & Clean",
      location: "Location", locationSub: "Based in Morocco, available for remote projects and digital missions.",
      languages: "Languages", langList: "Tamazight · Arabic · French · English · German", langSub: "Fluent communication across multiple cultural contexts.",
      driving: "Driving", drivingSub: "C + EC coming soon. Passionate about trucks and automotive culture.",
    },
    skills: {
      label: "Skills", title1: "Tech Stack", title2: "& Tools.",
      card1: { title: "Languages & Frameworks", sub: "Core technologies for building modern web interfaces." },
      card2: { title: "Databases & Tools", sub: "Backend, data, and productivity tools for professional workflows." },
      card3: { title: "Management", sub: "Creative and community management practices.", s1: "Social Media Management", s2: "Community Manager", s3: "Video Editing" },
    },
    journey: {
      label: "Experience", title: "Journey",
      card1: { title: "Bac Science Economique", sub: "Academic Foundation", text: "Started discovering programming and technology while studying Economics. Quickly developed strong curiosity for coding and digital creation, laying the foundation for a technical path." },
      card2: { title: "Bachelor Applied Economics", sub: "Université Ibn Zohr · Freelance", text: "Currently studying Applied Economics at Université Ibn Zohr while expanding practical experience through freelance management and landing page development. Focused on completing my academic path and developing strong digital and creative skills alongside university studies." },
      card3: { title: "Mechanic Garage Internship", sub: "Automotive & Engineering", text: "Passionate about cars, engines and mechanics, gaining hands-on experience and learning directly from the automotive world — bridging the gap between digital and mechanical engineering." },
    },
    projects: {
      label: "Work", title1: "Real projects,", title2: "built with modern", title3: "MERN tooling.",
      sub: "A selection of web projects built with React, Node.js, Express and MongoDB — covering responsive interfaces, social media work and creative digital projects.",
      github: "View GitHub →",
      p1: { type: "MERN · Web App", title: "Portfolio App", desc: "Premium personal portfolio with React, TypeScript and Tailwind CSS. Dark/light mode, multi-language support and smooth animations." },
      p2: { type: "MERN · Full Stack", title: "Dashboard App", desc: "Responsive admin dashboard with authentication, data visualization and clean UI — built on Node.js, Express and MongoDB." },
      p3: { type: "Social Media · Creative", title: "Social Media Projects", desc: "Community management, content creation and video editing across multiple platforms. Brand identity and digital presence building." },
    },
    contact: { label: "Contact", title1: "Let's build something", title2: "modern together.", desc: "Available for portfolio websites, responsive landing pages and digital projects. Also available for Social Media Management and Community Management work.", email: "Email" },
    footer: "Made by @ilyass — 2026",
  },
  fr: {
    nav: { about: "À propos", skills: "Compétences", journey: "Parcours", projects: "Projets", contact: "Contact" },
    hero: {
      badge: "Développeur MERN Stack",
      line1: "Construire", line2: "des", line3: "expériences", line4: "digitales",
      sub: "Développeur MERN Stack & Photographe, créant des interfaces web premium avec du code propre et un design moderne.",
      btn1: "Voir mes projets", btn2: "Mon parcours",
    },
    about: {
      label: "À propos", title1: "Un développeur", title2: "moderne.",
      badge: "MERN STACK · Photographe · Social Media Manager",
      text: "Je suis étudiant en Économie Appliquée à l'université. Passionné par la technologie, le développement et les systèmes réels, j'aime créer des expériences numériques tout en explorant la mécanique et la culture du camionnage. Mes intérêts combinent le développement JavaScript, le montage vidéo, la photographie automobile et la découverte de nouvelles compétences.",
      focus: "Focus", focusVal: "Applications MERN", stack: "Stack", style: "Style", styleVal: "Moderne & Propre",
      location: "Localisation", locationSub: "Basé au Maroc, disponible pour des projets à distance et missions digitales.",
      languages: "Langues", langList: "Tamazight · Arabe · Français · Anglais · Allemand", langSub: "Communication fluide dans plusieurs contextes culturels.",
      driving: "Conduite", drivingSub: "C + EC bientôt. Passionné par les camions et la culture automobile.",
    },
    skills: {
      label: "Compétences", title1: "Stack Tech", title2: "& Outils.",
      card1: { title: "Langages & Frameworks", sub: "Technologies principales pour créer des interfaces modernes." },
      card2: { title: "Bases de données & Outils", sub: "Backend, données et outils de productivité professionnels." },
      card3: { title: "Gestion", sub: "Pratiques de gestion créative et communautaire.", s1: "Gestion Réseaux Sociaux", s2: "Community Manager", s3: "Montage Vidéo" },
    },
    journey: {
      label: "Expérience", title: "Parcours",
      card1: { title: "Bac Science Économique", sub: "Formation Académique", text: "Début de la découverte de la programmation et de la technologie durant les études d'économie. Développement rapide d'une forte curiosité pour le code et la création digitale." },
      card2: { title: "Licence Économie Appliquée", sub: "Université Ibn Zohr · Freelance", text: "Actuellement en Licence d'Économie Appliquée à l'Université Ibn Zohr, tout en développant une expérience pratique via la gestion freelance et le développement de landing pages. Objectif : valider le diplôme en développant des compétences digitales et créatives en parallèle." },
      card3: { title: "Stage Garage Mécanique", sub: "Automobile & Ingénierie", text: "Passionné par les voitures, les moteurs et la mécanique, acquérant une expérience pratique directement dans le monde automobile — faisant le lien entre le digital et l'ingénierie mécanique." },
    },
    projects: {
      label: "Travaux", title1: "Projets réels,", title2: "construits avec des outils", title3: "MERN modernes.",
      sub: "Une sélection de projets web construits avec React, Node.js, Express et MongoDB — interfaces responsives, réseaux sociaux et projets créatifs digitaux.",
      github: "Voir GitHub →",
      p1: { type: "MERN · Application Web", title: "Application Portfolio", desc: "Portfolio premium avec React, TypeScript et Tailwind CSS. Mode sombre/clair, multi-langues et animations fluides." },
      p2: { type: "MERN · Full Stack", title: "Application Dashboard", desc: "Dashboard admin responsive avec authentification, visualisation de données — construit sur Node.js, Express et MongoDB." },
      p3: { type: "Réseaux Sociaux · Créatif", title: "Projets Réseaux Sociaux", desc: "Gestion de communauté, création de contenu et montage vidéo sur plusieurs plateformes. Construction d'identité de marque et présence digitale." },
    },
    contact: { label: "Contact", title1: "Construisons quelque chose", title2: "de moderne ensemble.", desc: "Disponible pour des sites portfolio, des landing pages et des projets digitaux. Aussi disponible pour la gestion de réseaux sociaux et la Community Management.", email: "Email" },
    footer: "Réalisé par @ilyass — 2026",
  },
  de: {
    nav: { about: "Über mich", skills: "Fähigkeiten", journey: "Werdegang", projects: "Projekte", contact: "Kontakt" },
    hero: {
      badge: "MERN Stack Entwickler",
      line1: "Moderne", line2: "digitale", line3: "Erfahrungen", line4: "gestalten",
      sub: "MERN Stack Entwickler & Fotograf, der Premium-Weboberflächen mit sauberem Code und modernem Design entwickelt.",
      btn1: "Projekte ansehen", btn2: "Mein Werdegang",
    },
    about: {
      label: "Über mich", title1: "Ein moderner", title2: "Entwickler.",
      badge: "MERN STACK · Fotograf · Social Media Manager",
      text: "Ich bin Student der Angewandten Wirtschaftswissenschaften. Leidenschaftlich an Technologie, Entwicklung und realen Systemen interessiert, baue ich gerne digitale Erfahrungen auf und erkunde gleichzeitig Mechanik und LKW-Fahrkultur. Meine Interessen verbinden JavaScript-Entwicklung, Video-Editing, Automobil-Fotografie und das Entdecken neuer Fähigkeiten.",
      focus: "Fokus", focusVal: "MERN Stack Apps", stack: "Stack", style: "Stil", styleVal: "Modern & Sauber",
      location: "Standort", locationSub: "Ansässig in Marokko, verfügbar für Remote-Projekte und digitale Aufgaben.",
      languages: "Sprachen", langList: "Tamazight · Arabisch · Französisch · Englisch · Deutsch", langSub: "Fließende Kommunikation in verschiedenen kulturellen Kontexten.",
      driving: "Führerschein", drivingSub: "C + EC in Kürze. Leidenschaftlich für LKWs und Automobilkultur.",
    },
    skills: {
      label: "Fähigkeiten", title1: "Tech Stack", title2: "& Werkzeuge.",
      card1: { title: "Sprachen & Frameworks", sub: "Kerntechnologien für moderne Web-Interfaces." },
      card2: { title: "Datenbanken & Tools", sub: "Backend, Daten und Produktivitäts-Tools für professionelle Workflows." },
      card3: { title: "Management", sub: "Kreatives und Community-Management.", s1: "Social Media Management", s2: "Community Manager", s3: "Video-Bearbeitung" },
    },
    journey: {
      label: "Erfahrung", title: "Werdegang",
      card1: { title: "Abitur Wirtschaft", sub: "Akademische Grundlage", text: "Begann Programmierung und Technologie während des Wirtschaftsstudiums zu entdecken. Entwickelte schnell starke Neugier für Code und digitale Kreation als Grundlage für einen technischen Weg." },
      card2: { title: "Bachelor Angewandte Wirtschaft", sub: "Université Ibn Zohr · Freelance", text: "Aktuell Studium der Angewandten Wirtschaftswissenschaften an der Université Ibn Zohr, während praktische Erfahrungen durch Freelance-Management und Landing-Page-Entwicklung ausgebaut werden. Fokus auf Studienabschluss und parallele Entwicklung digitaler und kreativer Fähigkeiten." },
      card3: { title: "Praktikum Kfz-Werkstatt", sub: "Automobil & Technik", text: "Leidenschaftlich für Autos, Motoren und Mechanik — praktische Erfahrungen direkt aus der Automobilwelt sammeln und die Verbindung zwischen Digital und Maschinenbau herstellen." },
    },
    projects: {
      label: "Arbeiten", title1: "Echte Projekte,", title2: "entwickelt mit modernem", title3: "MERN Tooling.",
      sub: "Eine Auswahl von Web-Projekten mit React, Node.js, Express und MongoDB — responsive Interfaces, Social Media und kreative digitale Projekte.",
      github: "GitHub ansehen →",
      p1: { type: "MERN · Web App", title: "Portfolio App", desc: "Premium persönliches Portfolio mit React, TypeScript und Tailwind CSS. Dunkel/Hell-Modus, mehrsprachig und flüssige Animationen." },
      p2: { type: "MERN · Full Stack", title: "Dashboard App", desc: "Responsives Admin-Dashboard mit Authentifizierung und Datenvisualisierung — auf Node.js, Express und MongoDB." },
      p3: { type: "Social Media · Kreativ", title: "Social Media Projekte", desc: "Community Management, Content-Erstellung und Video-Bearbeitung auf mehreren Plattformen. Markenidentität und digitaler Präsenzaufbau." },
    },
    contact: { label: "Kontakt", title1: "Lass uns etwas Modernes", title2: "zusammen bauen.", desc: "Verfügbar für Portfolio-Websites, responsive Landing Pages und digitale Projekte. Auch verfügbar für Social Media Management und Community Management.", email: "E-Mail" },
    footer: "Erstellt von @ilyass — 2026",
  },
};
