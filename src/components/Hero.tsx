import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-[768px] mx-auto text-center">
        {/* ─── Logo ─── */}
        <div className="flex justify-center mb-6">
          <Image
            src="/Raxxdev.PNG"
            alt="Raxxdev logo"
            width={96}
            height={96}
            className="rounded-2xl"
            priority
          />
        </div>

        {/* ─── Espacio para objeto 3D (futuro) ─── */}
        <div
          id="three-container"
          className="w-full h-[200px] flex items-center justify-center text-[rgba(255,255,255,0.16)] text-sm"
        >
          {/* Aquí irá el objeto 3D con @react-three/fiber */}
        </div>

        <h1 className="text-[30px] sm:text-[36px] font-bold leading-[1.2] tracking-[-1.5px] mb-4"
          style={{ fontFamily: "var(--font-m-plus-rounded)" }}>
          Cesar Tocto
        </h1>

        <p className="text-[rgba(255,255,255,0.48)] text-sm max-w-[517px] mx-auto leading-relaxed mb-8">
          Desarrollador Full-Stack e Ingeniero de Sistemas.
          Construyo aplicaciones web desde la base de datos hasta la interfaz.
        </p>

        <div className="flex items-center justify-center gap-2">
          <span className="text-[rgba(255,255,255,0.48)] text-sm">Raxxis</span>
          <span className="text-[rgba(255,255,255,0.16)]">/</span>
          <a
            href="https://github.com/R4xx1s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff63c3] text-sm hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
