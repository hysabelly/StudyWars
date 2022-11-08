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
  pergunta     : "Antes mesmo que a Segunda Guerra Mundial se iniciasse, japoneses e soviéticos estiveram em batalha durante os meses de maio e agosto de 1939, no que ficou conhecido como Batalha de Khalkhin Gol. Uma das consequências dessa batalha foi: ",
  alternativaA : "ampliou os expurgos promovidos no Exército Vermelho por Stalin.",
  alternativaB : "fortaleceu a corrente no governo japonês que defendia um ataque contra os EUA no sul do Pacífico.",
  alternativaC : "incentivou o deslocamento das indústrias soviéticas para o oeste, na fronteira com a Polônia.",
  correta      : "fortaleceu a corrente no governo japonês que defendia um ataque contra os EUA no sul do Pacífico.",
}

const q2 = {
  numQuestao   : 2,
  pergunta     : "Após a guerra, várias nações se reuniram em 24 de outubro de 1945, em Nova York, para celebrar a inauguração Organização das Nações Unidas – ONU. Assinale a alternativa que melhor explica esta instituição:",
  alternativaA : "Um fórum de discussão a fim de minimizar a distância entre o mundo capitalista e o mundo comunista durante a Guerra Fria.",
  alternativaB : "Uma aliança política entre os países vencedores com o objetivo de assegurar que o fascismo e seus regimes correlatos não voltariam mais a existir.",
  alternativaC : "Uma força internacional acima das nações, com o propósito de defender a paz mundial, os direitos do homem e a igualdade dos povos.",
  correta      : "Uma força internacional acima das nações, com o propósito de defender a paz mundial, os direitos do homem e a igualdade dos povos.",
}

const q3 = {
  numQuestao   : 3,
  pergunta     : "A Segunda Grande Guerra (1939-1945) adquiriu caráter mundial a partir de 7 de dezembro de 1941, quando:",
  alternativaA : "os russos tomaram a iniciativa de anexar os Estados Bálticos.",
  alternativaB : "os japoneses atacaram a base norte-americana de Pearl Harbor",
  alternativaC : "os franceses, por determinação do marechal Pétain, ocuparam o Sudeste da Ásia;",
  correta      : "os japoneses atacaram a base norte-americana de Pearl Harbor",
}

const q4 = {
  numQuestao   : 4,
  pergunta     : "O dia 9 de agosto de 1945 ficou marcado na história da Segunda Guerra Mundial como o dia em que os Estados Unidos lançaram sua segunda bomba atômica sobre o Japão, dessa vez contra a cidade de Nagasaki. Esse acontecimento foi determinante para a rendição japonesa, mas outro acontecimento também foi crucial para que o Japão se rendesse. Estamos falando:",
  alternativaA : "da invasão da Manchúria.",
  alternativaB : "o anúncio do presidente americano de que uma terceira bomba seria lançada.",
  alternativaC : "o incêndio de Tóquio.",
  correta      : "da invasão da Manchúria.",
}

const q5 = {
  numQuestao   : 5,
  pergunta     : "Em relação à Segunda Guerra Mundial é correto afirmar que:",
  alternativaA : "Hitler empreendeu uma implacável perseguição aos judeus, que resultou na morte de seis milhões de pessoas.",
  alternativaB : "os norte-americanos permaneceram neutros na guerra até 1941, quando bombardearam Hiroshima e Nagasaki.",
  alternativaC : "a Crise de 1929 nada teve a ver com a Segunda Guerra Mundial.",
  correta      : "Hitler empreendeu uma implacável perseguição aos judeus, que resultou na morte de seis milhões de pessoas.",
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
