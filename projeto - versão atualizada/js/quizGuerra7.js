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
  pergunta     : "Por que o período histórico chamado “Guerra Fria” ganhou este nome?",
  alternativaA : "As disputas do mundo bipolar passavam por fortalecer internamente o modelo político sem importar com a opinião exterior.",
  alternativaB : "O arsenal de ambas as potências não era suficiente para garantir a destruição do adversário.",
  alternativaC : "Não houve enfrentamentos de fogo direto entre os EUA e a URSS, apenas em zonas onde os dois países disputavam sua influência.",
  correta      : "Não houve enfrentamentos de fogo direto entre os EUA e a URSS, apenas em zonas onde os dois países disputavam sua influência.",
}

const q2 = {
  numQuestao   : 2,
  pergunta     : "Duas organizações militares foram fundadas pela União Soviética e os Estados Unidos com o objetivo de garantir alianças dentro da lógica bipolar que o mundo vivia durante a Guerra Fria:",
  alternativaA : "Pacto de Varsóvia e OTAN.",
  alternativaB : "ONU e OTAN.",
  alternativaC : "Pacto de Varsóvia e ONU.",
  correta      : "Pacto de Varsóvia e OTAN.",
}

const q3 = {
  numQuestao   : 3,
  pergunta     : "A Corrida Espacial foi um dos acontecimentos mais espetaculares da Humanidade, no entanto, o objetivo não era apenas explorar o universo.  Assinale a alternativa que expressa quais eram outros propósitos da Corrida Espacial:",
  alternativaA : "Desenvolver mísseis intercontinentais e construir um escudo que protegesse cada nação dos mísseis do país inimigo.",
  alternativaB : "Criar uma central de inteligência e espionagem que permitisse conectar com todos os aliados e combater os inimigos das duas potências.",
  alternativaC : "Canalizar o patriotismo e desviar a atenção dos cidadãos para os problemas que decorriam da Guerra Fria.",
  correta      : "Desenvolver mísseis intercontinentais e construir um escudo que protegesse cada nação dos mísseis do país inimigo.",
}

const q4 = {
  numQuestao   : 4,
  pergunta     : "Quais fatos são considerados como fim da Guerra Fria?",
  alternativaA : "Anúncio de eliminação de armas nucleares de médio alcance, em 1987, entre EUA e URSS e o fim da Guerra do Afeganistão, em 1992.",
  alternativaB : "Queda do Muro de Berlim, em 1989 e fim da União Soviética, em 1991.",
  alternativaC : "O fim da União Soviética, em 1991 e o final da ditadura de Pinochet, no Chile, em 1993.",
  correta      : "Queda do Muro de Berlim, em 1989 e fim da União Soviética, em 1991.",
}

const q5 = {
  numQuestao   : 5,
  pergunta     : "O Muro de Berlim dividiu a cidade em duas partes durante 28 anos, separando famílias inteiras e, em última análise, um país. Para o mundo, ele se transformou num símbolo da Guerra Fria.  Escolha a alternativa que explica a razão do Muro de Berlim ser um símbolo da Guerra Fria:",
  alternativaA : "Como ocorreram milhares de fuzilamentos nas suas paredes por ambos os governos, o Muro acabou simbolizando a divisão mundial.",
  alternativaB : "Sem poder conter a fuga de pessoas entre as duas cidades, o governo de Berlim Ocidental, capitalista, decide construir uma barreira física na cidade berlinesa.",
  alternativaC : "A construção, realizada com o apoio dos soviéticos, separava não só a cidade, como duas maneiram bem distintas de pensar a política e a economia.",
  correta      : "A construção, realizada com o apoio dos soviéticos, separava não só a cidade, como duas maneiram bem distintas de pensar a política e a economia.",
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
