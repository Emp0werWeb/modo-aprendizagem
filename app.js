// ---------------------------
// DATA
// ---------------------------
const TYPES = {
  V: { name:"Visual", color:"#60a5fa",
       words:["Imagens","Mapas mentais","Cores","Diagrama","Vídeos"],
       headline:"Você aprende melhor vendo.",
       tips:[
         "Use mapas mentais e resumos visuais.",
         "Destaque com cores diferentes (legendas simples).",
         "Transforme textos em fluxogramas e quadros.",
         "Assista a vídeos curtos para consolidar."
       ]},
  A: { name:"Auditivo", color:"#f59e0b",
       words:["Explicações","Podcasts","Debates","Aulas faladas","Leituras em voz alta"],
       headline:"Você aprende melhor ouvindo.",
       tips:[
         "Explique o conteúdo para outra pessoa (ou para si, em voz alta).",
         "Grave áudios curtos com resumos.",
         "Participe de grupos de estudo e debates.",
         "Prefira professores que 'pensam em voz alta'."
       ]},
  K: { name:"Cinestésico", color:"#10b981",
       words:["Prática","Exemplos","Prototipagem","Experimentação","Movimento"],
       headline:"Você aprende melhor praticando.",
       tips:[
         "Transforme a teoria em pequenos projetos práticos.",
         "Faça pausas ativas e alterne postura/locais.",
         "Role-play, simulações e estudos de caso.",
         "Construa quadros com post-its para manipular."
       ]},
  D: { name:"Auditivo Digital", color:"#a78bfa",
       words:["Lógica","Esquemas","Listas","Anotações","Modelos conceituais"],
       headline:"Você aprende melhor estruturando e nomeando.",
       tips:[
         "Escreva definições e checklists do conteúdo.",
         "Crie resumos estruturados (tópicos → subtópicos).",
         "Use analogias e fórmulas para organizar o pensamento.",
         "Ensine por escrito (tutorial curto)."
       ]},
};

// ---------------------------
// QUESTIONS
// ---------------------------
const QUESTIONS = [
  { title:"Quando você precisa lembrar de algo, você geralmente…",
    options:[
      {text:"Imagino a cena ou a palavra escrita.", type:"V"},
      {text:"Repito em voz alta ou lembro do som.", type:"A"},
      {text:"Associo a um gesto ou sensação corporal.", type:"K"},
      {text:"Escrevo ou estruturo mentalmente em tópicos.", type:"D"},
    ]},
  { title:"Ao assistir uma aula, você prefere…",
    options:[
      {text:"Ver slides, diagramas e exemplos visuais.", type:"V"},
      {text:"Ouvir a explicação e fazer perguntas.", type:"A"},
      {text:"Participar de atividades práticas.", type:"K"},
      {text:"Ler material e fazer anotações detalhadas.", type:"D"},
    ]},
  { title:"Para se orientar em um lugar novo, você…",
    options:[
      {text:"Olha um mapa ou GPS visual.", type:"V"},
      {text:"Pede informações e memoriza instruções faladas.", type:"A"},
      {text:"Vai explorando e aprendendo pelo caminho.", type:"K"},
      {text:"Lê descrições escritas passo a passo.", type:"D"},
    ]},
  { title:"Ao ler um livro de histórias, você…",
    options:[
      {text:"Vê as cenas como um filme na cabeça.", type:"V"},
      {text:"Ouve as vozes dos personagens.", type:"A"},
      {text:"Sente as emoções e os movimentos da cena.", type:"K"},
      {text:"Foca nas ideias e mensagens por trás do texto.", type:"D"},
    ]},
  { title:"Quando estuda para uma prova, tende a…",
    options:[
      {text:"Fazer resumos com esquemas/cores.", type:"V"},
      {text:"Explicar o conteúdo em voz alta.", type:"A"},
      {text:"Resolver exercícios práticos logo.", type:"K"},
      {text:"Criar listas e mapas conceituais lógicos.", type:"D"},
    ]},
  { title:"Em conversas, você costuma dizer…",
    options:[
      {text:"'Eu vejo o que você quer dizer.'", type:"V"},
      {text:"'Eu ouço/entendo o que você falou.'", type:"A"},
      {text:"'Eu sinto que é assim.'", type:"K"},
      {text:"'Faz sentido; a lógica é essa.'", type:"D"},
    ]},
  { title:"Ao aprender uma ferramenta nova, você prefere…",
    options:[
      {text:"Assistir a um tutorial em vídeo.", type:"V"},
      {text:"Ouvir uma explicação passo a passo.", type:"A"},
      {text:"Sair clicando e experimentar.", type:"K"},
      {text:"Ler a documentação e anotar atalhos.", type:"D"},
    ]},
  { title:"Para manter a atenção, ajuda mais…",
    options:[
      {text:"Infográficos/quadros com visão geral.", type:"V"},
      {text:"A aula/conteúdo em formato de áudio.", type:"A"},
      {text:"Mover-se, mudar de ambiente ou interagir.", type:"K"},
      {text:"Estruturar tópicos e objetivos de estudo.", type:"D"},
    ]},
  { title:"Ao resolver um problema, você…",
    options:[
      {text:"Desenha o cenário/diagrama.", type:"V"},
      {text:"Conversa sobre o problema em voz alta.", type:"A"},
      {text:"Testa hipóteses rapidamente.", type:"K"},
      {text:"Decompõe em etapas lógicas.", type:"D"},
    ]},
  { title:"Em apresentações, você valoriza mais…",
    options:[
      {text:"Slides claros e bem diagramados.", type:"V"},
      {text:"Oratória envolvente do apresentador.", type:"A"},
      {text:"Demonstrações ao vivo.", type:"K"},
      {text:"Sumários objetivos e dados bem organizados.", type:"D"},
    ]},
  { title:"Quando está distraído, você tende a…",
    options:[
      {text:"Rabiscar ou olhar para algo interessante.", type:"V"},
      {text:"Bater o pé/caneta ao ritmo de sons.", type:"A"},
      {text:"Mexer o corpo, levantar, caminhar.", type:"K"},
      {text:"Anotar ideias soltas ou listas.", type:"D"},
    ]},
  { title:"Para consolidar o aprendizado, funciona melhor…",
    options:[
      {text:"Rever mapas/diagramas do conteúdo.", type:"V"},
      {text:"Discutir o tema ou gravar áudios.", type:"A"},
      {text:"Aplicar em um projeto prático.", type:"K"},
      {text:"Escrever um resumo estruturado.", type:"D"},
    ]},
];

