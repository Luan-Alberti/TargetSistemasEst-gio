const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}; // Valores de faturamento por estado

const totalFaturamento = Object.values(faturamentoEstados).reduce((total, valor) => total + valor, 0); // Calcula o valor total de faturamento somando os valores de todos os estados

for (let estado in faturamentoEstados) {
    let percentual = (faturamentoEstados[estado] / totalFaturamento) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}  // Calcula e exibe o percentual de representação de cada estado
