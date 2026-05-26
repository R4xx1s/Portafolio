const skills = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "API REST", "Next.js API Routes", "MySQL", "PostgreSQL"] },
  { category: "Infraestructura", items: ["Docker", "Active Directory", "LDAP", "GLPI", "Redes"] },
  { category: "Herramientas", items: ["Git/GitHub", "pnpm/npm", "Vercel", "VS Code", "Figma"] },
];

export default function Skills() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-[#CBD5E1] mb-2">
          <span className="text-sky-400 font-mono">02.</span> Stack & Skills
        </h2>
        <p className="text-[#64748B] mb-10 max-w-lg">
          Tecnologías con las que trabajo diariamente y en mis proyectos.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-xl bg-[#1E293B] border border-[#334155]"
            >
              <h3 className="text-sm font-semibold text-sky-400 font-mono mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-[#CBD5E1] px-3 py-1.5 rounded-lg bg-[#0F172A] border border-[#334155]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
