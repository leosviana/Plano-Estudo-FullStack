//Permite exportar a classe "Video" para outro arquivo JS
export default class Video{
    //construtor: Executa quando criamos uma novo video
    constructor(titulo, views, likes, publicadoEm){
        this.titulo = titulo; //Propriedade do objeto
        this.views = views;
        this.likes = likes;
        this.publicadoEm = publicadoEm;
    }

    //Método que transforma o texto mais amigável:
    info(){
        return `${this.titulo} - ${this.views} views - 👍${this.likes} - Publicado em: ${this.publicadoEm}`;
    }
}