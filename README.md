# viral — landing page

Site institucional da **viral**, an AI corporation. HTML/CSS/JS puro, sem build — pronto para GitHub Pages.

```
index.html        página
styles.css        estilos (paleta e tipografia do guia da marca)
main.js           animações de scroll e prompt
assets/logo.svg   símbolo em Roxo Viral
assets/favicon.svg
```

## Rodar localmente

```sh
python3 -m http.server 8000   # http://localhost:8000
```

## Publicar no GitHub Pages

1. Crie o repositório no GitHub e faça push da branch `main`.
2. Em **Settings → Pages**, escolha *Deploy from a branch* → `main` / `/ (root)`.
3. (Opcional) Para usar `viral.top`, crie um arquivo `CNAME` com `viral.top` e aponte o DNS para o GitHub Pages.

## Marca

| Cor         | Hex       |
|-------------|-----------|
| Roxo Viral  | `#BE0078` |
| Preto Viral | `#000000` |
| Cinza Viral | `#848688` |

Texto corrido em Source Sans 3 (substituto aberto da Myriad Pro); o logotipo "viral" é desenhado em SVG seguindo a Squared Display.

Sócios: [Julio Lima](https://github.com/julioflima) · [Melisse Lima](https://github.com/MelisseLima)