// ---------------------------
// STATE
// ---------------------------
let idx = 0;
let answers = Array(QUESTIONS.length).fill(null);
let chart;

// ---------------------------
// DOM SHORTCUTS
// ---------------------------
const $ = (s)=>document.querySelector(s);
const questionContainer = $("#questionContainer");
const progressText = $("#progressText");
const progressBar = $("#progressBar");
const quiz = $("#quiz");
const intro = $("#intro");
const results = $("#results");

// ---------------------------
// HELPERS
// ---------------------------
function renderQuestion(){
  const q = QUESTIONS[idx];
  progressText.textContent = `Questão ${idx+1} / ${QUESTIONS.length}`;
  const percent = Math.round(((idx) / (QUESTIONS.length-1)) * 100);
  progressBar.style.width = `${percent}%`;

  const selected = answers[idx];
  const opts = q.options.map((opt,i)=>{
    const checked = selected === opt.type ? "checked" : "";
    const badge = `<span class="badge">Opção ${i+1}</span>`;
    return `<label class="option">
      <input type="radio" name="q${idx}" value="${opt.type}" ${checked} />
      <div>
        ${badge}
        <div>${opt.text}</div>
      </div>
    </label>`;
  }).join("");

  questionContainer.innerHTML = `<h3>${q.title}</h3><div class="options">${opts}</div>`;

  questionContainer.querySelectorAll("input[type=radio]").forEach(inp=>{
    inp.addEventListener("change", (e)=>{
      answers[idx] = e.target.value;
      updateNav();
    });
  });
}

function updateNav(){
  $("#btnPrev").disabled = idx===0;
  $("#btnNext").classList.toggle("hidden", idx===QUESTIONS.length-1);
  $("#btnFinish").classList.toggle("hidden", idx!==QUESTIONS.length-1);
}

function computeScores(){
  const scores = {V:0, A:0, K:0, D:0};
  answers.forEach(v=>{ if(v) scores[v]+=1; });
  return scores;
}

function sortTypes(scores){
  return Object.entries(scores)
    .sort((a,b)=> b[1]-a[1] || a[0].localeCompare(b[0]))
    .map(([k,v])=>({type:k, score:v}));
}

function renderDescriptions(order){
  const wrap = $("#descriptions");
  wrap.innerHTML = order.map(({type})=>{
    const t = TYPES[type];
    const badges = t.words.map(w=>`<span class="badge">${w}</span>`).join("");
    const tips = t.tips.map(x=>`<li>${x}</li>`).join("");
    return `<div class="desc-card">
      <h4>${t.name}</h4>
      <div class="desc-meta">${t.headline}</div>
      <div class="badges">${badges}</div>
      <ul class="bullets" style="margin-top:8px;">${tips}</ul>
    </div>`;
  }).join("");
}

function renderResults(){
  const scores = computeScores();
  const ordered = sortTypes(scores);
  const [top, second] = ordered;

  const totalAnswered = answers.filter(Boolean).length;
  $("#summary").innerHTML = `Você respondeu <strong>${totalAnswered}/${QUESTIONS.length}</strong> questões.
  Seu canal predominante é <strong>${TYPES[top.type].name}</strong>${second && second.score>0 ? `, seguido de <strong>${TYPES[second.type].name}</strong>.` : "."}`;

  if(chart){ chart.destroy(); }
  const ctx = document.getElementById("chart");
  chart = new Chart(ctx, {
    type:"radar",
    data:{
      labels: Object.values(TYPES).map(t=>t.name),
      datasets:[{
        label:"Pontuação",
        data: Object.keys(TYPES).map(k=>scores[k]),
        fill:true,
        borderWidth:2,
        pointRadius:3
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      scales:{ r:{ suggestedMin:0, suggestedMax: Math.max(4, Math.ceil(answers.length/2)) } },
      plugins:{ legend:{ display:false } }
    }
  });

  const ranking = $("#ranking");
  ranking.innerHTML = ordered.map(({type,score})=>{
    const t = TYPES[type];
    return `<li><strong>${t.name}</strong> — ${score} ponto(s)</li>`;
  }).join("");

  renderDescriptions(ordered);

  intro.classList.add("hidden");
  quiz.classList.add("hidden");
  results.classList.remove("hidden");
  results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showQuiz(){
  intro.classList.add("hidden");
  results.classList.add("hidden");
  quiz.classList.remove("hidden");
  renderQuestion();
  updateNav();
}

function resetData(){
  idx = 0;
  answers = Array(QUESTIONS.length).fill(null);
  if(chart){ chart.destroy(); chart=null; }
  progressBar.style.width = `0%`;
  progressText.textContent = `Questão 1 / ${QUESTIONS.length}`;
  questionContainer
