/*
Map

Mapeia o array original e cria novas situações. Diferente do filter, pode fazer uma lista maior ou até mesmo adicionar novos itens nela.

Há 3 parâmetros, mas não são obrigatorios:

map(valor, indice, array)

Ele irá percorrer os valores e criar um laço

valor - Valor de dentro do intervlo
indice - ordem do array [0, 1, 2, etc]
array - tras todo o array se necessário

Importante: Quando precisar mexer no array original, criar um novo objeto antes, pois o map tem o poder de alterar a lista original

*/

/* Exemplo 1 - Pega a array e multiplica por 2 os valores*/
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const filtro = numeros.map(valor => valor * 2 );
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

//Mapeia apenas a propriedade nome da lista acima
const nomes = pessoas.map(obj => obj.nome)
console.log(nomes);

//Exclui nome e pega somente a idade da lista acima
const filtraIdade = pessoas.map(obj => ({ idade: obj.idade }))
console.log(filtraIdade);

//Cria uma lista nova para não modificar a original e adiciona um id para cada nome. Nesse caso, aproveita o índice do array para gerar os ids em sequência (gambiarra)
const comIds = pessoas.map(function(obj, indice) {
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
})
console.log(comIds);