import Link from "next/link";

const timeline = [
  { year: "2026", event: "Sistema de Inventario Aviva-DC Tech — despliegue en producción" },
  { year: "2026", event: "Inicio del portafolio personal y consolidación como Full-Stack Developer" },
  { year: "2025", event: "Desarrollo de herramientas internas con Next.js y automatización IT" },
  { year: "2024", event: "Especialización en infraestructura tecnológica y soporte IT corporativo" },
  { year: "2023", event: "Inicio en el desarrollo web con tecnologías modernas" },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-[768px] mx-auto">
        <h1
          className="text-[30px] font-bold mb-6 tracking-[-1.5px]"
          style={{ fontFamily: "var(--font-m-plus-rounded)" }}
        >
          Sobre mí
        </h1>

        <div className="space-y-4 text-sm text-[rgba(255,255,255,0.64)] leading-relaxed">
          <p>
            Soy <strong className="text-[rgba(255,255,255,0.92)]">Fernando Tocto</strong>,
            estudiante de Ingeniería de Sistemas e Informática en la UTP y actualmente me desempeño como Técnico de Soporte Nivel 2 
            en CORP DC. Mi perfil es inusual: disfruto tanto metiendo las manos en el hardware y resolviendo 
            incidencias on-site, como diseñando la arquitectura de un sistema web desde cero.
          </p>

          <p>
            Me gusta ir más allá del soporte tradicional. Si veo un proceso manual que toma horas, como el mapeo de equipos o auditorías, 
            mi instinto es desarrollar una plataforma full-stack para automatizarlo.
          </p>

          <p>
            Actualmente trabajo en <strong className="text-[rgba(255,255,255,0.92)]">Corp DC — Clínica Aviva</strong>,
            donde desarrollé un sistema de inventario tecnológico que centraliza la gestión
            de activos, integra Active Directory para autenticación y sincroniza datos con GLPI.
          </p>

          <p>
            Fuera de la terminal y los servidores, me gusta jugar en equipo en partidas competitivas de shooters como Valorant, 
            o afinar mi atención al detalle preparando un buen Pisco Sour o cocinando un domingo en casa.
          </p>
        </div>

        <h2
          className="text-lg font-bold text-[rgba(255,255,255,0.92)] mt-16 mb-6"
          style={{ fontFamily: "var(--font-m-plus-rounded)" }}
        >
          Trayectoria
        </h2>

        <div className="space-y-4">
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#81e6d9] mt-1.5 z-10 ring-2 ring-[#202023]" />
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-[rgba(255,255,255,0.08)] mt-1" />
                )}
              </div>
              <div>
                <span className="text-sm font-bold text-[#81e6d9] mr-3">
                  {item.year}
                </span>
                <span className="text-sm text-[rgba(255,255,255,0.64)]">
                  {item.event}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)]">
          <h3 className="text-sm font-bold mb-3" style={{ fontFamily: "var(--font-m-plus-rounded)" }}>
            Contacto
          </h3>
          <div className="space-y-2 text-sm text-[rgba(255,255,255,0.64)]">
            <p>
              GitHub:{" "}
              <Link
                href="https://github.com/R4xx1s"
                className="text-[#ff63c3] hover:underline"
              >
                github.com/R4xx1s
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
