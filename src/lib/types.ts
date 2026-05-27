export type MediaType = "image" | "video" | "video_local";

export interface MediaItem {
  type: MediaType;
  src: string;
}

export interface Proyecto {
  id: string;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  thumbnail?: string;
  galeria?: MediaItem[];
  web?: MediaItem[];
  movil?: MediaItem[];
  caracteristicas?: string[];
  plataforma?: string;
  ano?: string;
  url_vercel?: string;
  url_github?: string;
  destacado: boolean;
  created_at: string;
}
