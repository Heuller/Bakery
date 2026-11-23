# Um Gole de Gabi · site da Gabriela Salomão

Landing page de uma página só, em português, feita para o tráfego do Instagram (celular primeiro, e também desktop).
HTML, CSS e JavaScript puros. Sem framework, sem build, sem dependências. Para ver, abra `index.html` no navegador.

> **Se você chegou aqui para pedir uma mudança**, vá direto para [Como pedir e fazer mudanças](#como-pedir-e-fazer-mudanças).
> Este arquivo registra tudo o que foi decidido e feito, para que qualquer ajuste futuro comece de um ponto conhecido.

---

## 1. Resumo

| Item | Situação |
| --- | --- |
| Quem | Gabriela Salomão David (@umgoledegabi): confeiteira, padeira, docente do SENAC, campeã do Que Seja Doce 2022 (GNT) |
| O que vende | Três serviços, sem e-commerce de doces: **consultoria de cozinha** para restaurantes e cafeterias (frente principal), **treinamento para equipes de cozinha** e **aulas particulares** |
| Foco do texto | Ensino, receita e técnica. **Sem** cálculo de custo, CMV, margem ou lucro (decisão do Richard: "não faz parte da personalidade dela") |
| Estado | Design aprovado pelo Richard em 19/11/2026. Falta: número de WhatsApp, aprovação dos textos pela Gabi, domínio e publicação |
| Onde está | Este repositório, branch `main` |

## 2. Estrutura do repositório

```
index.html        a página inteira (HTML semântico, texto e fotos)
styles.css        todos os estilos; as cores e fontes ficam nos tokens do topo
main.js           só o seletor "Eu quero:" do contato e o link do WhatsApp
assets/img/       35 fotos em WebP, já otimizadas (13 em uso, 22 livres)
assets/video/     2 vídeos curtos sem áudio e seus pôsteres (hoje NÃO usados na página)
GabiSite/         originais enviados pela Gabi, sem tratamento (47 arquivos, ~37 MB; a página não os carrega)
README.md         este arquivo
```

## 3. Histórico do trabalho (por que está assim)

1. **Versão 1 e 2** (artefato privado do Claude, fora deste repositório). Landing editorial em creme e âmbar, com React e Tailwind por CDN, calculadora de CMV, ilustrações no lugar das fotos. Detalhes no briefing de passagem de 18/11/2026.
2. **Mudança de rumo (19/11).** O Richard pediu para: tirar o cálculo de lucro; focar em docência e cozinha (a Gabi é professora do SENAC, e esse era o sonho dela); manter a consultoria de cozinha em primeiro lugar, sem diferença de prioridade para as aulas particulares; usar as fotos e vídeos de `GabiSite`; e tratar gatos e Bloody Mary só como referências visuais, nunca no texto.
3. **Versão 3 (commit `eec5be1`).** Primeiro site de verdade neste repositório, com as fotos reais, ainda no visual creme e âmbar. Um ajuste de margens seguras do celular veio no commit `e14f4ce`.
4. **Reprovação parcial ("gostei, mas não amei").** O Richard achou o visual genérico, "parece outros 500 sites", sem personalidade. Pontos citados: visual genérico, tipografia e cores. Pediu mais personalidade e disse que a foto da Gabi com as rosquinhas diante dos olhos é muito melhor que a do palmier-borboleta. Liberou trocar paleta e tipografia e escolheu a direção **moderna e lúdica**.
5. **Versão 4.** Redesenho aprovado como protótipo ("ficou maravilhoso") e convertido em site real.
6. **Versão 5 (atual, 23/11).** Ajustes pedidos pelo Richard:
   - **Textos humanizados:** todo o texto foi reescrito em primeira pessoa, em tom de conversa, sem frases de efeito. H1 agora é "Pão e doce que a sua equipe sabe fazer."; "Rigor de escola. Alma de bancada." virou "Prazer, sou a Gabi."; "Do primeiro olhar ao ponto certo" virou "A gente trabalha junto, passo a passo.".
   - **Foto do card de consultoria:** `doces-rack` (panetones pendurados de cabeça para baixo) foi trocada por `gabi-palmiers`.
   - **"Treinamento de brigadas in-company"** virou **"Treinamento para equipes de cozinha"** (brigada lembra emergência e incêndio). A palavra também saiu da meta description, do og:description e da mensagem de WhatsApp.
   - **Gato do contato redesenhado:** agora de frente, com orelhas, olhos no rosto, nariz, bigodes e patas na borda do cartão.
   - **Novo bloco "Formação e experiência"** dentro de Sobre (4 cartões). O texto de Sobre agora está em primeira pessoa e os chips antigos foram removidos.
   - Mantidos como estavam: "O que sai da bancada" e "Vamos falar sobre a sua cozinha?".

## 4. Design

**Conceito:** "confeitaria pop". Cores chapadas, bordas grossas de cacau, sombras deslocadas e etiquetas coladas nas fotos, como adesivos. A personalidade visual da Gabi (gatos, Bloody Mary, fotos) aparece no visual, não no texto.

**Tokens** (no topo de `styles.css`, em `:root`; mude ali e o site inteiro muda):

| Token | Valor | Uso |
| --- | --- | --- |
| `--ink` | `#1E1411` | Texto, bordas, sombras. Cacau quase preto |
| `--paper` | `#FFF7EA` | Fundo da página |
| `--tomato` | `#C8281C` | Ação principal. Vermelho profundo, referência ao Bloody Mary |
| `--pink` | `#FF9EC0` | Rosa-donut (hero, cartão de aulas) |
| `--yellow` | `#FFD23F` | Amarelo-manteiga (selos, seção Sobre, cartão de treinamento) |
| `--soft` | `#F1DFD0` | Texto secundário sobre fundo escuro |

**Tipografia** (Google Fonts, carregada no `<head>` do `index.html`):
- Títulos: **Bricolage Grotesque** (peso 800, espaçamento negativo).
- Corpo: **DM Sans**.
- Cada fonte tem pilha de reserva (`system-ui`), então a página funciona mesmo sem as fontes.

**Contraste:** texto `paper` sobre `tomato` dá cerca de 5,2:1 e texto `ink` sobre `pink` ou `yellow` passa de 9:1, ambos acima do mínimo de 4,5:1 para texto corrido. O vermelho vivo `#E8392B`, mais claro, **não** serve de fundo de texto: não use.

**Movimento** (tudo desligado com "reduzir movimento" do sistema): faixa de texto correndo, selo giratório e etiqueta "Docente SENAC" flutuando no hero, pequenos saltos nos botões e giro das fotos do repertório ao passar o mouse. Não há rolagem sequestrada nem nada que fique escondido esperando rolagem.

## 5. Seções da página (na ordem)

| # | Seção | Âncora | Observação |
| --- | --- | --- | --- |
| 1 | Navegação | `#topo` | Marca e links. **No celular os 4 links somem** e sobra a marca e o botão "Agendar uma conversa" |
| 2 | Hero (rosa) | `#topo` | H1 "Pão e doce que a sua equipe *sabe fazer*.", foto das rosquinhas em arco, selo "Campeã Que Seja Doce 2022", macaron dos gatinhos |
| 3 | Faixa | | Palavras-chave correndo, decorativa (escondida de leitores de tela) |
| 4 | Três frentes | `#consultoria`, `#treinamento`, `#aulas` | Consultoria em cartão largo (vermelho); treinamento (amarelo) e aulas (rosa) lado a lado, mesmo peso |
| 5 | Repertório (escuro) | | 8 fotos inclinadas, "O que sai da bancada" |
| 6 | Sobre (amarelo) | `#sobre` | "Prazer, sou a Gabi.", foto dela com croissantes nos olhos, texto em primeira pessoa, link do Instagram e bloco "Formação e experiência" (`.cv`, 4 cartões: docência no SENAC, formação, experiência de cozinha, especialidades) |
| 7 | Método | | 4 passos numerados (é uma sequência de verdade): conversa, receitas, ensino, acompanhamento |
| 8 | Contato (vermelho) | `#contato` | Seletor "Eu quero:" monta a mensagem de WhatsApp. Gato espiando sobre o cartão |
| 9 | Rodapé | | Marca, links, Instagram, direitos |

## 6. Onde mudar cada coisa

| Quero mudar... | Arquivo e lugar |
| --- | --- |
| Um texto da página | `index.html`, procure pela frase |
| Cores | `styles.css`, tokens em `:root` |
| Fontes | `index.html`, `<link>` do Google Fonts, e `--display` / `--body` em `styles.css` |
| **Número do WhatsApp** | `main.js`, constante `WHATSAPP_NUMBER` (DDI + DDD, só dígitos, ex.: `"5516999999999"`) |
| Mensagens prontas do WhatsApp | `main.js`, objeto `MESSAGES` |
| Trocar uma foto | Coloque o novo arquivo em `assets/img/` (WebP, ver abaixo) e mude o `src`, o `alt`, `width` e `height` no `index.html` |
| Ordem das seções | Mover o bloco `<section>` inteiro no `index.html` |
| Legendas das fotos do repertório | `index.html`, `<figcaption>` de cada `.tile` |
| Título da aba e descrição para busca | `index.html`, `<title>` e `<meta name="description">` |

**Fotos novas:** reduza para no máximo ~900 px de largura (1200 px para fotos de destaque) e converta para WebP com qualidade ~78. Sempre informe `width` e `height` reais no `<img>` (evita a página "pular" ao carregar) e escreva um `alt` que descreva o que se vê.

**Se o botão de uma frente (consultoria, treinamento, aulas) levar ao contato:** isso é feito pelo atributo `data-goal="consultoria|treinamento|aula|geral"` no link. O seletor do contato já abre marcado na opção certa.

## 7. Fotos

**Em uso (13):** `gabi-rosquinhas` (hero), `macaron-gatinhos`, `gabi-palmiers` (consultoria), `gabi-croissant`, `gabi-palmier-borboleta`, `croissant-listrado`, `torta-limao`, `pavlova`, `bolos-pote`, `cannoli`, `pao-barca`, `pain-au-chocolat`, `gabi-croissants-olhos` (Sobre).

**Livres em `assets/img/` (22):** `doces-rack` (panetones de cabeça para baixo, tirada por pedido do Richard), `bolo-flor`, `croissant-miolo`, `croissants-mao`, `folhado-listrado`, `gabi-amora`, `macaron-chocolate`, `massa-esticada`, `pains-fermentando`, `palmier-chocolate`, `pao-brioche`, `pao-cachorro-quente`, `rocambole`, `rosquinha`, `tiramisu`, `torta-caramelo`, `torta-folhas`, `torta-frutas`, `torta-limao-merengue`, `torta-merengue-avela`, `torta-nozes`, `tranca-chocolate`. Prontas para uma galeria maior ou troca de fotos.

**Descartados de `GabiSite`:** 3 dos 5 vídeos (`WA0096`, `WA0098`, `WA0099`) são memes de internet com marca d'água de terceiros e imagens que não combinam com o tom profissional. Não foram usados nem convertidos.

**Vídeos em `assets/video/`:** `torta-morango.mp4` (montagem de uma torta vista de cima) e `mise-en-place.mp4`, 540x960, sem áudio, ~2,3 MB cada. A versão 3 do site os usava; o design aprovado da versão 4 **não** tem seção de vídeo, então ficam guardados e fora da página. Há um antebraço tatuado no de mise en place: presumo que seja da Gabi, **confirmar** (e os direitos de uso).

## 8. Texto: quem escreveu e o que falta aprovar

Os textos foram escritos pelo Claude a partir do que o Richard contou e do briefing, **não são da Gabi**. Fatos usados: nome completo, profissão, docência no SENAC (cursos técnicos de Panificação e de Confeitaria; cursos livres de técnicas de panificação, técnicas de confeitaria, doces finos, bolos e tortas), graduação em Gastronomia (**o nome da faculdade não é citado, por pedido do Richard**), Le Cordon Bleu do Peru, experiência em resort e em pizzaria napolitana, panificação, confeitaria e macaron, título no Que Seja Doce 2022 (GNT), Instagram. Nenhum número, depoimento, cliente, preço ou prazo foi inventado.

Precisam da aprovação dela antes de ir ao ar:
- O segundo parágrafo de "Sobre" ("Ser professora de gastronomia era um sonho meu..."), que se baseia no que ela contou ao Richard, e a frase sobre explicar o porquê de cada etapa.
- O bloco "Formação e experiência": conferir se os cursos livres estão completos (o Richard disse "etc.") e se "escola muito renomada" para a Le Cordon Bleu agrada a ela. Também falta saber o ano de formação e o período de resort e pizzaria, se ela quiser mostrar.
- Toda a voz em primeira pessoa: foi escrita por nós, e ela precisa se reconhecer.
- Os entregáveis de cada serviço (listas com marcadores): são razoáveis, mas descrevem o que ela faz e **não foram validados**.
- O método em 4 passos.
- As mensagens prontas do WhatsApp.
- As legendas das fotos do repertório, que descrevem só o que se vê. Se algum nome estiver errado, ela corrige.

## 9. O que foi testado e o que não foi

**Verificado** (Chrome headless, 1440 px e 390 px): todas as seções renderizam; 14 imagens carregam sem erro; sem estouro horizontal; sem erro de JavaScript; o seletor de contato troca a mensagem e o link; os botões dos cartões levam ao contato com a opção marcada.

**Não verificado:**
- Bricolage Grotesque e DM Sans carregaram nas capturas do Chrome headless, mas a quebra de linha dos títulos pode variar um pouco em outros navegadores e sistemas.
- Safari, Firefox, celular real e o navegador interno do Instagram.
- Auditoria de acessibilidade (Lighthouse, leitor de tela, teclado) e medição de desempenho.
- O botão de WhatsApp com número real (o número ainda está vazio).

**Cuidados conhecidos:**
- No celular, os links do menu superior ficam escondidos (só a marca e o botão). É de propósito, mas se a Gabi quiser menu completo no celular é uma mudança a pedir.
- A faixa em movimento e o selo giratório podem pesar em celulares muito fracos. Com "reduzir movimento" ligado, eles param.

## 10. Pendências

- [ ] **Número de WhatsApp** da Gabi (preencher `WHATSAPP_NUMBER` em `main.js` e testar os botões no celular, inclusive dentro do Instagram).
- [ ] **Aprovação dos textos pela Gabi** (ver seção 8).
- [ ] **Se as aulas particulares são presenciais, online ou os dois.** A página não diz nada sobre isso de propósito, para não inventar. Quando souber, acrescentar.
- [ ] **Confirmar os vídeos** (autoria e direitos) se forem voltar para a página.
- [ ] **Domínio e hospedagem.** Não definidos. A página é estática: roda em Vercel, GitHub Pages ou Netlify sem configuração.
- [ ] **Imagem de prévia do link** (`og:image`), que precisa do endereço final. Há um comentário no `<head>` do `index.html` mostrando onde colocar. Sem ela, o link no Instagram e no WhatsApp aparece sem foto.
- [ ] **Prova social:** não há depoimentos, clientes ou casos, porque nenhum foi fornecido. Quando existirem, ganham uma seção.
- [ ] **Medir cliques** nos botões de WhatsApp (para saber qual frente converte). Hoje não há análise instalada.

## 11. Como pedir e fazer mudanças

**Ao pedir uma mudança ao Claude,** diga o que quer mudar e, se puder, o porquê. Exemplos bem formulados:
- "Troque a foto do hero pela `gabi-amora`" (existe em `assets/img/`).
- "Coloque o número 5516... no WhatsApp."
- "Quero menu completo no celular."
- "Adicione uma seção de depoimentos; aqui estão os textos."
- "Tire o selo giratório."

**Regras que valem para qualquer mudança** (decisões do Richard):
- Nada de cálculo de custo, margem ou lucro, nem promessa de resultado financeiro.
- Consultoria, treinamento e aulas particulares mantêm peso equivalente; a consultoria vem primeiro.
- O texto fica profissional. Gatos e Bloody Mary são só referência visual, nunca entram no texto.
- Nada inventado: sem números, depoimentos, preços, prazos ou referências que não tenham sido fornecidos.
- Texto sempre em português.
- Não usar cor clara de vermelho como fundo de texto (contraste).

**Para publicar:** os arquivos já estão prontos. Qualquer hospedagem estática serve; basta apontar para a raiz do repositório e usar `index.html` como página inicial. `GabiSite/` não é carregado pela página, mas vai junto no repositório (~37 MB); se a hospedagem cobrar por tamanho, publique só `index.html`, `styles.css`, `main.js` e `assets/`.

## 12. Créditos e licenças

Fotos e vídeos: material enviado pela Gabi/Richard (`GabiSite/`). Fontes: Bricolage Grotesque e DM Sans, ambas sob a licença SIL Open Font License, via Google Fonts. Desenvolvido com o Claude (Anthropic).
