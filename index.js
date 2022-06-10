const elementoResposta  = document.querySelector("#resposta")
const inputPergunta     = document.querySelector("#inputPergunta")
const respostas         = [
  "Certeza!",
  "N�o tenho tanta certeza.",
  "� decididamente assim.",
  "N�o conte com isso.",
  "Sem d�vidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta � n�o.",
  "Voc� pode contar com isso.",
  "Melhor n�o te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem n�o.",
  "Provavelmente.",
  "N�o � poss�vel prever agora.",
  "Perspectiva boa.",
  "As perspectivas n�o s�o t�o boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return 
  }

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  const totalRespostas  = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas) 

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];

  setTimeout(function() {
    elementoResposta.style.opacity = 0;
  }, 3000)
}