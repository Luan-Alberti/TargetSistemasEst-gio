const fs = require("fs");

// Lê o arquivo JSON de forma assíncrona
fs.readFile("dados.json", "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo JSON:", err);
    return;
  }

  const dados = JSON.parse(data); // Converte a string JSON em um objeto JavaScript
 
  const faturamento = dados.map((item) => item.valor);  // Extrai os valores de faturamento do JSON
  const faturamentoFiltrado = faturamento.filter((valor) => valor > 0); // faturamentoFiltrado é um novo array que contém apenas os valores de faturamento que são maiores que zero. Isso é feito para ignorar dias sem faturamento na análise.

  const menorFaturamento = Math.min(...faturamentoFiltrado); // Retorna o menor valor dentro do array faturamentoFiltrado. A sintaxe ... (spread operator) é usada para expandir os elementos do array como argumentos individuais para Math.min.
  const maiorFaturamento = Math.max(...faturamentoFiltrado);

  const mediaMensal =
    faturamentoFiltrado.reduce((a, b) => a + b, 0) / faturamentoFiltrado.length; // Soma todos os valores do array faturamentoFiltrado e então é dividido pelo número de elementos em faturamentoFiltrado.length para calcular a média mensal.

  const diasAcimaDaMedia = faturamentoFiltrado.filter(
    (valor) => valor > mediaMensal
  ).length; // Cria um novo array contendo apenas os dias em que o faturamento foi maior que a média mensal e .length retorna o número de elementos nesse novo array, representando o número de dias em que o faturamento foi superior à média.

  console.log(`Menor faturamento: ${menorFaturamento}`); // Exibe na tela o menor faturamento
  console.log(`Maior faturamento: ${maiorFaturamento}`); // Exibe na tela o maior faturamento
  console.log(`Dias acima da média: ${diasAcimaDaMedia}`);
}); // Exibe na tela os dias que faturaram acima da média de faturamento
