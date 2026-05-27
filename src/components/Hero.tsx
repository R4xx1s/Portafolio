import ThreeCanvas from "@/components/ThreeCanvas";

export default function Hero() {
  return (
    <section className="flex items-center justify-center px-6 pt-24 pb-12">
      <div className="max-w-[768px] mx-auto text-center">
        <div className="w-full h-[220px] flex items-center justify-center">
          <ThreeCanvas />
        </div>

        <h1 className="text-[30px] sm:text-[36px] font-bold leading-[1.2] tracking-[-1.5px] mb-4"
          style={{ fontFamily: "var(--font-m-plus-rounded)" }}>
          Fernando Tocto
        </h1>

        <p className="text-[rgba(255,255,255,0.64)] text-sm max-w-[517px] mx-auto leading-relaxed mb-8">
          Desarrollador{" "}
          <strong className="text-[rgba(255,255,255,0.92)]">Full-Stack</strong> en Perú{" "}
          <span className="inline-flex items-center align-middle mx-0.5">
            <svg viewBox="0 0 3 2" className="w-4 h-3 rounded-[1px]">
              <rect width="1" height="2" fill="#D91023" />
              <rect x="1" width="1" height="2" fill="white" />
              <rect x="2" width="1" height="2" fill="#D91023" />
            </svg>
          </span>{" "}
          e{" "}
          <strong className="text-[rgba(255,255,255,0.92)]">Ingeniero de Sistemas</strong>.
          <br />
          Construyo aplicaciones web completas: desde la base de datos
          hasta la interfaz de usuario.
        </p>

        <div className="flex items-center justify-center gap-2">
          <span className="text-[rgb(255,255,255)] text-sm">Dev.Raxxis</span>
          <span className="text-[rgba(255,255,255,0.16)]">/</span>
          <a
            href="https://github.com/R4xx1s"

            className="text-[#ff63c3] text-sm hover:underline"
          >
            GitHub
          </a>
          <span className="text-[rgba(255,255,255,0.16)]">/</span>
          <a
            href="https://linkedin.com/in/fernando-tocto"

            className="text-[#0A66C2] text-sm hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
