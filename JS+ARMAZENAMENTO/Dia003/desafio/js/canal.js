import Video from "./video.js";

export default class Canal {
  constructor(nome, inscritos) {
    this.nome = nome;
    this.inscritos = inscritos;
    this.videos = [];
  }

  adicionarVideo(titulo, views, likes, publicadoEm) {
    const video = new Video(titulo, views, likes, publicadoEm);
    this.videos.push(video);
    return this; // permite encadeamento
  }

  listarVideos() {
    console.log(`📺 Vídeos do canal ${this.nome}:`);
    this.videos.forEach(v => console.log(" - " + v.info()));
    return this;
  }

  estatisticas() {
    const totalViews = this.videos.reduce((acc, v) => acc + v.views, 0);
    const totalLikes = this.videos.reduce((acc, v) => acc + v.likes, 0);

    console.log(`
        📊 ESTATÍSTICAS DO CANAL
        Canal: ${this.nome}
        Inscritos: ${this.inscritos}
        Total de vídeos: ${this.videos.length}
        Total de views: ${totalViews}
        Total de likes: ${totalLikes}
    `);

    return this;
  }

  // simula uma “busca” como se fosse da API
  buscarVideosPorTermo(termo) {
    const filtrados = this.videos.filter(v =>
      v.titulo.toLowerCase().includes(termo.toLowerCase())
    );

    console.log(`🔎 Busca por "${termo}":`);
    filtrados.forEach(v => console.log(" - " + v.info()));

    return this;
  }
}