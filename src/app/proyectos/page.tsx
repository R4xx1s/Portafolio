export const dynamic = "force-dynamic";

import { getProyectos } from "@/lib/supabase";
import ProjectCard from "@/components/ProjectCard";

export default async function ProyectosPage() {
  const proyectos = await getProyectos();

  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#CBD5E1] mb-2">Proyectos</h1>
        <p className="text-[#64748B] mb-10">
          Todos mis proyectos, desde sistemas empresariales hasta herramientas personales.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {proyectos.map((proyecto) => (
            <ProjectCard key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>

        {proyectos.length === 0 && (
          <p className="text-center text-[#64748B] py-20">
            No hay proyectos registrados a&uacute;n.
          </p>
        )}
      </div>
    </div>
  );
}
