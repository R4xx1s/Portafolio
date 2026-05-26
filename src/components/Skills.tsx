const skills = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "API REST", "Next.js API Routes", "MySQL", "PostgreSQL"] },
  { category: "Infraestructura", items: ["Docker", "Active Directory", "LDAP", "GLPI", "Redes"] },
  { category: "Herramientas", items: ["Git/GitHub", "pnpm/npm", "Vercel", "VS Code", "Figma"] },
];

export default function Skills() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[768px] mx-auto">
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)]"
            >
              <h3 className="text-sm font-bold mb-4" style={{ fontFamily: "var(--font-m-plus-rounded)" }}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {group.items.map((item) => (
                  <span key={item} className="text-sm text-[rgba(255,255,255,0.48)]">
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
