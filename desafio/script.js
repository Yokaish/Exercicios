
let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;


while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
    contador--; //adicionando um decremento assim como esta em uma das alternativas.  
}

let media = soma / qtdNumeros;
alert(`A média é ${media}`)

