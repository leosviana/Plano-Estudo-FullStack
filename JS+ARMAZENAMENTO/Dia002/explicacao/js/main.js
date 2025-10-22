//Importando funções, variáveis do arquivo funcoes.js
import {somar, dobrar, versao} from "./funcoes.js";

console.log(somar(2, 3)); //5
console.log(dobrar(4));   //8
console.log(versao);      //1.0.0

//Importando classe principal "Usuario"
import Usuario from "./usuario.js"; 
const user = new Usuario("João"); //Inserindo um nome 
console.log(user.apresentar());  //João