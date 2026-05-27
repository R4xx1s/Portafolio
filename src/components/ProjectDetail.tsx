import type { Proyecto } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-sm text-[rgba(255,255,255,0.48)] mb-6">
      <Link href="/proyectos" className="hover:text-[#ff63c3] transition-colors">
        Proyectos
      </Link>
      <span>/</span>
      <h1
        className="text-[rgba(255,255,255,0.92)] font-bold"
        style={{ fontFamily: "var(--font-m-plus-rounded)" }}
      >
        {children}
      </h1>
    </div>
  );
}

export function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

export function Meta({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-medium text-[#202023] bg-[#81e6d9] px-2 py-0.5 rounded mr-2">
      {children}
    </span>
  );
}

export default function ProjectDetail({ proyecto }: { proyecto: Proyecto }) {
  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-[768px] mx-auto">
        <Title>{proyecto.titulo}</Title>

        {proyecto.thumbnail && (
          <ProjectImage src={proyecto.thumbnail} alt={proyecto.titulo} />
        )}

        <p className="text-sm text-[rgba(255,255,255,0.64)] leading-relaxed mb-6">
          {proyecto.descripcion}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          <Meta>Stack</Meta>
          {proyecto.tecnologias.map((tech) => (
            <span key={tech} className="text-sm text-[rgba(255,255,255,0.64)]">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {proyecto.url_vercel && (
            <a
              href={proyecto.url_vercel}
              className="inline-flex items-center gap-2 text-sm text-[#ff63c3] hover:underline"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 22.525H0l12-21.05 12 21.05z" />
              </svg>
              {proyecto.url_vercel}
            </a>
          )}
          {proyecto.url_github && (
            <a
              href={proyecto.url_github}
              className="inline-flex items-center gap-2 text-sm text-[#ff63c3] hover:underline"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              {proyecto.url_github}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
