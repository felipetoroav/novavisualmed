/* ==========================================================================
   NOVAVISUAL PUBLICIDAD — WhatsApp + catálogo
   ========================================================================== */

/* Número de WhatsApp en formato internacional, sin "+", sin espacios
   y sin guiones. Colombia = indicativo 57 + celular de 10 dígitos. */
const WHATSAPP_NUMBER = '573138691667';

/* Mensaje de los enlaces generales (hero, CTA final y botón flotante). */
const GENERIC_MESSAGE = 'Hola Novavisual, quiero cotizar un producto';

/* --------------------------------------------------------------------------
   Catálogo. Para agregar o quitar productos, edita solo esta lista.
   - nombre:    título display (1–2 palabras, MAYÚSCULAS por CSS)
   - subtitulo: subtítulo en el color del acento
   - acento:    'dorado' | 'naranja' | 'morado' (uno por tarjeta)
   - imagen:    mockup en WebP sin fondo dentro de assets/img/
   - alt:       descripción de la imagen para lectores de pantalla
   - producto:  nombre completo que se envía en el mensaje de WhatsApp
   -------------------------------------------------------------------------- */
const PRODUCTOS = [
  {
    nombre: 'Lapiceros',
    subtitulo: 'Personalizados',
    acento: 'dorado',
    imagen: 'assets/img/lapiceros-personalizados.webp',
    alt: 'Lapiceros personalizados con el logo de una marca impreso en el cuerpo',
    producto: 'Lapiceros personalizados'
  },
  {
    nombre: 'Porta pendón',
    subtitulo: 'Tipo araña',
    acento: 'naranja',
    imagen: 'assets/img/porta-pendon-arana.webp',
    alt: 'Porta pendón tipo araña desplegado con un pendón publicitario',
    producto: 'Porta pendón tipo araña'
  },
  {
    nombre: 'Gorras',
    subtitulo: 'Personalizadas',
    acento: 'morado',
    imagen: 'assets/img/gorras-personalizadas.webp',
    alt: 'Gorra personalizada con logo bordado en el frente',
    producto: 'Gorras personalizadas'
  },
  {
    nombre: 'Imanes',
    subtitulo: 'Publicitarios',
    acento: 'dorado',
    imagen: 'assets/img/imanes-publicitarios.webp',
    alt: 'Imanes publicitarios impresos a todo color para nevera',
    producto: 'Imanes publicitarios'
  },
  {
    nombre: 'Habladores QR',
    subtitulo: 'En poliestireno',
    acento: 'naranja',
    imagen: 'assets/img/habladores-qr-poliestireno.webp',
    alt: 'Hablador de mesa en poliestireno con código QR impreso',
    producto: 'Habladores QR en poliestireno'
  },
  {
    nombre: 'Etiquetas',
    subtitulo: 'Para producto',
    acento: 'morado',
    imagen: 'assets/img/etiquetas-producto.webp',
    alt: 'Etiquetas adhesivas para producto impresas en varios tamaños',
    producto: 'Etiquetas para producto'
  },
  {
    nombre: 'Agendas',
    subtitulo: 'Personalizadas',
    acento: 'dorado',
    imagen: 'assets/img/agendas-personalizadas.webp',
    alt: 'Agenda corporativa personalizada con el logo grabado en la tapa',
    producto: 'Agendas personalizadas'
  },
  {
    nombre: 'Adhesivos',
    subtitulo: 'Personalizados',
    acento: 'naranja',
    imagen: 'assets/img/adhesivos-personalizados.webp',
    alt: 'Adhesivos personalizados troquelados con diseños de marca',
    producto: 'Adhesivos personalizados'
  },
  {
    nombre: 'Carnets',
    subtitulo: 'De identificación',
    acento: 'morado',
    imagen: 'assets/img/carnets-identificacion.webp',
    alt: 'Carnet de identificación corporativo con porta carnet y cinta',
    producto: 'Carnets de identificación'
  },
  {
    nombre: 'Carpetas',
    subtitulo: 'Corporativas',
    acento: 'dorado',
    imagen: 'assets/img/carpetas-corporativas.webp',
    alt: 'Carpeta corporativa impresa con solapa interior y logo en portada',
    producto: 'Carpetas corporativas'
  },
  {
    nombre: 'Habladores',
    subtitulo: 'Acrílico o poliestireno',
    acento: 'naranja',
    imagen: 'assets/img/habladores-acrilico.webp',
    alt: 'Hablador publicitario en acrílico transparente sobre una mesa',
    producto: 'Habladores en acrílico o poliestireno'
  },
  {
    nombre: 'Señales',
    subtitulo: 'Prevención de riesgo',
    acento: 'morado',
    imagen: 'assets/img/senales-prevencion-riesgo.webp',
    alt: 'Señales de prevención de riesgo para espacios de trabajo',
    producto: 'Señales de prevención de riesgo'
  }
];

