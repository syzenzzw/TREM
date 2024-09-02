const estacoes = [
    "Itariri", "Pedro de Toledo", "Peruibe", "Itanhaém", "Mongaguá",
    "Praia Grande", "São Vicente", "Santos", "Bertioga", "São Sebastião", "Ilha Bela"
];
 
const listaEstacoes = document.getElementById("lista-estacoes");
const selectEmbarque = document.getElementById("embarque");
const selectDesembarque = document.getElementById("desembarque");
const buttonCalcular = document.getElementById("calcular");
const buttonLimpar = document.getElementById("limpar");
const mensagem = document.getElementById("mensagem");
const listaResultado = document.getElementById("lista-resultado");
 
// Mostra as opções de estações
estacoes.forEach((estacao, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1} - ${estacao}`;
    listaEstacoes.appendChild(li);
 
    const optionEmbarque = document.createElement("option");
    optionEmbarque.value = index;
    optionEmbarque.textContent = estacao;
    selectEmbarque.appendChild(optionEmbarque);
 
    const optionDesembarque = document.createElement("option");
    optionDesembarque.value = index;
    optionDesembarque.textContent = estacao;
    selectDesembarque.appendChild(optionDesembarque);
});
 
// Função para calcular as estações
function calcular() {
    const embarque = parseInt(selectEmbarque.value);
    const desembarque = parseInt(selectDesembarque.value);
 
    if (embarque < 0 || embarque >= estacoes.length || desembarque < 0 || desembarque >= estacoes.length || embarque === desembarque) {
        mensagem.textContent = "Entrada inválida. Certifique-se de que os números estejam entre 1 e 11 e que a estação de desembarque seja diferente da estação de embarque.";
        listaResultado.innerHTML = "";
        return;
    }
 
       const inicio = Math.min(embarque, desembarque);
    const fim = Math.max(embarque, desembarque);
 
    mensagem.textContent = `Você passou por ${fim - inicio} estações.`;
 
    listaResultado.innerHTML = "";
    for (let i = inicio; i <= fim; i++) {
        const li = document.createElement("li");
        li.textContent = estacoes[i];
        listaResultado.appendChild(li);
    }
}
 
// Função para limpar os campos
function limpar() {
    selectEmbarque.value = "";
    selectDesembarque.value = "";
    mensagem.textContent = "";
    listaResultado.innerHTML = "";
}
 
// Adiciona eventos aos botões
buttonCalcular.addEventListener("click", calcular);
buttonLimpar.addEventListener("click", limpar);

 