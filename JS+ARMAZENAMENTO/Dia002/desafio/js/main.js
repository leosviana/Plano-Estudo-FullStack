import {verificarAprovacao, formatarNota} from "./funcoes.js";
import Aluno from "./alunos.js";

const alunos = [
    new Aluno("Ana", [8, 7.5, 9]),
    new Aluno("João", [6, 5.5, 6.5]),
    new Aluno("Pedro", [10, 9.5, 9])
];

//Percorre cada aluno e mostra o resultado
alunos.forEarch(aluno => {
    const media = aluno.media();
    const status = verificarAprovacao(media);

    console.log(`${aluno.nome}: Média = ${formatarNota(media)} -> ${status}`);
});