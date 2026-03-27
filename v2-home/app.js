/* ═══════════════════════════════════════════════════
   MAIS VENDAS PRO — V2 CONCEPT
   Three.js + GSAP + Lenis — Matrix Alchemist Theme
   ═══════════════════════════════════════════════════ */

import * as THREE from 'https://unpkg.com/three@0.170.0/build/three.module.js';

// ── DEVICE DETECTION ──
const isTouchDevice = matchMedia('(hover: none)').matches;
const isMobile = isTouchDevice || window.innerWidth < 768;

// ── GLOBAL STATE ──
let lenis = null;
let mouse = { x: 0, y: 0, nx: 0, ny: 0 };

// ════════════════════════════════════════
// THREE.JS — PARTICLE GLOBE
// ════════════════════════════════════════
function initGlobe() {
  const canvas = document.getElementById('heroGL');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !isMobile });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 4.5;

  // Fibonacci sphere particle distribution
  const COUNT = isMobile ? 500 : 1800;
  const positions = new Float32Array(COUNT * 3);
  const colors = new Float32Array(COUNT * 3);
  const sizes = new Float32Array(COUNT);
  const basePositions = new Float32Array(COUNT * 3);

  const emerald = new THREE.Color(0x00C96E);
  const gold    = new THREE.Color(0xFFD700);
  const glow    = new THREE.Color(0x33D489);

  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < COUNT; i++) {
    const y = 1 - (i / (COUNT - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;

    const x = Math.cos(theta) * radius;
    const z = Math.sin(theta) * radius;

    const scale = 1.3;
    positions[i * 3]     = x * scale;
    positions[i * 3 + 1] = y * scale;
    positions[i * 3 + 2] = z * scale;

    basePositions[i * 3]     = positions[i * 3];
    basePositions[i * 3 + 1] = positions[i * 3 + 1];
    basePositions[i * 3 + 2] = positions[i * 3 + 2];

    // Color gradient: emerald at poles, gold at equator
    const t = Math.abs(y);
    const color = new THREE.Color().lerpColors(gold, emerald, t);
    // Add some glow variation
    if (Math.random() > 0.85) color.lerp(glow, 0.5);

    colors[i * 3]     = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;

    sizes[i] = Math.random() * 3 + 1.5;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const material = new THREE.PointsMaterial({
    size: 0.015,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // Orbital rings
  const ringGeometry = new THREE.TorusGeometry(1.5, 0.003, 8, 100);
  const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0x00C96E,
    transparent: true,
    opacity: 0.12
  });

  const ring1 = new THREE.Mesh(ringGeometry, ringMaterial);
  ring1.rotation.x = Math.PI / 3;
  ring1.rotation.y = Math.PI / 6;
  scene.add(ring1);

  const ring2 = new THREE.Mesh(ringGeometry, ringMaterial.clone());
  ring2.rotation.x = -Math.PI / 4;
  ring2.rotation.z = Math.PI / 5;
  ring2.material.opacity = 0.08;
  scene.add(ring2);

  // Ambient particles (desktop only)
  let ambientParticles = null;
  if (!isMobile) {
    const ambientCount = 200;
    const ambientPos = new Float32Array(ambientCount * 3);
    for (let i = 0; i < ambientCount; i++) {
      ambientPos[i * 3]     = (Math.random() - 0.5) * 10;
      ambientPos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      ambientPos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    const ambientGeo = new THREE.BufferGeometry();
    ambientGeo.setAttribute('position', new THREE.BufferAttribute(ambientPos, 3));
    const ambientMat = new THREE.PointsMaterial({
      size: 0.008,
      color: 0x00C96E,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    ambientParticles = new THREE.Points(ambientGeo, ambientMat);
    scene.add(ambientParticles);
  }

  // Animation
  let scrollProgress = 0;
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    // Slow rotation
    particles.rotation.y = elapsed * 0.08;
    ring1.rotation.z = elapsed * 0.05;
    ring2.rotation.z = -elapsed * 0.03;

    // Vertex breathing (desktop)
    if (!isMobile) {
      const pos = geometry.attributes.position.array;
      for (let i = 0; i < COUNT; i++) {
        const bx = basePositions[i * 3];
        const by = basePositions[i * 3 + 1];
        const bz = basePositions[i * 3 + 2];
        const noise = Math.sin(elapsed * 0.5 + bx * 3) * 0.02
                    + Math.cos(elapsed * 0.3 + by * 4) * 0.015;
        pos[i * 3]     = bx + bx * noise;
        pos[i * 3 + 1] = by + by * noise;
        pos[i * 3 + 2] = bz + bz * noise;
      }
      geometry.attributes.position.needsUpdate = true;
    }

    // Mouse parallax (desktop)
    if (!isTouchDevice) {
      particles.rotation.x += (mouse.ny * 0.3 - particles.rotation.x) * 0.02;
      camera.position.x += (mouse.nx * 0.5 - camera.position.x) * 0.02;
      camera.position.y += (mouse.ny * 0.3 - camera.position.y) * 0.02;
    }

    // Scroll fade
    material.opacity = Math.max(0, 0.85 - scrollProgress * 1.5);
    ringMaterial.opacity = Math.max(0, 0.12 - scrollProgress * 0.3);

    if (ambientParticles) {
      ambientParticles.rotation.y = elapsed * 0.015;
    }

    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }

  animate();

  // Scroll progress for fade
  window.addEventListener('scroll', () => {
    scrollProgress = Math.min(1, window.scrollY / window.innerHeight);
  });

  // Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// ════════════════════════════════════════
// LENIS — SMOOTH SCROLL (desktop only)
// ════════════════════════════════════════
function initLenis() {
  if (isTouchDevice || typeof Lenis === 'undefined') return;

  lenis = new Lenis({
    lerp: 0.08,
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
}

// ════════════════════════════════════════
// MISSION — AUTO-ANIMATE (time-based)
// ════════════════════════════════════════
function initMissionAutoAnimate() {
  const missionWords = document.querySelectorAll('.mission__word');
  if (!missionWords.length) return;

  let hasPlayed = false;

  // Use IntersectionObserver to trigger when section enters viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasPlayed) {
        hasPlayed = true;
        playMissionAnimation();
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(document.querySelector('.mission'));

  function playMissionAnimation() {
    const tl = gsap.timeline({ delay: 0.2 });

    missionWords.forEach((word, i) => {
      tl.to(word, {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
      }, i * 0.25);
    });

    // Subtle background shift
    tl.to('.mission__content', {
      backgroundColor: 'rgba(10, 10, 10, 1)',
      duration: missionWords.length * 0.25
    }, 0);
  }
}

// ════════════════════════════════════════
// GSAP — SCROLL ANIMATIONS
// ════════════════════════════════════════
function initScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // ── SCROLL PROGRESS BAR ──
  gsap.to('.scroll-progress', {
    width: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3
    }
  });

  // ── MISSION — AUTO-ANIMATE (time-based, not scroll) ──
  initMissionAutoAnimate();

  // ── SQUADS — HORIZONTAL SCROLL ──
  const squadsTrack = document.getElementById('squadsTrack');
  if (squadsTrack) {
    const cards = squadsTrack.querySelectorAll('.squads__card');

    // Set background images
    cards.forEach(card => {
      const img = card.dataset.img;
      if (img) {
        card.querySelector('.squads__card-bg').style.backgroundImage = `url(${img})`;
      }
    });

    const getScrollDistance = () => squadsTrack.scrollWidth - window.innerWidth;

    const hScrollTrigger = ScrollTrigger.create({
      trigger: '.squads',
      start: 'top top',
      end: () => `+=${getScrollDistance()}`,
      pin: true,
      scrub: isMobile ? 0.5 : 1,
      invalidateOnRefresh: true,
      animation: gsap.to(squadsTrack, {
        x: () => -getScrollDistance(),
        ease: 'none'
      }),
      onUpdate: (self) => {
        const counter = document.getElementById('squadCounter');
        if (counter) {
          const idx = Math.min(
            cards.length,
            Math.floor(self.progress * cards.length) + 1
          );
          counter.textContent = String(idx).padStart(2, '0');
        }
      }
    });

    // Inner parallax (desktop only)
    if (!isMobile) {
      cards.forEach(card => {
        gsap.to(card.querySelector('.squads__card-content'), {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            containerAnimation: hScrollTrigger.animation,
            start: 'left right',
            end: 'right left',
            scrub: true
          }
        });
      });
    }
  }

  // ── SERVICES — STACKING CARDS ──
  const stackCards = document.querySelectorAll('.services__card');
  if (stackCards.length) {
    const stack = document.getElementById('servicesStack');
    stack.style.height = `${stackCards.length * 100}vh`;

    stackCards.forEach((card, i) => {
      if (i === 0) return; // First card is visible by default

      ScrollTrigger.create({
        trigger: card,
        start: 'top bottom',
        end: 'top top',
        scrub: isMobile ? 0.3 : 0.8,
        onUpdate: (self) => {
          // Scale down previous cards
          for (let j = 0; j < i; j++) {
            const scale = 1 - (i - j) * 0.03 * self.progress;
            const brightness = 1 - (i - j) * 0.15 * self.progress;
            stackCards[j].style.transform = `scale(${Math.max(0.85, scale)})`;
            stackCards[j].style.setProperty('--brightness', Math.max(0.4, brightness));
          }
        }
      });
    });
  }

  // ── CASES — CLIP-PATH REVEALS ──
  const caseCards = document.querySelectorAll('.cases__card');
  caseCards.forEach(card => {
    const reveal = card.querySelector('.cases__card-reveal');
    const clip = card.dataset.clip;
    let endClip;

    switch (clip) {
      case 'ellipse':
        endClip = 'ellipse(80% 80% at 50% 50%)';
        break;
      case 'wipe-right':
        endClip = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
        break;
      case 'circle':
        endClip = 'circle(80% at 50% 50%)';
        break;
    }

    gsap.to(reveal, {
      clipPath: endClip,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        end: 'top 30%',
        scrub: isMobile ? 0.3 : 1,
        onUpdate: (self) => {
          // Add .revealed when clip-path is > 40% expanded (text becomes hard to read)
          if (self.progress > 0.4) {
            card.classList.add('revealed');
          } else {
            card.classList.remove('revealed');
          }
        }
      }
    });
  });

  // ── CONTACT — SCALE ENTRANCE ──
  gsap.from('.contact__content', {
    scale: 0.8,
    opacity: 0,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 70%',
      end: 'top 30%',
      scrub: 1
    }
  });

  // ── ABOUT — STAGGER IN ──
  gsap.from('.about__value', {
    x: -30,
    opacity: 0,
    stagger: 0.15,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.about__values',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
}

// ════════════════════════════════════════
// CUSTOM CURSOR
// ════════════════════════════════════════
function initCursor() {
  if (isTouchDevice) return;

  const ring = document.querySelector('.cursor-ring');
  const dot = document.querySelector('.cursor-dot');
  if (!ring || !dot) return;

  let cx = 0, cy = 0;
  let dx = 0, dy = 0;

  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.nx = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.ny = -(e.clientY / window.innerHeight) * 2 + 1;

    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
  });

  function updateRing() {
    cx += (mouse.x - cx) * 0.12;
    cy += (mouse.y - cy) * 0.12;
    ring.style.left = cx + 'px';
    ring.style.top = cy + 'px';
    requestAnimationFrame(updateRing);
  }
  updateRing();

  // Hover detection
  document.querySelectorAll('[data-hover], a, button').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
  });
}

