const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

//Filtrar pares (filter)
//Duplicar valores (map)
//Somar tudo e trazer só 1 valor no fim

const x = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor);
    
console.log(x);