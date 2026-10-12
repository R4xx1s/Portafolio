import { Section, SectionLabel } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about">
      <SectionLabel>Sobre mí</SectionLabel>
      <div className="max-w-prose">
        <p className="text-[18px] leading-relaxed text-paper-100 sm:text-[20px]">
          Ingeniero de Sistemas e Informática (UTP) y Técnico de Soporte Nivel 2, con experiencia en
          desarrollo full-stack, infraestructura TI y automatización de procesos.
        </p>
        <p className="mt-5 text-[16px] leading-relaxed text-paper-500">
          Diseño, desarrollo e implemento soluciones en producción: desde sistemas de gestión de activos y
          dashboards de monitoreo en tiempo real hasta herramientas de automatización documental y auditoría
          de hardware. Trabajo con Node.js, Next.js, React, Python, MySQL y Docker, integrando plataformas
          ITSM como GLPI, y cuido el diseño y la experiencia de cada interfaz.
        </p>
      </div>
    </Section>
  );
}
