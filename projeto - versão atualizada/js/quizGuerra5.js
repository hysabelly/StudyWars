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
  pergunta     : "Ao final da Primeira Guerra Mundial, instalou-se na Alemanha uma Assembleia Nacional que se reuniu em Weimar para preparar uma nova Constituição para o país. Nascia ali um novo Estado, chamado de:",
  alternativaA : "Sacro Império Romano-Germânico.",
  alternativaB : "República de Weimar.",
  alternativaC : "República Democrática da Alemanha.",
  correta      : "República de Weimar.",
}

const q2 = {
  numQuestao   : 2,
  pergunta     : "Dos fenômenos abaixo citados, assinale aquele que é considerado como o causador da Primeira Guerra Mundial:",
  alternativaA : "O assassinato da família imperial russa.",
  alternativaB : "O descumprimento do Tratado de Versalhes por parte da Alemanha.",
  alternativaC : "O assassinato do arquiduque Francisco Ferdinando, herdeiro do trono austríaco.",
  correta      : "O assassinato do arquiduque Francisco Ferdinando, herdeiro do trono austríaco.",
}

const q3 = {
  numQuestao   : 3,
  pergunta     : "O Tratado de Versalhes foi um documento elaborado na Conferência de Paz de Paris e determinou as imposições dos países vencedores da Primeira Guerra Mundial contra os alemães, os derrotados. Quais dos países abaixo NÃO ENVIOU delegações para essa conferência?",
  alternativaA : "Brasil.",
  alternativaB : "Nicarágua.",
  alternativaC : "Alemanha.",
  correta      : "Alemanha.",
}

const q4 = {
  numQuestao   : 4,
  pergunta     : "Qual país fazia parte da Tríplice Aliança, mas se recusou a participar da guerra por esse grupo quando o conflito se iniciou em 1914?",
  alternativaA : "Itália.",
  alternativaB : "Bulgária.",
  alternativaC : "Rússia.",
  correta      : "Itália.",
}

const q5 = {
  numQuestao   : 5,
  pergunta     : "Qual motivo serviu como justificativa para a entrada dos Estados Unidos na Primeira Guerra Mundial?",
  alternativaA : "O aprisionamento de uma delegação norte-americana na França.",
  alternativaB : "Hostilidade da Alemanha contra os Estados Unidos.",
  alternativaC : "Atentados terroristas realizados nos Estados Unidos a mando das Potências Centrais.",
  correta      : "Hostilidade da Alemanha contra os Estados Unidos.",
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
