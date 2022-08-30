function apresentar(nome) {
  return 'Meu nome é ' + nome + ' estou aprendendo javaScript';
  // return  `Meu nome é ${nome}, estou aprendendo javaScript`
}
console.log(apresentar('Daniel'));

// Arrow function

const apresentarArrow = nome => `Meu nome é ${nome}, estou aprendendo JavaScript, esta é uma Arrow function.`;
const soma = (num1, num2) => num1 + num2;

console.log(apresentarArrow('Daniel'));
console.log(soma(3, 9));

// Arrow function com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
  if(num1 > 10 || num2 > 10) {
    return 'Somente numeros de 1 a 9';
  } else {
    return num1 + num2;
  }
}
console.log(somaNumerosPequenos(1, 9));