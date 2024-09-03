const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}; // Valores de faturamento por estado

const totalFaturamento = Object.values(faturamentoEstados).reduce((total, valor) => total + valor, 0); 
// Object.values(faturamentoEstados): Esse método extrai os valores do objeto faturamentoEstados e os coloca em um array.
// reduce((total, valor) => total + valor, 0): reduce é um método de array que executa uma função em cada elemento do array para reduzir o array a um único valor, basicamente calculando uma soma tos valores.

for (let estado in faturamentoEstados) { //  Esse loop percorre cada chave (estado) no objeto faturamentoEstados.
    let percentual = (faturamentoEstados[estado] / totalFaturamento) * 100; //  Divide o valor do faturamento de um estado pelo totalFaturamento para obter a fração que esse estado representa do total, e multiplica por 100 para converter em percentual.
    console.log(`${estado}: ${percentual.toFixed(2)}%`); 
}  // Exibe o nome do estado e seu percentual correspondente no console, usando 2 casa decimais
