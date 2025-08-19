function verificarIdade(idade) {
    if (idade >= 18) {
        console.log("Você é maior de idade!");
    } else {
        console.log("Você é menor de idade!");
    }
}
// Testes
verificarIdade(20);
verificarIdade(15);

function calculadora(opcao, num1, num2) {
    if (opcao === 1) {
        console.log("Resultado da soma: " + (num1 + num2));
    } else if (opcao === 2) {
        console.log("Resultado da subtração: " + (num1 - num2));
    } else if (opcao === 3) {
        console.log("Resultado da multiplicação: " + (num1 * num2));        
    } else if (opcao === 4) {
        console.log("Resultado da divisão: " + (num1 / num2));        
    } else {
        console.log("Opção inválida!");
    }
}
// Testes
calculadora(1, 10, 5); // soma
calculadora(2, 10, 5); // subtração
calculadora(3, 10, 5); // multiplicação
calculadora(4, 10, 5); // divisão
calculadora(5, 10, 5); // inválido