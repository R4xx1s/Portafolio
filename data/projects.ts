export type DiagramStep = { label: string };

export type ProjectImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  frame?: "desktop" | "mobile" | "diagram";
};

export type ProjectSection = {
  heading: string;
  body: string[];
  video?:
    | {
        provider: "youtube";
        id: string;
        title: string;
      }
    | {
        provider: "local";
        src: string;
        title?: string;
      };
  diagram?: DiagramStep[];
  bullets?: string[];
  images?: ProjectImage[];
  summary?: {
    label: string;
    text: string;
  }[];
  layout?: "overview" | "media" | "architecture" | "algorithm" | "desktop-with-mobile-grid";
  cta?: {
    label: string;
    note: string;
  };
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  metadata?: {
    title?: string;
    description?: string;
  };
  role: string;
  featured: boolean;
  cover: {
    placeholderLabel?: string;
    image?: ProjectImage;
  };
  heroIntro?: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  videoPlaceholder?: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "sistema-gestion-activos-ti",
    name: "Sistema de Gestión de Activos TI",
    tagline: "Plataforma interna multisede para inventario, periféricos y mapeo de activos",
    metadata: {
      title: "Sistema de Gestión de Activos TI | Fernando Tocto",
      description:
        "Sistema web full-stack desplegado en producción para la gestión centralizada de activos TI: autenticación LDAP/Active Directory, sincronización con GLPI, control de periféricos y mapeo por pisos en entornos multisede.",
    },
    role: "Desarrollo full-stack e implementación en producción",
    featured: true,
    cover: {
      image: {
        src: "/images/clinicas/SistemaClinicas-web-dashboard.png",
        alt: "Dashboard del Sistema de Gestión de Activos TI con el estado del inventario",
        width: 1440,
        height: 810,
        caption: "Panel de gestión de activos desplegado en producción",
        frame: "desktop",
      },
    },
    heroIntro:
      "Sistema web que desarrollé e implementé en producción para centralizar la gestión de activos de TI en un entorno corporativo multisede. Integra autenticación con LDAP/Active Directory, sincronización con GLPI y control de equipos, periféricos y celulares, con mapeo por pisos.",
    highlights: [
      "Autenticación corporativa con LDAP / Active Directory",
      "Sincronización con GLPI para el inventario de activos",
      "Control centralizado de equipos, periféricos y celulares",
      "Mapeo por pisos y sedes desde una única plataforma",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "TypeScript",
      "MySQL",
      "Docker",
      "Active Directory / LDAP",
      "GLPI",
    ],
    liveUrl: "https://sistemas-inventarios-clinicas.vercel.app/login",
    githubUrl: undefined,
    sections: [
      {
        heading: "Visión general",
        body: [
          "Un sistema interno pensado para resolver un problema operativo real: la información de los activos de TI estaba dispersa entre hojas de cálculo, herramientas de soporte y registros de piso. La plataforma unifica todo en una sola aplicación web.",
        ],
        summary: [
          {
            label: "Problema",
            text: "El inventario de equipos, periféricos y celulares vivía repartido en varias fuentes, sin una vista única por sede ni trazabilidad centralizada.",
          },
          {
            label: "Solución",
            text: "Un sistema web full-stack con autenticación corporativa y sincronización con GLPI que centraliza activos, periféricos y su ubicación por pisos y sedes.",
          },
          {
            label: "Resultado",
            text: "Una herramienta en producción usada a diario por el equipo de TI, que reemplaza registros manuales por una fuente de datos única y confiable.",
          },
        ],
        layout: "overview",
      },
      {
        heading: "Gestión centralizada de activos",
        body: [
          "El sistema permite registrar y consultar equipos, controlar periféricos y celulares asignados, y mantener el inventario ordenado por sede y por piso. Toda la operación parte de un panel único con acceso autenticado.",
        ],
        images: [
          {
            src: "/images/clinicas/SistemaClinicas-login.png",
            alt: "Pantalla de inicio de sesión del Sistema de Gestión de Activos TI",
            width: 1440,
            height: 810,
            caption: "Inicio de sesión corporativo",
            frame: "desktop",
          },
          {
            src: "/images/clinicas/SistemaClinicas-web-dashboard.png",
            alt: "Panel principal del Sistema de Gestión de Activos TI",
            width: 1440,
            height: 810,
            caption: "Panel principal de gestión",
            frame: "desktop",
          },
          {
            src: "/images/clinicas/SistemaClinicas-inventario.png",
            alt: "Vista de inventario de activos con equipos y estados",
            width: 1440,
            height: 810,
            caption: "Inventario de activos",
            frame: "desktop",
          },
        ],
        layout: "media",
      },
      {
        heading: "Autenticación y sincronización con GLPI",
        body: [
          "El acceso se valida contra LDAP / Active Directory, de modo que los usuarios usan sus credenciales corporativas. El sistema se integra además con GLPI para mantener el inventario alineado con la plataforma de mesa de ayuda.",
        ],
        diagram: [
          { label: "Usuario corporativo" },
          { label: "Login LDAP / Active Directory" },
          { label: "API Node.js / Express" },
          { label: "Base de datos MySQL" },
          { label: "Sincronización con GLPI" },
          { label: "Inventario de activos" },
        ],
        layout: "architecture",
      },
      {
        heading: "App móvil y códigos QR",
        body: [
          "Parte de la operación se realiza en piso, así que la plataforma cuenta con vistas móviles y soporte de códigos QR para identificar y consultar activos rápidamente desde el móvil.",
        ],
        images: [
          {
            src: "/images/clinicas/SistemaClinicas-movil-login.png",
            alt: "Vista móvil de inicio de sesión del Sistema de Gestión de Activos TI",
            width: 390,
            height: 844,
            caption: "Acceso desde el móvil",
            frame: "mobile",
          },
          {
            src: "/images/clinicas/SistemaClinicas-movil-dashboard.png",
            alt: "Vista móvil del panel de gestión de activos",
            width: 390,
            height: 844,
            caption: "Panel en móvil",
            frame: "mobile",
          },
          {
            src: "/images/clinicas/SistemaClinicas-qr.png",
            alt: "Códigos QR asociados a los activos para identificación rápida",
            width: 800,
            height: 800,
            caption: "Identificación de activos por QR",
            frame: "desktop",
          },
        ],
        layout: "media",
      },
      {
        heading: "Demostración",
        body: [
          "Recorrido por el sistema en producción: inicio de sesión, panel de gestión e identificación de activos desde el móvil.",
        ],
        video: {
          provider: "local",
          src: "/videos/SistemaClinicas-demo-movile.mp4",
          title: "Demostración del Sistema de Gestión de Activos TI",
        },
      },
      {
        heading: "Funcionalidades",
        body: [],
        bullets: [
          "Autenticación con credenciales corporativas (LDAP / Active Directory)",
          "Gestión centralizada de equipos por sede y por piso",
          "Control de periféricos y celulares asignados",
          "Sincronización del inventario con GLPI",
          "Identificación y consulta de activos mediante códigos QR",
          "Vistas móviles para operación en piso",
        ],
      },
      {
        heading: "Stack técnico",
        body: [
          "Frontend en Next.js y React con TypeScript. Backend en Node.js con Express sobre MySQL, desplegado con Docker. La integración corporativa se resuelve con autenticación LDAP/Active Directory y sincronización con GLPI.",
        ],
        bullets: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MySQL", "Docker", "LDAP / Active Directory", "GLPI"],
      },
    ],
  },
  {
    slug: "skills-browser",
    name: "Skills Browser",
    tagline: "Explorador local para descubrir, comparar y usar skills de agentes de IA",
    metadata: {
      title: "Skills Browser | Fernando Tocto",
      description:
        "Proyecto personal para explorar un catálogo de skills de agentes de IA: descubrir, comparar y activar capacidades como diseño de interfaces, animación y generación de imágenes.",
    },
    role: "Proyecto personal — Diseño y desarrollo full-stack",
    featured: true,
    cover: {
      placeholderLabel: "Capturas en camino",
    },
    heroIntro:
      "Proyecto personal para explorar el creciente ecosistema de skills de agentes de IA. Reúne un catálogo de capacidades —diseño de interfaces, animación, generación de imágenes, workflows de desarrollo— y permite descubrirlas, entender qué hace cada una y compararlas antes de usarlas.",
    highlights: [
      "Catálogo navegable de skills de agentes de IA",
      "Descripción clara de qué resuelve cada skill y cuándo usarla",
      "Experiencia de exploración con búsqueda y categorías",
      "Interfaz de producto enfocada en lectura y comparación",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Agentes de IA"],
    liveUrl: "https://skill-browser-alpha.vercel.app/",
    githubUrl: undefined,
    sections: [
      {
        heading: "Visión general",
        body: [
          "Las skills de agentes de IA se multiplican rápido y no siempre es evidente qué hace cada una ni cuándo conviene usarla. Skills Browser nace para ordenar ese ecosistema en un catálogo explorable.",
        ],
        summary: [
          {
            label: "Problema",
            text: "Con tantas skills disponibles, encontrar la adecuada para una tarea concreta es lento y poco claro.",
          },
          {
            label: "Solución",
            text: "Un explorador que agrupa y describe las skills con un enfoque de producto: qué resuelven, para qué sirven y cómo se relacionan.",
          },
          {
            label: "Resultado",
            text: "Una aplicación desplegada que convierte un ecosistema disperso en un catálogo navegable y comprensible.",
          },
        ],
        layout: "overview",
      },
      {
        heading: "Qué es una skill",
        body: [
          "Cada entrada del catálogo explica una capacidad concreta: desde diseño de interfaces y sistemas de diseño, hasta animación, generación de imágenes o workflows de ingeniería y agente. El objetivo es que el usuario entienda la utilidad de cada skill sin leer documentación dispersa.",
        ],
      },
      {
        heading: "Cómo funciona",
        body: [
          "La aplicación organiza las skills en un catálogo explorable, lo que permite pasar de una lista infinita a un conjunto acotado de opciones por categoría y por necesidad.",
        ],
        diagram: [
          { label: "Catálogo de skills" },
          { label: "Categorías y áreas" },
          { label: "Descripción de cada skill" },
          { label: "Comparación" },
          { label: "Selección para la tarea" },
        ],
        layout: "algorithm",
      },
      {
        heading: "Diseño y experiencia",
        body: [
          "El foco visual del proyecto está en la legibilidad y la jerarquía: la información de cada skill debe poder escanearse rápido y compararse sin fricción. Trabajé tipografía, espaciado y estructura para que el catálogo se sienta como un producto y no como una lista de texto.",
        ],
      },
      {
        heading: "Funcionalidades",
        body: [],
        bullets: [
          "Catálogo navegable de skills de agentes de IA",
          "Agrupación por categorías y áreas de trabajo",
          "Descripción clara del propósito de cada skill",
          "Experiencia pensada para explorar y comparar",
          "Interfaz responsive desplegada en Vercel",
        ],
      },
      {
        heading: "Stack técnico",
        body: [
          "Aplicación web construida con Next.js, React, TypeScript y Tailwind CSS, y desplegada en Vercel. El diseño de la interfaz y la organización del contenido están pensados como un producto propio.",
        ],
        bullets: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      },
    ],
  },
];
