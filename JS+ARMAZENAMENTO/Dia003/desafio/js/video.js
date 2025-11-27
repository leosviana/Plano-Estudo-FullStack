export default class Video{
    constructor(titulo, views, likes, publicadoEm){
        this.titulo = titulo;
        this.views = views;
        this.likes = likes;
        this.publicadoEm = publicadoEm;
    }

    //Transforma a data em texto amigável:
    info(){
        return `${this.titulo} - ${this.views} - 👍${this.likes} - Publicado em: ${this.publicadoEm}`;
    }
}