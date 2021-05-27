/* Usar um constructor signifca que você pode acessar essas propriedades em outros lugares. Para linkar um objeto a uma classe, usar a palavra NEW antes de declarar. No console do navegador, o arquivo vai exibir os métodos comer e beber como prototype da classe Pessoa */

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    comer(){
        console.log(`${this.nome} está falando`);
    }

    bebendo() {
        console.log(`${this.nome} está bebendo`);
    }
}

const p1 = new Pessoa('Marcio', 'Camollez');
console.log(p1);