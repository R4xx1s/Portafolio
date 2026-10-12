export type DiagramStep = {
  label: string;
};

export type Contribution = {
  title: string;
  description: string;
  diagram?: DiagramStep[];
};

export type ExperienceEntry = {
  slug: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  context: string;
  summary: string;
  emphasis?: string;
  contributions: Contribution[];
  technologies: string[];
  focusTechnologies?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    slug: "corporacion-dc-tech",
    company: "Corporación DC Tech S.A.C.",
    role: "Auxiliar Técnico N2",
    period: "Enero 2026 — Actualidad",
    location: "Lima, Perú",
    context: "Software interno, ITSM e infraestructura TI en entorno corporativo multisede",
    summary:
      "Diseño, desarrollo e implementación en producción de soluciones de software interno y herramientas de monitoreo en tiempo real (Node.js, Express, Next.js, React, Python, MySQL, Docker, Traefik) integradas con GLPI para optimizar métricas de atención, seguimiento de SLAs, automatización de documentación técnica y gestión centralizada de activos TI.",
    emphasis:
      "Mi trabajo conecta el soporte técnico N2 con el desarrollo de las herramientas que el propio equipo de TI usa a diario: del requerimiento en piso al sistema en producción.",
    contributions: [
      {
        title: "TIERLIST — cola de tickets MDA en tiempo real",
        description:
          "Diseñé y desplegué en producción un dashboard en tiempo real integrado a GLPI para el monitoreo de tickets N1/N2/N3, control visual de SLAs y generación automatizada de reportes diarios a Excel.",
        diagram: [
          { label: "Tickets en GLPI" },
          { label: "API Node.js / Express" },
          { label: "Motor de cola N1 · N2 · N3" },
          { label: "Cálculo de SLA y semáforos" },
          { label: "Dashboard en tiempo real" },
          { label: "Reportes diarios a Excel" },
        ],
      },
      {
        title: "Sistema web de gestión de activos TI",
        description:
          "Desarrollo e implementación de un sistema full-stack con autenticación LDAP/Active Directory y sincronización GLPI para la gestión centralizada de equipos, control de periféricos y celulares, y mapeo por pisos en entornos multisede.",
        diagram: [
          { label: "Usuario" },
          { label: "Frontend Next.js / React" },
          { label: "Autenticación LDAP / Active Directory" },
          { label: "API Node.js / Express" },
          { label: "Base de datos MySQL" },
          { label: "Sincronización GLPI" },
        ],
      },
      {
        title: "Automatización documental (informes y actas)",
        description:
          "Desarrollo de herramientas internas para la generación automatizada y estandarizada de informes técnicos de diagnóstico y actas de entrega/recepción de activos informáticos, optimizando el control documental y reduciendo tiempos operativos.",
      },
      {
        title: "SpecScan — auditoría de hardware automatizada",
        description:
          "Creación de un ejecutable portable en Python y PowerShell con consultas WMI/CIM para la auditoría técnica de componentes de hardware en entornos Windows y la generación automática de reportes técnicos.",
      },
      {
        title: "Soporte técnico N2 y gestión de usuarios",
        description:
          "Atención y resolución de incidencias complejas on-site, asignación, configuración y clonación masiva de equipos informáticos.",
      },
      {
        title: "Infraestructura, redes y proveedores",
        description:
          "Mantenimiento preventivo y correctivo del parque informático, configuración de impresoras en red, despliegue de software corporativo (VPN, antivirus), copias de seguridad periódicas y gestión de garantías con proveedores.",
      },
    ],
    technologies: [
      "Node.js",
      "Express",
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "MySQL",
      "Docker",
      "Docker Compose",
      "Traefik",
      "GLPI",
      "Active Directory / LDAP",
      "WMI/CIM",
      "PowerShell",
      "ExcelJS",
    ],
    focusTechnologies: [
      "Node.js",
      "Express",
      "Next.js",
      "React",
      "MySQL",
      "Docker",
      "Traefik",
      "GLPI",
      "Active Directory / LDAP",
      "Python",
      "PowerShell",
    ],
  },
  {
    slug: "systems-support-networking",
    company: "Systems Support & Networking",
    role: "Especialista en Soporte Técnico y E-commerce",
    period: "Agosto 2025 — Enero 2026",
    location: "Lima, Perú",
    context: "Soporte técnico, e-commerce y automatización de datos",
    summary:
      "Soporte técnico interno, administración de una plataforma de e-commerce y desarrollo de automatizaciones para procesar bases de datos masivas de productos.",
    contributions: [
      {
        title: "Automatización y procesamiento de datos",
        description:
          "Desarrollo de soluciones de automatización en Google Sheets mediante scripts para la limpieza, eliminación de duplicados y consolidación de bases de datos masivas de productos.",
      },
      {
        title: "Extracción de datos con Web Scraping",
        description:
          "Extracción automatizada de información crítica de productos (números de parte y precios) directamente desde portales de almacenes mediante Octoparse.",
      },
      {
        title: "Gestión web y soporte TI",
        description:
          "Administración de la plataforma Shopify con maquetación HTML enriquecida, soporte técnico interno a usuarios, ensamblaje y mantenimiento de hardware y control de calidad (QA).",
      },
    ],
    technologies: [
      "Google Apps Script",
      "Google Sheets",
      "Octoparse",
      "Web Scraping",
      "Shopify",
      "HTML",
      "QA",
      "Soporte TI",
    ],
    focusTechnologies: ["Google Apps Script", "Octoparse", "Web Scraping", "Shopify", "HTML"],
  },
  {
    slug: "american-deluxe",
    company: "American Deluxe",
    role: "Asistente de Marketing",
    period: "Noviembre 2023 — Diciembre 2024",
    location: "Lima, Perú",
    context: "Contenido de marca y campañas para redes sociales",
    summary:
      "Creación de contenido visual y ejecución de campañas publicitarias, con foco en métricas de interacción y alcance de marca.",
    contributions: [
      {
        title: "Gestión de contenido y campañas",
        description:
          "Creación de contenido visual que logró un incremento del 40% en interacción en redes sociales y ejecución de campañas publicitarias que aumentaron la visibilidad del perfil en un 65%.",
      },
    ],
    technologies: ["Diseño de contenido", "Redes sociales", "Campañas publicitarias", "Métricas"],
  },
  {
    slug: "promart-home-center",
    company: "Promart Home Center",
    role: "Consultor",
    period: "Enero 2023 — Agosto 2023",
    location: "Lima, Perú",
    context: "Atención técnica y control de exhibición en tienda",
    summary:
      "Asesoría técnica personalizada a clientes y supervisión del área de exhibición, con impacto directo en la satisfacción y el control de inventario.",
    contributions: [
      {
        title: "Atención técnica y control de inventario",
        description:
          "Asesoría técnica personalizada a más de 30 clientes diarios (95% de satisfacción) y supervisión del área de exhibición, reduciendo las incidencias de inventario en un 30%.",
      },
    ],
    technologies: ["Atención al cliente", "Gestión de inventario", "Exhibición"],
  },
];
