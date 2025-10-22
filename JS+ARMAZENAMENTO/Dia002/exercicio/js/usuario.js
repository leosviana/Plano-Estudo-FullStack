export default class Usuario{
    constructor(nome){
        this.nome = nome;
    };

    saudacao(){
        return `Olá ${this.nome}, bem-vindo de volta!`;
    }
}