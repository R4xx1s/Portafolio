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

      <section className="py-20 px-6">
        <div className="max-w-[768px] mx-auto">
          <h2
            className="text-xl font-bold text-[rgba(255,255,255,0.92)] mb-6"
            style={{ fontFamily: "var(--font-m-plus-rounded)" }}
          >
            Proyectos destacados
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {destacados.map((proyecto) => (
              <ProjectCard key={proyecto.id} proyecto={proyecto} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/proyectos"
              className="text-sm text-[rgba(255,255,255,0.48)] hover:text-[#ff63c3] transition-colors"
            >
              Ver todos los proyectos →
            </Link>
          </div>
        </div>
      </section>

      <Skills />
    </>
  );
}
