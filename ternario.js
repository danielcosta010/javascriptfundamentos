const idadeMinima = 18;
const idadeCliente = 19;

if(idadeCliente >= idadeMinima) {
  console.log('Pode vender');
}else {
  console.log('Proibido vender');
}

// Ternário

              //Condição if                // true          //false
console.log(idadeCliente >= idadeMinima ? 'Pode Vender' : 'Proibido vender');