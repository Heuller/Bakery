/* Gabriela Salomão · Um Gole de Gabi
   JavaScript puro, sem dependências. Tudo é melhoria progressiva: sem JS, a página continua legível. */

/* Número do WhatsApp com DDI e DDD, só dígitos. Ex.: "5516999999999".
   Enquanto estiver vazio, o link abre o WhatsApp pedindo para escolher o contato. */
const WHATSAPP_NUMBER = "";

const MESSAGES = {
  consultoria: "Olá, Gabi! Tenho um restaurante (ou cafeteria) e gostaria de conversar sobre uma consultoria de cozinha: receitas de panificação e confeitaria e orientação técnica para a minha equipe.",
  treinamento: "Olá, Gabi! Gostaria de saber como funciona o treinamento in-company de panificação e confeitaria para a minha brigada.",
  aula: "Olá, Gabi! Quero saber mais sobre as aulas particulares de panificação e confeitaria.",
  geral: "Olá, Gabi! Vi o seu site e gostaria de conversar.",
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

const waLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

/* links de WhatsApp em todos os botões */
$$("[data-wa]").forEach((a) => {
  a.href = waLink(MESSAGES[a.dataset.wa] || MESSAGES.geral);
  a.target = "_blank";
  a.rel = "noopener";
});

/* menu do celular */
const burger = $("#burger");
const menu = $("#menu");
if (burger && menu) {
  const set = (open) => {
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    menu.hidden = !open;
  };
  burger.addEventListener("click", () => set(burger.getAttribute("aria-expanded") !== "true"));
  $$("a", menu).forEach((a) => a.addEventListener("click", () => set(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") set(false); });
}

/* paralaxe leve nos cartões do hero (só com mouse) */
const heroVisual = $(".hero-visual");
if (heroVisual && !reduceMotion && window.matchMedia("(hover: hover)").matches) {
  heroVisual.addEventListener("pointermove", (e) => {
    const r = heroVisual.getBoundingClientRect();
    heroVisual.style.setProperty("--px", ((e.clientX - r.left) / r.width - 0.5) * 2);
    heroVisual.style.setProperty("--py", ((e.clientY - r.top) / r.height - 0.5) * 2);
  });
  heroVisual.addEventListener("pointerleave", () => {
    heroVisual.style.setProperty("--px", 0);
    heroVisual.style.setProperty("--py", 0);
  });
}

/* abas do repertório, com View Transitions quando o navegador suporta */
const tabs = $$('[role="tab"]');
const dishes = $$(".dish");
function applyFilter(cat) {
  tabs.forEach((t) => t.setAttribute("aria-selected", String(t.dataset.filter === cat)));
  dishes.forEach((d) => { d.hidden = !(cat === "todas" || d.dataset.cat === cat); });
}
function selectTab(tab) {
  const cat = tab.dataset.filter;
  if (document.startViewTransition && !reduceMotion) document.startViewTransition(() => applyFilter(cat));
  else applyFilter(cat);
}
tabs.forEach((t, i) => {
  t.tabIndex = t.getAttribute("aria-selected") === "true" ? 0 : -1;
  t.addEventListener("click", () => { selectTab(t); tabs.forEach((x) => (x.tabIndex = x === t ? 0 : -1)); });
  t.addEventListener("keydown", (e) => {
    const k = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!k) return;
    e.preventDefault();
    const next = tabs[(i + k + tabs.length) % tabs.length];
    next.focus();
    next.click();
  });
});

/* vídeos: tocam só quando visíveis; botão de pausa; respeitam "reduzir movimento" */
$$(".vid").forEach((box) => {
  const v = $("video", box);
  const btn = $(".pp", box);
  let userPaused = reduceMotion;
  const sync = () => {
    const paused = v.paused;
    btn.setAttribute("aria-pressed", String(paused));
    btn.setAttribute("aria-label", paused ? "Reproduzir vídeo" : "Pausar vídeo");
  };
  btn.addEventListener("click", () => {
    if (v.paused) { userPaused = false; v.play().catch(() => {}); } else { userPaused = true; v.pause(); }
    sync();
  });
  v.addEventListener("play", sync);
  v.addEventListener("pause", sync);
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([en]) => {
      if (en.isIntersecting && !userPaused) v.play().catch(() => {});
      else v.pause();
    }, { threshold: 0.35 }).observe(box);
  }
  sync();
});

/* barra fixa de WhatsApp no celular: aparece depois do hero e some no contato */
const hero = $(".hero");
const contact = $("#contato");
const sticky = $("#sticky");
if (sticky && hero && contact && "IntersectionObserver" in window) {
  let heroOut = false, contactIn = false;
  const update = () => sticky.classList.toggle("on", heroOut && !contactIn);
  new IntersectionObserver(([e]) => { heroOut = !e.isIntersecting; update(); }).observe(hero);
  new IntersectionObserver(([e]) => { contactIn = e.isIntersecting; update(); }, { threshold: 0.15 }).observe(contact);
}

/* seletor de objetivo: monta a mensagem e o link do WhatsApp */
const goals = $$('input[name="goal"]');
const go = $("#wa-go");
const typed = $("#typed");
const full = $("#full");
let timer;
function showGoal(key, animate) {
  const text = MESSAGES[key];
  go.href = waLink(text);
  full.textContent = text;
  clearInterval(timer);
  if (!animate || reduceMotion) { typed.textContent = text; return; }
  typed.textContent = "";
  let i = 0;
  timer = setInterval(() => {
    typed.textContent = text.slice(0, ++i);
    if (i >= text.length) clearInterval(timer);
  }, 14);
}
if (goals.length && go) {
  goals.forEach((g) => g.addEventListener("change", () => showGoal(g.value, true)));
  showGoal(($('input[name="goal"]:checked') || goals[0]).value, false);
}

/* os cartões de serviço levam para o seletor já marcado */
$$("[data-goal]").forEach((a) => a.addEventListener("click", () => {
  const input = $(`input[name="goal"][value="${a.dataset.goal}"]`);
  if (input) { input.checked = true; showGoal(a.dataset.goal, false); }
}));
