// Exemplo simples de .js 
const mensagem = "Bom te  ver  aqui  "
alert(mensagem + (10 * 100) + " abraços!")

// 1. Variáveis
    let estaChovendo = true
    const meuNome = "Mayk"

    console.log(estaChovendo);

    // let      posso alterar o valor em qualquer momento
    // const    não posso reatribuir valor

// 2. Tipos de Dados
    // String: "texto" ou 'texto'
    // Number: 12 [Integer + -] ou 3.2 [Float + -]
    // Boolean: true[1] ou false[0]
    // undefined - indefinido

// 3. Operadores
    // Atribuição = atribuir valor
    let n1 = 12
    let n2 = 3

    console.log(n1 + n2)

    // Aritméticos [+ - / *]
    console.log(12 - 2)
    console.log(12 / 4)

    // Concatenação de String [+]
    console.log("Número: " + 4); 

    // Comparação  [> < ==]
    const maiorQue = 1 > 2
    const igualA = 1 == 1

// 4. Condicional [if else]
    const idade = 17
    const maiorDeDezoito = idade >= 18

    if(maiorDeDezoito) {
        alert("Pode tirar carteira de motorista")
    }
    else {
        alert("Não pode tirar carteira de motorista")
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
    // Criação
    function nomeDaFuncao() {
        console.log('Código dentro da função')
    }

    // Execução
    nomeDaFuncao()
    nomeDaFuncao()

    // Parâmetros
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

// 7. Extensões da linguagem [ex.: Math, Date ...]

    Math.random()   // número randomico
    Math.floor(1.2) // aredonda números quebrados para baixo
    Math.ceil(1.2)  // aredonda números quebrados para cima
    Math.PI         // número do PI

    Date.now()      // Data de agora em milisegundos

// 8. DOM -  Document Object Model

    // window
    window.alert("alerta")

    // document
    document.write("texto")

    // manipular elementos
    document.documentElement.style.background = "white"