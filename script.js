const estacoes = ["itariri", "pedro de toledo", "peruibe", "itanhaem", "mongagua", "praia grande", "sao vicente", "santos", "cubatao", "bertioga", "sao sebastiao", "ilha bela"];
 
const readline = require('readline-sync');
 

 
// Solicita a estação de desembarque
console.log("Digite a estação que você desembarcará:");
const estacaof = readline.question();
 
// Limpa o console
console.clear();
 
let posicaoinicial = 0;
let posicaofinal = 0;
 
// Encontra as posições das estações
for (let i = 0; i < estacoes.length; i++) {
    if (estacoes[i] === estacaoi) {
        posicaoinicial = i;
    }
    if (estacoes[i] === estacaof) {
        posicaofinal = i;
    }
}
 
// Exibe as estações entre as duas selecionadas
for (let i = posicaoinicial; i < posicaofinal; i++) {
    console.log(estacoes[i]);
}
 
// Limpa o console
console.clear();
 
// Calcula e exibe a diferença de estações
const res = posicaofinal - posicaoinicial;
console.log(`Faltam ${res} cidade(s) para chegar a: ${estacaof}`);
 