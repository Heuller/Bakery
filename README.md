# Gabriela Salomão · Um Gole de Gabi

Landing page de uma página só, em português, mobile primeiro (o tráfego vem do Instagram).

**Foco:** consultoria de cozinha para restaurantes e cafeterias, treinamento de brigadas e aulas particulares de panificação e confeitaria. Sem e-commerce e sem conteúdo de custo, margem ou lucro.

## Estrutura

```
index.html        página (gerada, HTML semântico, sem build)
styles.css        design tokens, layout e movimento
main.js           menu, abas, vídeos, seletor de WhatsApp (JavaScript puro)
assets/img/       35 fotos em WebP (originais em GabiSite/)
assets/video/     2 vídeos 540x960 sem áudio + pôsteres
GabiSite/         originais enviados pela Gabi (não são servidos pela página)
```

## Para ativar os botões de WhatsApp

Em `main.js`, preencha `WHATSAPP_NUMBER` com DDI + DDD, só dígitos (ex.: `"5516999999999"`).
Enquanto estiver vazio, o link abre o WhatsApp pedindo para escolher o contato.

## Rodar localmente

Basta abrir `index.html` no navegador. Para servir: `python3 -m http.server`.

## Decisões de design

- Paleta fixa: Creme Farinha `#FAF6F0`, Manteiga `#F2EAE0`, Cacau `#1F1714`, Âmbar `#C86D28`, Pistache `#3A4F39`, Centeio `#6E6259`.
- Fraunces (títulos, eixos SOFT e WONK), Plus Jakarta Sans (corpo), JetBrains Mono (etiquetas), Caveat (um bilhete manuscrito, se usado).
- Movimento ligado à rolagem em CSS (`animation-timeline`), só dentro de `@supports`; View Transitions na troca de abas; tudo respeita `prefers-reduced-motion`.
- Texto âmbar pequeno usa `#A5551A` (contraste ~5:1 sobre o creme); botões âmbar levam texto cacau.
