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
  pergunta     : "Entre 1961 e 1973, um total de 57.939 norte-americanos morreram no conflito da Indochina, a mais longa e custosa guerra externa na história dos Estados Unidos. A Força Aérea dos EUA jogou sobre o Vietnã uma tonelagem de bombas, mais de três vezes superior ao que foi jogado na Alemanha durante a Segunda Guerra. Considerando-se a Guerra do Vietnã, é correto afirmar que:",
  alternativaA : "O conflito foi motivado pela intenção do governo norte-americano de impedir a expansão do comunismo no Sudeste asiático.",
  alternativaB : "Os norte-americanos deram apoio decidido às ações de seu governo no Vietnã e manifestaram insatisfação quando suas tropas foram retiradas de lá.",
  alternativaC : "Os vietnamitas que enfrentavam o exército dos EUA lutavam em condições difíceis, pois não dispunham de apoio externo.",
  correta      : "O conflito foi motivado pela intenção do governo norte-americano de impedir a expansão do comunismo no Sudeste asiático.",
}

const q2 = {
  numQuestao   : 2,
  pergunta     : "Marque a alternativa que indica um dos objetivos da Guerra do Vietnã:",
  alternativaA : "A extinção das duas ideologias que comandaram a guerra.",
  alternativaB : "A separação do país.",
  alternativaC : "A unificação do país.",
  correta      : "A unificação do país.",
}

const q3 = {
  numQuestao   : 3,
  pergunta     : "A Guerra do Vietnã ocorreu no período em que o mundo vivia uma bipolarização entre duas ideologias:",
  alternativaA : "Capitalismo X Comunismo.",
  alternativaB : "Socialismo X Islamismo.",
  alternativaC : "Capitalismo X Anarquismo.",
  correta      : "Capitalismo X Comunismo.",
}

const q4 = {
  numQuestao   : 4,
  pergunta     : "Qual era o principal objetivo dos Estados Unidos?",
  alternativaA : "Impedir que o cristianismo se espalhasse pelo mundo.",
  alternativaB : "Impedir que o comunismo se espalhasse pelo mundo.",
  alternativaC : "Impedir que o anarquismo se espalhasse pelo mundo.",
  correta      : "Impedir que o comunismo se espalhasse pelo mundo.",
}

const q5 = {
  numQuestao   : 5,
  pergunta     : "Os Estados Unidos apoiavam o ________________ e a União Soviética apoiava o _______________.",
  alternativaA : "Vietnã do Norte / Vietnã do Sul",
  alternativaB : "Vietnã do Sul / Vietnã Central",
  alternativaC : "Vietnã do Sul / Vietnã do Norte",
  correta      : "Vietnã do Sul / Vietnã do Norte",
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
