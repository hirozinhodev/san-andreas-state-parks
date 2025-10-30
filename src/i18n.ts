import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traduções
const resources = {
  en: {
    translation: {
      // Header
      "home": "Home",
      "recruitment": "Join Us",
      
      // Home Page
      "guardians_of": "Guardians of",
      "nature": "Nature",
      "dedicated_to_preserving": "Dedicated to preserving and protecting the natural ecosystems of San Andreas for present and future generations.",
      "join_our_team": "Join Our Team",
      "learn_more": "Learn More",
      "our_mission": "Our Mission",
      "who_we_are": "Who We Are",
      "park_rangers_san_andreas": "San Andreas State Parks Rangers are an institution dedicated to the protection, conservation and management of the state's protected natural areas. With over {{years}} years of history, our commitment is to ensure that future generations can enjoy the natural beauty that surrounds us.",
      "protection": "Protection",
      "safeguard_flora_fauna": "We safeguard the flora and fauna of our state parks",
      "conservation": "Conservation",
      "preserve_ecosystems": "We preserve natural ecosystems for the future",
      "community": "Community",
      "work_with_community": "We work with the community in environmental education",
      "excellence": "Excellence",
      "highest_standards": "We maintain the highest standards of public service",
      "in_action": "In Action",
      "our_work": "Our Work",
      "know_how_we_protect": "See how we protect and preserve San Andreas state parks",
      
      // Recruitment Page
      "join_our_team_title": "Join Our Team",
      "become_park_ranger": "Become a Park Ranger and be part of a tradition of service and environmental protection",
      "benefits": "Benefits",
      "why_become_ranger": "Why Become a Park Ranger?",
      "why_become_ranger_description": "Be part of San Andreas State Parks and join a tradition of service and environmental protection",
      "meaningful_purpose": "Meaningful Purpose",
      "protect_preserve_beauty": "Protect and preserve the natural beauty of San Andreas for future generations",
      "exceptional_team": "Exceptional Team",
      "work_with_dedicated": "Work alongside dedicated professionals passionate about conservation",
      "continuous_training": "Continuous Training",
      "access_training_programs": "Access to training programs and continuous professional development",
      "complete_benefits": "Complete Benefits",
      "competitive_package": "Enjoy a competitive benefits package and job stability",
      "requirements": "Requirements",
      "what_you_need": "What You Need?",
      "to_join_our_team": "To join our team you need:",
      "citizen_san_andreas": "Be a citizen of San Andreas or have valid work permit",
      "at_least_21": "Be at least 21 years old",
      "high_school_diploma": "High school diploma or equivalent",
      "valid_drivers_license": "Valid driver's license",
      "excellent_physical_condition": "Excellent physical condition and ability to work outdoors",
      "background_check": "Pass background check and medical examination",
      "passion_conservation": "Passion for conservation and public service",
      "note": "Note:",
      "prior_experience_valued": "Prior experience in law enforcement, emergency services, or natural resource management will be valued.",
      "selection_process": "Selection Process",
      "5_steps": "5 Steps",
      "online_application": "Online Application",
      "complete_application_form": "Complete the application form with your personal data and experience",
      "initial_evaluation": "Initial Evaluation",
      "document_review": "Document review and verification of basic requirements",
      "physical_exam": "Physical Exam",
      "fitness_tests": "Physical fitness tests and complete medical evaluation",
      "personal_interview": "Personal Interview",
      "panel_interview": "Interview with the selection panel to assess motivation and competencies",
      "training_academy": "Training Academy",
      "intensive_program": "Intensive 12-week program of theoretical and practical training",
      "ready_to_start": "Ready to Start Your Career?",
      "recruitment_open": "The recruitment process is open. Don't miss the opportunity to be part of this historic institution.",
      "send_application": "Send Application",
      
      // Footer
      "protecting_preserving": "Protecting and preserving the natural beauty of San Andreas for future generations.",
      "contact": "Contact",
      "san_andreas_state": "San Andreas, State of San Andreas",
      "quick_links": "Quick Links",
      "all_rights_reserved": "All rights reserved.",
      
      // Language selector
      "select_language": "Select Language",
      "english": "English",
      "spanish": "Español",
      "portuguese": "Português"
    }
  },
  es: {
    translation: {
      // Header
      "home": "Inicio",
      "recruitment": "Únete a Nosotros",
      
      // Home Page
      "guardians_of": "Guardianes de la",
      "nature": "Naturaleza",
      "dedicated_to_preserving": "Dedicados a preservar y proteger los ecosistemas naturales de San Andreas para las generaciones presentes y futuras.",
      "join_our_team": "Únete a Nuestro Equipo",
      "learn_more": "Conocer Más",
      "our_mission": "Nuestra Misión",
      "who_we_are": "Quiénes Somos",
      "park_rangers_san_andreas": "Los Park Rangers de San Andreas State Parks somos una institución dedicada a la protección, conservación y gestión de las áreas naturales protegidas del estado. Con más de {{years}} años de historia, nuestro compromiso es garantizar que las futuras generaciones puedan disfrutar de la belleza natural que nos rodea.",
      "protection": "Protección",
      "safeguard_flora_fauna": "Salvaguardamos la flora y fauna de nuestros parques estatales",
      "conservation": "Conservación",
      "preserve_ecosystems": "Preservamos los ecosistemas naturales para el futuro",
      "community": "Comunidad",
      "work_with_community": "Trabajamos junto a la comunidad en educación ambiental",
      "excellence": "Excelencia",
      "highest_standards": "Mantenemos los más altos estándares de servicio público",
      "in_action": "En Acción",
      "our_work": "Nuestro Trabajo",
      "know_how_we_protect": "Conoce cómo protegemos y preservamos los parques estatales de San Andreas",
      
      // Recruitment Page
      "join_our_team_title": "Únete a Nuestro Equipo",
      "become_park_ranger": "Conviértete en Park Ranger y forma parte de una tradición de servicio y protección ambiental",
      "benefits": "Beneficios",
      "why_become_ranger": "¿Por Qué Ser Park Ranger?",
      "why_become_ranger_description": "Forma parte de San Andreas State Parks y únete a una tradición de servicio y protección ambiental",
      "meaningful_purpose": "Propósito Significativo",
      "protect_preserve_beauty": "Protege y preserva la belleza natural de San Andreas para las futuras generaciones",
      "exceptional_team": "Equipo Excepcional",
      "work_with_dedicated": "Trabaja junto a profesionales dedicados y apasionados por la conservación",
      "continuous_training": "Formación Continua",
      "access_training_programs": "Accede a programas de capacitación y desarrollo profesional constante",
      "complete_benefits": "Beneficios Completos",
      "competitive_package": "Disfruta de un paquete de beneficios competitivo y estabilidad laboral",
      "requirements": "Requisitos",
      "what_you_need": "¿Qué Necesitas?",
      "to_join_our_team": "Para unirte a nuestro equipo necesitas:",
      "citizen_san_andreas": "Ser ciudadano de San Andreas o tener permiso de trabajo válido",
      "at_least_21": "Tener al menos 21 años de edad",
      "high_school_diploma": "Diploma de educación secundaria o equivalente",
      "valid_drivers_license": "Licencia de conducir válida",
      "excellent_physical_condition": "Excelente condición física y capacidad para trabajar al aire libre",
      "background_check": "Pasar verificación de antecedentes y examen médico",
      "passion_conservation": "Pasión por la conservación y el servicio público",
      "note": "Nota:",
      "prior_experience_valued": "Se valorará experiencia previa en aplicación de la ley, servicios de emergencia, o gestión de recursos naturales.",
      "selection_process": "Proceso de Selección",
      "5_steps": "5 Pasos",
      "online_application": "Aplicación en Línea",
      "complete_application_form": "Completa el formulario de solicitud con tus datos personales y experiencia",
      "initial_evaluation": "Evaluación Inicial",
      "document_review": "Revisión de documentos y verificación de requisitos básicos",
      "physical_exam": "Examen Físico",
      "fitness_tests": "Pruebas de aptitud física y evaluación médica completa",
      "personal_interview": "Entrevista Personal",
      "panel_interview": "Entrevista con el panel de selección para evaluar motivación y competencias",
      "training_academy": "Academia de Formación",
      "intensive_program": "Programa intensivo de 12 semanas de capacitación teórica y práctica",
      "ready_to_start": "¿Listo para Comenzar tu Carrera?",
      "recruitment_open": "El proceso de reclutamiento está abierto. No pierdas la oportunidad de formar parte de esta institución histórica.",
      "send_application": "Enviar Solicitud",
      
      // Footer
      "protecting_preserving": "Protegiendo y preservando la belleza natural de San Andreas para las generaciones futuras.",
      "contact": "Contacto",
      "san_andreas_state": "San Andreas, Estado de San Andreas",
      "quick_links": "Enlaces Rápidos",
      "all_rights_reserved": "Todos los derechos reservados.",
      
      // Language selector
      "select_language": "Seleccionar Idioma",
      "english": "English",
      "spanish": "Español",
      "portuguese": "Português"
    }
  },
  pt: {
    translation: {
      // Header
      "home": "Início",
      "recruitment": "Junte-se a Nós",
      
      // Home Page
      "guardians_of": "Guardiões da",
      "nature": "Natureza",
      "dedicated_to_preserving": "Dedicados a preservar e proteger os ecossistemas naturais de San Andreas para as gerações presentes e futuras.",
      "join_our_team": "Junte-se à Nossa Equipe",
      "learn_more": "Saiba Mais",
      "our_mission": "Nossa Missão",
      "who_we_are": "Quem Somos",
      "park_rangers_san_andreas": "Os Guardas Florestais dos Parques Estaduais de San Andreas somos uma instituição dedicada à proteção, conservação e gestão das áreas naturais protegidas do estado. Com mais de {{years}} anos de história, nosso compromisso é garantir que as futuras gerações possam desfrutar da beleza natural que nos cerca.",
      "protection": "Proteção",
      "safeguard_flora_fauna": "Protegemos a flora e fauna dos nossos parques estaduais",
      "conservation": "Conservação",
      "preserve_ecosystems": "Preservamos os ecossistemas naturais para o futuro",
      "community": "Comunidade",
      "work_with_community": "Trabalhamos com a comunidade na educação ambiental",
      "excellence": "Excelência",
      "highest_standards": "Mantemos os mais altos padrões de serviço público",
      "in_action": "Em Ação",
      "our_work": "Nosso Trabalho",
      "know_how_we_protect": "Conheça como protegemos e preservamos os parques estaduais de San Andreas",
      
      // Recruitment Page
      "join_our_team_title": "Junte-se à Nossa Equipe",
      "become_park_ranger": "Torne-se um guarda florestal e faça parte de uma tradição de serviço e proteção ambiental",
      "benefits": "Benefícios",
      "why_become_ranger": "Por Que Ser um Guarda Florestal?",
      "why_become_ranger_description": "Faça parte dos Parques Estaduais de San Andreas e junte-se a uma tradição de serviço e proteção ambiental",
      "meaningful_purpose": "Propósito Significativo",
      "protect_preserve_beauty": "Proteja e preserve a beleza natural de San Andreas para as futuras gerações",
      "exceptional_team": "Equipe Excepcional",
      "work_with_dedicated": "Trabalhe ao lado de profissionais dedicados e apaixonados pela conservação",
      "continuous_training": "Treinamento Contínuo",
      "access_training_programs": "Acesso a programas de capacitação e desenvolvimento profissional contínuo",
      "complete_benefits": "Benefícios Completos",
      "competitive_package": "Desfrute de um pacote de benefícios competitivo e estabilidade no trabalho",
      "requirements": "Requisitos",
      "what_you_need": "O Que Você Precisa?",
      "to_join_our_team": "Para se juntar à nossa equipe você precisa:",
      "citizen_san_andreas": "Ser cidadão de San Andreas ou ter permissão de trabalho válida",
      "at_least_21": "Ter pelo menos 21 anos de idade",
      "high_school_diploma": "Diploma de ensino médio ou equivalente",
      "valid_drivers_license": "Carteira de motorista válida",
      "excellent_physical_condition": "Excelente condição física e capacidade de trabalhar ao ar livre",
      "background_check": "Passar verificação de antecedentes e exame médico",
      "passion_conservation": "Paixão pela conservação e serviço público",
      "note": "Nota:",
      "prior_experience_valued": "Será valorizada experiência prévia em aplicação da lei, serviços de emergência ou gestão de recursos naturais.",
      "selection_process": "Processo de Seleção",
      "5_steps": "5 Etapas",
      "online_application": "Aplicação Online",
      "complete_application_form": "Complete o formulário de inscrição com seus dados pessoais e experiência",
      "initial_evaluation": "Avaliação Inicial",
      "document_review": "Revisão de documentos e verificação de requisitos básicos",
      "physical_exam": "Exame Físico",
      "fitness_tests": "Testes de aptidão física e avaliação médica completa",
      "personal_interview": "Entrevista Pessoal",
      "panel_interview": "Entrevista com o painel de seleção para avaliar motivação e competências",
      "training_academy": "Academia de Treinamento",
      "intensive_program": "Programa intensivo de 12 semanas de treinamento teórico e prático",
      "ready_to_start": "Pronto para Começar sua Carreira?",
      "recruitment_open": "O processo de recrutamento está aberto. Não perca a oportunidade de fazer parte desta instituição histórica.",
      "send_application": "Enviar Inscrição",
      
      // Footer
      "protecting_preserving": "Protegendo e preservando a beleza natural de San Andreas para as gerações futuras.",
      "contact": "Contato",
      "san_andreas_state": "San Andreas, Estado de San Andreas",
      "quick_links": "Links Rápidos",
      "all_rights_reserved": "Todos os direitos reservados.",
      
      // Language selector
      "select_language": "Selecionar Idioma",
      "english": "English",
      "spanish": "Español",
      "portuguese": "Português"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // idioma padrão
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;