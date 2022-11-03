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
  pergunta     : "Muitas políticas implementadas durante a Era Napoleônica destruíram de vez as bases de sustentação do antigo regime absolutista. Entre essas políticas, estava:",
  alternativaA : "O Código Civil Napoleônico",
  alternativaB : "A Lei da Guilhotina",
  alternativaC : "A Magna Carta",
  correta      : "O Código Civil Napoleônico",
}

const q2 = {
  numQuestao   : 2,
  pergunta     : "Após participar da conspiração que deu início à sua ascensão ao poder em 1799, Napoleão passou a dividir, provisoriamente, o poder central da França com mais duas pessoas até o ano de 1804. Esse período ficou conhecido como Consulado. Os outros dois cônsules que governaram junto a Napoleão foram:",
  alternativaA : "Maximilien Robespierre e Antoine de Saint-Just",
  alternativaB : "o abade Sieyès e Pierre-Roger Ducos",
  alternativaC : "Luís XVI e Guillaume Lellement",
  correta      : "o abade Sieyès e Pierre-Roger Ducos",
}

const q3 = {
  numQuestao   : 3,
  pergunta     : "Em 1804, Napoleão Bonaparte instituiu o Código Civil Napoleônico, que garantia, por lei, os valores da burguesia. Entre esses valores estavam:",
  alternativaA : "as liberdades individuais, o Estado laico, a proteção do direito de propriedade e a abolição da servidão;",
  alternativaB : "a intervenção do Estado na economia, a liberdade de crença religiosa e a proteção do direito de propriedade.",
  alternativaC : "as liberdades individuais, a garantia da autoridade da Igreja sobre as diretrizes do Estado e a manutenção dos privilégios aristocráticos.",
  correta      : "as liberdades individuais, o Estado laico, a proteção do direito de propriedade e a abolição da servidão;",
}

const q4 = {
  numQuestao   : 4,
  pergunta     : "Qual foi o principal motivo que obrigou Napoleão Bonaparte a empreender uma guerra contra o Império Russo em 1812?",
  alternativaA : "O fato de o Império Russo ter descumprido o Bloqueio Continental.",
  alternativaB : "A tentativa do Império Russo de se apropriar das províncias italianas do Império Francês.",
  alternativaC : "A formação da aliança comercial entre o Império Russo e o Império Português.",
  correta      : "O fato de o Império Russo ter descumprido o Bloqueio Continental.",
}

const q5 = {
  numQuestao   : 5,
  pergunta     : "A expansão napoleônica no século XIX influenciou decisivamente vários acontecimentos históricos no período. Entre esses acontecimentos, podemos destacar:",
  alternativaA : "A Independência do Brasil. Com a ocupação de Portugal pelas tropas napoleônicas, houve um enfraquecimento da monarquia portuguesa que culminou com as lutas pela independência e o rompimento de D. Pedro I com Portugal.",
  alternativaB : "A Independência das colônias espanholas. Em 1808, a Espanha foi ocupada pelas tropas napoleônicas ao mesmo tempo em que se difundiam os ideais liberais da Revolução Francesa que inspirou as lutas pela independência.",
  alternativaC : "O Congresso de Viena. A França de Napoleão assinou um pacto com a Áustria, Inglaterra e Rússia cujo objetivo maior era estabelecer uma trégua e reorganizar todo o mapa europeu.",
  correta      : "A Independência das colônias espanholas. Em 1808, a Espanha foi ocupada pelas tropas napoleônicas ao mesmo tempo em que se difundiam os ideais liberais da Revolução Francesa que inspirou as lutas pela independência.",
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
