import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const envPath = path.resolve(import.meta.dirname, "..", ".env.local");
const envContent = fs.readFileSync(envPath, "utf-8");
const envVars: Record<string, string> = {};
for (const line of envContent.split("\n")) {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith("#")) {
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx > 0) {
      envVars[trimmed.slice(0, eqIdx)] = trimmed.slice(eqIdx + 1);
    }
  }
}

const supabaseUrl = envVars.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function seed() {
  const { error } = await supabase.from("proyectos").insert({
    titulo: "Sistema de Inventario Aviva-DC Tech",
    descripcion:
      "Sistema de gestión de activos tecnológicos para Clínica Aviva. Sincronización con GLPI, autenticación LDAP, roles de usuario, edición masiva, importación/exportación Excel, escaneo QR y más.",
    tecnologias: ["Next.js 16", "TypeScript", "Tailwind v4", "MySQL", "AD/LDAP", "Docker"],
    url_vercel: "https://sistemas-inventarios-clinicas.vercel.app/login",
    url_github: "https://github.com/R4xx1s/aviva-inventario",
    destacado: true,
  });

  if (error) {
    console.error("Error inserting:", error.message);
  } else {
    console.log("Project inserted successfully!");
  }
}

seed();
