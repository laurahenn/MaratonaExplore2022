// Exemplo simples de .js 
const mensagem = "Bom te  ver  aqui  "
alert(mensagem + (10 * 100) + " abra�os!")

// 1. Vari�veis
    let estaChovendo = true
    const meuNome = "Mayk"

    console.log(estaChovendo);

    // let      posso alterar o valor em qualquer momento
    // const    n�o posso reatribuir valor

// 2. Tipos de Dados
    // String: "texto" ou 'texto'
    // Number: 12 [Integer + -] ou 3.2 [Float + -]
    // Boolean: true[1] ou false[0]
    // undefined - indefinido

// 3. Operadores
    // Atribui��o = atribuir valor
    let n1 = 12
    let n2 = 3

    console.log(n1 + n2)

    // Aritm�ticos [+ - / *]
    console.log(12 - 2)
    console.log(12 / 4)

    // Concatena��o de String [+]
    console.log("N�mero: " + 4); 

    // Compara��o  [> < ==]
    const maiorQue = 1 > 2
    const igualA = 1 == 1

// 4. Condicional [if else]
    const idade = 17
    const maiorDeDezoito = idade >= 18

    if(maiorDeDezoito) {
        alert("Pode tirar carteira de motorista")
    }
    else {
        alert("N�o pode tirar carteira de motorista")
    }

// 5. Estrutura de dados [Array Vetor Lista]
    // Array
    const temperaturas = [23, 3, 32.2, 1, 5]
    console.log(temperatura[0]);
    
    // Object 
    const pessoa = {
        nome: "Mayk",
        idade: 38,
        filhos: ["K", "E", "J", "L", "G"]
    }
    console.log(pessoa.filhos[2])

// 6. Function
    // Cria��o
    function nomeDaFuncao() {
        console.log('C�digo dentro da fun��o')
    }

    // Execu��o
    nomeDaFuncao()
    nomeDaFuncao()

    // Par�metros
    function soma(a, b) {
        console.log(a + b)
    }

    soma(34, 45)
    soma(90, 54)

    // Retorno
    function soma(a, b) {
        return a + b
    }

    const multiplica = soma(2, 2) * 4
    console.log(multiplica)

// 7. Extens�es da linguagem [ex.: Math, Date ...]

    Math.random()   // n�mero randomico
    Math.floor(1.2) // aredonda n�meros quebrados para baixo
    Math.ceil(1.2)  // aredonda n�meros quebrados para cima
    Math.PI         // n�mero do PI

    Date.now()      // Data de agora em milisegundos

// 8. DOM -  Document Object Model

    // window
    window.alert("alerta")

    // document
    document.write("texto")

    // manipular elementos
    document.documentElement.style.background = "white"