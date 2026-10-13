# Portfolio — Fernando Tocto

Portfolio profesional de **Cesar Fernando Tocto Cumbay** — Desarrollador Full-Stack & Ingeniero de Sistemas.
Construido con **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, generado estáticamente (SSG) y listo para desplegar en Vercel.

## Cómo ejecutarlo en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Cómo desplegarlo

1. Sube este proyecto a un repositorio de GitHub.
2. Importa el repositorio en [vercel.com](https://vercel.com) → Vercel detecta Next.js automáticamente.
3. Cada `git push` a la rama principal genera un despliegue nuevo.

## Con Docker

Producción (compila la imagen standalone y sirve el sitio):

```bash
docker compose up --build
```

Desarrollo (monta el código y corre `next dev` con recarga en vivo):

```bash
docker compose -f docker-compose.dev.yml up --build
```

En ambos casos el sitio queda en http://localhost:3000.
Con el compose de desarrollo, cada cambio en el código se refleja automáticamente.

## Estructura

```
app/                  Páginas y layout (App Router)
  page.tsx            Home (todas las secciones)
  projects/[slug]/    Case studies dinámicos (Kardex, Skills Browser, Cola de Tickets)
  sitemap.ts          Sitemap generado automáticamente
  robots.ts           robots.txt generado automáticamente
  icon.png            Favicon (logo Raxxdev)
components/           Componentes de UI (Hero, Experience, Projects, etc.)
components/ui/        Primitivas reutilizables (Button, Tag, Section, Placeholder)
data/                 Todo el contenido real, separado de la presentación
  site.ts             Datos generales (nombre, email, enlaces, dominio, ruta del CV)
  experience.ts       Trayectoria profesional
  projects.ts         Case studies completos
  technologies.ts     Tecnologías agrupadas por área
  education.ts        Formación e idiomas
public/cv/            CV en PDF
public/images/        Capturas e imágenes (profile, kardex, skills-browser, cola-de-tickets)
public/videos/        Vídeos de demostración
```

## Añadir contenido

- **Nuevo proyecto**: agrega una entrada en `data/projects.ts`; la página `/projects/[slug]` se genera automáticamente.
- **Nueva experiencia**: añade una entrada en `data/experience.ts`.
- **Imágenes**: colócalas en `public/images/` y referéncialas desde el data correspondiente.
- **IR al dominio/meta**: el dominio y los metadatos se toman de `data/site.ts`.
