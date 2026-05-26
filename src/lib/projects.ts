import type { Proyecto } from "./types";

// ═══════════════════════════════════════════════════════════
//  PROYECTOS DEL PORTAFOLIO
//  ⚡ Edita este array para agregar, modificar o eliminar
//     proyectos. Al recargar la página se reflejan.
// ═══════════════════════════════════════════════════════════

const proyectos: Proyecto[] = [
  {
    id: "1",
    titulo: "Sistema de Inventario - Clínicas",
    descripcion:
      "Sistema integral de gestión de activos tecnológicos desarrollado para Clínica Aviva / Corp DC. Centraliza inventarios, sincroniza con GLPI, autentica mediante Active Directory y LDAP, permite edición masiva, importación y exportación desde Excel, y escaneo mediante códigos QR para tracking físico de equipos.",
    tecnologias: ["Next.js 16", "TypeScript", "Tailwind v4", "MySQL", "AD/LDAP", "Docker"],
    url_vercel: "https://sistemas-inventarios-clinicas.vercel.app/login",
    destacado: true,
    created_at: "2025-01-15",
  },

  // ─── Para agregar un proyecto, copia el bloque anterior ───
  //  (incluyendo la coma delante) y pégalo aquí:
  //
  //  {
  //    id: "2",
  //    titulo: "Nombre del proyecto",
  //    descripcion: "Descripción del proyecto…",
  //    tecnologias: ["Tech1", "Tech2"],
  //    url_vercel: "https://…",        // ← opcional
  //    url_github: "https://…",        // ← opcional
  //    destacado: false,
  //    created_at: "2025-06-01",
  //  },
];

// ═══════════════════════════════════════════════════════════
//  FUNCIONES — No modificar
// ═══════════════════════════════════════════════════════════

export function getProyectos(): Proyecto[] {
  return proyectos;
}

export function getProyectosDestacados(): Proyecto[] {
  return proyectos.filter((p) => p.destacado);
}
