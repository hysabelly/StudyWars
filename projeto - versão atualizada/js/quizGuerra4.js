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
  pergunta     : "Sobre a Guerra do Paraguai, assinale a alternativa incorreta:",
  alternativaA : "As tropas da Tríplice Aliança conseguiram anular a ofensiva do exército paraguaio após cinco anos de conflito, sendo que em março de 1870, na Batalha de Cerro Corá, o Paraguai veio a oficializar a sua derrota no conflito.",
  alternativaB : "Criada para enfrentar o forte e bem treinado exército paraguaio, a Tríplice Aliança era composta por Brasil, Argentina e Inglaterra.",
  alternativaC : "O conflito deflagrou-se após uma série de hostilidades entre Paraguai e Brasil, como o caso do sequestro do presidente da província do Mato Grosso pelas tropas paraguaias.",
  correta      : "Criada para enfrentar o forte e bem treinado exército paraguaio, a Tríplice Aliança era composta por Brasil, Argentina e Inglaterra.",
}

const q2 = {
  numQuestao   : 2,
  pergunta     : "O forte e bem treinado exército paraguaio venceu as primeiras batalhas durante a Guerra do Paraguai, impondo baixas e conquistando territórios. Porém, a partir de certo momento, passou a sofrer sérias derrotas, que comprometeram suas defesas. A primeira derrota dos paraguaios que ficou célebre foi a Batalha:",
  alternativaA : "De Riachuelo.",
  alternativaB : "De Uruguaiana.",
  alternativaC : "De Tuiuti.",
  correta      : "De Riachuelo.",
}

const q3 = {
  numQuestao   : 3,
  pergunta     : "“A Guerra chegara ao fim. As cidades, as vilas, as aldeias estavam despovoadas. Sobrevivera um quarto da população – cerca de duzentas mil pessoas – noventa por cento do sexo feminino. Dos vinte mil homens ainda com vida, setenta e cinco por cento eram velhos acima de sessenta anos ou garotos menores de dez anos. Os próprios aliados ficaram abismados com a enormidade da catástrofe, a maior sucedida num país americano” – Mânlio Gancogni e Ivan Boris.  O texto refere-se ao conflito externo em que se envolveu o Império Brasileiro, conhecido como a Guerra:",
  alternativaA : "Dos Farrapos.",
  alternativaB : "De Canudos.",
  alternativaC : "Do Paraguai.",
  correta      : "Do Paraguai.",
}

const q4 = {
  numQuestao   : 4,
  pergunta     : "Leia o seguinte trecho:  “A guerra exterminou quase uma geração de paraguaios, arrasou povoados, fortificações e hipotecou o futuro da arruinada nação”, escreveu o argentino Alejandro Maciel em 'O Livro da Guerra Grande'.  Assinale a alternativa incorreta:",
  alternativaA : "A guerra impôs ao Paraguai uma forte retração demográfica.",
  alternativaB : "O Paraguai possuía indústrias e ferrovias, havia estatizado a economia e não dependia de recursos estrangeiros.",
  alternativaC : "O Exército brasileiro precisou formar o corpo de 'Voluntários da Pátria' para a Guerra do Paraguai.",
  correta      : "O Paraguai possuía indústrias e ferrovias, havia estatizado a economia e não dependia de recursos estrangeiros.",
}

const q5 = {
  numQuestao   : 5,
  pergunta     : "A Guerra do Paraguai, considerada o maior conflito armado da história da América do Sul, além de provocar a morte de inúmeros paraguaios, brasileiros, argentinos e uruguaios, foi a causa do desequilíbrio econômico e do aumento substancial das dívidas externas dos países envolvidos no conflito. Apesar disso, a guerra foi um 'bom negócio' para:",
  alternativaA : "Os ingleses, que emprestaram milhões de libras para os países da Tríplice Aliança, com juros altos, através de seus bancos.",
  alternativaB : "Os norte-americanos, que aumentaram a sua exportação de açúcar e trigo para o Uruguai e para o Brasil.",
  alternativaC : "Os argentinos, que conquistaram vastas porções do território paraguaio e anexaram áreas do Rio Grande do Sul.",
  correta      : "Os ingleses, que emprestaram milhões de libras para os países da Tríplice Aliança, com juros altos, através de seus bancos.",
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
