import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pl";

interface Translations {
  [key: string]: {
    en: string;
    pl: string;
  };
}

export const translations: Translations = {
  // Navigation
  "nav.home": { en: "Home Page", pl: "Strona główna" },
  "nav.about": { en: "About Me", pl: "O mnie" },
  "nav.services": { en: "Services", pl: "Usługi" },
  "nav.contact": { en: "Contact", pl: "Kontakt" },
  "nav.cta.contact": { en: "Contact Me", pl: "Skontaktuj się ze mną" },

  // Hero Section
  "hero.stats.years": { en: "Years of Experience", pl: "Lata Doświadczenia" },
  "hero.stats.projects": { en: "Projects Delivered", pl: "Projekty Dostarczone" },
  "hero.stats.satisfaction": { en: "Client Satisfaction", pl: "Zadowolenie Klientów" },
  "hero.headline": {
    en: "Comprehensive websites and SEO strategy. I will create a modern online image for your company.",
    pl: "Kompleksowe strony internetowe & Strategia SEO. Stworzę nowoczesny wizerunek Twojej firmy w sieci.",
  },
  "hero.subheadline": {
    en: "I help brands and local businesses turn visitors into loyal customers. I design fast business card sites and effective landing pages that I immediately position in Google. I implement intelligent AI solutions, set up the sale of digital products, and take care of your visibility in Google Maps. You get not just code, but a complete tool that works for your success 24/7.",
    pl: "Pomagam markom i lokalnym biznesom zamieniać odwiedzających w lojalnych klientów. Projektuję szybkie strony wizytówki oraz skuteczne landing page, które od razu pozycjonuję w Google. Wdrażam inteligentne rozwiązania AI, konfiguruję sprzedaż produktów digitalowych i dbam o Twoją widoczność w mapach Google. Otrzymasz nie tylko kod, ale kompletne narzędzie, które pracuje na Twój sukces 24/7.",
  },
  "hero.cta.primary": {
    en: "Let's Talk About Your Business",
    pl: "Porozmawiajmy o Twoim biznesie",
  },
  "hero.cta.secondary": { en: "See Services", pl: "Zobacz Usługi" },

  // Feature Highlights
  "feature.pages.title": {
    en: "Websites & Landing Pages",
    pl: "Strony & Landing Page",
  },
  "feature.pages.description": {
    en: "Fast, responsive, and ready to convert.",
    pl: "Szybkie, responsywne i gotowe do konwersji.",
  },
  "feature.seo.title": { en: "SEO & Google Maps", pl: "SEO & Mapy Google" },
  "feature.seo.description": {
    en: "Be visible where your customers search.",
    pl: "Bądź widoczny tam, gdzie szukają Cię klienci.",
  },
  "feature.ai.title": { en: "AI Automation", pl: "Automatyzacja AI" },
  "feature.ai.description": {
    en: "Smart chats that serve customers for you.",
    pl: "Inteligentne chaty, które obsługują klientów za Ciebie.",
  },
  "feature.payments.title": { en: "Online Payments", pl: "Płatności Online" },
  "feature.payments.description": {
    en: "Simple sales of your e-books and services.",
    pl: "Prosta sprzedaż Twoich e-booków i usług.",
  },

  // Why Me Section
  "whyme.title": { en: "Why Me", pl: "Dlaczego Ja" },
  "whyme.subtitle": {
    en: "I combine passion and knowledge with the real needs of your business",
    pl: "Łączę pasję i wiedzę z realnymi potrzebami Twojego biznesu",
  },
  "whyme.quality.title": {
    en: "Quality without compromise",
    pl: "Jakość bez kompromisów",
  },
  "whyme.quality.description": {
    en: "I don't use ready-made, heavy templates or limited solutions. I build from scratch so your site is secure, fast, and refined in every technical detail, tailored to your needs.",
    pl: "Nie korzystam z gotowych, ociężąłych szablonów i ograniczonych rozwiązań. Tworzę od podstaw, aby twoja strona była bezpieczna, szybka i dopracowana w każdym detalu technicznym, dopasowana do Twoich potrzeb.",
  },
  "whyme.strategy.title": {
    en: "Strategic approach",
    pl: "Strategiczne podejście",
  },
  "whyme.strategy.description": {
    en: "A site nobody sees doesn't earn. From the first line of code I optimize your service for Google. I build a structure that algorithms love.",
    pl: "Strona, której nikt nie widzi, nie zarabia. Od pierwszej linijki kodu optymalizuję Twój serwis pod wyszukiwarkę Google. Buduję strukturę, którą algorytmy kochają.",
  },
  "whyme.seo_ai.title": {
    en: "SEO & Generative AI Optimization",
    pl: "SEO & Generative AI Optimization",
  },
  "whyme.seo_ai.description": {
    en: "Your site is not only for Google. I optimize code and content so your business is recommended by AI assistants like ChatGPT or Google Gemini. I build visibility where your customers look for answers today and tomorrow.",
    pl: "Twoja strona nie tylko dla Google. Optymalizuję kod i treści tak, aby Twój biznes był polecany przez asystentów AI, takich jak ChatGPT czy Google Gemini. Buduję widoczność tam, gdzie Twoi klienci szukają odpowiedzi dzisiaj i jutro.",
  },
  "whyme.modern_ai.title": {
    en: "Modern technologies and AI",
    pl: "Nowoczesne technologie i AI",
  },
  "whyme.modern_ai.description": {
    en: "I bring your business into the future. I don't just build sites; I implement intelligent AI assistants and payment automations. Thanks to this, your company can serve customers and sell products even when you're resting.",
    pl: "Wprowadzam Twój biznes w przyszłość. Nie tylko tworzę strony, ale wdrażam inteligentnych asystentów AI oraz automatyzacje płatności. Dzięki temu Twoja firma może obsługiwać klientów i sprzedawać produkty nawet wtedy, gdy Ty odpoczywasz.",
  },
  "whyme.partnership.title": {
    en: "Partnership, not just a service",
    pl: "Partnerstwo, nie tylko usługa",
  },
  "whyme.partnership.description": {
    en: "Not sure where to start? I will guide you through the entire process, from choosing a domain and business listing to implementation and optimization. You get full support and a tool you truly understand and can use.",
    pl: "Nie wiesz od czego zacząć? Przeprowadzę Cię przez cały proces, od wyboru domeny po konfigurację wizytówki, aż do wdrożenia i optymalizacji strony. Otrzymujesz ode mnie pełne wsparcie i narzędzie, które naprawdę rozumiesz i potrafisz obsługiwać.",
  },
  "whyme.cta.label": {
    en: "Plan your launch with me",
    pl: "Zaplanuj start razem ze mną",
  },
  "whyme.cta.button": {
    en: "Go to contact",
    pl: "Przejdź do kontaktu",
  },
  "whyme.cta.banner.title": {
    en: "Your project deserves a technological edge",
    pl: "Twój projekt zasługuje na technologiczną przewagę",
  },
  "whyme.cta.banner.body": {
    en: "Let’s talk about how AI and SEO can start working for your success.",
    pl: "Porozmawiajmy o tym, jak AI i SEO mogą zacząć pracować na Twój sukces.",
  },
  "whyme.cta.banner.note": {
    en: "Schedule a free consultation.",
    pl: "Umów się na darmową konsultację",
  },
  "whyme.combined.title": {
    en: "Architecture of Success: Code and Strategy",
    pl: "Architektura Sukcesu: Kod i Strategia",
  },
  "whyme.combined.description": {
    en: "I build websites that not only impress with design, but most of all earn. I skip heavy templates in favor of custom solutions optimized for SEO from the first line of code. This makes your site lightning fast, secure, and ready to fight for top positions in Google.",
    pl: "Tworzę strony, które nie tylko zachwycają designem, ale przede wszystkim zarabiają. Rezygnuję z ciężkich szablonów na rzecz autorskich rozwiązań, które optymalizuję pod kątem SEO od pierwszej linijki kodu. Dzięki temu Twój serwis jest błyskawiczny, bezpieczny i gotowy na walkę o pierwsze miejsca w Google.",
  },

  // Services Section
  "services.title": { en: "Services", pl: "Usługi" },
  "services.subtitle": {
    en: "Comprehensive solutions for your digital presence",
    pl: "Kompleksowe rozwiązania dla Twojej obecności cyfrowej",
  },
  "services.webdev.title": {
    en: "Building Websites from Scratch",
    pl: "Tworzenie Stron Od Podstaw",
  },
  "services.webdev.description": {
    en: "Tailored web applications built from scratch. React, Node.js and modern architectures for optimal performance.",
    pl: "Dopasowane aplikacje webowe tworzone od podstaw. React, Node.js i nowoczesne architektury dla optymalnej wydajności.",
  },
  "services.seo.title": {
    en: "Technical SEO & Performance",
    pl: "Techniczne SEO i Wydajność",
  },
  "services.seo.description": {
    en: "Deep technical audits, Core Web Vitals optimization, and strategic SEO implementation for maximum visibility.",
    pl: "Głębokie audyty techniczne, optymalizacja Core Web Vitals i strategiczna implementacja SEO dla maksymalnej widoczności.",
  },
  "services.security.title": {
    en: "Security Audits",
    pl: "Audyty Bezpieczeństwa",
  },
  "services.security.description": {
    en: "OAuth, JWT, and 2FA implementation plus security assessments. Protect your users and your business.",
    pl: "Implementacja OAuth, JWT, 2FA i oceny bezpieczeństwa. Chroń swoich użytkowników i biznes.",
  },
  "services.healthtech.title": {
    en: "Health-Tech Solutions",
    pl: "Rozwiązania Health-Tech",
  },
  "services.healthtech.description": {
    en: "Custom calculators, dashboards, and applications for the health and wellness sector.",
    pl: "Niestandardowe kalkulatory, dashboardy i aplikacje dla branży zdrowia i wellness.",
  },
  "services.subtitle.compact": {
    en: "Three areas that deliver speed, visibility, and effortless operations.",
    pl: "Trzy obszary, które dowożą szybkość, widoczność i bezproblemową obsługę.",
  },
  "services.group.dev.title": {
    en: "Development & Design",
    pl: "Development & Design",
  },
  "services.group.dev.desc": {
    en: "I design and code from scratch. I'll create a fast and secure site that will work for your business.",
    pl: "Projektuję i programuję od zera. Stworzę szybką i bezpieczną stronę, która będzie pracowała dla Twojego biznesu.",
  },
  "services.group.dev.b1": {
    en: "I'll create a personalized site tailored to your needs that will make your company stand out.",
    pl: "Stworzę spersonalizowaną stronę, dopasowaną do Twoich potrzeb która wyróżni Twoją firmę na rynku.",
  },
  "services.group.dev.b2": {
    en: "I'll rewrite your current service so it runs faster and looks modern.",
    pl: "Przepiszę Twój obecny serwis, aby działał szybciej i wyglądał nowocześnie.",
  },
  "services.group.dev.b3": {
    en: "If you need a quick and cheaper solution, I'll build a fast business card site on one of my templates.",
    pl: "Jeśli potrzebujesz szybkiego i tańszego rozwiązania, stworzę szybką wizytówkę na jednym z moich szablonów.",
  },
  "services.group.seoai.title": {
    en: "Visibility in search and modern customer service",
    pl: "Widocznośc w wyszukiwarkach i nowoczesna obsługa klienta",
  },
  "services.group.seoai.desc": {
    en: "I'll make it easy for clients to find you, and artificial intelligence will help you serve them even when you sleep.",
    pl: "Sprawię, że klienci łatwo Cię znajdą, a sztuczna inteligencja pomoże Ci ich obsłużyć nawet kiedy śpisz.",
  },
  "services.group.seoai.b1": {
    en: "I'll do an SEO audit and show you how to improve visibility in search engines.",
    pl: "Zrobię audyt SEO i wskażę Ci, jak poprawić widoczność w wyszukiwarkach.",
  },
  "services.group.seoai.b2": {
    en: "I'll deploy an AI assistant that will answer customer questions 24/7.",
    pl: "Wdrożę asystenta AI, który odpowie na pytania klientów 24/7.",
  },
  "services.group.seoai.b3": {
    en: "I'll make sure local clients can see you on Google Maps.",
    pl: "Zadbam o to, by lokalni klienci widzieli Cię na mapie Google.",
  },
  "services.group.care.title": {
    en: "Full technical care – your external IT department.",
    pl: "Pełna opieka techniczna - Twój zewnętrzny dział IT.",
  },
  "services.group.care.desc": {
    en: "You're not interested in technology and don't want to waste time configuring it? I'll take everything on myself. From buying the domain and hosting, through design and coding, to ongoing maintenance. You focus on business; I make sure your technology simply works.",
    pl: "Nie interesuje Cię technologia i nie chcesz tracić czasu na jej konfigurację? Wezmę wszystko na siebie. Od zakupu domeny i hostingu, przez projekt i kodowanie, aż po stałe utrzymanie. Ty zajmujesz się biznesem, ja dbam, żeby Twoja technologia po prostu działała.",
  },
  "services.group.care.b1": {
    en: "I'll register the domain, configure hosting, and company email for you.",
    pl: "Zarejestruję domenę, skonfiguruję hosting i pocztę firmową za Ciebie.",
  },
  "services.group.care.b2": {
    en: "I'll create a unique website from the first line of code, tailored to your brand.",
    pl: "Stworzę unikalną stronę od pierwszej linijki kodu, dopasowaną do Twojej marki.",
  },
  "services.group.care.b3": {
    en: "I'll take care of security and keeping the data on the site up to date.",
    pl: "Zadbam o bezpieczeństwo oraz aktualizację danych na stronie.",
  },

  // Offer - Challenge Section
  "offer.challenge.title": {
    en: "Choose Your Challenge",
    pl: "Wybierz swoje wyzwanie",
  },
  "offer.challenge.subtitle": {
    en: "Choose the scenario that sounds familiar and see how I will fix it.",
    pl: "Wybierz scenariusz, który brzmi znajomo, i zobacz, jak to naprawię.",
  },
  "offer.challenge.label": {
    en: "Problem → Solution",
    pl: "Problem → Rozwiązanie",
  },
  "offer.challenge.cta": {
    en: "See the solution",
    pl: "Zobacz rozwiązanie",
  },
  "offer.challenge.card.web.tag": { en: "Websites", pl: "Strony WWW" },
  "offer.challenge.card.web.title": {
    en: "I don't have a site or the current one scares visitors",
    pl: "Nie mam strony lub obecna strona straszy",
  },
  "offer.challenge.card.web.description": {
    en: "You will get a modern, fast site that leads visitors straight to contact or purchase.",
    pl: "Otrzymasz nowoczesną, szybką stronę, która prowadzi odwiedzającego prosto do kontaktu lub zakupu.",
  },
  "offer.challenge.card.ai.tag": { en: "AI Agents", pl: "Agenci AI" },
  "offer.challenge.card.ai.title": {
    en: "My clients keep asking the same questions",
    pl: "Moi klienci zadają ciągle te same pytania",
  },
  "offer.challenge.card.ai.description": {
    en: "I implement an AI chatbot that answers 24/7, collects leads, and schedules calls.",
    pl: "Wdrażam chatbota AI, który odpowiada 24/7, zbiera leady i umawia rozmowy.",
  },
  "offer.challenge.card.seo.tag": { en: "SEO & Maps", pl: "SEO & Maps" },
  "offer.challenge.card.seo.title": {
    en: "No one can find me on Google",
    pl: "Nikt nie może mnie znaleźć w Google",
  },
  "offer.challenge.card.seo.description": {
    en: "Technical SEO, schema, and Google Maps optimization put you in front of local customers.",
    pl: "Techniczne SEO, schema i optymalizacja wizytówki Google Maps stawiają Cię przed lokalnymi klientami.",
  },
  "offer.challenge.card.care.tag": { en: "IT Care", pl: "Opieka IT" },
  "offer.challenge.card.care.title": {
    en: "Technology overwhelms me — I just want it to work",
    pl: "Technologia mnie przytłacza, chcę żeby po prostu działało",
  },
  "offer.challenge.card.care.description": {
    en: "I handle hosting, domains, updates, and fixes so you focus on your business.",
    pl: "Biorę na siebie hosting, domeny, aktualizacje i poprawki, żebyś mógł skupić się na biznesie.",
  },

  // Offer - Pillars
  "offer.pillars.title": {
    en: "Services grouped into four pillars",
    pl: "Usługi poukładane w cztery filary",
  },
  "offer.pillars.subtitle": {
    en: "A clear roadmap from first line of code to long-term growth.",
    pl: "Przejrzysty plan od pierwszej linijki kodu po długofalowy wzrost.",
  },
  "offer.pillars.web.title": {
    en: "Modern Websites",
    pl: "Nowoczesne Strony WWW",
  },
  "offer.pillars.web.point1": {
    en: "Built from scratch or redesigned to match your brand.",
    pl: "Budowa od zera lub redesign spójny z Twoją marką.",
  },
  "offer.pillars.web.point2": {
    en: "Lightning fast, Core Web Vitals-friendly, mobile-first.",
    pl: "Błyskawiczne, zgodne z Core Web Vitals, mobile-first.",
  },
  "offer.pillars.web.point3": {
    en: "Conversion-focused copy and SEO-ready structure.",
    pl: "Copy nastawione na konwersję i struktura gotowa pod SEO.",
  },
  "offer.pillars.ai.title": {
    en: "Intelligent AI Automation",
    pl: "Inteligentna Automatyzacja AI",
  },
  "offer.pillars.ai.point1": {
    en: "AI chatbots and agents that respond to clients instantly.",
    pl: "Chatboty i agenci AI, którzy odpowiadają klientom natychmiast.",
  },
  "offer.pillars.ai.point2": {
    en: "FAQ automation, lead capture, and scheduling on autopilot.",
    pl: "Automatyzacja FAQ, zbieranie leadów i umawianie rozmów na autopilocie.",
  },
  "offer.pillars.ai.point3": {
    en: "Integrations with CRM, email, and your current stack.",
    pl: "Integracje z CRM, e-mailem i Twoim obecnym stackiem.",
  },
  "offer.pillars.seo.title": {
    en: "Visibility Online",
    pl: "Widoczność w sieci",
  },
  "offer.pillars.seo.point1": {
    en: "Technical and on-page SEO audits with clear fixes.",
    pl: "Audyty techniczne i on-page z jasnymi poprawkami.",
  },
  "offer.pillars.seo.point2": {
    en: "Architecture, schema, and copy that search engines love.",
    pl: "Architektura, schema i treści, które lubią wyszukiwarki.",
  },
  "offer.pillars.seo.point3": {
    en: "Google Maps profile tuned for local searches.",
    pl: "Wizytówka Google Maps dopracowana pod lokalne wyszukiwania.",
  },
  "offer.pillars.care.title": {
    en: "Your Technical Partner",
    pl: "Twój Partner Techniczny",
  },
  "offer.pillars.care.point1": {
    en: "Hosting, domains, email setup, and secure payments.",
    pl: "Hosting, domeny, konfiguracja poczty i bezpieczne płatności.",
  },
  "offer.pillars.care.point2": {
    en: "Security, monitoring, and backups without the jargon.",
    pl: "Bezpieczeństwo, monitoring i backupy bez technicznego żargonu.",
  },
  "offer.pillars.care.point3": {
    en: "Clear communication, fast response, and ongoing guidance.",
    pl: "Jasna komunikacja, szybka reakcja i stałe doradztwo.",
  },

  // Offer - Care & Hosting
  "offer.hosting.title": { en: "Care & Hosting", pl: "Opieka i Hosting" },
  "offer.hosting.subtitle": {
    en: "Stress-free maintenance so your site can keep earning.",
    pl: "Bezstresowe utrzymanie, żeby Twoja strona mogła zarabiać.",
  },
  "offer.hosting.body": {
    en: "I handle everything: from buying your domain to secure hosting and technical care. You focus on business; I make sure your site always works.",
    pl: "Zajmuję się wszystkim: od zakupu domeny po bezpieczny hosting i opiekę techniczną. Ty zajmujesz się biznesem, ja dbam, żeby Twoja strona zawsze działała.",
  },
  "offer.hosting.bullet1": {
    en: "Minor copy tweaks and updates included in the care plan.",
    pl: "Drobne poprawki tekstu i aktualizacje w pakiecie opieki.",
  },
  "offer.hosting.bullet2": {
    en: "24/7 monitoring, backups, and fast restores if something breaks.",
    pl: "Monitoring 24/7, backupy i szybkie przywracanie w razie problemów.",
  },
  "offer.hosting.bullet3": {
    en: "A dedicated technical partner who speaks plainly, without jargon.",
    pl: "Stały opiekun techniczny, który mówi po ludzku, bez żargonu.",
  },
  "offer.hosting.cta": {
    en: "Ask for ongoing care",
    pl: "Poproś o stałą opiekę",
  },
  "offer.hosting.badge": { en: "SLA / Care Plan", pl: "SLA / Plan opieki" },
  "offer.hosting.card.title": {
    en: "Dedicated technical partner",
    pl: "Dedykowany opiekun techniczny",
  },
  "offer.hosting.card.description": {
    en: "Always-on monitoring, proactive updates, and clear communication so you never worry about uptime or security.",
    pl: "Stały monitoring, proaktywne aktualizacje i jasna komunikacja, abyś nie martwił się o dostępność ani bezpieczeństwo.",
  },
  "offer.hosting.card.note": {
    en: "Priority response for my clients",
    pl: "Priorytetowa reakcja dla moich klientów",
  },

  // Lead / Contact
  "lead.badge": { en: "Contact", pl: "Kontakt" },
  "lead.title": {
    en: "Send a message",
    pl: "Wyślij wiadomość",
  },
  "lead.heading": {
    en: "Let's talk about your project",
    pl: "Porozmawiajmy o Twoim projekcie",
  },
  "lead.subtitle": {
    en: "Do you have a specific need? Or maybe you don't know where to start? Perhaps you have a vision but don't know exactly how to tackle it? Get in touch. I'll guide you through the entire process—from the first brainstorming session, through choosing the technology, to launching the finished site.",
    pl: "Masz konkretną potrzebę? A może nie wiesz od czego zacząć? Może masz wizję, ale nie wiesz dokładnie, jak ją „ugryźć”? Skontaktuj się ze mną. Przeprowadzę Cię przez cały proces - od pierwszej burzy mózgów, przez wybór technologii, aż po start gotowej strony.",
  },
  "lead.subtitle.highlight": {
    en: "Do you have a specific need? Or maybe you don't know where to start? Perhaps you have a vision but don't know exactly how to tackle it?",
    pl: "Masz konkretną potrzebę? A może nie wiesz od czego zacząć? Może masz wizję, ale nie wiesz dokładnie, jak ją „ugryźć”?",
  },
  "lead.subtitle.rest": {
    en: " Get in touch. I'll guide you through the entire process—from the first brainstorming session, through choosing the technology, to launching the finished site.",
    pl: " Skontaktuj się ze mną. Przeprowadzę Cię przez cały proces - od pierwszej burzy mózgów, przez wybór technologii, aż po start gotowej strony.",
  },
  "lead.body": {
    en: "I treat every project individually. Whether you need a simple business card site or an advanced system with AI — I'm here to turn your challenges into effective solutions.",
    pl: "Każdy projekt traktuję indywidualnie. Niezależnie od tego, czy potrzebujesz prostej wizytówki, czy zaawansowanego systemu z AI - jestem tu, aby zamienić Twoje wyzwania w sprawne rozwiązania.",
  },
  "lead.body.highlight": {
    en: "I treat every project individually.",
    pl: "Każdy projekt traktuję indywidualnie.",
  },
  "lead.body.rest": {
    en: " Whether you need a simple business card site or an advanced system with AI — I'm here to turn your challenges into effective solutions.",
    pl: " Niezależnie od tego, czy potrzebujesz prostej wizytówki, czy zaawansowanego systemu z AI - jestem tu, aby zamienić Twoje wyzwania w sprawne rozwiązania.",
  },
  "lead.custom": {
    en: "Do you have a non-standard request? Write freely! I love projects that require unconventional thinking. Describe your idea and together we'll figure out how to execute it best.",
    pl: "Masz niestandardowe zlecenie? Napisz śmiało! Uwielbiam projekty, które wymagają nieszablonowego myślenia. Opisz swój pomysł, a wspólnie zastanowimy się, jak go najlepiej zrealizować.",
  },
  "lead.first_call": {
    en: "The first call is non-binding — we'll see what can be done and how to tailor the scope.",
    pl: "Pierwsza rozmowa jest niezobowiązująca — zobaczymy, co da się zrobić i jak dopasować zakres.",
  },
  "lead.messagePlaceholder": {
    en: "Briefly describe the project, business goals, and timeline.",
    pl: "Opisz krótko projekt, cele biznesowe i termin.",
  },
  "lead.messageLabel": { en: "What do you need?", pl: "Czego potrzebujesz?" },
  "lead.name": { en: "Your Name", pl: "Twoje Imię" },
  "lead.email": { en: "Email Address", pl: "Adres Email" },
  "lead.submit": { en: "Send Message", pl: "Wyślij wiadomość" },
  "lead.processing": { en: "Processing...", pl: "Przetwarzanie..." },
  "lead.error": {
    en: "Something went wrong. Please try again in a moment.",
    pl: "Coś poszło nie tak. Spróbuj ponownie za chwilę.",
  },
  "lead.success": {
    en: "Thank you! Your report will be delivered within 24 hours.",
    pl: "Dziękuję! Twój raport zostanie dostarczony w ciągu 24 godzin.",
  },



  // FAQ
  "faq.title": { en: "FAQ", pl: "FAQ" },
  "faq.subtitle": {
    en: "Answers to what clients ask most often — and what Google loves",
    pl: "Odpowiedzi na najczęstsze pytania klientów — i to, co lubi Google",
  },
  "faq.q1.question": {
    en: "How long does it take to build a website?",
    pl: "Ile trwa stworzenie strony?",
  },
  "faq.q1.answer": {
    en: "A focused landing page is usually 2-3 weeks. A full site with multiple subpages and integrations is typically 4-6 weeks, depending on feedback speed and scope.",
    pl: "Skoncentrowany landing page to zwykle 2-3 tygodnie. Pełna strona z wieloma podstronami i integracjami to zazwyczaj 4-6 tygodni, w zależności od tempa feedbacku i zakresu.",
  },
  "faq.q2.question": {
    en: "Will my site be optimized for SEO and speed?",
    pl: "Czy strona będzie zoptymalizowana pod SEO i szybkość?",
  },
  "faq.q2.answer": {
    en: "Yes. I build semantic structure, schema markup (FAQ, breadcrumbs), Core Web Vitals optimizations, and fast hosting/CDN so Google and AI assistants can recommend you.",
    pl: "Tak. Buduję semantyczną strukturę, schema (FAQ, breadcrumbs), optymalizuję Core Web Vitals oraz szybki hosting/CDN, aby Google i asystenci AI mogli Cię polecać.",
  },
  "faq.q3.question": {
    en: "Do you also handle content and copy?",
    pl: "Czy zajmujesz się też treściami i copy?",
  },
  "faq.q3.answer": {
    en: "I can prepare conversion-oriented copy, keyword strategy, and on-page SEO. You get drafts to approve so tone and compliance match your brand.",
    pl: "Mogę przygotować copy nastawione na konwersję, strategię słów kluczowych i on-page SEO. Otrzymujesz szkice do akceptacji, aby ton i zgodność były spójne z marką.",
  },
  "faq.q4.question": {
    en: "What about maintenance after launch?",
    pl: "Co z utrzymaniem po wdrożeniu?",
  },
  "faq.q4.answer": {
    en: "I offer care plans: monitoring, backups, security patches, analytics reviews, and quick tweaks so the site stays fast and secure.",
    pl: "Oferuję plany opieki: monitoring, backupy, poprawki bezpieczeństwa, przeglądy analityki oraz szybkie poprawki, aby strona była szybka i bezpieczna.",
  },
  "faq.q5.question": {
    en: "Can you integrate payments, CRM, or AI chat?",
    pl: "Czy możesz zintegrować płatności, CRM lub chat AI?",
  },
  "faq.q5.answer": {
    en: "Yes. I set up Stripe/Przelewy24, CRM/marketing automations, and AI chat/lead capture so your site can sell and respond 24/7.",
    pl: "Tak. Konfiguruję Stripe/Przelewy24, automatyzacje CRM/marketingowe oraz chat/lead capture z AI, aby Twoja strona sprzedawała i odpowiadała 24/7.",
  },

  // Footer
  "footer.rights": {
    en: "All rights reserved.",
    pl: "Wszelkie prawa zastrzeżone.",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("pl");

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
