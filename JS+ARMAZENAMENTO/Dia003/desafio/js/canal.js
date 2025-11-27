import video from video.js;

export default class Canal{
    constructor(nome, inscritos){
        this.nome = nome;
        this.inscritos = inscritos;
        this.video = [];
    }

    adicionarVideo(){
        console.log(`Vídeos do canal ${this.nome}:`);
        this.videos.forEach(v => console.log(" - " + v.info()));
        return this;
    }

    statisticas(){
        
    }
}