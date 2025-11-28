//Importa a Classe Canal do arquivo "canal.js"
import Canal from "./canal.js";

//Cria um novo canal com o nome e número de inscritos
const canal = new Canal("Leonardo Dev", 12400);

//Cria videos, lista, mostra estatísticas e busca - tudo encadeado
canal
  .adicionarVideo("Como criar API", 52000, 8000, "2023-11-10") //Cria o 1º Vídeo
  .adicionarVideo("HTML para iniciantes", 48000, 6000, "2023-09-15") //Cria o 2º Vídeo
  .adicionarVideo("CSS Flexbox completo", 30500, 3300, "2023-10-01") //Cria o 3º Vídeo
  .listarVideos() //Lista todos os vídeos encadeados
  .estatisticas() //Mostra estatísticas do canal
  .buscarVideosPorTermo("api"); //Busca o vídeo que contêm "api" no título