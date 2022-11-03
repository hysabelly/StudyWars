
let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
  numQuestao   : 0,
  pergunta     : "Pergunta",
  alternativaA : "Alternativa A",
  alternativaB : "Alternativa B",
  alternativaC : "Alternativa C",
  correta      : "0",
}

const q1 = {
  numQuestao   : 1,
  pergunta     : "A Guerra dos Trinta Anos (1618-1648) foi uma das guerras mais sangrentas da história europeia, e tudo começou com um conflito interno do Sacro Império Germânico entre católicos e protestantes. Sobre esse conflito, assinale a alternativa correta.",
  alternativaA : "A guerra só aconteceu por causa da intervenção da Inglaterra, que apoiou o Sacro Império Germânico contra os protestantes.",
  alternativaB : "Rodolfo II, rei do Sacro Império Germânico, era católico e começou a impor sua fé sobre seus súditos e a perseguir os protestantes, que se uniram para combater as ordens reais.",
  alternativaC : "Em nenhuma das fases que compõem a Guerra dos Trinta Anos, houve algum elemento religioso como motivador dos combates.",
  correta      : "Em nenhuma das fases que compõem a Guerra dos Trinta Anos, houve algum elemento religioso como motivador dos combates.",
}

const q2 = {
  numQuestao   : 2,
  pergunta     : "Logo após a derrota para os franceses, o rei Fernando III assinou a Paz de Vestfália, que trouxe as seguintes consequências para a Europa:",
  alternativaA : "a França anexou territórios pertencentes ao Sacro Império Germânico e à Espanha, tornando-se a nação mais poderosa da Europa.",
  alternativaB : "o Sacro Império Germânico manteve todo o seu território, pois temia-se que uma ação enérgica desencadearia uma nova guerra na Europa.",
  alternativaC : "as questões religiosas passaram a pautar ainda mais os interesses do Estado e suas relações internacionais.",
  correta      : "a França anexou territórios pertencentes ao Sacro Império Germânico e à Espanha, tornando-se a nação mais poderosa da Europa.",
}

const q3 = {
  numQuestao   : 3,
  pergunta     : "Assinale a alternativa correta que aponta uma característica do período francês na Guerra dos Trinta Anos:",
  alternativaA : "Os Habsburgo derrotaram a França e a sua dinastia ocupou o trono francês.",
  alternativaB : "Os franceses, com outros reinos protestantes, derrotaram os Habsburgos e fortaleceram o poder terreno.",
  alternativaC : "Na Guerra dos Trinta Anos, a França optou pela neutralidade e não teve nenhuma participação.",
  correta      : "Os franceses, com outros reinos protestantes, derrotaram os Habsburgos e fortaleceram o poder terreno.",
}

const q4 = {
  numQuestao   : 4,
  pergunta     : "As consequências da Guerra dos Trinta Anos foram:",
  alternativaA : "a independência dos reinos que estavam sob domínio da dinastia dos Habsburgo e a não intervenção religiosa nas decisões políticas.",
  alternativaB : "o fortalecimento dos Habsburgo e a interferência do Vaticano nas disputas pelos reinos europeus.",
  alternativaC : "o direito internacional pautando os acordos externos e a vitória dos Habsburgo sobre os franceses.",
  correta      : "a independência dos reinos que estavam sob domínio da dinastia dos Habsburgo e a não intervenção religiosa nas decisões políticas.",
}

const q5 = {
  numQuestao   : 5,
  pergunta     : "Há seiscentos anos nascia Santa Joana D’Arc em Domrémy (França). Aos 19 anos, tornou-se uma heroína nacional e mártir da religião. A vida de Joana D’Arc está associada à:",
  alternativaA : "Guerra dos Cem Anos, que indica os conflitos armados entre a França e Sacro Império Romano-Germânico resultantes das rivalidades entre católicos e protestantes.",
  alternativaB : "Guerra dos Trinta Anos, ocorrida entre a França e a Espanha durante a dinastia dos Habsburgos. Neste conflito, Joana D’Arc foi queimada na fogueira pela Inquisição espanhola.",
  alternativaC : "Guerra dos Cem Anos, que indica uma série de conflitos armados entre Inglaterra e França entre os séculos XIV e XV.",
  correta      : "Guerra dos Cem Anos, que indica uma série de conflitos armados entre Inglaterra e França entre os séculos XIV e XV.",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
  numero.textContent = nQuestao
  numQuestao.textContent = questoes[nQuestao].numQuestao
  pergunta.textContent   = questoes[nQuestao].pergunta
  a.textContent = questoes[nQuestao].alternativaA
  b.textContent = questoes[nQuestao].alternativaB
  c.textContent = questoes[nQuestao].alternativaC
  a.setAttribute('value', nQuestao+'A')
  b.setAttribute('value', nQuestao+'B')
  c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
  a.classList.add('bloqueado')
  b.classList.add('bloqueado')
  c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
  a.classList.remove('bloqueado')
  b.classList.remove('bloqueado')
  c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

  let numeroDaQuestao = nQuestao.value
  console.log("Questão " + numeroDaQuestao)

  let respostaEscolhida = resposta.textContent
  //console.log("RespU " + respostaEscolhida)

  let certa = questoes[numeroDaQuestao].correta
  //console.log("RespC " + certa)

  if(respostaEscolhida == certa) {
      //console.log("Acertou")
      pontos += 10 // pontos = pontos + 10
  } else {
      //console.log("Errou!")
  }

  // atualizar placar
  placar = pontos
  instrucoes.textContent = "Pontos " + placar

  // bloquear a escolha de opcoes
  bloquearAlternativas()

  setTimeout(function() {
      //respostaEsta.textContent = '...'
      proxima = numeroDaQuestao+1

      if(proxima > totalDeQuestoes) {
          console.log('Fim do Jogo!')
          fimDoJogo()
      } else {
          proximaQuestao(proxima)
      }
  }, 250)
  desbloquearAlternativas()
}

function fimDoJogo() {
  instrucoes.textContent = "Fim de Jogo!"
  numQuestao.textContent = ""

  let pont = ''
  pontos == 0 ? pont = 'ponto' : pont = 'pontos'

  pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

  aviso.textContent = "Você conseguiu " + pontos + " " + pont

  a.textContent = ""
  b.textContent = ""
  c.textContent = ""

  a.setAttribute('value', '0')
  b.setAttribute('value', '0')
  c.setAttribute('value', '0')

  // OCULTAR O ARTICLE DA QUESTAO
  articleQuestoes.style.display = 'none'

}

