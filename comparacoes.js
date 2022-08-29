// == comparação implícita

const numero = 5;
const texto = '5';

console.log(numero == texto);
console.log(numero === texto);

// typeof
console.log(typeof numero);
console.log(typeof texto);

// == só compara o valor
// === compara o valor e o tipo da variável


// Conversão explícita

Number();
String();
console.log(numero + texto);
console.log(String(numero) + String(texto));
console.log(numero + Number(texto));