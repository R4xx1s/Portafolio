import { getProyectos } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProyectosPage() {
  const proyectos = getProyectos();

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-[768px] mx-auto">
        <h1
          className="text-[30px] font-bold mb-2 tracking-[-1.5px]"
          style={{ fontFamily: "var(--font-m-plus-rounded)" }}
        >
          Proyectos
        </h1>
        <p className="text-sm text-[rgba(255,255,255,0.48)] mb-10">
          Todos mis proyectos, desde sistemas empresariales hasta herramientas personales.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {proyectos.map((proyecto) => (
            <ProjectCard key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>

        {proyectos.length === 0 && (
          <p className="text-center text-[rgba(255,255,255,0.36)] py-20">
            No hay proyectos registrados aún.
          </p>
        )}
      </div>
    </div>
  );
}
