export interface Proyecto {
  id: string;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  url_vercel?: string;
  url_github?: string;
  url_demo?: string;
  destacado: boolean;
  created_at: string;
}
