# Quiz Estilos de Aprendizagem (VAKD)

Um quiz simples para identificar seu canal predominante de aprendizagem:
**Visual (V), Auditivo (A), Cinestésico (K) ou Auditivo Digital (D)**.

## Rodando localmente
Basta abrir `index.html` no navegador (duplo clique).
Não há dependências de build.

## Tecnologias
- HTML + CSS + JS vanilla
- [Chart.js](https://www.chartjs.org/) via CDN
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) para baixar PDF do resultado

## Estrutura
```
vakd-quiz/
  index.html
  styles.css
  app.js
  README.md
```

## Recursos
- Barra de progresso e navegação entre questões
- 12 perguntas equilibradas (mapeadas para V, A, K e D)
- Gráfico radar com pontuações
- Exportar resultado: JSON e PDF
- Layout moderno, responsivo e acessível
