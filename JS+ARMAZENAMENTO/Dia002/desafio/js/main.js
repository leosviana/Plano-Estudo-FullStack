import {verificarAprovacao, formatarNota} from "./funcoes.js";
import Alunos from "./alunos.js";

const aluno = [
    new Alunos("Ana", [8, 7.5, 9]),
    new Alunos("João", [6, 5.5, 6.5]),
    new Alunos("Pedro", [10, 9.5, 9])
];

//Percorre cada aluno e mostra o resultado
aluno.forEarch(aluno => {
    const media = aluno.media();
    const status = verificarAprovacao(media);

    console.log(`${aluno.nome}: Média = ${formatarNota(media)} -> ${status}`);
});