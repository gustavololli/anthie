# Guía del proyecto Anthie

## Qué es

Este repositorio contiene la landing page de **Anthie**, una marca de bienestar natural y cuidado botánico. Presenta la propuesta de la marca, sus líneas de productos, el proceso de compra y preguntas frecuentes. El objetivo principal es que las personas consulten y coordinen sus pedidos por WhatsApp.

El sitio está en español, con voseo argentino y un tono cercano, sereno y claro. El dominio configurado es `https://anthie.com.ar`; esta configuración no confirma el estado del despliegue.

Actualmente hay una sola página (`/`), generada como sitio estático. No hay backend, base de datos, autenticación, carrito ni pagos implementados en este repositorio.

## Tecnologías

- **Astro 4** (`^4.16.1`): páginas, componentes y generación estática.
- **TypeScript 5** (`^5.6.2`): datos tipados y configuración estricta basada en `astro/tsconfigs/strict`.
- **Tailwind CSS 3** (`^3.4.13`), integrado con `@astrojs/tailwind` (`^5.1.0`): estilos y diseño responsive.
- **@astrojs/check** (`^0.9.4`): validación previa a la compilación.
- **Node.js y npm**: herramientas de desarrollo; `package-lock.json` registra las dependencias. No hay una versión de Node fijada en los archivos revisados.
- **sharp** y **png-to-ico**: generación de iconos a partir del SVG de marca.
- **Google Fonts**: Montserrat y Playfair Display, cargadas desde el layout.

Las versiones anteriores son los rangos declarados en `package.json`. El proyecto usa módulos ES (`"type": "module"`). Aunque `tsconfig.json` declara `jsxImportSource: "react"`, no hay dependencia de React ni integración de React configurada: no asumir que se utiliza.

## Mapa del repositorio

- `src/pages/index.astro`: compone la página en este orden: Header, Hero, BrandStory, ProductLines, FAQ/Aprendé, HowItWorks, BalanceSection, Reseller/Revende, FinalCTA y Footer.
- `src/layouts/Layout.astro`: documento HTML en español, título, descripción, canonical, fuentes, favicons y estilos globales.
- `src/components/`: secciones visuales en componentes `.astro`.
- `src/data/site.ts`: nombre, descripción, número y mensaje de WhatsApp; genera el enlace `wa.me`, limpiando el número y codificando el mensaje.
- `src/data/product-lines.ts`: interfaz `ProductLine` (`id`, `title`, `tagline`, `description`, `products`) y el catálogo de cinco líneas: Tinturas Madre, Adaptógenos & Hongos Funcionales, Suplementos, Flores de Bach y Cuidado Corporal.
- `src/data/faqs.ts`: interfaz `FAQ` y preguntas/respuestas sobre compra, envío, orientación y contacto.
- `public/`: archivos estáticos servidos sin procesamiento, incluidos favicons, `robots.txt` y sitemaps XML.
- `scripts/generate-favicons.mjs`: genera los PNG e ICO desde `public/favicon.svg`.
- `astro.config.mjs`: dominio e integración de Tailwind.
- `tailwind.config.mjs`: rutas de contenido, paleta y tipografías.
- `dist/`, `.astro/` y `node_modules/`: salida de compilación, tipos generados y dependencias; están ignorados por Git. No editarlos manualmente.

## Diseño e interacción

La identidad usa fondos claros, tonos vino y oliva, bordes suaves, botones redondeados y espacios amplios. La paleta definida en Tailwind es: `base` (#FAF8F4), `wine` (#9A4444), `olive` (#404728), `cream` (#E8DFCA), `blush` (#E7B7A3), `ink` (#2E2D2A) y `muted` (#7A756E). Montserrat se usa para texto y Playfair Display para títulos.

Los componentes existentes también contienen colores hexadecimales escritos directamente en clases. Al modificar estilos, mantener la coherencia con la paleta y preferir los nombres del tema cuando corresponda.

La navegación principal enlaza a `lineas`, `aprende` y `revende`; las categorías usan `tinturas`, `adaptogenos`, `suplementos`, `flores` y `corporal`. Preservar la correspondencia entre enlaces y secciones y el margen superior de anclas bajo el encabezado fijo. Las preguntas frecuentes usan los elementos nativos `details` y `summary`; no necesitan JavaScript de cliente. Los enlaces externos de contacto se abren en otra pestaña con `rel="noopener noreferrer"`.

## Comandos

Ejecutar desde la raíz del proyecto, en un entorno con Node.js y npm disponibles:

```sh
npm ci                 # Instalar según el archivo de bloqueo
npm run dev            # Desarrollo; puerto habitual 4321
npm run build          # astro check y luego astro build; salida en dist/
npm run preview        # Previsualizar una compilación existente
npm run astro -- check # Validación de Astro sin generar el sitio
node scripts/generate-favicons.mjs # Regenerar iconos desde el SVG
```

`npm start` es un alias del servidor de desarrollo. No hay scripts de tests ni de lint declarados. La regeneración de favicons sobrescribe los iconos correspondientes en `public/`.

## Criterios para trabajar aquí

1. Revisar primero los archivos relevantes y mantener la arquitectura sencilla de Astro. No agregar frameworks de cliente o servicios externos salvo que el cambio lo requiera.
2. Modificar los datos compartidos en `src/data/` en lugar de duplicarlos en los componentes. Los textos específicos de cada sección están en sus archivos `.astro`.
3. Mantener el español y el voseo, la identidad visual y el objetivo de contacto por WhatsApp. No inventar datos comerciales, credenciales profesionales ni beneficios terapéuticos para completar contenido.
4. Conservar HTML semántico, navegación por teclado, etiquetas accesibles y diseño responsive. Revisar móvil y escritorio cuando se modifique la interfaz.
5. Después de cambios de código o configuración, ejecutar `npm run build` si el entorno lo permite. Para cambios visuales, comprobar también el resultado en el navegador. Para documentación solamente, verificar su exactitud sin generar archivos innecesarios.
6. Si cambia el dominio o se agregan páginas, revisar `astro.config.mjs`, el canonical en `Layout.astro`, `public/robots.txt` y los sitemaps juntos.
7. Mantener `package-lock.json` coherente con `package.json` cuando cambien dependencias. No modificar archivos generados ni incorporar secretos.

## Pendientes y detalles reales del estado actual

- `src/data/site.ts` contiene el número de ejemplo `+5491100000000`, marcado para reemplazo. Solicitar el número real cuando una tarea requiera completar el contacto.
- `src/components/Footer.astro` apunta a `https://instagram.com`, sin un perfil específico de Anthie.
- `@astrojs/sitemap` está declarado como dependencia, pero no está importado ni activado en `astro.config.mjs`. Los sitemaps actuales son archivos estáticos de `public/`; no asumir generación automática.
- El canonical actual está fijado a la raíz del dominio. Si se agregan rutas, adaptarlo por página.
- No se encontró configuración de despliegue ni integración continua en los archivos del proyecto revisados.

Actualizar esta guía cuando cambien la arquitectura, los comandos o las integraciones.
