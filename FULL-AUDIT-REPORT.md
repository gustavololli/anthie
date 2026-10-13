# Revisión SEO de Anthie

Fecha: 13 de octubre de 2026. Skill: codex-seo v1.9.6-codex.5.

## Resultado y alcance

Anthie es una landing de marca con catálogo resumido y venta coordinada por WhatsApp. Tiene una base técnica favorable, pero faltan contactos reales, información comercial verificable y respaldo de las afirmaciones relacionadas con ciencia y orientación profesional.

Se revisaron la única ruta `/`, componentes, datos, metadatos, robots, sitemaps y una compilación preexistente. No había caché anterior. El dominio no pudo resolverse desde este entorno: navegador ERR_NAME_NOT_RESOLVED y resolución DNS fallida. Esto no confirma una caída global ni el estado del despliegue.

**SEO Health Score: no calculado.** Faltan datos de producción, indexación y rendimiento. Dar una cifra agregada aparentaría una precisión que esta revisión no tiene. No se observó un bloqueo de indexación en el código.

## Hallazgos prioritarios

| Prioridad | Evidencia | Mejora |
|---|---|---|
| Alta, validar | El dominio público no resolvió desde este entorno | Comprobar DNS, hosting, HTTPS y respuesta 200 desde otra conexión. Si se confirma el fallo público, tratarlo como crítico. |
| Alta | `src/data/site.ts:4`: +5491100000000 | Confirmar el número real y reemplazarlo; probar consulta y reventa. Es un bloqueo de conversión, no un factor directo de ranking. |
| Alta | `src/components/Footer.astro:15`: instagram.com | Completar el perfil auténtico que también promete la FAQ. |
| Alta | `Hero.astro:21`, `BrandStory.astro:11`, `src/data/faqs.ts:10` | Respaldar “basado en ciencia” y asesoramiento profesional con responsable y evidencia confirmados, o ajustar el texto. Evitar garantías de seguridad. |
| Alta | `src/data/product-lines.ts:15,29,36` | Revisar nombres que sugieren efectos terapéuticos y completar composición, presentación y uso previsto confirmado. No se comprobó incumplimiento legal ni penalización. |
| Media | `src/pages/index.astro:15`: Anthie / Bienestar funcional | Hacer el título más descriptivo. Propuesta: “Anthie / Adaptógenos, tinturas madre y suplementos” (usar separador vertical en la implementación). |
| Media | `src/components/Hero.astro:11`: H1 Anthie. | Combinar marca y oferta con naturalidad; no es un error de HTML ni obligación de repetir keywords. |
| Media | Catálogo de cinco líneas y 36 nombres, sin fichas completas | Incorporar datos reales, fotos y condiciones de compra. Crear páginas de categorías o productos solamente cuando haya información diferenciada suficiente. |
| Media | `src/data/faqs.ts:7-10`: envíos y orientación generales | Precisar cobertura, entrega y condiciones confirmadas. Distinguir orientación comercial del servicio profesional realmente ofrecido. |
| Media | No hay datos estructurados en `src/` | Agregar Organization y, opcionalmente, WebSite con datos verdaderos. No usar contacto de ejemplo ni redes genéricas. |
| Media | `src/components/Header.astro:13-16` | Revisar legibilidad y área táctil móvil: navegación de 0.68rem, enlaces sin padding. Verificar geometría real antes de afirmar incumplimiento. |
| Media/baja | `src/layouts/Layout.astro:29`: siete variantes de fuentes externas | Medir su costo y evaluar variantes necesarias o fuentes locales. Preconnect y display=swap ya están presentes. |
| Baja | Sin Open Graph ni Twitter Cards | Mejorar la vista al compartir con título, descripción, URL e imagen real. No prometer mejoras directas de ranking. |
| Baja | favicon.ico de 285478 bytes | Reducir su tamaño preservando compatibilidad. No atribuirle problemas LCP sin medición. |
| Mantenimiento | Dependencia sitemap instalada, integración no activada | Los XML son manuales. Revisar generación y canonical al agregar rutas. La configuración actual es válida para una sola página. |

