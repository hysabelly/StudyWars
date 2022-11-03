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
  pergunta     : "Assinale a opção que contém um dos objetivos de Simón Bolívar:",
  alternativaA : "Emancipar a América Latina como uma associação comercial unitária, que, posteriormente, daria a origem à ALALC.",
  alternativaB : "Desenvolver a solidariedade continental em torno da hegemonia do Canadá, estabelecendo um intercâmbio direto deste com todos os países latino-americanos.",
  alternativaC : "Criar uma Confederação dos Estados Americanos face à possível contraofensiva da Europa apoiada pela Santa Aliança.",
  correta      : "Criar uma Confederação dos Estados Americanos face à possível contraofensiva da Europa apoiada pela Santa Aliança.",
}

const q2 = {
  numQuestao   : 2,
  pergunta     : "Uma das diferenças essenciais entre a Independência da América Espanhola e a Independência Brasileira está no:",
  alternativaA : "modelo político adotado, haja vista que na América Hispânica predominou o modelo republicano, enquanto no Brasil adotou-se o modelo monárquico.",
  alternativaB : "modelo de guerra adotado, já que no Brasil a guerrilha foi o modelo de combate adotado no processo de independência.",
  alternativaC : "papel do exército, já que, no caso brasileiro, o exército precisou impedir que Portugal retomasse o Brasil como sua colônia. ",
  correta      : "modelo político adotado, haja vista que na América Hispânica predominou o modelo republicano, enquanto no Brasil adotou-se o modelo monárquico.",
}

const q3 = {
  numQuestao   : 3,
  pergunta     : "Apesar de utilizarem um discurso de libertação dos povos americanos da dominação espanhola, indicando que haveria liberdade e melhoria nas condições sociais, os líderes das independências das colônias hispano-americanas tinham, na verdade, interesses na manutenção de uma estrutura de poder político e econômico que beneficiava apenas as elites coloniais. Qual das alternativas abaixo indica corretamente o nome pelo qual ficaram conhecidas estas elites?",
  alternativaA : "Chapetones.",
  alternativaB : "Criollos.",
  alternativaC : "Burgueses.",
  correta      : "Criollos.",
}

const q4 = {
  numQuestao   : 4,
  pergunta     : "A independência das colônias espanholas da América deveu-se a diversos fatores. Assinale a opção na qual todos os fatores relacionados contribuíram para essa independência.",
  alternativaA : "Política mercantilista da Espanha; influência da independência brasileira; interesse dos Estados Unidos no comércio das colônias espanholas.",
  alternativaB : "Monopólio comercial em benefício da metrópole; desigualdade de direitos entre os criollos, nascidos nas colônias, e os chapetones, nascidos na Espanha; enfraquecimento da Espanha pelas guerras napoleônicas.",
  alternativaC : "Interesse econômico da Inglaterra na independência das colônias; política de suspensão das restrições de importações, seguida pelo governo de José Bonaparte; aliança entre chapetones, colonos nascidos na Espanha, e criollos, nascidos nas colônias para promover a independência.",
  correta      : "Monopólio comercial em benefício da metrópole; desigualdade de direitos entre os criollos, nascidos nas colônias, e os chapetones, nascidos na Espanha; enfraquecimento da Espanha pelas guerras napoleônicas.",
}

const q5 = {
  numQuestao   : 5,
  pergunta     : "Na primeira metade do século XIX, diversos movimentos pela independência eclodiram nas colônias espanholas da América, marcando a luta de seus povos contra o domínio da metrópole Ibérica. Marque a opção que se refere, corretamente, a um desses movimentos:",
  alternativaA : "Na Argentina, os comerciantes portenhos aliados ao líder militar Manuel Belgrano extinguiram os Cabildos e as Juntas Governativas, controladas por representantes da Coroa Espanhola.",
  alternativaB : "No México, a elite 'criolla', que ocupava os altos cargos da administração colonial, aliada aos espanhóis da metrópole, proclamou Fernando VII da Espanha como Imperador do México, sobrevivendo a monarquia mexicana até o advento da Revolução Zapatista.",
  alternativaC : "No Uruguai, a conquista da independência não encerrou o poder personalista dos caudilhos, mas fortaleceu os segmentos burgueses atuantes em Montevidéu.",
  correta      : "No Uruguai, a conquista da independência não encerrou o poder personalista dos caudilhos, mas fortaleceu os segmentos burgueses atuantes em Montevidéu.",
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
