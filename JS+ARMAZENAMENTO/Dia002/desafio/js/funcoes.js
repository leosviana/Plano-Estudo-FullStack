export function verificarAprovacao(media){
    return media >= 7 ? "Aprovado ✅" : "Reprovado ❌";
}

export const formatarNota = (nota) => nota.toFixed(1);