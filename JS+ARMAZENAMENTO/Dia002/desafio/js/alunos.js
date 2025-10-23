export default class Alunos{
    constructor(nome, notas){
        this.nome = nome;
        this.notas = notas;
    }
    media(){
        if(this.notas.length === 0) return 0;
        const soma = this.notas.reduce((acc, n) => acc + n, 0);
        return soma / this.notas.length;        
    }
}