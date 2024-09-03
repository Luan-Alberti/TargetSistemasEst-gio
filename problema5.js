function inverteString(str) { //função para inverter string
    let stringInvertida = "";

    for (let i = str.length - 1; i >= 0; i--) { // Percorre a string original do último caractere para o primeiro
        stringInvertida += str[i];
    }

    return stringInvertida; //retorna string invertida
}

let stringOriginal = "exemplo"; // String que você deseja inverter, substitua por qualquer string desejada

let stringInvertida = inverteString(stringOriginal); // Chama a função e armazena o resultado

console.log(`String original: ${stringOriginal}`); // Exibe a string original
console.log(`String invertida: ${stringInvertida}`); // Exibe a string invertida
