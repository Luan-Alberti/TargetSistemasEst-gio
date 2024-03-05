// Importando o módulo readline do Node.js
const readline = require('readline');

// Criando uma interface de leitura e escrita usando readline
const rl = readline.createInterface({
    input: process.stdin, // Configurando a entrada como o stdin (entrada padrão)
    output: process.stdout // Configurando a saída como o stdout (saída padrão)
});

// Perguntando ao usuário qual o número e recebendo a resposta através da interface readline
rl.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (numero) => {
    // Verificando se o número fornecido pelo usuário pertence à sequência de Fibonacci
    if (verificarFibonacci(parseInt(numero))) {
        // Se o número pertence à sequência de Fibonacci, exibe uma mensagem
        console.log(`${numero} pertence à sequência de Fibonacci.`);
    } else {
        // Se o número não pertence à sequência de Fibonacci, exibe outra mensagem
        console.log(`${numero} não pertence à sequência de Fibonacci.`);
    }
    // Fechando a interface readline após a conclusão da operação
    rl.close();
});

// Função para verificar se um número pertence à sequência de Fibonacci
function verificarFibonacci(numero) {
    // Verificando se o número fornecido é 0 ou 1, que são os dois primeiros números da sequência de Fibonacci
    if (numero === 0 || numero === 1) {
        return true; // Se for, retorna verdadeiro
    }
    
    // Inicializando variáveis para os dois primeiros números da sequência de Fibonacci
    let fib1 = 0;
    let fib2 = 1;
    let fibonacci = 1;
    
    // Calculando os números de Fibonacci até que o próximo número seja maior ou igual ao número fornecido
    while (fibonacci < numero) {
        fibonacci = fib1 + fib2; // Calculando o próximo número de Fibonacci
        fib1 = fib2; // Atualizando o valor de fib1 para o valor de fib2
        fib2 = fibonacci; // Atualizando o valor de fib2 para o valor de fibonacci
    }
    
    // Verificando se o número fornecido é igual ao último número de Fibonacci calculado
    return fibonacci === numero; // Retornando verdadeiro se for, falso caso contrário
}
