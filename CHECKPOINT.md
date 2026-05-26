# CHECKPOINT — Portafolio Raxxis

> **Última actualización:** 2026-05-26 (2do checkpoint)
> **Comando de reactivación:** `checkpoint`
> **Creado por:** opencode (DeepSeek V4 Flash)

---

## 1. INFORMACIÓN DEL PROYECTO

| Campo | Valor |
|-------|-------|
| **Nombre** | raxxis-portafolio |
| **Ruta** | `E:\PROYECTOS\portafolio-dev\` |
| **Stack** | Next.js 16.2.6 + TypeScript + Tailwind CSS v4 + PostCSS |
| **Package manager** | npm (lock: `package-lock.json`) |
| **Git remote** | `https://github.com/R4xx1s/Portafolio` (rama: master) |
| **Deploy** | Vercel (auto desde GitHub) |
| **Desarrollador** | Cesar Fernando Tocto Cumbay — alias **Raxxis** |
| **Dominio** | Comprar: raxxis.dev o raxxis.tech (aún no adquirido) |

---

## 2. ARQUITECTURA DEL PROYECTO

```
src/
├── app/
│   ├── layout.tsx          ← Root layout (fonts, Navbar, Footer)
│   ├── page.tsx            ← Home (Hero + destacados + Skills)
│   ├── globals.css         ← Estilos globales + Tailwind
│   ├── about/
│   │   └── page.tsx        ← Bio + timeline profesional
│   └── proyectos/
│       └── page.tsx        ← Grid de todos los proyectos
├── components/
│   ├── Navbar.tsx          ← Fixed, glassmorphism, responsive
│   ├── Hero.tsx            ← Presentación + CTAs + badges tech
│   ├── ProjectCard.tsx     ← Card con badges, GitHub/Vercel links
│   ├── Skills.tsx          ← Grid 4 categorías
│   └── Footer.tsx          ← Copyright + GitHub/LinkedIn
└── lib/
    ├── types.ts            ← Interfaz Proyecto
    └── projects.ts         ← ÚNICA fuente de datos (editar aquí)
```

### Rutas:
| Ruta | Tipo | Descripción |
|------|------|-------------|
| `/` | Static | Home: Hero, proyectos destacados, Skills |
| `/proyectos` | Static | Grid completo de proyectos |
| `/about` | Static | Biografía y timeline profesional |

---

## 3. DISEÑO — craftz.dog-inspired

### Referencia base: [craftz.dog](https://www.craftz.dog/)

### Design Tokens (mapeados desde craftz.dog):

```css
/* Colores */
--bg-primary: #202023;              /* Fondo oscuro carbón */
--bg-navbar: rgba(32, 32, 35, 0.5); /* Navbar semitransparente */
--text-primary: rgba(255, 255, 255, 0.92);
--text-secondary: rgba(255, 255, 255, 0.64);
--accent-teal: #81e6d9;             /* Color primario */
--accent-pink: #ff63c3;             /* Links / hover */
--accent-amber: #fbd38d;            /* Botones */
--accent-amber-text: #1a202c;       /* Texto sobre botón ámbar */

/* Tipografía */
--font-heading: 'M PLUS Rounded 1c', sans-serif;  /* 700 weight */
--font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Escala espaciado */
--space-4: 4px;   --space-8: 8px;   --space-12: 12px;
--space-16: 16px; --space-24: 24px; --space-32: 32px;
--space-48: 48px;
```

### Tamaños de fuente:
| Elemento | Font | Tamaño | Weight | Letter-spacing |
|----------|------|--------|--------|----------------|
| H1 | M PLUS Rounded 1c | 30px | 700 | -1.5px |
| H2 | M PLUS Rounded 1c | 36px | 700 | normal |
| H3 | M PLUS Rounded 1c | 20px | 700 | normal |
| Body | System | 16px | 400 | normal |
| Small | System | 14px | 400 | normal |

### Layout:
- Max-width contenedor: 768px (centrado)
- Navbar fija arriba con backdrop-blur
- Contenido centrado, minimalista

### Logo:
- Archivo: `/public/Raxxdev.PNG`
- Formato: PNG (no necesita .ico, usar favicon desde el PNG)

### Espacio 3D:
- Hay un contenedor preparado en Hero.tsx para un futuro objeto 3D
- Stack recomendado: `@react-three/fiber` + `@react-three/drei`
- Se instalará cuando esté disponible el modelo o diseño

---

## 4. DATOS — Proyectos

Los proyectos se editan exclusivamente en:
- **`src/lib/projects.ts`** — array de objetos `Proyecto` con comentarios guía

### Proyecto actual:
1. **Sistema de Inventario - Clínicas** — `destacado: true`
   - URL Vercel: https://sistemas-inventarios-clinicas.vercel.app/login
   - GitHub: repo privado (no hay url_github)
   - Stack: Next.js 16, TS, Tailwind v4, MySQL, AD/LDAP, Docker

### Para agregar un proyecto:
1. Abrir `src/lib/projects.ts`
2. Copiar el bloque de ejemplo (está comentado)
3. Pegar dentro del array `proyectos`, ajustar valores
4. Recargar la página (no requiere deploy manual en local)

---

## 5. HISTORIAL DE DECISIONES

| Fecha | Decisión | Motivo |
|-------|----------|--------|
| 2026-05-26 | Usar npm en vez de pnpm | pnpm lockfile corrompido, symlinks rotos al mover proyecto |
| 2026-05-26 | Eliminar Supabase | Red corporativa bloquea supabase.co; datos estáticos son suficientes |
| 2026-05-26 | Eliminar panel admin | Sin Supabase no tiene sentido; proyectos se editan en `projects.ts` |
| 2026-05-26 | Eliminar `url_demo` | Redundante con `url_vercel` |
| 2026-05-26 | Rediseño craftz.dog | Referencia visual acordada con el usuario |
| 2026-05-26 | Login por Server Action | Seguridad: credenciales nunca llegan al cliente (aunque admin se eliminó después) |
| 2026-05-26 | Logo Raxxdev.PNG | Recurso proporcionado por el usuario |
| 2026-05-26 | Páginas estáticas (SSG) | Rendimiento: navegación instantánea, sin depender de servidor |

---

## 6. DEPENDENCIAS INSTALADAS

```json
{
  "dependencies": {
    "next": "16.2.6",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.6",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### Para añadir 3D en futuro:
```bash
npm install @react-three/fiber @react-three/drei @types/three
```

---

## 7. COMANDOS ÚTILES

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Iniciar servidor dev |
| `npm run build` | Build producción |
| `npm run start` | Servir build local |
| `git push origin master` | Subir cambios → Vercel redeploy auto |

---

## 8. NOTAS DE RED CORPORATIVA

- DNS bloquea `supabase.co` → no se puede conectar desde esta PC
- DNS también bloquea algunos CDNs → npm install es lento pero funciona
- npm registry responde en ~1s, descarga de tarballs en 50-200s
- Solución: usar `npm install --no-audit --no-fund` con timeouts largos
- La red permite push a GitHub (con token personal)

---

*Este checkpoint se actualiza con el comando `checkpoint`.*
