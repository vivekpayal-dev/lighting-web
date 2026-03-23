AOS.init({ duration: 750, easing: 'ease-out-cubic', once: true, offset: 70 });

/* Navbar scroll */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 40));

/* Mobile menu */
const mobMenu = document.getElementById('mobMenu');
document.getElementById('hambBtn').addEventListener('click', () => mobMenu.classList.add('open'));
document.getElementById('mobClose').addEventListener('click', () => mobMenu.classList.remove('open'));
document.getElementById('mobOverlay').addEventListener('click', () => mobMenu.classList.remove('open'));

/* Hero Swiper */
new Swiper('#heroSwiper', {
  loop: true, speed: 900,
  autoplay: { delay: 5500, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
  effect: 'fade', fadeEffect: { crossFade: true }
});

/* ── Partner brand logo cards ── */
const brandData = [
  /* name, sub-label, bg, nameColor, subColor, tagLine */
  { name: 'neko', sub: 'THINK DESIGN', bg: '#e8197a', nc: '#fff', sc: 'rgba(255,255,255,0.75)', tag: 'nekolighting.com', accent: '#ff69b4' },
  { name: 'O/M', sub: 'OSVALDO / MATOS', bg: '#111', nc: '#fff', sc: 'rgba(255,255,255,0.55)', tag: 'om-light.com', accent: '#888' },
  { name: 'CLEAR', sub: 'LIGHTING', bg: '#0f0f0f', nc: '#d4a84b', sc: '#fff', tag: 'clearlighting.com', accent: '#d4a84b' },
  { name: 'ABBY', sub: 'LIGHTING', bg: '#111', nc: '#fff', sc: 'rgba(255,255,255,0.6)', tag: 'abbylighting.com', accent: '#fff' },
  { name: 'K-LiTE', sub: "India's Lighting Co.", bg: '#fff', nc: '#1a1a1a', sc: '#555', tag: 'klite.in', accent: '#f5a623' },
  { name: 'Unilamp', sub: 'OUTDOOR SPECIALISTS', bg: '#cc0000', nc: '#fff', sc: 'rgba(255,255,255,0.75)', tag: 'unilamp.co.th', accent: '#ff4444' },
  { name: 'NIRVANA', sub: 'LIGHT', bg: '#181818', nc: '#fff', sc: 'rgba(255,255,255,0.55)', tag: 'nirvanalighting.in', accent: '#4fc3f7' },
  { name: 'JUNG', sub: 'SINCE 1912', bg: '#1c1c1c', nc: '#fff', sc: 'rgba(255,255,255,0.5)', tag: 'jung.de', accent: '#ccc' },
  { name: 'LAFIT', sub: '#BeTheLight', bg: '#181f10', nc: '#8bc34a', sc: 'rgba(255,255,255,0.55)', tag: 'lafitlighting.com', accent: '#8bc34a' },
  { name: 'PASOLiTE', sub: 'LED', bg: '#fff', nc: '#e00', sc: '#222', tag: 'pasolite.com', accent: '#e00' },
];

function makeBrandCard(b) {
  const card = document.createElement('div');
  card.className = 'brand-logo-card';
  card.style.cssText = `background:${b.bg};`;

  /* subtle accent glow in corner */
  card.innerHTML = `
<div style="position:absolute;inset:0;border-radius:12px;
  background:radial-gradient(ellipse at 85% 15%,${b.accent}22 0%,transparent 65%);pointer-events:none"></div>
<div class="b-name" style="font-size:${b.name.length > 6 ? '17px' : '22px'};color:${b.nc};font-family:'Outfit',sans-serif">${b.name}</div>
<div class="b-sub" style="color:${b.sc};font-family:'Outfit',sans-serif;font-size:8.5px">${b.sub}</div>
<div class="b-tag" style="color:${b.sc}">${b.tag}</div>
`;
  return card;
}

function fillRow(rowId, brands, duplicate) {
  const track = document.getElementById(rowId);
  const list = duplicate ? [...brands, ...brands] : brands;
  list.forEach(b => track.appendChild(makeBrandCard(b)));
}

/* Row 1: all 10 brands × 2 (seamless loop) */
fillRow('row1', brandData, true);
/* Row 2: reversed order × 2 */
fillRow('row2', [...brandData].reverse(), true);

/* ── Clients marquee ── */
const clients = [
  'Max Group', 'Intercontinental Jaipur', 'The Roseate', 'Renesas Hotel – Bangalore',
  'Sheraton Hotel Hyderabad', 'Hotel Regenta', 'Hotel Radisson', 'Lemon Tree',
  'Ansal Group', 'Mall of Venice', 'Central Park', 'Hotel Bloom',
  'Paras Group', 'Prem Mandir Vrindavan', 'PVR Saket & Vasant Vihar', 'Roseate House',
  'KC Thapar Group', 'BPTP Ltd', 'JW Marriott', 'Galaxy',
  'Signature Global', 'M3M', 'BJP Headquarters Delhi', 'Takshila Patna',
  'Bhagirathi Hotel Haridwar', 'Kaul Hotel Srinagar'
];
const track = document.getElementById('clientsTrack');
const html = clients.map(c => `<div class="client-chip">${c}</div>`).join('');
track.innerHTML = html + html;