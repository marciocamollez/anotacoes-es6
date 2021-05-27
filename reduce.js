/*
Reduce

Reduz o array original a um só valor. Utilizado principalmente pra soma ou subtração de valores, mas pode ser feito para outras coisas como por exemplo, comparar qual número é maior

Há 4 parâmetros, mas não são obrigatorios:

reduce(acumulador, valor, indice, array), 0

Ele irá percorrer os valores e criar um laço

acumulador - Valor da onde vai se iniciar o intervalo e ir somando
valor - Valor de dentro do intervlo
indice - ordem do array [0, 1, 2, etc]
array - tras todo o array se necessário
0 - Geralmente em somas, precisamos definir que a contagem começa do 0, senao ele pode somar o array errado dependendo da sua intenção


*/

/* Exemplo 1 - Pega a array e soma os valores*/
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(total);

