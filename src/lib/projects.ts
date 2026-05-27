import type { Proyecto } from "./types";

const proyectos: Proyecto[] = [
  {
    id: "1",
    titulo: "Sistema de Inventario - Clínicas",
    descripcion:
      "Sistema integral de gestión de activos tecnológicos desarrollado para Clínicas. Centraliza inventarios, sincroniza con GLPI, autentica mediante Active Directory y LDAP, permite edición masiva, importación y exportación desde Excel, y escaneo mediante códigos QR para tracking físico de equipos.",
    tecnologias: ["Next.js 16", "TypeScript", "Tailwind v4", "MySQL", "AD/LDAP", "Docker"],
    thumbnail: "/images/Miniatura-proyecto-clinicas.png",
    galeria: [
      { type: "image", src: "/images/SistemaClinicas-login.png" },
      { type: "image", src: "/images/SistemaClinicas-dashboard.png" },
      { type: "image", src: "/images/SistemaClinicas-inventario.png" },
      { type: "image", src: "/images/SistemaClinicas-qr.png" },
    ],
    web: [
      { type: "image", src: "/images/SistemaClinicas-web-login.png" },
      { type: "image", src: "/images/SistemaClinicas-web-dashboard.png" },
    ],
    movil: [
      { type: "image", src: "/images/SistemaClinicas-movil-login.png" },
      { type: "image", src: "/images/SistemaClinicas-movil-dashboard.png" },
      //{ type: "video_local", src: "/videos/SistemaClinicas-demo-movile.mp4" },
    ],
    caracteristicas: [
      "Centraliza inventarios tecnológicos de todas las sedes",
      "Sincronización bidireccional con GLPI",
      "Autenticación mediante Active Directory y LDAP",
      "Edición masiva, importación y exportación desde Excel",
      "Escaneo mediante códigos QR para tracking físico",
      "Roles y permisos por usuario",
      "Dashboard con métricas en tiempo real",
    ],
    plataforma: "Web responsive",
    ano: "2025-",
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
  //    thumbnail: "/images/proyecto-thumb.png",     // ← opcional
  //    galeria: [                                   // ← opcional: imágenes/videos
  //      { type: "image", src: "/images/proyecto-01.png" },
  //      { type: "video", src: "https://www.youtube.com/embed/CODIGO" },
  //      { type: "video_local", src: "/videos/proyecto-demo.mp4" },
  //    ],
  //    web: [                                       // ← opcional: capturas web
  //      { type: "image", src: "/images/proyecto-web.png" },
  //    ],
  //    movil: [                                     // ← opcional: capturas móvil
  //      { type: "image", src: "/images/proyecto-movil.png" },
  //    ],
  //    caracteristicas: [                           // ← opcional
  //      "Característica 1",
  //    ],
  //    plataforma: "Web responsive",               // ← opcional
  //    ano: "2025-",                                // ← opcional
  //    url_vercel: "https://…",                     // ← opcional
  //    url_github: "https://…",                     // ← opcional
  //    destacado: false,
  //    created_at: "2025-06-01",
  //  },
];

export function getProyectos(): Proyecto[] {
  return proyectos;
}

export function getProyectosDestacados(): Proyecto[] {
  return proyectos.filter((p) => p.destacado);
}
