/* ===========================================================
   PARADISE · OFICINA NÚÑEZ — interactivo
   =========================================================== */

/* ---------- NAV scroll ---------- */
const nav = document.querySelector('.nav');
const onScroll = () => {
  if (window.scrollY > 40) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Menú mobile ---------- */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ---------- GALERÍA ---------- */
// Definimos una secuencia de todas las fotos con tamaños variados para el mosaico
const galleryImages = [
  { src: 'images/MF_190405_Ph_Muriel_Farkas_1.jpg', size: 'gi-xl' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_2.jpg', size: 'gi-t' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_3.jpg', size: 'gi-l' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_4.jpg', size: 'gi-m' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_5.jpg', size: 'gi-m' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_6.jpg', size: 'gi-w' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_7.jpg', size: 'gi-t' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_8.jpg', size: 'gi-m' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_9.jpg', size: 'gi-l' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_10.jpg', size: 'gi-s' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_11.jpg', size: 'gi-s' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_12.jpg', size: 'gi-m' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_13.jpg', size: 'gi-xl' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_14.jpg', size: 'gi-t' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_15.jpg', size: 'gi-w' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_16.jpg', size: 'gi-m' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_17.jpg', size: 'gi-m' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_18.jpg', size: 'gi-s' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_19.jpg', size: 'gi-s' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_20.jpg', size: 'gi-m' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_21.jpg', size: 'gi-l' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_22.jpg', size: 'gi-t' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_23.jpg', size: 'gi-m' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas_24.jpg', size: 'gi-m' },
  { src: 'images/MF_190405_Ph_Muriel_Farkas.jpg', size: 'gi-w' },
];

const galleryGrid = document.getElementById('galleryGrid');
galleryImages.forEach((img, i) => {
  const div = document.createElement('div');
  div.className = `gallery-item ${img.size}`;
  div.dataset.index = i;
  div.innerHTML = `
    <img src="${img.src}" alt="Foto ${i + 1} de la oficina" loading="lazy" />
    <span class="gi-num">${String(i + 1).padStart(2, '0')} · Paradise</span>
  `;
  galleryGrid.appendChild(div);
});

/* ---------- LIGHTBOX ---------- */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lbCurrent = document.getElementById('lbCurrent');
const lbTotal = document.getElementById('lbTotal');
let currentIndex = 0;

lbTotal.textContent = galleryImages.length;

const openLightbox = (idx) => {
  currentIndex = idx;
  lightboxImg.src = galleryImages[idx].src;
  lbCurrent.textContent = idx + 1;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
};
const closeLightbox = () => {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
};
const nextImg = () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
  lbCurrent.textContent = currentIndex + 1;
};
const prevImg = () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
  lbCurrent.textContent = currentIndex + 1;
};

galleryGrid.addEventListener('click', (e) => {
  const item = e.target.closest('.gallery-item');
  if (item) openLightbox(parseInt(item.dataset.index));
});
document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
document.querySelector('.lightbox-next').addEventListener('click', nextImg);
document.querySelector('.lightbox-prev').addEventListener('click', prevImg);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextImg();
  if (e.key === 'ArrowLeft') prevImg();
});

