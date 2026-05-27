import Image from "next/image";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { getProyectosDestacados } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import Section from "@/components/Section";

export default function Home() {
  const destacados = getProyectosDestacados();

  return (
    <div className="max-w-[768px] mx-auto px-6 pt-14">
      <Hero />

      <Section delay={0.1}>
        <div className="flex items-center gap-4">
          <div className="rounded-xl p-3 bg-[rgba(255,255,255,0.04)] backdrop-blur-md">
            <p className="text-sm text-[rgba(255,255,255,0.64)]">
              Hola, soy un desarrollador <strong className="text-[rgba(255,255,255,0.92)]">Full-Stack</strong> e{" "}
              <strong className="text-[rgba(255,255,255,0.92)]">Ingeniero de Sistemas</strong> basado en Perú{" "}
              <span className="inline-flex items-center align-middle mx-0.5">
                <svg viewBox="0 0 3 2" className="w-4 h-3 rounded-[1px]">
                  <rect width="1" height="2" fill="#D91023" />
                  <rect x="1" width="1" height="2" fill="white" />
                  <rect x="2" width="1" height="2" fill="#D91023" />
                </svg>
              </span>
            </p>
          </div>
          <Image
            src="/images/Raxxdev.PNG"
            alt="Dev.Raxxis"
            width={150}
            height={150}
            className="rounded-full shrink-0 -scale-x-100"
          />
        </div>
      </Section>

      <Section delay={0.1}>
        <div className="flex flex-col sm:flex-row gap-6 items-start mb-12">
          <div className="flex-1">
            <h2
              className="text-lg font-bold text-[rgba(255,255,255,0.92)] underline underline-offset-[6px] decoration-[#525252] decoration-4 mb-4"
              style={{ fontFamily: "var(--font-m-plus-rounded)" }}
            >
              Trabajo
            </h2>
            <p className="text-sm text-[rgba(255,255,255,0.64)] leading-relaxed text-justify indent-4">
              Construyo aplicaciones web completas resolviendo problemas reales.
              Mi enfoque combina desarrollo frontend y backend con infraestructura,
              creando soluciones desde la base de datos hasta la interfaz de usuario.
              Actualmente desarrollo sistemas de gestión empresarial con Next.js,
              TypeScript y Docker.
            </p>
            <div className="mt-4">
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-1 text-sm text-[#81e6d9] hover:text-[#ff63c3] transition-colors"
              >
                Ver portafolio →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section delay={0.2}>
        <div className="mb-12">
          <h2
            className="text-lg font-bold text-[rgba(255,255,255,0.92)] underline underline-offset-[6px] decoration-[#525252] decoration-4 mb-6"
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
      </Section>

      <Section delay={0.3}>
        <Skills />
      </Section>

      <Section delay={0.3}>
        <div className="mb-12">
          <h2
            className="text-lg font-bold text-[rgba(255,255,255,0.92)] underline underline-offset-[6px] decoration-[#525252] decoration-4 mb-6"
            style={{ fontFamily: "var(--font-m-plus-rounded)" }}
          >
            En la web
          </h2>
          <div className="flex flex-col gap-2">
            <a
              href="https://github.com/R4xx1s"
              className="inline-flex items-center gap-3 text-sm text-[rgba(255,255,255,0.64)] hover:text-[#81e6d9] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              @R4xx1s
            </a>
            <a
              href="https://linkedin.com/in/fernando-tocto"
              className="inline-flex items-center gap-3 text-sm text-[rgba(255,255,255,0.64)] hover:text-[#81e6d9] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              fernando-tocto
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
