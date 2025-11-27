import Video from "./video.js";

export default class Canal{
    constructor(nome, inscritos){
        this.nome = nome;
        this.inscritos = inscritos;
        this.videos = [];
    }

    adicionarVideo(){
        console.log(`Vídeos do canal ${this.nome}:`);
        this.videos.forEach(v => console.log(" - " + v.info()));
        return this;
    }

    listarVideos(){
        console.log(`Vídeos do canal ${this.nome}:`);
        this.videos.forEach(v => console.log(" - ", v.info()));
        return this;
    }

    estatisticas(){
        const totalViews = this.videos.reduce((acc, v) => acc + v.views, 0);
        const totalLikes = this.videos.reduce((acc, v) => acc + v.likes, 0);
    

    console.log(`
        ESTATISTICAS DO CANAL
        Canal: ${this.nome}
        Inscritos: ${this.inscritos}
        Total De Vídeos: ${this.videos.length}
        Total De Views: ${this.totalViews}
        Total De Likes: ${this.totalLikes}
        `);
    return this;
    }

    buscarVideoPorTermo(termo){
        const filtrados = this.videos.filter(v => v.titulo.toLowerCase().includes(termo.toLowerCase()));
        console.log(`🔎 Busca por: "${termo}": `);
        filtrados.forEach(v => console.log(" - " + v.info()));
        return this;
    }
}