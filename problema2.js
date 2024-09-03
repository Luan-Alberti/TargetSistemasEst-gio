function isFibonacci(num) {
    let a = 0; //Primeiro numero da sequencia de fibonacci
    let b = 1; //Segundo numero da sequencia de fibonacci
    let temp; //valor temporario 

    if (num === a || num === b) {
        return true;
    } //Se o número que estamos verificando (num) for igual a 0 (valor de a) ou 1 (valor de b), a função retorna true, porque esses são os dois primeiros números da sequência de Fibonacci

    while (b < num) { //continua a executar enquanto b for menor que o numero
        temp = a + b; // soma a e b, dando o proximo numero da sequencia
        a = b; // transfere o valor de b par a, ou seja, o segundo da soma anterior
        b = temp; // transfere o valor de temp par b, ou seja, o resultado da soma anterior (o novo numero da sequencia)
    } 

    return b === num; // Esse loop faz a sequência de Fibonacci progressivamente até que b seja maior ou igual a num.
}

let numberToCheck = 21; // Variavel de entrada, substitua pelo número desejado
if (isFibonacci(numberToCheck)) {
    console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
} // Se o numero de entrada pertence a sequencia de Fibonacci, escreve o número e afirma que pertence a sequencia, senão escreve o número e afirma que não pertene a sequÊncia
