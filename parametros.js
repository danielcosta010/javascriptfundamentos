// parâmetros de função

function soma(num1, num2) {
  return num1 + num2;
}

console.log(soma(22, 11));
console.log(soma(333, 121));
console.log(soma(555, -141));

// Parâmetros x Argumentos

// Ordem dos parâmerros

function nomeIdade(nome, idade) {
  return `Meu nome é ${nome} e tenho ${idade} anos.`;
}
console.log(nomeIdade('Daniel', 40));

function multiplica(numero1 = 1, numero2 = 1) {
  return numero1 * numero2;
}
console.log(multiplica(soma(2, 5)));

function cumprimentar(){
 return 'Oi gente!';
}

function cumprimentaPessoa(nomePessoa) {
 console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`);
}

cumprimentaPessoa('Daniel');





