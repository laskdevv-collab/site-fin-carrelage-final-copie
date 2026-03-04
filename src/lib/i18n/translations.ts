export type Language = 'fr' | 'en' | 'de' | 'tr';

export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      expertises: 'Expertises',
      projects: 'Réalisations',
      process: 'Process',
      reviews: 'Avis',
      quote: 'Demander un devis',
      contact: 'Contact',
      blog: 'Blog'
    },
    hero: {
      title_1: "MP Carrelage",
      title_2: "Carreleur Mulhouse.",
      description: "Artisan carreleur expert à Mulhouse et en Alsace. Précision millimétrée, pose grand format et finitions d'exception pour vos projets de rénovation.",
      cta_quote: "Demander un devis gratuit",
      cta_projects: "Voir nos réalisations"
    },
    about: {
      subtitle: "Expertise MP Carrelage",
      title: "Votre Carreleur à Mulhouse depuis 20 ans",
      p1: "Basé à Mulhouse, MP Carrelage réalise tous types de travaux avec précision et passion. Artisan carreleur indépendant, je mets mon expertise au service de vos projets en Alsace.",
      p2: "20 ans d'expérience m'ont permis de maîtriser l'ensemble des techniques de pose. Que ce soit pour une salle de bain, une cuisine ou une terrasse, j'apporte un soin particulier aux finitions.",
      p3: "Mon engagement : des prestations de haute qualité, des délais respectés et un accompagnement local à Mulhouse et ses environs.",
      stats: {
        exp: { value: "+20 ans", label: "d'expérience" },
        clients: { value: "200+", label: "clients satisfaits" },
        quality: { value: "100%", label: "qualité garantie" }
      },
      card: {
        title: "Expertise Certifiée",
        desc: "Maîtrise des formats XXL, mosaïque et pierre naturelle."
      }
    },
    services: {
      subtitle: "Nos Expertises",
      title: "Des prestations sur-mesure",
      items: [
        {
          title: 'Poses Intérieures',
          description: 'Un savoir-faire complet alliant élégance et précision pour tous vos espaces de vie.',
          list: ['Tous types de carreaux', 'Toutes dimensions (XXL)', 'Finitions soignées', 'Sols et murs']
        },
        {
          title: 'Salles de Bains',
          description: 'Création de salles de bains modernes et fonctionnelles, du sol au plafond.',
          list: ['Douches italiennes', 'Mosaïques', 'Niches et caissons', 'Étanchéité complète']
        },
        {
          title: 'Extérieurs',
          description: 'Aménagement de vos espaces extérieurs avec des matériaux résistants et esthétiques.',
          list: ['Terrasses (dalles, pavés)', 'Piscines (int/ext)', 'Cuisines extérieures', 'Habillages spécifiques']
        },
        {
          title: 'Techniques & Autres',
          description: 'Solutions techniques avancées pour des projets complexes et durables.',
          list: ['Résine époxy', 'Poses décoratives', 'Habillage cheminée', 'Surfaces chauffantes']
        }
      ]
    },
    process: {
      subtitle: "Notre Méthode",
      title: "Un process en 4 étapes",
      description: "De la première visite à la livraison finale, nous assurons un suivi complet de votre projet.",
      steps: [
        {
          title: 'Visite & Prise de mesures',
          description: 'Déplacement gratuit pour évaluer votre projet et prendre les mesures précises.'
        },
        {
          title: 'Devis détaillé',
          description: 'Proposition transparente avec détail des matériaux et du temps de réalisation.'
        },
        {
          title: 'Pose professionnelle',
          description: 'Réalisation soignée avec respect des normes et techniques de pose adaptées.'
        },
        {
          title: 'Finition & Contrôle qualité',
          description: 'Vérification minutieuse, nettoyage complet et garantie sur les travaux réalisés.'
        }
      ]
    },
    reviews: {
      subtitle: "Témoignages",
      title: "Avis Clients",
      description: "Découvrez ce que nos clients disent de nos services de carrelage",
      loading: "Impossible de charger les avis",
      empty: "Aucun avis pour le moment",
      count_suffix: "avis clients"
    },
    gallery: {
      subtitle: "Nos Réalisations",
      title: "Galerie de projets",
      categories: {
        all: "Tous",
        interior: "Intérieur",
        exterior: "Extérieur",
        bathroom: "Salle de bain"
      },
      loading: "Impossible de charger la galerie",
      empty: "Aucun projet pour le moment"
    },
    beforeAfter: {
      subtitle: "Transformations",
      title: "Avant / Après",
      description: "Découvrez la transformation de nos projets. Glissez pour comparer.",
      before_label: "Avant",
      after_label: "Après",
      before_desc: "En cours de pose",
      after_desc: "Sol fini"
    },
    contact: {
      subtitle: "Demande de devis",
      title: "Démarrez votre projet",
      description: "Remplissez ce formulaire rapide pour recevoir votre devis gratuit",
      step: "Étape",
      of: "sur",
      success: {
        title: "Merci pour votre demande !",
        desc: "Nous revenons vers vous sous 48h ouvrés pour discuter de votre projet."
      },
      form: {
        project_type: "Type de projet",
        types: { renovation: "Rénovation", new: "Neuf" },
        surface: "Surface approximative (m²)",
        name: "Nom complet",
        email: "Email",
        phone: "Téléphone",
        message_label: "Décrivez votre projet",
        message_placeholder: "Détails du projet, matériaux souhaités, délais...",
        required_fields: "Merci de compléter les champs requis avant de continuer.",
        prev: "Précédent",
        next: "Suivant",
        submit: "Envoyer la demande",
        submitting: "Envoi en cours..."
      },
      error: "Une erreur est survenue. Veuillez réessayer."
    },
    footer: {
      desc: "L'art du carreau au service de l'excellence. 20 ans d'expérience pour donner vie à vos projets en Alsace.",
      nav_title: "Navigation",
      services_title: "Prestations",
      services_list: ["Carrelage intérieur", "Terrasse & Extérieur", "Salle de bain & Douche", "Mosaïque & Pierre"],
      contact_title: "Contact",
      location: "Mulhouse, Alsace\net toute la France pour gros projets",
      rights: "© 2026 MP Carrelage. Tous droits réservés.",
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
      blog: "Blog"
    },
    legalPage: {
      title: "Mentions Légales",
      sections: [
        {
          title: "Éditeur du site",
          content: "MP Carrelage - PEKCAN MUSA\nEntrepreneur individuel (Micro-entreprise)\nSIREN : 515 160 596\nSIRET : 515 160 596 00034\nNuméro de TVA : FR06515160596\nCode APE : 43.33Z (Carrelage)\nInscrit au RNE / RCS Mulhouse : 515 160 596\nSiège social : Mulhouse, Alsace, France\nEmail : mpcarrelage68@gmail.com\nTéléphone : 06 67 67 40 60"
        },
        {
          title: "Hébergement",
          content: "Le site est hébergé par Vercel Inc., situé au 340 S Lemon Ave #4133 Walnut, CA 91789, USA."
        },
        {
          title: "Propriété intellectuelle",
          content: "L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques."
        }
      ]
    },
    privacyPage: {
      title: "Politique de Confidentialité",
      sections: [
        {
          title: "Collecte des données",
          content: "Nous collectons les données que vous nous transmettez via le formulaire de contact (nom, email, téléphone, détails du projet). Ces informations sont nécessaires pour répondre à vos demandes de devis."
        },
        {
          title: "Utilisation des données",
          content: "Vos données sont uniquement utilisées pour vous recontacter dans le cadre de votre projet de carrelage. Elles ne sont jamais cédées ou vendues à des tiers."
        },
        {
          title: "Vos droits",
          content: "Conformément à la loi 'Informatique et Libertés' et au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Vous pouvez exercer ce droit en nous contactant par email."
        },
        {
          title: "Cookies",
          content: "Nous utilisons des cookies pour améliorer votre expérience sur notre site et analyser notre trafic via Google Analytics. Vous pouvez configurer votre navigateur pour refuser les cookies."
        }
      ]
    },
    cookieConsent: {
      message: "Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic.",
      accept: "Tout Accepter",
      decline: "Continuer sans accepter",
      privacy: "En savoir plus"
    }
  },
  en: {
    nav: {
      home: 'Home',
      expertises: 'Expertise',
      projects: 'Projects',
      process: 'Process',
      reviews: 'Reviews',
      quote: 'Get a Quote',
      contact: 'Contact',
      blog: 'Blog'
    },
    hero: {
      title_1: "Exceptional Tiling",
      title_2: "Millimeter Precision.",
      description: "Your expert tiler in Mulhouse and throughout Alsace. Artisanal precision and premium finishes for your renovation and new projects.",
      cta_quote: "Get a Free Quote",
      cta_projects: "View Our Projects"
    },
    about: {
      subtitle: "About MP Carrelage",
      title: "The Art of Tiling at the Service of Excellence",
      p1: "Originally from Mulhouse, I carry out all types of tiling work with precision and passion. As an independent craftsman, I have been putting my expertise at the service of your projects for 20 years.",
      p2: "All this experience in the field has allowed me to master all techniques and types of installation. Whether for a bathroom, a kitchen, a terrace, or any other space, I pay particular attention to finishes and respecting your expectations.",
      p3: "My commitment: quality services, respected deadlines, and personalized support throughout your project.",
      stats: {
        exp: { value: "+20 years", label: "of experience" },
        clients: { value: "200+", label: "satisfied clients" },
        quality: { value: "100%", label: "quality guaranteed" }
      },
      card: {
        title: "Certified Expertise",
        desc: "Mastery of XXL formats, mosaics, and natural stone."
      }
    },
    services: {
      subtitle: "Our Expertise",
      title: "Tailor-made Services",
      items: [
        {
          title: 'Interior Tiling',
          description: 'Complete know-how combining elegance and precision for all your living spaces.',
          list: ['All types of tiles', 'All dimensions (XXL)', 'Neat finishes', 'Floors and walls']
        },
        {
          title: 'Bathrooms',
          description: 'Creation of modern and functional bathrooms, from floor to ceiling.',
          list: ['Italian showers', 'Mosaics', 'Niches and boxes', 'Complete waterproofing']
        },
        {
          title: 'Exteriors',
          description: 'Layout of your outdoor spaces with resistant and aesthetic materials.',
          list: ['Terraces (slabs, pavers)', 'Swimming pools (int/ext)', 'Outdoor kitchens', 'Specific claddings']
        },
        {
          title: 'Technical & Others',
          description: 'Advanced technical solutions for complex and durable projects.',
          list: ['Epoxy resin', 'Decorative installations', 'Fireplace cladding', 'Heated surfaces']
        }
      ]
    },
    process: {
      subtitle: "Our Method",
      title: "A 4-Step Process",
      description: "From the first visit to final delivery, we ensure complete follow-up of your project.",
      steps: [
        {
          title: 'Visit & Measurements',
          description: 'Free visit to evaluate your project and take precise measurements.'
        },
        {
          title: 'Detailed Quote',
          description: 'Transparent proposal detailing materials and completion time.'
        },
        {
          title: 'Professional Installation',
          description: 'Careful execution respecting standards and adapted installation techniques.'
        },
        {
          title: 'Finishing & Quality Control',
          description: 'Meticulous verification, complete cleaning, and guarantee on work performed.'
        }
      ]
    },
    reviews: {
      subtitle: "Testimonials",
      title: "Client Reviews",
      description: "Discover what our clients say about our tiling services",
      loading: "Unable to load reviews",
      empty: "No reviews yet",
      count_suffix: "client reviews"
    },
    gallery: {
      subtitle: "Our Projects",
      title: "Project Gallery",
      categories: {
        all: "All",
        interior: "Interior",
        exterior: "Exterior",
        bathroom: "Bathroom"
      },
      loading: "Unable to load gallery",
      empty: "No projects yet"
    },
    beforeAfter: {
      subtitle: "Transformations",
      title: "Before / After",
      description: "Discover the transformation of our projects. Slide to compare.",
      before_label: "Before",
      after_label: "After",
      before_desc: "Work in progress",
      after_desc: "Finished floor"
    },
    contact: {
      subtitle: "Quote Request",
      title: "Start Your Project",
      description: "Fill out this quick form to receive your free quote",
      step: "Step",
      of: "of",
      success: {
        title: "Thank you for your request!",
        desc: "We will get back to you within 48 business hours to discuss your project."
      },
      form: {
        project_type: "Project Type",
        types: { renovation: "Renovation", new: "New Build" },
        surface: "Approximate Surface (m²)",
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        message_label: "Describe your project",
        message_placeholder: "Project details, desired materials, deadlines...",
        required_fields: "Please fill in the required fields before continuing.",
        prev: "Previous",
        next: "Next",
        submit: "Send Request",
        submitting: "Sending..."
      },
      error: "An error occurred. Please try again."
    },
    footer: {
      desc: "The art of tiling at the service of excellence. 20 years of experience bringing your projects to life in Alsace.",
      nav_title: "Navigation",
      services_title: "Services",
      services_list: ["Interior Tiling", "Terrace & Exterior", "Bathroom & Shower", "Mosaic & Stone"],
      contact_title: "Contact",
      location: "Alsace and\nall of France for large projects",
      rights: "© 2026 MP Carrelage. All rights reserved.",
      legal: "Legal Notice",
      privacy: "Privacy Policy",
      blog: "Blog"
    },
    legalPage: {
      title: "Legal Notice",
      sections: [
        {
          title: "Site Publisher",
          content: "MP Carrelage - PEKCAN MUSA\nIndividual Entrepreneur (Micro-business)\nSIREN: 515 160 596\nSIRET: 515 160 596 00034\nVAT Number: FR06515160596\nAPE Code: 43.33Z (Tiling)\nRegistered at RNE / RCS Mulhouse: 515 160 596\nHeadquarters: Mulhouse, Alsace, France\nEmail: mpcarrelage68@gmail.com\nPhone: +33 6 67 67 40 60"
        },
        {
          title: "Hosting",
          content: "The site is hosted by Vercel Inc., located at 340 S Lemon Ave #4133 Walnut, CA 91789, USA."
        },
        {
          title: "Intellectual Property",
          content: "The entire site is subject to French and international legislation on copyright and intellectual property. All reproduction rights are reserved, including for downloadable documents and iconographic and photographic representations."
        }
      ]
    },
    privacyPage: {
      title: "Privacy Policy",
      sections: [
        {
          title: "Data Collection",
          content: "We collect the data you provide via the contact form (name, email, phone, project details). This information is necessary to respond to your quote requests."
        },
        {
          title: "Data Use",
          content: "Your data is only used to contact you regarding your tiling project. It is never shared or sold to third parties."
        },
        {
          title: "Your Rights",
          content: "In accordance with the General Data Protection Regulation (GDPR), you have the right to access, rectify, and delete your personal data. You can exercise this right by contacting us by email."
        },
        {
          title: "Cookies",
          content: "We use cookies to improve your experience on our site and analyze our traffic via Google Analytics. You can configure your browser to refuse cookies."
        }
      ]
    },
    cookieConsent: {
      message: "We use cookies to improve your experience and analyze our traffic.",
      accept: "Accept All",
      decline: "Continue without accepting",
      privacy: "Learn more"
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      expertises: 'Expertise',
      projects: 'Projekte',
      process: 'Prozess',
      reviews: 'Bewertungen',
      quote: 'Angebot anfordern',
      contact: 'Kontakt',
      blog: 'Blog'
    },
    hero: {
      title_1: "Außergewöhnliche Fliesen",
      title_2: "Millimetergenaue Verlegung.",
      description: "Ihr Experten-Fliesenleger in Mulhouse und im ganzen Elsass. Handwerkliche Präzision und erstklassige Oberflächen für Ihre Renovierungs- und Neubauprojekte.",
      cta_quote: "Kostenloses Angebot anfordern",
      cta_projects: "Unsere Projekte ansehen"
    },
    about: {
      subtitle: "Über MP Carrelage",
      title: "Die Kunst des Fliesenlegens im Dienste der Exzellenz",
      p1: "Ursprünglich aus Mulhouse, führe ich alle Arten von Fliesenarbeiten mit Präzision und Leidenschaft aus. Als unabhängiger Handwerker stelle ich meine Expertise seit 20 Jahren in den Dienst Ihrer Projekte.",
      p2: "All diese Erfahrung auf diesem Gebiet hat es mir ermöglicht, alle Techniken und Verlegearten zu beherrschen. Ob für ein Badezimmer, eine Küche, eine Terrasse oder jeden anderen Raum, ich lege besonderen Wert auf die Oberflächen und die Einhaltung Ihrer Erwartungen.",
      p3: "Mein Versprechen: Qualitätsdienstleistungen, eingehaltene Fristen und persönliche Betreuung während Ihres gesamten Projekts.",
      stats: {
        exp: { value: "+20 Jahre", label: "Erfahrung" },
        clients: { value: "200+", label: "zufriedene Kunden" },
        quality: { value: "100%", label: "Qualität garantiert" }
      },
      card: {
        title: "Zertifizierte Expertise",
        desc: "Beherrschung von XXL-Formaten, Mosaiken und Naturstein."
      }
    },
    services: {
      subtitle: "Unsere Expertise",
      title: "Maßgeschneiderte Dienstleistungen",
      items: [
        {
          title: 'Innenverlegung',
          description: 'Umfassendes Know-how, das Eleganz und Präzision für alle Ihre Wohnräume vereint.',
          list: ['Alle Fliesenarten', 'Alle Abmessungen (XXL)', 'Saubere Oberflächen', 'Böden und Wände']
        },
        {
          title: 'Badezimmer',
          description: 'Gestaltung moderner und funktionaler Badezimmer, vom Boden bis zur Decke.',
          list: ['Italienische Duschen', 'Mosaike', 'Nischen und Kästen', 'Komplette Abdichtung']
        },
        {
          title: 'Außenbereiche',
          description: 'Gestaltung Ihrer Außenbereiche mit widerstandsfähigen und ästhetischen Materialien.',
          list: ['Terrassen (Platten, Pflastersteine)', 'Schwimmbäder (innen/außen)', 'Außenküchen', 'Spezielle Verkleidungen']
        },
        {
          title: 'Technik & Sonstiges',
          description: 'Fortschrittliche technische Lösungen für komplexe und langlebige Projekte.',
          list: ['Epoxidharz', 'Dekorative Verlegungen', 'Kaminverkleidung', 'Beheizte Oberflächen']
        }
      ]
    },
    process: {
      subtitle: "Unsere Methode",
      title: "Ein 4-Schritte-Prozess",
      description: "Vom ersten Besuch bis zur endgültigen Übergabe gewährleisten wir eine vollständige Betreuung Ihres Projekts.",
      steps: [
        {
          title: 'Besuch & Aufmaß',
          description: 'Kostenloser Besuch zur Bewertung Ihres Projekts und zum genauen Aufmaß.'
        },
        {
          title: 'Detailliertes Angebot',
          description: 'Transparenter Vorschlag mit Details zu Materialien und Fertigstellungszeit.'
        },
        {
          title: 'Professionelle Verlegung',
          description: 'Sorgfältige Ausführung unter Einhaltung von Standards und angepassten Verlegetechniken.'
        },
        {
          title: 'Fertigstellung & Qualitätskontrolle',
          description: 'Sorgfältige Überprüfung, vollständige Reinigung und Garantie auf die ausgeführten Arbeiten.'
        }
      ]
    },
    reviews: {
      subtitle: "Referenzen",
      title: "Kundenbewertungen",
      description: "Entdecken Sie, was unsere Kunden über unsere Fliesenlegerdienste sagen",
      loading: "Bewertungen können nicht geladen werden",
      empty: "Noch keine Bewertungen",
      count_suffix: "Kundenbewertungen"
    },
    gallery: {
      subtitle: "Unsere Projekte",
      title: "Projektgalerie",
      categories: {
        all: "Alle",
        interior: "Innenbereich",
        exterior: "Außenbereich",
        bathroom: "Badezimmer"
      },
      loading: "Galerie kann nicht geladen werden",
      empty: "Noch keine Projekte"
    },
    beforeAfter: {
      subtitle: "Transformationen",
      title: "Vorher / Nachher",
      description: "Entdecken Sie die Transformation unserer Projekte. Schieben Sie zum Vergleichen.",
      before_label: "Vorher",
      after_label: "Nachher",
      before_desc: "In Arbeit",
      after_desc: "Fertiger Boden"
    },
    contact: {
      subtitle: "Angebotsanfrage",
      title: "Starten Sie Ihr Projekt",
      description: "Füllen Sie dieses schnelle Formular aus, um Ihr kostenloses Angebot zu erhalten",
      step: "Schritt",
      of: "von",
      success: {
        title: "Vielen Dank für Ihre Anfrage!",
        desc: "Wir werden uns innerhalb von 48 Geschäftsstunden bei Ihnen melden, um Ihr Projekt zu besprechen."
      },
      form: {
        project_type: "Projekttyp",
        types: { renovation: "Renovierung", new: "Neubau" },
        surface: "Ungefähre Fläche (m²)",
        name: "Vollständiger Name",
        email: "E-Mail",
        phone: "Telefon",
        message_label: "Beschreiben Sie Ihr Projekt",
        message_placeholder: "Projektdetails, gewünschte Materialien, Fristen...",
        required_fields: "Bitte füllen Sie die Pflichtfelder aus, bevor Sie fortfahren.",
        prev: "Zurück",
        next: "Weiter",
        submit: "Anfrage senden",
        submitting: "Senden..."
      },
      error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut."
    },
    footer: {
      desc: "Die Kunst des Fliesenlegens im Dienste der Exzellenz. 20 Jahre Erfahrung, um Ihre Projekte im Elsass zum Leben zu erwecken.",
      nav_title: "Navigation",
      services_title: "Dienstleistungen",
      services_list: ["Innenfliesen", "Terrasse & Außenbereich", "Bad & Dusche", "Mosaik & Stein"],
      contact_title: "Kontakt",
      location: "Elsass und\nEinsätze in ganz Frankreich für Großprojekte",
      rights: "© 2026 MP Carrelage. Alle Rechte vorbehalten.",
      legal: "Impressum",
      privacy: "Datenschutzrichtlinie",
      blog: "Blog"
    },
    legalPage: {
      title: "Impressum",
      sections: [
        {
          title: "Webseitenbetreiber",
          content: "MP Carrelage - PEKCAN MUSA\nEinzelunternehmen (Kleingewerbe)\nSIREN: 515 160 596\nSIRET: 515 160 596 00034\nUSt-IdNr.: FR06515160596\nAPE-Code: 43.33Z (Fliesenlegen)\nEingetragen im RNE / RCS Mulhouse: 515 160 596\nHauptsitz: Mulhouse, Elsass, Frankreich\nE-Mail: mpcarrelage68@gmail.com\nTelefon: +33 6 67 67 40 60"
        },
        {
          title: "Hosting",
          content: "Die Website wird von Vercel Inc. gehostet, ansässig in 340 S Lemon Ave #4133 Walnut, CA 91789, USA."
        },
        {
          title: "Urheberrecht",
          content: "Die gesamte Website unterliegt der französischen und internationalen Gesetzgebung zum Urheberrecht und zum geistigen Eigentum. Alle Vervielfältigungsrechte sind vorbehalten, auch für herunterladbare Dokumente sowie bildliche und fotografische Darstellungen."
        }
      ]
    },
    privacyPage: {
      title: "Datenschutzrichtlinie",
      sections: [
        {
          title: "Datenerhebung",
          content: "Wir erheben die Daten, die Sie uns über das Kontaktformular übermitteln (Name, E-Mail, Telefon, Projektdetails). Diese Informationen sind notwendig, um auf Ihre Angebotsanfragen zu antworten."
        },
        {
          title: "Datennutzung",
          content: "Ihre Daten werden ausschließlich dazu verwendet, Sie im Rahmen Ihres Fliesenprojekts zu kontaktieren. Sie werden niemals an Dritte weitergegeben oder verkauft."
        },
        {
          title: "Ihre Rechte",
          content: "Gemäß der Datenschutz-Grundverordnung (DSGVO) haben Sie ein Recht auf Auskunft, Berichtigung und Löschung der Sie betreffenden Daten. Sie können dieses Recht ausüben, indem Sie uns per E-Mail kontaktieren."
        },
        {
          title: "Cookies",
          content: "Wir verwenden Cookies, um Ihre Erfahrung auf einer Website zu verbessern und unseren Datenverkehr über Google Analytics zu analysieren. Sie können Ihren Browser so konfigurieren, dass er Cookies ablehnt."
        }
      ]
    },
    cookieConsent: {
      message: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und unseren Datenverkehr zu analysieren.",
      accept: "Alle akzeptieren",
      decline: "Ohne Akzeptieren fortfahren",
      privacy: "Mehr erfahren"
    }
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      expertises: 'Uzmanlıklar',
      projects: 'Projeler',
      process: 'Süreç',
      reviews: 'Yorumlar',
      quote: 'Teklif Al',
      contact: 'İletişim',
      blog: 'Blog'
    },
    hero: {
      title_1: "Olağanüstü Fayans",
      title_2: "Milimetrik Döşeme.",
      description: "Mulhouse ve tüm Alsace bölgesindeki uzman fayansçınız. Yenileme ve yeni projeleriniz için zanaatkar hassasiyeti ve birinci sınıf işçilik.",
      cta_quote: "Ücretsiz Teklif Alın",
      cta_projects: "Projelerimizi Görün"
    },
    about: {
      subtitle: "MP Carrelage Hakkında",
      title: "Mükemmelliğin Hizmetinde Fayans Sanatı",
      p1: "Başlangıçta Mulhouse'da, her türlü fayans işini hassasiyet ve tutkuyla gerçekleştiriyorum. Bağımsız bir zanaatkar olarak, 20 yıldır uzmanlığımı projelerinizin hizmetine sunuyorum.",
      p2: "Bu alandaki tüm bu deneyim, tüm teknikleri ve döşeme türlerini ustalıkla kullanmamı sağladı. Banyo, mutfak, teras veya başka bir alan olsun, bitişlere ve beklentilerinize saygı duymaya özel bir özen gösteriyorum.",
      p3: "Taahhüdüm: kaliteli hizmetler, uyulan süreler ve projeniz boyunca kişiselleştirilmiş destek.",
      stats: {
        exp: { value: "+20 yıl", label: "deneyim" },
        clients: { value: "200+", label: "memnun müşteri" },
        quality: { value: "%100", label: "kalite garantisi" }
      },
      card: {
        title: "Sertifikalı Uzmanlık",
        desc: "XXL formatlar, mozaik ve doğal taş ustalığı."
      }
    },
    services: {
      subtitle: "Uzmanlıklarımız",
      title: "Özel Hizmetler",
      items: [
        {
          title: 'İç Mekan Döşeme',
          description: 'Tüm yaşam alanlarınız için zarafet ve hassasiyeti birleştiren eksiksiz bir bilgi birikimi.',
          list: ['Her türlü fayans', 'Tüm boyutlar (XXL)', 'Özenli bitişler', 'Zeminler ve duvarlar']
        },
        {
          title: 'Banyolar',
          description: 'Yerden tavana kadar modern ve işlevsel banyoların yaratılması.',
          list: ['İtalyan duşları', 'Mozaikler', 'Nişler ve kutular', 'Tam su yalıtımı']
        },
        {
          title: 'Dış Mekanlar',
          description: 'Dış mekanlarınızın dayanıklı ve estetik malzemelerle düzenlenmesi.',
          list: ['Teraslar (levhalar, parke taşları)', 'Yüzme havuzları (iç/dış)', 'Dış mekan mutfakları', 'Özel kaplamalar']
        },
        {
          title: 'Teknik & Diğerleri',
          description: 'Karmaşık ve dayanıklı projeler için gelişmiş teknik çözümler.',
          list: ['Epoksi reçine', 'Dekoratif döşemeler', 'Şömine kaplaması', 'Isıtmalı yüzeyler']
        }
      ]
    },
    process: {
      subtitle: "Yöntemimiz",
      title: "4 Adımlı Bir Süreç",
      description: "İlk ziyaretten son teslimata kadar, projenizin eksiksiz takibini sağlıyoruz.",
      steps: [
        {
          title: 'Ziyaret & Ölçüm',
          description: 'Projenizi değerlendirmek ve hassas ölçümler almak için ücretsiz ziyaret.'
        },
        {
          title: 'Detaylı Teklif',
          description: 'Malzemeler ve tamamlanma süresi detaylarını içeren şeffaf teklif.'
        },
        {
          title: 'Profesyonel Döşeme',
          description: 'Standartlara ve uyarlanmış döşeme tekniklerine saygı göstererek özenli uygulama.'
        },
        {
          title: 'Bitiş & Kalite Kontrol',
          description: 'Titiz kontrol, tam temizlik ve yapılan işler için garanti.'
        }
      ]
    },
    reviews: {
      subtitle: "Referanslar",
      title: "Müşteri Yorumları",
      description: "Müşterilerimizin fayans hizmetlerimiz hakkında ne dediğini keşfedin",
      loading: "Yorumlar yüklenemiyor",
      empty: "Henüz yorum yok",
      count_suffix: "müşteri yorumu"
    },
    gallery: {
      subtitle: "Projelerimiz",
      title: "Proje Galerisi",
      categories: {
        all: "Tümü",
        interior: "İç Mekan",
        exterior: "Dış Mekan",
        bathroom: "Banyo"
      },
      loading: "Galeri yüklenemiyor",
      empty: "Henüz proje yok"
    },
    beforeAfter: {
      subtitle: "Dönüşümler",
      title: "Önce / Sonra",
      description: "Projelerimizin dönüşümünü keşfedin. Karşılaştırmak için kaydırın.",
      before_label: "Önce",
      after_label: "Sonra",
      before_desc: "Devam eden çalışma",
      after_desc: "Bitmiş zemin"
    },
    contact: {
      subtitle: "Teklif İsteği",
      title: "Projenizi Başlatın",
      description: "Ücretsiz teklifinizi almak için bu hızlı formu doldurun",
      step: "Adım",
      of: "/",
      success: {
        title: "İsteğiniz için teşekkürler!",
        desc: "Projenizi görüşmek için 48 iş saati içinde size geri döneceğiz."
      },
      form: {
        project_type: "Proje Tipi",
        types: { renovation: "Yenileme", new: "Yeni İnşaat" },
        surface: "Yaklaşık Alan (m²)",
        name: "Ad Soyad",
        email: "E-posta",
        phone: "Telefon",
        message_label: "Projenizi tanımlayın",
        message_placeholder: "Proje detayları, istenen malzemeler, süreler...",
        required_fields: "Devam etmeden önce gerekli alanları doldurun lütfen.",
        prev: "Önceki",
        next: "Sonraki",
        submit: "İsteği Gönder",
        submitting: "Gönderiliyor..."
      },
      error: "Bir hata oluştu. Lütfen tekrar deneyin."
    },
    footer: {
      desc: "Mükemmelliğin hizmetinde fayans sanatı. Alsace'da projelerinize hayat vermek için 20 yıllık deneyim.",
      nav_title: "Navigasyon",
      services_title: "Hizmetler",
      services_list: ["İç Mekan Fayans", "Teras & Dış Mekan", "Banyo & Duş", "Mozaik & Taş"],
      contact_title: "İletişim",
      location: "Alsace ve\nBüyük projeler için Fransa genelinde hizmet",
      rights: "© 2026 MP Carrelage. Tüm hakları saklıdır.",
      legal: "Yasal Uyarı",
      privacy: "Gizlilik Politikası",
      blog: "Blog"
    },
    legalPage: {
      title: "Yasal Uyarı",
      sections: [
        {
          title: "Site Sahibi",
          content: "MP Carrelage - PEKCAN MUSA\nBireysel Girişimci (Mikro-işletme)\nSIREN: 515 160 596\nSIRET: 515 160 596 00034\nKDV Numarası: FR06515160596\nAPE Kodu: 43.33Z (Fayans Döşeme)\nRNE / RCS Mulhouse Kayıt: 515 160 596\nMerkez: Mulhouse, Alsace, Fransa\nE-posta: mpcarrelage68@gmail.com\nTelefon: +33 6 67 67 40 60"
        },
        {
          title: "Barındırma (Hosting)",
          content: "Site, 340 S Lemon Ave #4133 Walnut, CA 91789, ABD adresinde bulunan Vercel Inc. tarafından barındırılmaktadır."
        },
        {
          title: "Fikri Mülkiyet",
          content: "Bu sitenin tamamı Fransız ve uluslararası telif hakkı ve fikri mülkiyet mevzuatına tabidir. İndirilebilir belgeler ve ikonografik ve fotografik temsiller de dahil olmak üzere tüm çoğaltma hakları saklıdır."
        }
      ]
    },
    privacyPage: {
      title: "Gizlilik Politikası",
      sections: [
        {
          title: "Veri Toplama",
          content: "İletişim formu aracılığıyla bize ilettiğiniz verileri (ad, e-posta, telefon, proje detayları) topluyoruz. Bu bilgiler, teklif taleplerinize yanıt vermek için gereklidir."
        },
        {
          title: "Veri Kullanımı",
          content: "Verileriniz yalnızca fayans projeniz kapsamında sizinle iletişime geçmek için kullanılır. Asla üçüncü şahıslara verilmez veya satılmaz."
        },
        {
          title: "Haklarınız",
          content: "Genel Veri Koruma Yönetmeliği (GDPR) uyarınca, hakkınızdaki verilere erişme, bunları düzeltme ve silme hakkına sahipsiniz. Bu hakkınızı bize e-posta yoluyla ulaşarak kullanabilirsiniz."
        },
        {
          title: "Çerezler (Cookies)",
          content: "Sitemizdeki deneyiminizi geliştirmek ve trafiğimizi Google Analytics aracılığıyla analiz etmek için çerezler kullanıyoruz. Tarayıcınızı çerezleri reddedecek şekilde yapılandırabilirsiniz."
        }
      ]
    },
    cookieConsent: {
      message: "Deneyiminizi geliştirmek ve trafiğimizi analiz etmek için çerezler kullanıyoruz.",
      accept: "Hepsini Kabul Et",
      decline: "Kabul etmeden devam et",
      privacy: "Daha fazla bilgi"
    }
  }
};