// ════════════════════════════════════════
// CTA BUTTON — CLIP-PATH MOUSE TRACKING
// ════════════════════════════════════════
function initCtaButton() {
  const btn = document.getElementById('ctaBtn');
  if (!btn) return;

  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    btn.style.setProperty('--mx', x + '%');
    btn.style.setProperty('--my', y + '%');
  });

  // Open modal on click
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    openDiagModal();
  });
}

// ════════════════════════════════════════
// DIAGNÓSTICO MODAL — FORM + GOOGLE SHEETS
// ════════════════════════════════════════
const FORM_CONFIG = {
  action: 'https://docs.google.com/forms/d/e/1FAIpQLSfKWsGqkTC3FIzmNKWcRsSpxZcbLdpgWBbJlkW3gxspnJBDkQ/formResponse',
  fields: {
    nome:            'entry.915737790',
    email:           'entry.1326268760',
    telefone:        'entry.785927008',
    objetivo:        'entry.936419073',
    disponibilidade: 'entry.761569464'
  },
  whatsappNumber: '556291508399',
  rateLimitMs: 5 * 60 * 1000 // 5 minutes
};

let savedScrollY = 0;

function openDiagModal() {
  const modal = document.getElementById('diagModal');
  if (!modal) return;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');

  // Lock body scroll — iOS Safari requires position:fixed to fully prevent background scroll
  savedScrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${savedScrollY}px`;
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.overflow = 'hidden';
  if (lenis) lenis.stop();

  // Focus first input
  setTimeout(() => {
    document.getElementById('leadName')?.focus();
  }, 400);
}

function closeDiagModal() {
  const modal = document.getElementById('diagModal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');

  // Restore body scroll
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.overflow = '';
  window.scrollTo(0, savedScrollY);
  if (lenis) lenis.start();
}

function initDiagModal() {
  const modal = document.getElementById('diagModal');
  const form = document.getElementById('diagForm');
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalClose');
  const charCount = document.getElementById('charCount');
  const goalInput = document.getElementById('leadGoal');

  if (!modal || !form) return;

  // Close handlers
  backdrop?.addEventListener('click', closeDiagModal);
  closeBtn?.addEventListener('click', closeDiagModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeDiagModal();
    }
  });

  // Character counter
  goalInput?.addEventListener('input', () => {
    const len = goalInput.value.length;
    if (charCount) charCount.textContent = len;
  });

  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Rate limit check
    const lastSubmit = localStorage.getItem('mvp_diag_last_submit');
    if (lastSubmit && (Date.now() - parseInt(lastSubmit)) < FORM_CONFIG.rateLimitMs) {
      const remaining = Math.ceil((FORM_CONFIG.rateLimitMs - (Date.now() - parseInt(lastSubmit))) / 60000);
      showFormError('disponibilidade', `Aguarde ${remaining} minuto(s) para enviar novamente.`);
      return;
    }

    // Validate
    if (!validateForm()) return;

    const submitBtn = document.getElementById('diagSubmit');
    const submitText = form.querySelector('.modal__submit-text');
    const submitLoading = form.querySelector('.modal__submit-loading');

    // Loading state
    submitBtn.disabled = true;
    submitText.style.display = 'none';
    submitLoading.style.display = 'inline';

    // Collect data
    const data = {
      nome: document.getElementById('leadName').value.trim(),
      email: document.getElementById('leadEmail').value.trim(),
      telefone: document.getElementById('leadPhone').value.trim(),
      objetivo: document.getElementById('leadGoal').value.trim(),
      disponibilidade: form.querySelector('input[name="disponibilidade"]:checked')?.value || ''
    };

    try {
      // Submit to Google Forms via hidden iframe
      await submitToGoogleForms(data);

      // Save rate limit
      localStorage.setItem('mvp_diag_last_submit', Date.now().toString());

      // Build WhatsApp message with context
      const waMsg = buildWhatsAppMessage(data);
      const waUrl = `https://wa.me/${FORM_CONFIG.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;

      // Close modal
      closeDiagModal();

      // Reset form
      form.reset();
      if (charCount) charCount.textContent = '0';

      // Redirect to WhatsApp
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 300);

    } catch (err) {
      console.error('Form submission error:', err);
      showFormError('disponibilidade', 'Erro ao enviar. Tente novamente.');
    } finally {
      submitBtn.disabled = false;
      submitText.style.display = 'inline';
      submitLoading.style.display = 'none';
    }
  });
}

