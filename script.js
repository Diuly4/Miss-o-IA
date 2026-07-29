onst caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está navegando na internet e se depara com uma nova ferramenta de IA que promete revolucionar a forma como criamos conteúdo, desde textos a imagens e músicas. Qual a sua primeira reação?",
        alternativas: [
            {
                texto: "Mal posso esperar para experimentar e ver o que consigo criar!",
                afirmacao: "Sua curiosidade o levou a explorar as capacidades da IA em diversas áreas criativas. "
            },
            {
                texto: "Parece interessante, mas me pergunto sobre a originalidade e o impacto nos criadores humanos.",
                afirmacao: "Você se tornou um defensor da originalidade humana, buscando equilibrar a inovação da IA com a valorização do talento artístico."
            }
        ]
    },
    {
        enunciado: "Você precisa organizar uma viagem complexa com múltiplos destinos e atividades, e um assistente de IA se oferece para planejar tudo, otimizando rotas e sugerindo experiências personalizadas. Você aceita a ajuda?",
        alternativas: [
            {
                texto: "Sim, confio na capacidade da IA para encontrar as melhores opções e economizar meu tempo.",
                afirmacao: "Você integrou a IA em sua rotina para otimizar tarefas e decisões, ganhando mais tempo para o que realmente importa."
            },
            {
                texto: "Prefiro planejar eu mesmo, para ter controle total e garantir que tudo saia do meu jeito.",
                afirmacao: "Você valoriza a autonomia e o toque pessoal em suas decisões, usando a IA apenas como uma ferramenta de consulta, não de substituição."
            }
        ]
    },
    {
        enunciado: "Em um debate sobre o futuro do trabalho, a discussão se volta para a automação impulsionada pela IA. Qual a sua visão predominante?",
        alternativas: [
            {
                texto: "A IA vai eliminar muitos empregos, mas também criará novas funções que exigirão novas habilidades.",
                afirmacao: "Você se adaptou rapidamente às mudanças do mercado, investindo em novas habilidades para se manter relevante na era da IA."
            },
            {
                texto: "A IA deve ser regulamentada para proteger os trabalhadores e garantir uma transição justa.",
                afirmacao: "Você se tornou um ativista por políticas que garantam a segurança e o bem-estar dos trabalhadores diante do avanço da automação."
            }
        ]
    },
    {
        enunciado: "Você está desenvolvendo um projeto pessoal e se depara com um problema técnico complexo. Um colega sugere usar uma IA para gerar a solução de código ou o design necessário. O que você faz?",
        alternativas: [
            {
                texto: "Uso a IA para gerar a solução, economizando tempo e aprendendo com o resultado.",
                afirmacao: "Você utilizou a IA como um poderoso acelerador de aprendizado e desenvolvimento, dominando novas ferramentas e técnicas."
            },
            {
                texto: "Tento resolver por conta própria primeiro, usando a IA apenas como último recurso ou para verificar meu trabalho.",
                afirmacao: "Você aprimorou suas habilidades de resolução de problemas, usando a IA como um mentor para refinar suas próprias soluções."
            }
        ]
    },
    {
        enunciado: "Ao final de um curso sobre ética em IA, você é convidado a dar uma palestra sobre o tema. Qual aspecto você decide enfatizar?",
        alternativas: [
            {
                texto: "A importância de desenvolver IAs justas e transparentes, evitando vieses e discriminação.",
                afirmacao: "Você se tornou uma voz influente na defesa da ética e da responsabilidade no desenvolvimento de sistemas de IA."
            },
            {
                texto: "Os desafios de privacidade e segurança de dados que a IA apresenta, e como protegê-los.",
                afirmacao: "Você se dedicou a educar o público sobre os riscos de privacidade da IA, promovendo a conscientização e a segurança digital."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