## Aspectos correctos

- Documento en español, viewport, title y meta description presentes.
- Canonical HTTPS consistente con Astro y sitemaps. No se detectó noindex.
- Robots permite rastreo y referencia sitemap-index.xml; ambos XML parsean correctamente y apuntan a la portada.
- No es obligatorio disponer de /sitemap.xml. Google ignora priority; su presencia no rompe el XML.
- Contenido principal servido en HTML estático y sin JavaScript de cliente.
- Una sola H1, categorías y anclas coherentes, con margen de desplazamiento.
- FAQ con details/summary, textos claros y voseo consistente.
- Compra por WhatsApp y proceso comercial comprensibles.

## Contenido, confianza e intención de búsqueda

La portada cubre descubrimiento de marca y líneas generales. Su capacidad para consultas específicas de compra no está demostrada: faltan detalles de producto y no se analizaron volúmenes ni una SERP comparable. No se verificó ningún ranking.

La confianza merece especial cuidado por la temática de bienestar y salud. Mostrar identidad comercial, responsables y evidencia confirmada aporta más que extender el contenido para cumplir un mínimo artificial de palabras. No inventar especialistas, reseñas, precios ni efectos terapéuticos.

La sección “Aprendé” ofrece categorías y preguntas comerciales; hacer el encabezado más preciso o incorporar explicaciones fundamentadas si realmente se quiere contenido educativo.

## Schema y búsqueda con IA

Organization puede ayudar a identificar la entidad, y WebSite a indicar el nombre del sitio. No añadir Product con precios, disponibilidad o reseñas inventados. FAQPage no se recomienda como mejora de resultados enriquecidos para esta marca comercial.

El contenido estático y las respuestas claras facilitan extracción, pero faltan datos originales y señales verificables de entidad. No priorizar llms.txt ni marcado especial para IA: Google indica que sus funciones de IA usan los fundamentos SEO existentes. No se midió presencia en ChatGPT, Perplexity o AI Overviews.

## Rendimiento, imágenes y móvil

La compilación existente pesa 28830 bytes de HTML y 17272 bytes de CSS sin comprimir; no se confirmó que corresponda al código actual. Contiene cero scripts, cero imágenes de contenido y cinco SVG de chevrons. No corresponde recomendar alt, lazy loading o WebP para imágenes que no existen.

Los breakpoints y la disposición del código son adaptables. No se validaron capturas móvil/escritorio ni overflow: el dominio no resolvió y el servidor local intentado devolvió EACCES. Verificar navegación y visibilidad del CTA en pantallas bajas.

No hay mediciones de Lighthouse, LCP, INP, CLS ni CrUX. No se puede concluir que el rendimiento es bueno solo por el bajo tamaño del HTML.

## Validación y límites

La compilación no se pudo completar: WSL invocó npm de Windows desde una ruta UNC; Node directo encontró ausente la dependencia nativa de Rollup para Windows. No se cambiaron dependencias ni se eliminaron archivos. Este fallo del entorno no prueba un problema SEO del sitio.

No se comprobaron headers, redirecciones, TLS público, robots servido, indexación, tráfico, backlinks ni Search Console. La auditoría no modificó componentes ni datos comerciales; solo produjo informes y caché local ignorada por Git.

## Fuentes primarias

- [Títulos descriptivos — Google](https://developers.google.com/search/docs/appearance/title-link).
- [Contenido útil y fiable — Google](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).
- [Organization — Google](https://developers.google.com/search/docs/appearance/structured-data/organization).
- [Nombre del sitio — Google](https://developers.google.com/search/docs/appearance/site-names).
- [Sitemaps — Google](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
- [Restricción de FAQ rich results — Google](https://developers.google.com/search/blog/2023/08/howto-faq-changes).
- [Funciones de IA — Google](https://developers.google.com/search/docs/appearance/ai-features).