/* ---------- LUGARES CERCANOS ---------- */
const places = {
  restaurantes: [
    {
      name: 'Ness',
      category: 'Cocina de autor',
      address: 'Grecia 3691, Núñez',
      rating: 4.7,
      note: 'Joya escondida con cocina a leña, mariscos y una cava impecable. Uno de los mejores de la zona.',
      distance: '5 min caminando',
      lat: -34.5457204, lng: -58.4636484,
    },
    {
      name: 'Besares Parrilla',
      category: 'Parrilla · Asado',
      address: '11 de Septiembre 4098',
      rating: 4.2,
      note: 'Parrilla top en la misma avenida. Terraza al aire libre, carnes y vinos de primera.',
      distance: '2 min caminando',
      lat: -34.5420227, lng: -58.4642958,
    },
    {
      name: 'La Madonnina',
      category: 'Italiana clásica',
      address: '11 de Septiembre 4540',
      rating: 4.3,
      note: 'Cocina italiana cálida, lasaña imperdible, ambiente perfecto para reuniones de trabajo con clientes.',
      distance: '4 min caminando',
      lat: -34.5384685, lng: -58.466836,
    },
    {
      name: 'Piedra Pasillo Al Fondo',
      category: 'Fine dining',
      address: 'Campos Salles 2145',
      rating: 4.3,
      note: 'Decorado cuidado, carta breve y bien ejecutada. Ideal para cenas especiales.',
      distance: '7 min caminando',
      lat: -34.5506886, lng: -58.4633853,
    },
    {
      name: 'La Escondida',
      category: 'Clásico porteño',
      address: 'Arcos 3220',
      rating: 4.1,
      note: 'Un clásico de Belgrano/Núñez, gran terraza, menú amplio, servicio atento.',
      distance: '6 min caminando',
      lat: -34.5504911, lng: -58.463086,
    },
    {
      name: 'No Tan Santos Núñez',
      category: 'Parrilla familiar',
      address: 'Núñez 1650',
      rating: 4.1,
      note: 'Parrilla estilo familiar con patio. Buen lugar para almuerzos distendidos.',
      distance: '8 min caminando',
      lat: -34.5462024, lng: -58.4602902,
    },
  ],
  cafes: [
    {
      name: 'MÜSA Café de Especialidad',
      category: 'Café de especialidad',
      address: 'Av. del Libertador 7328',
      rating: 4.9,
      note: 'Lattes 10/10, chipá espectacular, atmósfera acogedora. La joya del barrio para desconectar.',
      distance: '4 min caminando',
      lat: -34.5458909, lng: -58.4585987,
    },
    {
      name: 'Zuka Café de Especialidad',
      category: 'Café · Brunch',
      address: 'Grecia 3437',
      rating: 4.5,
      note: 'Brunch ideal, menú con buena relación precio/calidad, espacio luminoso y cómodo.',
      distance: '5 min caminando',
      lat: -34.5476927, lng: -58.462207,
    },
    {
      name: 'Forno 1977',
      category: 'Coffee shop · Panadería',
      address: 'Av. del Libertador 6025',
      rating: 4.9,
      note: 'Coffee shop con excelente café, atención cálida y opción de brunch a buen precio.',
      distance: '7 min caminando',
      lat: -34.5563899, lng: -58.4477159,
    },
    {
      name: 'Coffee Store Núñez',
      category: 'Cafetería 24 hs',
      address: 'Av. del Libertador 7112',
      rating: 4.1,
      note: 'Abierta 24 horas. Perfecta para café rápido o trabajo fuera de horario.',
      distance: '4 min caminando',
      lat: -34.5474196, lng: -58.4570485,
    },
  ],
  transporte: [
    {
      name: 'Estación Núñez · Tren Mitre',
      category: 'Ramal Tigre',
      address: 'Estación Núñez',
      rating: 4.2,
      note: 'Recientemente renovada. Conexión directa a Retiro y a toda la zona norte del conurbano.',
      distance: '3 min caminando',
      lat: -34.5488863, lng: -58.4626914,
    },
    {
      name: 'Av. del Libertador',
      category: 'Avenida principal',
      address: 'Av. del Libertador',
      rating: null,
      note: 'Arteria principal de conexión con Palermo, Recoleta y el centro. Varias líneas de colectivos.',
      distance: '2 min caminando',
      lat: -34.5471, lng: -58.4590,
    },
    {
      name: 'Autopista General Paz',
      category: 'Acceso rápido',
      address: 'Autopista Gral. Paz',
      rating: null,
      note: 'Acceso inmediato a la Panamericana y a toda la zona norte del GBA.',
      distance: '5 min en auto',
      lat: -34.5370, lng: -58.4670,
    },
    {
      name: 'Aeroparque Jorge Newbery',
      category: 'Aeropuerto urbano',
      address: 'Av. Costanera',
      rating: null,
      note: 'A solo 10 minutos en auto. Ideal para clientes y equipos que viajan con frecuencia.',
      distance: '10 min en auto',
      lat: -34.5592, lng: -58.4156,
    },
  ],
  servicios: [
    {
      name: 'Estadio Obras Sanitarias',
      category: 'Entretenimiento',
      address: 'Av. del Libertador 7395',
      rating: null,
      note: 'Templo del rock nacional. Un hito del barrio.',
      distance: '3 min caminando',
      lat: -34.5450, lng: -58.4585,
    },
    {
      name: 'CeNARD',
      category: 'Centro deportivo',
      address: 'Miguel B. Sánchez 1050',
      rating: null,
      note: 'Centro Nacional de Alto Rendimiento Deportivo.',
      distance: '5 min caminando',
      lat: -34.5432, lng: -58.4587,
    },
    {
      name: 'Farmacity',
      category: 'Farmacia',
      address: 'Av. del Libertador',
      rating: null,
      note: 'Farmacia 24 horas con servicios ampliados.',
      distance: '3 min caminando',
      lat: -34.5475, lng: -58.4601,
    },
    {
      name: 'Espacio Memoria y DDHH',
      category: 'Centro cultural',
      address: 'Av. del Libertador 8151',
      rating: null,
      note: 'Ex ESMA convertido en espacio cultural y de memoria.',
      distance: '6 min caminando',
      lat: -34.5412, lng: -58.4582,
    },
  ],
};