function validateForm() {
  let valid = true;

  // Clear previous errors
  document.querySelectorAll('.modal__error').forEach(el => el.textContent = '');
  document.querySelectorAll('.modal__input.invalid').forEach(el => el.classList.remove('invalid'));

  const name = document.getElementById('leadName');
  const email = document.getElementById('leadEmail');
  const phone = document.getElementById('leadPhone');
  const goal = document.getElementById('leadGoal');
  const dispo = document.querySelector('input[name="disponibilidade"]:checked');

  if (!name.value.trim() || name.value.trim().length < 2) {
    showFormError('leadName', 'Informe seu nome completo.');
    name.classList.add('invalid');
    valid = false;
  }

  if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    showFormError('leadEmail', 'Informe um email válido.');
    email.classList.add('invalid');
    valid = false;
  }

  if (!phone.value.trim() || phone.value.trim().length < 8) {
    showFormError('leadPhone', 'Informe um telefone válido.');
    phone.classList.add('invalid');
    valid = false;
  }

  if (!goal.value.trim() || goal.value.trim().length < 10) {
    showFormError('leadGoal', 'Descreva seu objetivo (mínimo 10 caracteres).');
    goal.classList.add('invalid');
    valid = false;
  }

  if (!dispo) {
    showFormError('disponibilidade', 'Selecione sua disponibilidade.');
    valid = false;
  }

  return valid;
}

