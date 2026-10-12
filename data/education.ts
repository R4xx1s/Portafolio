export type EducationEntry = {
  title: string;
  institution: string;
  period: string;
  status?: string;
};

export type LanguageEntry = {
  language: string;
  level: string;
};

export const education: EducationEntry[] = [
  {
    title: "Ingeniería de Sistemas e Informática",
    institution: "Universidad Tecnológica del Perú (UTP)",
    period: "En curso — 10.º ciclo",
    status: "Bachiller / Estudiante",
  },
];

export const languages: LanguageEntry[] = [
  { language: "Español", level: "Nativo" },
  { language: "Inglés", level: "Intermedio" },
];
