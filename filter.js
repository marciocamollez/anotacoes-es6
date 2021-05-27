/*
Filtros

Utiliza um intervalo de valor para filtrar em uma lista menor.
Há 3 parâmetros, mas não são obrigatorios:

filter(valor, indice, array)

Ele irá percorrer os valores e criar um laço

valor - Valor de dentro do intervlo
indice - ordem do array [0, 1, 2, etc]
array - tras todo o array se necessário

*/

/* Exemplo 1 */
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const filtro = numeros.filter(valor => valor > 10 );
console.log(filtro);


/* Exemplo 2 */
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
    
];

//Filtra pessoas que tenham mais de X caracteres
const nomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
console.log(nomeGrande);

//Filtra pessoas com mais de 50 anos
const filtraIdade = pessoas.filter(obj => obj.idade > 50)
console.log(filtraIdade);

//Filtra pessoas que terminam com A
const terminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(terminaComA);