function showFormError(fieldId, msg) {
  const el = document.querySelector(`.modal__error[data-for="${fieldId}"]`);
  if (el) el.textContent = msg;
}

function submitToGoogleForms(data) {
  return new Promise((resolve) => {
    const iframe = document.getElementById('hiddenFormFrame');
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = FORM_CONFIG.action;
    form.target = 'hiddenFormFrame';
    form.style.display = 'none';

    // Add fields
    Object.entries(FORM_CONFIG.fields).forEach(([key, entryId]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = entryId;
      input.value = data[key] || '';
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    // Google Forms doesn't give us a callback, so resolve after a short delay
    setTimeout(resolve, 1500);
  });
}

function buildWhatsAppMessage(data) {
  const disponibilidadeMap = {
    'Imediatamente': 'IMEDIATAMENTE',
    'Em no máximo 3 dias': 'em até 3 dias',
    'Preciso ver minha agenda': 'precisa checar agenda'
  };

  return `*Diagnóstico IA — Novo Lead*

*Nome:* ${data.nome}
*Email:* ${data.email}
*Telefone:* ${data.telefone}
*Objetivo:* ${data.objetivo}
*Disponibilidade:* ${disponibilidadeMap[data.disponibilidade] || data.disponibilidade}

_Enviado via maisvendaspro.com.br_`;
}

// ════════════════════════════════════════
// CHARACTER SWAP ANIMATION
// ════════════════════════════════════════
function initCharSwap() {
  document.querySelectorAll('[data-swap]').forEach(el => {
    const text = el.textContent;
    el.innerHTML = '';
    [...text].forEach(char => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      el.appendChild(span);
    });

    const spans = el.querySelectorAll('span');

    function swapRandom() {
      const idx = Math.floor(Math.random() * spans.length);
      const span = spans[idx];
      if (span.textContent === '\u00A0') return;

      span.classList.add('swapping');
      setTimeout(() => {
        span.classList.remove('swapping');
      }, 300);
    }

    setInterval(() => {
      swapRandom();
    }, 2000 + Math.random() * 3000);
  });
}

// ════════════════════════════════════════
// MOBILE MENU
// ════════════════════════════════════════
function initMobileMenu() {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  if (!burger || !menu) return;

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');

    if (lenis) {
      menu.classList.contains('active') ? lenis.stop() : lenis.start();
    }
  });

  // Close on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      menu.classList.remove('active');
      if (lenis) lenis.start();
    });
  });
}

