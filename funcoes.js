let x = '';
console.log(x);
x = 'oi';

//DECLARAÇÃO DE FUNÇÃO

// 1) declara função
                      //string
function imprimeTexto(texto, conta) {
  console.log(texto, conta);
}

// 2) executa a função (uma ou mais vezes)
imprimeTexto('Olá sou uma função',soma());
imprimeTexto("Outro texto", 22);


// Existem três formas de escrever funções 

function soma() {
  // a linha de return deve ser a última linha da função
  return resultado = 2 + 2;
}
// console.log(soma());
