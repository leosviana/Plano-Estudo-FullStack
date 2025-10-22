export default class Usuario{
    constructor (nome){
        this.nome = nome;
    }

    apresentar(){
        return `Olá, eu sou ${this.nome}!`;
    }
}