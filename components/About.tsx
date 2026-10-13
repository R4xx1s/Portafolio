import { ReactNode } from "react";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { site } from "@/data/site";
import { education, languages } from "@/data/education";
import { experience } from "@/data/experience";

const focus = ["Full-stack", "Infraestructura TI", "Automatización"];
const stack = ["Node.js", "Next.js", "React", "TypeScript", "Python", "MySQL", "Docker", "GLPI"];

function FactRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[84px_1fr] gap-x-3">
      <dt className="font-mono text-[12px] leading-6 text-paper-500">{label}</dt>
      <dd className="text-[14px] leading-6 text-paper-300">{children}</dd>
    </div>
  );
}

export function About() {
  const currentRole = experience[0];
  const studies = education[0];
  const idiomas = languages.map((l) => `${l.language} (${l.level})`).join(" · ");

  return (
    <Section id="about" className="pb-12 sm:pb-16">
      <SectionLabel>Sobre mí</SectionLabel>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
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

        <aside className="min-w-0 lg:pt-1">
          <div className="border border-ink-border bg-ink-900 p-6">
            <p className="font-mono text-[12px] tracking-wide text-signal">FICHA</p>
            <dl className="mt-5 flex flex-col gap-3.5">
              <FactRow label="Rol">{site.role}</FactRow>
              <FactRow label="Ubicación">Lima, Perú</FactRow>
              <FactRow label="Formación">Ing. de Sistemas (UTP) · 10.º ciclo</FactRow>
              <FactRow label="Ahora">
                {currentRole.role} @ DC Tech
              </FactRow>
              <FactRow label="Enfoque">{focus.join(" · ")}</FactRow>
              <FactRow label="Idiomas">{idiomas}</FactRow>
            </dl>
            <div className="mt-6 border-t border-ink-border pt-5">
              <p className="font-mono text-[12px] text-paper-500">STACK PRINCIPAL</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}
