import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-mono mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Disponible para proyectos
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          <span className="text-[#CBD5E1]">Hola, soy </span>
          <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
            Cesar Tocto
          </span>
          <br />
          <span className="text-[#64748B] text-2xl sm:text-3xl md:text-4xl font-mono">
            {"<"}Raxxis{">"}
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
          Desarrollador Full-Stack e Ingeniero de Sistemas. Combino desarrollo web con
          experiencia en infraestructura IT para construir aplicaciones escalables,
          desde la base de datos hasta interfaces que los usuarios disfrutan usar.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/proyectos"
            className="px-8 py-3 rounded-lg bg-sky-500 text-white font-medium hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-400/40"
          >
            Ver proyectos
          </Link>
          <a
            href="https://github.com/R4xx1s"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg border border-[#334155] text-[#CBD5E1] font-medium hover:border-sky-500/50 hover:text-sky-400 transition-all"
          >
            GitHub
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-6 text-[#475569] font-mono text-sm">
          <span className="flex items-center gap-2">
            <span className="text-sky-400">▸</span> Next.js
          </span>
          <span className="flex items-center gap-2">
            <span className="text-sky-400">▸</span> TypeScript
          </span>
          <span className="flex items-center gap-2">
            <span className="text-sky-400">▸</span> Tailwind
          </span>
        </div>
      </div>
    </section>
  );
}
