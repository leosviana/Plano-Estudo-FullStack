import Canal from "./canal.js";

const canal = new Canal("Leo Dev", 12400);

    .adicionarVideo("Como criar API", 52000, 8000, "2023-11-01");
    .adicionarVideo("HTML para iniciantes", 48000, 6000, "2023-09-15");
    .adicionarVideo("CSS Flexbox completo", 30500, 3300, "2023-10-01");
    .listarVideos();    
    .estatisticas()
    .buscarVideoPorTermo("api");