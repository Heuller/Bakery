/* Um Gole de Gabi · JavaScript puro, sem dependências.
   Faz uma coisa só: o seletor "Eu quero:" do contato, que monta a mensagem de WhatsApp. */

/* Número da Gabi com DDI e DDD, só dígitos. Exemplo: "5516999999999".
   Enquanto estiver vazio, o link abre o WhatsApp pedindo para escolher o contato. */
const WHATSAPP_NUMBER = "";

/* Textos das mensagens. Para mudar o que sai pronto no WhatsApp, edite aqui. */
const MESSAGES = {
  consultoria: "Olá, Gabi! Tenho um restaurante (ou cafeteria) e gostaria de conversar sobre uma consultoria de cozinha: receitas de panificação e confeitaria e orientação técnica para a minha equipe.",
  treinamento: "Olá, Gabi! Gostaria de saber como funciona o treinamento de panificação e confeitaria para a equipe de cozinha do meu restaurante.",
  aula: "Olá, Gabi! Quero saber mais sobre as aulas particulares de panificação e confeitaria.",
  geral: "Olá, Gabi! Vi o seu site e gostaria de conversar.",
};

const goals = [...document.querySelectorAll(".goal")];
const preview = document.getElementById("preview");
const go = document.getElementById("wa-go");

function show(key) {
  const text = MESSAGES[key] || MESSAGES.geral;
  preview.textContent = text;
  go.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
  goals.forEach((g) => g.setAttribute("aria-pressed", String(g.dataset.goal === key)));
}

goals.forEach((g) => g.addEventListener("click", () => show(g.dataset.goal)));

/* Os botões dos cartões e do hero levam ao contato já com a opção marcada. */
document.querySelectorAll("a[data-goal]").forEach((a) =>
  a.addEventListener("click", () => show(a.dataset.goal))
);

show("consultoria");
