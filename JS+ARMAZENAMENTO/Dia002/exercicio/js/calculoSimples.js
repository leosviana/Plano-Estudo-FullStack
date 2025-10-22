export function somar(a, b){
    return a + b;
}

export function multiplicar(a, b){
    return a * b;
}

export default function dividir(a, b){
    return b !== 0 ? a / b : "Erro: Divisão por zero";
}