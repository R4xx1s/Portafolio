import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { getProyectosDestacados } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export default function Home() {
  const destacados = getProyectosDestacados();

  return (
    <>
      <Hero />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#CBD5E1] mb-2">
            <span className="text-sky-400 font-mono">01.</span> Proyectos destacados
          </h2>
          <p className="text-[#64748B] mb-10 max-w-lg">
            Proyectos seleccionados que muestran mi experiencia t&eacute;cnica.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {destacados.map((proyecto) => (
              <ProjectCard key={proyecto.id} proyecto={proyecto} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 text-sm text-[#94A3B8] hover:text-sky-400 transition-colors font-mono"
            >
              Ver todos los proyectos
              <span className="text-sky-400">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Skills />
    </>
  );
}
