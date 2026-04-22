# Oficina Núñez · Paradise — Presentación interactiva

Sitio web estático y profesional para presentar la oficina de Av. 11 de Septiembre 4237, Núñez, Buenos Aires.

## 📁 Contenido

```
oficina-nunez/
├── index.html     # Página principal
├── styles.css     # Estilos (diseño editorial tropical)
├── script.js      # Galería, lightbox, mapa y tabs
└── images/        # 25 fotografías profesionales
```

## 🚀 Cómo publicarlo

Es un sitio 100% estático — podés subirlo a cualquier hosting, no necesita base de datos ni servidor:

### Opción 1 · Netlify (recomendado, gratis)
1. Andá a [netlify.com/drop](https://app.netlify.com/drop)
2. Arrastrá la carpeta `oficina-nunez/` al navegador
3. Listo — te da una URL pública en segundos
4. Podés conectar un dominio propio desde el panel

### Opción 2 · Vercel (gratis)
1. Instalá Vercel CLI: `npm i -g vercel`
2. Entrá a la carpeta y ejecutá: `vercel`
3. O subilo desde [vercel.com](https://vercel.com) con tu cuenta de GitHub

### Opción 3 · GitHub Pages (gratis)
1. Subí la carpeta a un repo de GitHub
2. Settings → Pages → elegí la rama principal
3. Se publica en `usuario.github.io/nombre-repo`

### Opción 4 · Cualquier hosting tradicional
Subí los archivos por FTP a `public_html/` (cPanel, Hostinger, etc.).

## 🎨 Características

- **Hero cinemático** con imagen de fondo, tipografía editorial y animaciones.
- **Galería interactiva** con lightbox, navegación por teclado (← → ESC).
- **5 ambientes detallados** con fotos y specs de cada uno.
- **Sección del barrio** con tabs (restaurantes, cafés, transporte, servicios).
- **Mapa interactivo** con marcadores para la oficina y lugares cercanos.
- **Ficha técnica** completa en grid.
- **Sección de contacto** con email y WhatsApp directos.
- **100% responsive** (mobile, tablet, desktop).
- **SEO ready** con meta description y estructura semántica.

## ✏️ Cómo editar los datos

### Cambiar teléfono o email
En `index.html`, buscá la sección `<!-- CTA / CONTACTO -->`. Cambiá:
- `fer@paradise.ag` por tu email
- `+5491144497824` (WhatsApp) por tu número
- `+54 9 11 4449 7824` (display)

### Agregar o quitar restaurantes/lugares
En `script.js`, editá el objeto `places`. Cada entrada tiene:
```js
{
  name: 'Nombre del lugar',
  category: 'Categoría',
  address: 'Dirección',
  rating: 4.5,          // opcional
  note: 'Descripción',
  distance: '5 min caminando',
  lat: -34.5441,        // para el mapa
  lng: -58.4634,
}
```

### Cambiar fotos
Las fotos están en `images/`. Reemplazalas con el mismo nombre o editá las referencias en `script.js` (array `galleryImages`).

### Ajustar precios o condiciones
En `index.html`, editá la sección `<!-- CTA / CONTACTO -->` con las condiciones de alquiler.

## 🎨 Paleta de colores (en `styles.css`)

```css
--bg:       #f5f1e8   /* crema cálido */
--ink:      #1a2e23   /* verde oscuro */
--jungle:   #2d4a38   /* verde selva */
--coral:    #d86a52   /* acento coral */
--gold:     #c9a959   /* dorado suave */
```

Para cambiar toda la estética, editá las variables CSS en `:root`.

## 📞 Dependencias externas

El sitio usa dos recursos externos cargados por CDN (no hace falta instalar nada):
- **Google Fonts** (Fraunces + Manrope)
- **Leaflet** (mapa) desde unpkg.com

Ambos cargan automáticamente. Si un cliente bloquea alguno, el mapa tiene un fallback con link a Google Maps.

---

**Diseño y código:** creado para Paradise · Núñez
**Fotografía:** Muriel Farkas