// ════════════════════════════════════════
// LOADER — MATRIX CODE RAIN
// ════════════════════════════════════════
function initLoader() {
  const loader = document.getElementById('loader');
  const rain = document.getElementById('loaderRain');
  if (!loader) return;

  // Generate code rain columns
  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF';
  const colCount = Math.floor(window.innerWidth / 18);

  for (let i = 0; i < colCount; i++) {
    const col = document.createElement('div');
    col.className = 'loader__rain-col';
    col.style.left = (i * 18) + 'px';
    col.style.animationDuration = (2 + Math.random() * 3) + 's';
    col.style.animationDelay = (Math.random() * -5) + 's';

    let text = '';
    const length = 10 + Math.floor(Math.random() * 20);
    for (let j = 0; j < length; j++) {
      text += chars[Math.floor(Math.random() * chars.length)] + '\n';
    }
    col.textContent = text;
    rain.appendChild(col);
  }

  // Loader timeline
  const tl = gsap.timeline({
    onComplete: () => {
      loader.style.display = 'none';
      if (lenis) lenis.start();
      initScrollAnimations();
    }
  });

  tl.to('.loader__brand', { opacity: 1, duration: 0.6, delay: 0.5 })
    .to('.loader__brand', { opacity: 0, duration: 0.4, delay: 0.8 })
    .to('.loader__rain', { opacity: 0, duration: 0.4 }, '-=0.2')
    .to('.loader__col', {
      scaleY: 0,
      duration: 0.7,
      stagger: { each: 0.08, from: 'center' },
      ease: 'power3.inOut'
    }, '-=0.2');
}

// ════════════════════════════════════════
// NAV — SCROLL BEHAVIOR
// ════════════════════════════════════════
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  // Smooth scroll to sections
  nav.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        if (lenis) {
          lenis.scrollTo(target);
        } else {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// ════════════════════════════════════════
// INIT
// ════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initGlobe();
  initLenis();
  initCursor();
  initCtaButton();
  initCharSwap();
  initMobileMenu();
  initNav();
  initDiagModal();

  // Loader starts everything else
  if (typeof gsap !== 'undefined') {
    initLoader();
  } else {
    // Fallback: if GSAP not loaded yet, wait
    const checkGsap = setInterval(() => {
      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        clearInterval(checkGsap);
        initLoader();
      }
    }, 100);
  }
});
