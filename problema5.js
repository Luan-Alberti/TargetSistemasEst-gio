const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para inverter uma string
function inverterString(str) {
    let resultado = ''; // Inicializa uma string vazia para armazenar o resultado
    for (let i = str.length - 1; i >= 0; i--) { // Loop de trás para frente através da string
        resultado += str[i]; // Adiciona cada caractere à string resultado
    }
    return resultado; // Retorna a string invertida
}

// Solicita que o usuário insira a string
rl.question('Digite a string que deseja inverter: ', (str) => {
    const stringInvertida = inverterString(str); // Chama a função para inverter a string
    console.log("String original:", str); // Exibe a string original
    console.log("String invertida:", stringInvertida); // Exibe a string invertida
    rl.close(); // Fecha a interface readline
});