/* Acentos sobre fondo negro: el morado usa su variante clara (#9A5BFF)
   para pasar contraste, según el sistema de diseño. */
const ACENTOS = {
  dorado: 'var(--nv-gold)',
  naranja: 'var(--nv-orange)',
  morado: 'var(--nv-purple-light)'
};

/**
 * Construye el enlace de WhatsApp con el mensaje codificado.
 * @param {string} mensaje texto que se precarga en el chat
 * @returns {string} URL https://wa.me/...
 */
function whatsappLink(mensaje) {
  return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(mensaje);
}

/** Enlace de cotización para un producto concreto. */
function productLink(producto) {
  return whatsappLink('Hola Novavisual, quiero cotizar: ' + producto);
}

/* --- Botones generales: hero, CTA final y botón flotante ---------------- */
function initGenericLinks() {
  const href = whatsappLink(GENERIC_MESSAGE);
  document.querySelectorAll('[data-wa-generic]').forEach(function (el) {
    el.href = href;
  });
}

/* --- Catálogo ----------------------------------------------------------- */
function buildCard(item, index) {
  const card = document.createElement('article');
  card.className = 'nv-card';
  card.style.setProperty('--nv-accent', ACENTOS[item.acento] || ACENTOS.dorado);

  const panel = document.createElement('a');
  panel.className = 'nv-card__panel';
  panel.href = productLink(item.producto);
  panel.target = '_blank';
  panel.rel = 'noopener';
  panel.setAttribute('aria-label', 'Cotizar ' + item.producto + ' por WhatsApp');

  const title = document.createElement('h3');
  title.className = 'nv-card__title';
  title.textContent = item.nombre;

  const subtitle = document.createElement('p');
  subtitle.className = 'nv-card__subtitle';
  subtitle.textContent = item.subtitulo;

  const media = document.createElement('div');
  media.className = 'nv-card__media';

  const img = document.createElement('img');
  img.src = item.imagen;
  img.alt = item.alt;
  img.width = 480;
  img.height = 600;
  img.decoding = 'async';
  /* Las dos primeras tarjetas quedan cerca del pliegue en móvil. */
  img.loading = index < 2 ? 'eager' : 'lazy';
  media.appendChild(img);

  const badge = document.createElement('div');
  badge.className = 'nv-badge';
  badge.setAttribute('aria-hidden', 'true');
  badge.innerHTML =
    '<span class="nv-badge__mark">NV</span>' +
    '<span class="nv-badge__text">Novavisual_med</span>';

  panel.append(title, subtitle, media, badge);

  card.appendChild(panel);
  return card;
}

function initCatalog() {
  const grid = document.getElementById('catalogo-grid');
  if (!grid) return;

  const fragment = document.createDocumentFragment();
  PRODUCTOS.forEach(function (item, index) {
    fragment.appendChild(buildCard(item, index));
  });
  grid.appendChild(fragment);
}

initGenericLinks();
initCatalog();
