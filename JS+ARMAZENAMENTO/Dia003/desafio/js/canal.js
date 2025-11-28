//Importa a classe "Video" do arquivo "video.js"
import Video from "./video.js";

//Exporta a classe "Canal" para outro arquivo JS
export default class Canal {
  constructor(nome, inscritos) {
    this.nome = nome;
    this.inscritos = inscritos;
    this.videos = []; //Array que guarda varios vídeos
  }

  //Cria um novo vídeo e adiciona ao array video
  adicionarVideo(titulo, views, likes, publicadoEm) {
    const video = new Video(titulo, views, likes, publicadoEm); //Criando objeto video
    this.videos.push(video); //Coloca o video no array
    return this; // permite encadeamento de métodos (method chaining)
  }

  //mostra todos os vídeos no console
  listarVideos() {
    console.log(`📺 Vídeos do canal ${this.nome}:`);
    //percorre todos os vídeos dentro do array videos
    this.videos.forEach(v => console.log(" - " + v.info()));
    return this;
  }

  estatisticas() {
    //Soma todos as views dos videos
    const totalViews = this.videos.reduce((acc, v) => acc + v.views, 0);
    //Soma todos os likes dos videos
    const totalLikes = this.videos.reduce((acc, v) => acc + v.likes, 0);

    console.log(`
        📊 ESTATÍSTICAS DO CANAL
        Canal: ${this.nome}
        Inscritos: ${this.inscritos}
        Total de vídeos: ${this.videos.length}
        Total de views: ${totalViews}
        Total de likes: ${totalLikes}
    `);

    return this; //Permite encadeamento
  }

  // simula uma “busca” como se fosse da API
  buscarVideosPorTermo(termo) {
    //filter -> Cria um novo array com os vídeos que contem no termo do título
    const filtrados = this.videos.filter(v =>
      v.titulo.toLowerCase().includes(termo.toLowerCase())
    );

    console.log(`🔎 Busca por "${termo}":`);
    filtrados.forEach(v => console.log(" - " + v.info()));

    return this; //Permite encadeamento
  }
}