const placesGrid = document.getElementById('placesGrid');
const renderPlaces = (category) => {
  placesGrid.innerHTML = '';
  places[category].forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'place-card fade-in';
    card.style.animationDelay = `${i * 60}ms`;
    card.innerHTML = `
      <div class="place-head">
        <div>
          <div class="place-category">${p.category}</div>
          <div class="place-name">${p.name}</div>
        </div>
        ${p.rating ? `<div class="place-rating">★ ${p.rating}</div>` : ''}
      </div>
      <div class="place-address">${p.address}</div>
      ${p.note ? `<div class="place-note">${p.note}</div>` : ''}
      <div class="place-distance">↗ ${p.distance}</div>
    `;
    placesGrid.appendChild(card);
    // animar en el siguiente frame
    requestAnimationFrame(() => card.classList.add('in'));
  });
};

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderPlaces(tab.dataset.category);
  });
});
renderPlaces('restaurantes');

/* ---------- MAPA (Leaflet) ---------- */
const OFICINA_LAT = -34.5441;
const OFICINA_LNG = -58.4634;

function initMap() {
  if (typeof L === 'undefined') {
    // Fallback si Leaflet no cargó: mostrar imagen estática con link a Google Maps
    const mapEl = document.getElementById('map');
    if (mapEl) {
      mapEl.innerHTML = `
        <a href="https://www.google.com/maps/search/?api=1&query=${OFICINA_LAT},${OFICINA_LNG}"
           target="_blank" rel="noopener"
           style="display:block;width:100%;height:100%;background:
             linear-gradient(135deg,#2d4a38 0%,#152820 100%);
             border-radius:4px;display:grid;place-items:center;color:#f5f1e8;
             text-align:center;padding:2rem;text-decoration:none;">
          <div>
            <div style="font-family:'Fraunces',serif;font-style:italic;font-size:1.5rem;margin-bottom:0.5rem">
              Ver en Google Maps
            </div>
            <div style="font-size:0.9rem;opacity:0.7">
              Av. 11 de Septiembre 4237 · Núñez
            </div>
            <div style="margin-top:1rem;color:#e8a595;font-size:0.8rem;letter-spacing:0.15em;text-transform:uppercase">
              Abrir mapa →
            </div>
          </div>
        </a>`;
    }
    return;
  }

  const map = L.map('map', {
    center: [OFICINA_LAT, OFICINA_LNG],
    zoom: 15,
    scrollWheelZoom: false,
    zoomControl: true,
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> · © <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20,
  }).addTo(map);

  const oficinaIcon = L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      width: 40px; height: 40px; border-radius: 50%;
      background: #d86a52; border: 3px solid #f5f1e8;
      box-shadow: 0 4px 12px rgba(21,40,32,0.4);
      display: grid; place-items: center;
      color: white; font-family: 'Fraunces', serif; font-style: italic;
      font-size: 18px; font-weight: 500;
    ">P</div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
  L.marker([OFICINA_LAT, OFICINA_LNG], { icon: oficinaIcon })
    .addTo(map)
    .bindPopup('<strong style="font-family:Fraunces,serif;font-size:1.05rem">Oficina Paradise</strong><br>Av. 11 de Septiembre 4237 · 4.º A');

  const smallIcon = (color) => L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      width: 22px; height: 22px; border-radius: 50%;
      background: ${color}; border: 2px solid #f5f1e8;
      box-shadow: 0 3px 8px rgba(21,40,32,0.35);
    "></div>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  });

  places.restaurantes.concat(places.cafes).forEach(p => {
    L.marker([p.lat, p.lng], { icon: smallIcon('#2d4a38') })
      .addTo(map)
      .bindPopup(`<strong>${p.name}</strong><br><small>${p.category}</small>`);
  });
  places.transporte.forEach(p => {
    L.marker([p.lat, p.lng], { icon: smallIcon('#c9a959') })
      .addTo(map)
      .bindPopup(`<strong>${p.name}</strong><br><small>${p.category}</small>`);
  });

  map.on('click', () => { map.scrollWheelZoom.enable(); });
  map.on('mouseout', () => { map.scrollWheelZoom.disable(); });
}
initMap();

/* ---------- INTERSECTION OBSERVER ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.01, rootMargin: '0px 0px -10% 0px' });

document.querySelectorAll('.section-head, .section-title, .fade-in').forEach(el => io.observe(el));

// Fallback: si por algún motivo el IO no dispara (safari viejo, etc.), revelar todo
setTimeout(() => {
  document.querySelectorAll('.section-head, .section-title, .fade-in').forEach(el => {
    if (!el.classList.contains('in')) el.classList.add('in');
  });
}, 4000);

/* ---------- Smooth section transitions ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});
