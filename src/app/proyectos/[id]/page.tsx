import { getProyectos } from "@/lib/projects";
import ProjectDetail from "@/components/ProjectDetail";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getProyectos().map((p) => ({ id: p.id }));
}

export default async function ProyectoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const proyectos = getProyectos();
  const proyecto = proyectos.find((p) => p.id === id);
  if (!proyecto) notFound();
  return <ProjectDetail proyecto={proyecto} />;
}
