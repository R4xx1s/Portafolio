import { createClient } from "@supabase/supabase-js";
import type { Proyecto } from "./types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

function getProyectosLocal(): Proyecto[] {
  return [
    {
      id: "1",
      titulo: "Sistema de Inventario Aviva-DC Tech",
      descripcion:
        "Sistema de gestión de activos tecnológicos para Clínica Aviva. Sincronización con GLPI, autenticación LDAP, roles de usuario, edición masiva, importación/exportación Excel, escaneo QR y más.",
      tecnologias: ["Next.js 16", "TypeScript", "Tailwind v4", "MySQL", "AD/LDAP", "Docker"],
      url_vercel: "https://sistemas-inventarios-clinicas.vercel.app/login",
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
      destacado: true,
      created_at: "2026-04-15",
    },
  ];
}

export async function getProyectos(): Promise<Proyecto[]> {
  try {
    const { data, error } = await supabase
      .from("proyectos")
      .select("*")
      .order("destacado", { ascending: false })
      .order("created_at", { ascending: false });

    if (error) throw new Error(error.message);
    return (data as Proyecto[]) || [];
  } catch {
    console.warn("Supabase no disponible, usando datos locales");
    return getProyectosLocal();
  }
}

export async function createProyecto(
  proyecto: Omit<Proyecto, "id" | "created_at">
): Promise<Proyecto> {
  const { data, error } = await supabase
    .from("proyectos")
    .insert(proyecto)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data as Proyecto;
}

export async function updateProyecto(
  id: string,
  proyecto: Partial<Omit<Proyecto, "id" | "created_at">>
): Promise<Proyecto> {
  const { data, error } = await supabase
    .from("proyectos")
    .update(proyecto)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data as Proyecto;
}

export async function deleteProyecto(id: string): Promise<void> {
  const { error } = await supabase.from("proyectos").delete().eq("id", id);
  if (error) throw new Error(error.message);
}
