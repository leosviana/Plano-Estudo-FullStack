import dividir, {somar, multiplicar} from "./calculoSimples.js";
import Usuario from "./usuario.js";

const user = new Usuario("Ana");
console.log(user.saudacao());

console.log(`2 + 3 = ${somar(2, 3)}`);
console.log(`4 * 5 = ${multiplicar(4, 5)}`);
console.log(`10 / 2 = ${dividir(10, 2)}`);