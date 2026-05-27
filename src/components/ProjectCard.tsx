import type { Proyecto } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ proyecto }: { proyecto: Proyecto }) {
  return (
    <Link
      href={`/proyectos/${proyecto.id}`}
      className="block p-6 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)] transition-all duration-200 group"
    >
      {proyecto.thumbnail && (
        <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-lg">
          <Image
            src={proyecto.thumbnail}
            alt={proyecto.titulo}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="flex items-start justify-between mb-3">
        <h3
          className="text-lg font-bold text-[rgba(255,255,255,0.92)]"
          style={{ fontFamily: "var(--font-m-plus-rounded)" }}
        >
          {proyecto.titulo}
        </h3>
        {proyecto.destacado && (
          <span className="text-xs text-[rgb(255,238,0)] ml-2 shrink-0">
            ★ destacado
          </span>
        )}
      </div>

      <p className="text-sm text-[rgba(255,255,255,0.64)] leading-relaxed mb-4 line-clamp-3">
        {proyecto.descripcion}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {proyecto.tecnologias.map((tech) => (
          <span
            key={tech}
            className="text-xs text-[rgba(255,255,255,0.48)]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {proyecto.url_github && (
          <span className="text-xs text-[rgba(255,255,255,0.48)] flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Código
          </span>
        )}
        {proyecto.url_vercel && (
          <span className="text-xs text-[rgb(255,255,255)] flex items-center gap-1.5">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 22.525H0l12-21.05 12 21.05z" />
            </svg>
            Demo
          </span>
        )}
      </div>
    </Link>
  );
}
