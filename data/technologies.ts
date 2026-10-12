export type TechGroup = {
  area: string;
  items: string[];
  capabilitiesLabel?: string;
  capabilities?: string[];
};

export const technologies: TechGroup[] = [
  {
    area: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    area: "Backend",
    items: ["Node.js", "Express", "Java", "Spring Boot", "PHP", "APIs REST"],
  },
  {
    area: "Bases de datos",
    items: ["MySQL", "MariaDB", "PostgreSQL", "SQL Server"],
  },
  {
    area: "Infraestructura y DevOps",
    items: [
      "Docker",
      "Docker Compose",
      "Traefik (proxy/TLS)",
      "Git / GitHub",
      "Active Directory / LDAP",
      "GLPI (ITSM)",
      "WMI/CIM",
      "Redes / VPN",
    ],
  },
  {
    area: "Automatización y análisis",
    items: [
      "Google Apps Script",
      "Python",
      "PowerShell",
      "Web Scraping (Octoparse)",
      "Power BI",
      "MS Excel avanzado",
    ],
    capabilitiesLabel: "Aplicado a",
    capabilities: [
      "generación de informes y actas",
      "automatización de procesos internos",
      "procesamiento de bases de datos",
    ],
  },
  {
    area: "Desarrollo móvil",
    items: ["React Native / Expo", "Swift / iOS"],
    capabilitiesLabel: "Enfoque",
    capabilities: ["apps multiplataforma", "motion y gestos", "haptics"],
  },
  {
    area: "Diseño y experiencia",
    items: ["Diseño de interfaces", "Design systems", "Jerarquía visual", "Animación y motion", "Accesibilidad"],
  },
  {
    area: "IA aplicada",
    items: [
      "Agentes de IA / prompt engineering",
      "Generación de imágenes con IA",
      "Imagen a código",
      "Automatización con IA",
    ],
  },
];
