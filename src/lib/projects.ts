import type { Proyecto } from "./types";

const proyectos: Proyecto[] = [
  {
    id: "1",
    titulo: "Sistema de Inventario Aviva-DC Tech",
    descripcion:
      "Sistema de gestión de activos tecnológicos para Clínica Aviva. Sincronización con GLPI, autenticación LDAP, roles de usuario, edición masiva, importación/exportación Excel, escaneo QR y más.",
    tecnologias: ["Next.js 16", "TypeScript", "Tailwind v4", "MySQL", "AD/LDAP", "Docker"],
    url_vercel: "https://inventario-aviva.vercel.app",
    url_github: "https://github.com/R4xx1s/aviva-inventario",
    destacado: true,
    created_at: "2026-05-20",
  },
  {
    id: "2",
    titulo: "Portafolio Personal Raxxis",
    descripcion:
      "Portafolio profesional con diseño oscuro 'Deep Engineering', CMS dinámico con Supabase, panel admin para gestión de proyectos.",
    tecnologias: ["Next.js 16", "TypeScript", "Tailwind v4", "Supabase"],
    url_vercel: "https://portafolio-raxxis.vercel.app",
    url_github: "https://github.com/R4xx1s/Portafolio",
    destacado: true,
    created_at: "2026-05-26",
  },
  {
    id: "3",
    titulo: "Sistema de Gestión de Inventario Dinámico",
    descripcion:
      "Aplicación full-stack para Corp DC con trazabilidad completa, importación/exportación masiva, Dockerización y optimización de dependencias con pnpm.",
    tecnologias: ["Next.js", "TypeScript", "MySQL", "Docker", "pnpm"],
    url_github: "https://github.com/R4xx1s/inventario-dinamico",
    destacado: false,
    created_at: "2026-04-15",
  },
];

export function getProyectos(): Proyecto[] {
  return proyectos;
}

export function getProyectosDestacados(): Proyecto[] {
  return proyectos.filter((p) => p.destacado);
}

export function getProyectoById(id: string): Proyecto | undefined {
  return proyectos.find((p) => p.id === id);
}
