import { createClient } from "@supabase/supabase-js";
import type { Proyecto } from "./types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getProyectos(): Promise<Proyecto[]> {
  const { data, error } = await supabase
    .from("proyectos")
    .select("*")
    .order("destacado", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return (data as Proyecto[]) || [];
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
