import type { Proyecto } from "@/lib/types";

export default function ProjectCard({ proyecto }: { proyecto: Proyecto }) {
  return (
    <div className="group relative p-6 rounded-xl bg-[#1E293B] border border-[#334155] hover:border-sky-500/50 transition-all duration-300">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-[#CBD5E1] group-hover:text-sky-400 transition-colors">
            {proyecto.titulo}
          </h3>
          {proyecto.destacado && (
            <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
              destacado
            </span>
          )}
        </div>

        <p className="text-sm text-[#94A3B8] leading-relaxed mb-4 line-clamp-3">
          {proyecto.descripcion}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {proyecto.tecnologias.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2 py-1 rounded-md border border-sky-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {proyecto.url_github && (
            <a
              href={proyecto.url_github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#64748B] hover:text-sky-400 transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Código
            </a>
          )}
          {proyecto.url_vercel && (
            <a
              href={proyecto.url_vercel}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#64748B] hover:text-sky-400 transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 22.525H0l12-21.05 12 21.05z" />
              </svg>
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
