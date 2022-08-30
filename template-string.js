const nome = "Daniel";
const idade = 2022 - 1982;
const cidadeNascimento = 'Belo Horizonte';

const apresentacao = 'Meu nome é ' + nome + ' tenho ' + idade + ' anos,' + ' nasci na cidade de ' + cidadeNascimento

// template string
const apresentacaoTemplate = `Meu nome é ${nome} tenho ${idade} anos, nasci na cidade de ${cidadeNascimento}` 
console.log(apresentacao);
console.log(apresentacaoTemplate);