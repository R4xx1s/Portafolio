import type { MediaItem, Proyecto } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import VideoPlayer from "@/components/VideoPlayer";

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-sm text-[rgba(255,255,255,0.48)] mb-8">
      <Link href="/proyectos" className="hover:text-[#ff63c3] transition-colors">
        Proyectos
      </Link>
      <span className="text-[rgba(255,255,255,0.16)]">/</span>
      <h1
        className="text-[rgba(255,255,255,0.92)] font-bold"
        style={{ fontFamily: "var(--font-m-plus-rounded)" }}
      >
        {children}
      </h1>
    </div>
  );
}

export function Media({ item, alt, vertical }: { item: MediaItem; alt: string; vertical?: boolean }) {
  if (item.type === "image") {
    return (
      <div className={`relative w-full ${vertical ? "aspect-[9/16] max-w-[280px] mx-auto" : "aspect-video"} rounded-xl overflow-hidden mb-6`}>
        <Image src={item.src} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  if (item.type === "video") {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6">
        <iframe
          src={item.src}
          title={alt}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <VideoPlayer src={item.src} />
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
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6">
            <Image src={proyecto.thumbnail} alt={proyecto.titulo} fill className="object-cover" />
          </div>
        )}

        <div className="mb-10">
          <p className="text-sm text-[rgba(255,255,255,0.64)] leading-relaxed text-justify indent-4">
            {proyecto.descripcion}
          </p>
        </div>

        <div className="mb-10 p-6 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)]">
          <h2
            className="text-sm font-bold text-[rgba(255,255,255,0.92)] mb-4"
            style={{ fontFamily: "var(--font-m-plus-rounded)" }}
          >
            Información del proyecto
          </h2>
          <div className="space-y-3">
            {proyecto.url_vercel && (
              <div className="flex items-start gap-4 text-sm">
                <span className="text-[rgba(255,255,255,0.36)] w-20 shrink-0">Web</span>
                <a href={proyecto.url_vercel} className="text-[#ff63c3] hover:underline break-all">
                  {proyecto.url_vercel}
                </a>
              </div>
            )}
            {proyecto.plataforma && (
              <div className="flex items-start gap-4 text-sm">
                <span className="text-[rgba(255,255,255,0.36)] w-20 shrink-0">Plataforma</span>
                <span className="text-[rgba(255,255,255,0.64)]">{proyecto.plataforma}</span>
              </div>
            )}
            <div className="flex items-start gap-4 text-sm">
              <span className="text-[rgba(255,255,255,0.36)] w-20 shrink-0">Stack</span>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {proyecto.tecnologias.map((tech) => (
                  <span key={tech} className="inline-block text-xs font-medium text-[#202023] bg-[#81e6d9] px-2 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {proyecto.url_github && (
              <div className="flex items-start gap-4 text-sm">
                <span className="text-[rgba(255,255,255,0.36)] w-20 shrink-0">Código</span>
                <a href={proyecto.url_github} className="text-[#ff63c3] hover:underline">
                  {proyecto.url_github}
                </a>
              </div>
            )}
          </div>
        </div>

        {proyecto.caracteristicas && proyecto.caracteristicas.length > 0 && (
          <div className="mb-10">
            <h2
              className="text-sm font-bold text-[rgba(255,255,255,0.92)] mb-4"
              style={{ fontFamily: "var(--font-m-plus-rounded)" }}
            >
              Características
            </h2>
            <ul className="space-y-2">
              {proyecto.caracteristicas.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[rgba(255,255,255,0.64)]">
                  <span className="text-[#81e6d9] mt-0.5 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {proyecto.galeria && proyecto.galeria.length > 0 && (
          <div className="mb-10">
            <h2
              className="text-sm font-bold text-[rgba(255,255,255,0.92)] mb-4"
              style={{ fontFamily: "var(--font-m-plus-rounded)" }}
            >
              Galería
            </h2>
            <Carousel items={proyecto.galeria} alt={proyecto.titulo} />
          </div>
        )}

        {proyecto.web && proyecto.web.length > 0 && (
          <div className="mb-10">
            <h2
              className="text-sm font-bold text-[rgba(255,255,255,0.92)] mb-2"
              style={{ fontFamily: "var(--font-m-plus-rounded)" }}
            >
              Web
            </h2>
            <span className="block text-xs text-[rgba(255,255,255,0.36)] mb-4">
              Vista en pantalla de escritorio
            </span>
            <div className="grid grid-cols-2 gap-4">
              {proyecto.web.map((item, i) => (
                <Media key={i} item={item} alt={`${proyecto.titulo} web - ${i + 1}`} />
              ))}
            </div>
          </div>
        )}

        {proyecto.movil && proyecto.movil.length > 0 && (
          <div>
            <h2
              className="text-sm font-bold text-[rgba(255,255,255,0.92)] mb-2"
              style={{ fontFamily: "var(--font-m-plus-rounded)" }}
            >
              Móvil
            </h2>
            <span className="block text-xs text-[rgba(255,255,255,0.36)] mb-4">
              Vista en dispositivo móvil
            </span>
            <div className="flex flex-wrap gap-6 justify-center">
              {proyecto.movil.map((item, i) => (
                <Media key={i} item={item} alt={`${proyecto.titulo} móvil - ${i + 1}`} vertical />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
