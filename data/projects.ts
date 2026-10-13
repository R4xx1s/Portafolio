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
  demoCredentials?: {
    user: string;
    password: string;
    note?: string;
  };
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "sistema-gestion-activos-ti",
    name: "Kardex (Sistema de Gestión de Activos TI)",
    tagline: "Sistema de control de inventario y activos TI en entornos multisede",
    metadata: {
      title: "Kardex (Sistema de Gestión de Activos TI) | Fernando Tocto",
      description:
        "Sistema web full-stack desplegado en producción para el control de inventario y activos TI: catálogo de equipos con filtros, importación/exportación en Excel, etiquetas y actas en PDF, escáner QR, historial de movimientos y administración de usuarios con roles.",
    },
    role: "Desarrollo full-stack e implementación en producción",
    featured: true,
    cover: {
      image: {
        src: "/images/kardex/Miniatura-proyecto-kardex.png",
        alt: "Dashboard de Kardex (Sistema de Gestión de Activos TI) con el estado del inventario",
        width: 1600,
        height: 900,
        caption: "Panel de gestión de activos desplegado en producción",
        frame: "desktop",
      },
    },
    demoCredentials: {
      user: "admin",
      password: "Admin123",
      note: "Cuenta de demostración",
    },
    heroIntro:
      "Sistema web que desarrollé e implementé en producción para centralizar el control de inventario y activos de TI en un entorno corporativo multisede. Permite registrar, buscar e importar equipos distribuidos por sedes y áreas, con etiquetas y actas en PDF, escáner QR, historial de movimientos y administración de usuarios con roles.",
    highlights: [
      "Catálogo de equipos con búsqueda y filtros por sede, área, tipo y estado",
      "Importación/exportación masiva en Excel con plantillas descargables",
      "Generación de etiquetas y actas en PDF y escáner de códigos QR",
      "Historial de movimientos y auditoría por equipo",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Postgres",
      "JWT",
      "Docker",
      "Excel (xlsx)",
      "jsPDF",
      "Vitest",
    ],
    liveUrl: "https://portafolio-devraxxis.vercel.app/",
    githubUrl: undefined,
    sections: [
      {
        heading: "Visión general",
        body: [
          "Un sistema interno pensado para resolver un problema operativo real: la información de los activos de TI estaba dispersa entre hojas de cálculo, herramientas de soporte y registros físicos. La plataforma unifica todo en una sola aplicación web, con una vista única por sede y por área.",
        ],
        summary: [
          {
            label: "Problema",
            text: "El inventario de equipos vivía repartido en varias fuentes, sin una vista única por sede ni trazabilidad de los movimientos de cada activo.",
          },
          {
            label: "Solución",
            text: "Un sistema web full-stack con catálogo de equipos, importación/exportación en Excel, etiquetas y actas en PDF y auditoría por equipo, con una fuente de datos única en Supabase.",
          },
          {
            label: "Resultado",
            text: "Una herramienta en producción usada a diario por el equipo de TI, que reemplaza registros manuales por un inventario centralizado y confiable.",
          },
        ],
        layout: "overview",
      },
      {
        heading: "Gestión centralizada de activos",
        body: [
          "El sistema permite registrar y consultar equipos, filtrarlos por sede, área, tipo y estado, y mantener el inventario ordenado. Toda la operación parte de un panel único con acceso autenticado, y se apoya en herramientas de carga masiva para no depender del registro manual uno por uno.",
        ],
        images: [
          {
            src: "/images/kardex/login-kardex.png",
            alt: "Pantalla de inicio de sesión de Kardex (Sistema de Gestión de Activos TI)",
            width: 1907,
            height: 909,
            caption: "Inicio de sesión corporativo",
            frame: "desktop",
          },
          {
            src: "/images/kardex/panel-principal.png",
            alt: "Panel principal con métricas del inventario",
            width: 1912,
            height: 911,
            caption: "Panel principal de gestión",
            frame: "desktop",
          },
          {
            src: "/images/kardex/kardex-inventario.png",
            alt: "Vista de inventario de activos con equipos y estados",
            width: 997,
            height: 887,
            caption: "Inventario de activos",
            frame: "desktop",
          },
        ],
        layout: "media",
      },
      {
        heading: "Acceso, roles y auditoría",
        body: [
          "El acceso se resuelve con autenticación propia y sesiones firmadas con JWT, administrando usuarios con roles y bloqueo por intentos fallidos. Cada equipo mantiene un historial de movimientos, de modo que cualquier cambio queda trazado en la base de datos.",
        ],
        diagram: [
          { label: "Usuario" },
          { label: "Login (Supabase Auth + JWT)" },
          { label: "Route Handlers de Next.js" },
          { label: "Supabase Postgres" },
          { label: "Historial y auditoría por equipo" },
          { label: "Inventario de activos" },
        ],
        layout: "architecture",
      },
      {
        heading: "Etiquetas, actas y códigos QR",
        body: [
          "La plataforma genera etiquetas y actas en PDF y soporta la lectura de códigos QR para identificar y consultar cada activo de forma rápida y sin ambigüedades.",
        ],
        images: [
          {
            src: "/images/kardex/SistemaClinicas-qr.png",
            alt: "Códigos QR asociados a los activos para identificación rápida",
            width: 1911,
            height: 940,
            caption: "Identificación de activos por QR",
            frame: "desktop",
          },
        ],
        layout: "media",
      },
      {
        heading: "Versión móvil",
        body: [
          "Parte de la operación ocurre en piso, así que el sistema cuenta con vistas optimizadas para el móvil: inicio de sesión y panel de gestión adaptados a pantallas pequeñas.",
        ],
        images: [
          {
            src: "/images/kardex/SistemaClinicas-movil-login.png",
            alt: "Vista móvil de inicio de sesión de Kardex",
            width: 588,
            height: 1280,
            caption: "Acceso desde el móvil",
            frame: "mobile",
          },
          {
            src: "/images/kardex/SistemaClinicas-movil-dashboard.png",
            alt: "Vista móvil del panel de gestión de activos",
            width: 322,
            height: 696,
            caption: "Panel en móvil",
            frame: "mobile",
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
          title: "Demostración de Kardex (Sistema de Gestión de Activos TI)",
        },
      },
      {
        heading: "Funcionalidades",
        body: [],
        bullets: [
          "Catálogo de equipos con búsqueda y filtros por sede, área, tipo y estado",
          "Importación/exportación masiva en Excel con plantillas descargables",
          "Gestión de sedes y áreas configurables",
          "Generación de etiquetas y actas en PDF",
          "Escáner de códigos QR para identificar y consultar activos",
          "Historial de movimientos y auditoría por equipo",
          "Administración de usuarios con roles y bloqueo por intentos fallidos",
        ],
      },
      {
        heading: "Stack técnico",
        body: [
          "Aplicación full-stack sobre Next.js (App Router) con React y TypeScript, estilizada con Tailwind CSS y organizada por dominios. La persistencia y la autenticación se apoyan en Supabase (Postgres), las importaciones/exportaciones usan Excel (xlsx), los documentos se generan con jsPDF y el proyecto se despliega con Docker y se prueba con Vitest.",
        ],
        bullets: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Supabase (Postgres)",
          "JWT",
          "Excel (xlsx)",
          "jsPDF",
          "Docker",
          "Vitest",
        ],
      },
    ],
  },
  {
    slug: "skills-browser",
    name: "Skills Browser",
    tagline: "Explorador local de skills de OpenCode con análisis de compatibilidad",
    metadata: {
      title: "Skills Browser | Fernando Tocto",
      description:
        "Aplicación local-first para explorar skills de OpenCode: escaneo de tu carpeta, filtros por autor y categoría, detalle con documentación traducida, demos interactivos y análisis de compatibilidad con tus proyectos. Sin cuentas, sin base de datos y sin telemetría.",
    },
    role: "Proyecto personal — Diseño y desarrollo full-stack",
    featured: true,
    cover: {
      image: {
        src: "/images/skills-browser/cover.png",
        alt: "Portada de Skills Browser: explorador de skills de OpenCode",
        width: 1600,
        height: 900,
        caption: "Skills Browser",
        frame: "desktop",
      },
    },
    heroIntro:
      "Aplicación local-first para explorar el catálogo de skills de OpenCode. Escanea tu propia carpeta de skills, las organiza por autor y categoría, muestra el detalle de cada una con su documentación traducida y demos interactivos, y analiza su compatibilidad con tus proyectos. Todo corre en tu máquina: sin cuentas, sin base de datos y sin telemetría.",
    highlights: [
      "Grid de skills escaneadas automáticamente desde tu carpeta de OpenCode",
      "Filtros combinables por autor y categoría, y detalle con demo interactivo",
      "Análisis de compatibilidad con tus proyectos: en uso, recomendada o no compatible",
      "100% local, con sandbox de rutas e instalador que nunca ejecuta nada",
    ],
    technologies: ["Vite", "React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "Docker"],
    liveUrl: "https://skill-browser-alpha.vercel.app/",
    githubUrl: undefined,
    sections: [
      {
        heading: "Visión general",
        body: [
          "Las skills de los agentes de IA se multiplican rápido y no siempre es evidente qué hace cada una ni cuándo conviene usarla. Skills Browser nace para ordenar ese ecosistema en un catálogo explorable, y para decirte cuáles encajan de verdad en tus proyectos.",
        ],
        summary: [
          {
            label: "Problema",
            text: "Con tantas skills disponibles, encontrar la adecuada para una tarea concreta es lento, y saber si encaja con tu stack aún más.",
          },
          {
            label: "Solución",
            text: "Un explorador local que escanea tu carpeta de skills, las agrupa y describe, y las cruza con las señales de tus proyectos para clasificar su compatibilidad.",
          },
          {
            label: "Resultado",
            text: "Una aplicación local-first que convierte un ecosistema disperso en un catálogo navegable, privado y comprensible.",
          },
        ],
        layout: "overview",
      },
      {
        heading: "Escaneo y catálogo",
        body: [
          "La aplicación detecta automáticamente cualquier carpeta que contenga un SKILL.md dentro de tu directorio de OpenCode. Lee el frontmatter de cada una y construye el catálogo en el momento, sin reconstruir la aplicación: si instalas una skill nueva, aparece sola.",
        ],
      },
      {
        heading: "Cómo funciona",
        body: [
          "Desde el escaneo hasta la selección, el flujo está pensado para pasar de una lista infinita a un conjunto acotado de opciones útiles por categoría, por autor y por compatibilidad con lo que ya usas.",
        ],
        diagram: [
          { label: "Escaneo de SKILL.md" },
          { label: "Catálogo de skills" },
          { label: "Filtros por autor y categoría" },
          { label: "Análisis de compatibilidad" },
          { label: "Detalle + demo interactivo" },
          { label: "Comando de instalación copiable" },
        ],
        layout: "algorithm",
      },
      {
        heading: "Compatibilidad con tus proyectos",
        body: [
          "Al agregar una carpeta de proyecto, la app extrae señales —frameworks, lenguajes, paquetes y archivos raíz— y las cruza con las keywords de cada skill. Así clasifica cada una como en uso, recomendada, disponible o no compatible, y responde la pregunta importante: ¿esta skill me sirve?",
        ],
      },
      {
        heading: "Seguridad y experiencia local",
        body: [
          "El foco está en que sea completamente local y seguro: el servidor solo puede leer dentro de tu carpeta personal, los volúmenes de Docker se montan en solo lectura y el instalador de skills valida el formato del origen sin ejecutar nunca un comando. La interfaz es bilingüe (ES/EN), con tema claro/oscuro, vistas legales propias y una API REST local documentada dentro de la propia app.",
        ],
      },
      {
        heading: "Funcionalidades",
        body: [],
        bullets: [
          "Grid de skills escaneadas desde tu carpeta de OpenCode",
          "Filtros combinables por autor y categoría",
          "Detalle con documentación traducida al español y demo interactivo",
          "Análisis de compatibilidad con tus proyectos",
          "Selector de carpetas tipo explorador con sandbox de rutas",
          "Instalador de skills seguro: valida el formato y nunca ejecuta nada",
          "Re-escaneo en vivo sin reconstruir la aplicación",
          "Interfaz bilingüe ES/EN con tema claro y oscuro",
          "API REST local documentada dentro de la app",
        ],
      },
      {
        heading: "Stack técnico",
        body: [
          "Frontend en React con Vite y JavaScript, estilizado con Tailwind CSS. Un servidor Node.js con Express sirve la app y expone la API local sobre el sistema de archivos, con Docker para el despliegue y un sandbox que restringe la lectura a tu carpeta personal.",
        ],
        bullets: ["Vite", "React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "Docker"],
      },
    ],
  },
  {
    slug: "cola-de-tickets",
    name: "Cola de Tickets — Tablero de Mesa de Ayuda",
    tagline: "Tablero en tiempo real para tickets de soporte (N1–N3) con SLA, ranking y reportes",
    metadata: {
      title: "Cola de Tickets — Tablero de Mesa de Ayuda | Fernando Tocto",
      description:
        "Tablero en tiempo real para el seguimiento de tickets de soporte técnico: cola MDA (N1+N2) y tickets escalados de Nivel 3, KPIs y SLA, ranking de técnicos, historial de 7 días y reporte diario exportable a Excel. Pensado para pantallas grandes (TV mode), con tema claro y oscuro.",
    },
    role: "Diseño y desarrollo full-stack — tablero de mesa de ayuda",
    featured: true,
    cover: {
      image: {
        src: "/images/cola-de-tickets/cover.png",
        alt: "Portada de Cola de Tickets: tablero de mesa de ayuda",
        width: 1600,
        height: 900,
        caption: "Tablero de cola de tickets",
        frame: "desktop",
      },
    },
    heroIntro:
      "Tablero en tiempo real para el seguimiento de la cola de tickets de soporte técnico. Muestra la cola de atención (MDA: N1 y N2), los tickets escalados de Nivel 3 por sub-área, el ranking de técnicos, las métricas de SLA y el reporte diario exportable a Excel. Está diseñado para pantallas grandes (TV mode) y soporta tema claro y oscuro.",
    highlights: [
      "Cola de atención MDA (N1+N2) y tickets escalados de Nivel 3 en tiempo real",
      "KPIs de SLA con countdown y estados por vencer y vencidos",
      "Ranking de resueltos del día e historial de los últimos 7 días",
      "Reporte diario exportable a Excel y subida de fotos de técnico",
    ],
    technologies: [
      "Node.js",
      "Express",
      "Supabase",
      "Postgres",
      "JavaScript",
      "ExcelJS",
      "Multer",
      "Vercel",
    ],
    liveUrl: "https://cola-de-tickets.vercel.app/",
    githubUrl: undefined,
    sections: [
      {
        heading: "Visión general",
        body: [
          "En una mesa de ayuda con varios niveles de soporte, saber en todo momento qué está en cola, qué se está venciendo y cómo va el equipo cada día no es trivial. Este tablero convierte los tickets en un panel en vivo que se puede dejar abierto en una pantalla grande.",
        ],
        summary: [
          {
            label: "Problema",
            text: "El estado de los tickets y el cumplimiento de los SLA se revisaban de forma manual, sin una vista en vivo que mostrara prioridades y cumplimiento del equipo.",
          },
          {
            label: "Solución",
            text: "Un tablero en tiempo real que separa la cola MDA (N1+N2) de los tickets escalados de Nivel 3, con KPIs de SLA, ranking, historial y reporte diario.",
          },
          {
            label: "Resultado",
            text: "Una herramienta usada a diario por el equipo de soporte para priorizar la atención y medir el desempeño, con reportes que antes se armaban a mano.",
          },
        ],
        layout: "overview",
      },
      {
        heading: "Tablero en tiempo real",
        body: [
          "El tablero se organiza en dos vistas principales: la cola de soporte MDA (N1 y N2) y los tickets escalados de Nivel 3, agrupados por sub-área (Servicios TI, Infraestructura TI, Desarrollo TI y Proyecto Ruway). Cada panel muestra técnico, sede, estado y SLA, con refresco automático de los datos.",
        ],
        bullets: [
          "Cola de atención MDA con pestañas En atención y Tickets Perdidos",
          "Vista de Nivel 3 con sub-tablas por sub-área",
          "KPIs clicables: en curso, en espera, por vencer, vencidos, resueltos y cerrados",
          "Búsqueda y filtro por técnico en todas las vistas",
        ],
      },
      {
        heading: "SLA, ranking e historial",
        body: [
          "Cada ticket se evalúa según reglas de SLA —incidencia 3 h, requerimiento 24 h y creación de usuarios 72 h—, descontando el tiempo en espera. El tablero marca los que están por vencer (≤30 % restante) y los vencidos, y presenta un ranking de resueltos del día junto a un historial de los últimos 7 días con filtros.",
        ],
        diagram: [
          { label: "Tickets de soporte" },
          { label: "Cola MDA (N1 + N2)" },
          { label: "Escalados Nivel 3 por sub-área" },
          { label: "Cálculo de SLA (3h / 24h / 72h)" },
          { label: "Ranking e historial" },
          { label: "Reporte diario" },
        ],
        layout: "architecture",
      },
      {
        heading: "Reportes y exportación",
        body: [
          "La página de reporte reúne los KPIs del día, el desempeño por técnico y el volumen por categoría, con el detalle de cada ticket coloreado según su SLA. Todo el informe se exporta a un libro de Excel de varias hojas, listo para compartir sin trabajo manual.",
        ],
      },
      {
        heading: "Datos, fotos y simulación",
        body: [
          "El backend expone una API que entrega los datos del tablero y del reporte, y permite subir o eliminar la foto de cada técnico, guardándola en el almacenamiento del proyecto. Para las demostraciones, el tablero incluye una simulación de tráfico que abre y cierra tickets de forma automática.",
        ],
      },
      {
        heading: "Funcionalidades",
        body: [],
        bullets: [
          "Cola de atención MDA (N1+N2) y tickets escalados de Nivel 3",
          "Métricas de SLA con countdown, por vencer y vencidos",
          "Ranking de resueltos del día e historial de 7 días con filtros",
          "Pestañas de tickets perdidos y pendientes de proveedor",
          "Reporte diario con exportación a Excel multi-hoja",
          "Subida y borrado de fotos de técnico",
          "Simulación de tráfico para demostraciones",
          "Tema claro/oscuro y modo TV para pantallas grandes",
        ],
      },
      {
        heading: "Stack técnico",
        body: [
          "Backend en Node.js con Express desplegado como función serverless en Vercel, con los datos y las fotos en Supabase (Postgres + Storage). El frontend es JavaScript vanilla con CSS propio, y los reportes se generan en Excel con ExcelJS.",
        ],
        bullets: [
          "Node.js",
          "Express",
          "Supabase (Postgres + Storage)",
          "JavaScript",
          "ExcelJS",
          "Multer",
          "Vercel",
        ],
      },
    ],
  },
];
