import ThreeCanvas from "@/components/ThreeCanvas";

export default function Hero() {
  return (
    <section className="text-center mb-12">
      <div className="w-full h-[220px] flex items-center justify-center">
        <ThreeCanvas />
      </div>

      <h1 className="text-[30px] sm:text-[36px] font-bold leading-[1.2] tracking-[-1.5px] mb-4"
        style={{ fontFamily: "var(--font-m-plus-rounded)" }}>
        Fernando Tocto
      </h1>

      <p className="text-[rgba(255,255,255,0.64)] text-sm max-w-[517px] mx-auto leading-relaxed mb-8">
        Creando soluciones web completas{" "}
        <span className="text-[rgba(255,255,255,0.16)]">—</span>{" "}
        de la base de datos al navegador.
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
    </section>
  );
}
