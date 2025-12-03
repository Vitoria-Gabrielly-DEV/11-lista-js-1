/**** Escreva o código abaixo 👇******/
// Questão 1: Soma simples
function somar(a, b) {
    return a + b;
}
// Questão 2: Multiplicação simples
function multiplicar(a, b) {
    return a * b;
}
// Questão 3: Subtração simples
function subtrair(a, b) {
    return a - b;
}
// Questão 4: Divisão com verificação de zero
function dividir(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero";
    }
    return a / b;
}
// Questão 5: Calculadora de média
function calcularMedia(n1, n2, n3, n4) {
    const soma = n1 + n2 + n3 + n4;
    return dividir(soma, 4);
}
// Questão 6: Exponenciação
function elevarPotencia(base, expoente) {
    return Math.pow(base, expoente);
}

// Questão 7: Área do retângulo
function calcularAreaRetangulo(largura, altura) {
    return multiplicar(largura, altura);
}
// Questão 8: Par ou ímpar
function verificarParOuImpar(numero) {
    return numero % 2 === 0 ? "par" : "ímpar";
}
// Questão 9: Raiz quadrada
function calcularRaizQuadrada(numero) {
    return Math.sqrt(numero);
}
// Questão 10: Cálculo da hipotenusa
function calcularHipotenusa(cateto1, cateto2) {
    const potencia1 = elevarPotencia(cateto1, 2);
    const potencia2 = elevarPotencia(cateto2, 2);
    const soma = somar(potencia1, potencia2);
    return calcularRaizQuadrada(soma);
}
/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
