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
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#CBD5E1] mb-2">
          <span className="text-sky-400 font-mono">/</span> Sobre m&iacute;
        </h1>

        <div className="mt-10 space-y-6 text-[#94A3B8] leading-relaxed">
          <p>
            Soy <strong className="text-[#CBD5E1]">Cesar Fernando Tocto Cumbay</strong>,{" "}
            conocido como <strong className="text-sky-400">Raxxis</strong> en el &aacute;mbito digital.
            Soy Desarrollador Full-Stack e Ingeniero de Sistemas con experiencia en soporte IT
            e infraestructura tecnol&oacute;gica.
          </p>

          <p>
                Me apasiona construir aplicaciones web escalables que resuelvan problemas reales.
            Mi enfoque combina el desarrollo frontend y backend con un conocimiento s&oacute;lido
            de infraestructura, lo que me permite crear soluciones completas desde la base de datos
            hasta la interfaz de usuario.
          </p>

          <p>
            Actualmente trabajo en <strong className="text-[#CBD5E1]">Cl&iacute;nica Aviva / Corp DC</strong>,
            donde desarroll&eacute; un sistema de inventario tecnol&oacute;gico que centraliza la gesti&oacute;n
            de activos, integra Active Directory para autenticaci&oacute;n y sincroniza datos con GLPI.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[#CBD5E1] mt-16 mb-2">
          <span className="text-sky-400 font-mono">▸</span> Trayectoria
        </h2>
        <p className="text-[#64748B] mb-8">Mi camino hasta ahora.</p>

        <div className="space-y-0">
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-4 pb-6 relative">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-sky-500 mt-1.5 z-10 ring-2 ring-[#0F172A]" />
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-[#334155] mt-1" />
                )}
              </div>
              <div>
                <span className="text-xs font-mono text-sky-400">{item.year}</span>
                <p className="text-sm text-[#94A3B8] mt-0.5">{item.event}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 rounded-xl bg-[#1E293B] border border-[#334155]">
          <h3 className="text-sm font-semibold text-sky-400 font-mono mb-3">
            $ contacto
          </h3>
          <div className="space-y-2 text-sm text-[#94A3B8]">
            <p>
              GitHub:{" "}
              <Link
                href="https://github.com/R4xx1s"
                className="text-sky-400 hover:underline"
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
