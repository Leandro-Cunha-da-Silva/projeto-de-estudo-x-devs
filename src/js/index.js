// OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista.
  
// Passo 1 - dar um jeito de pegar o elemento HTML da seta avançar.
// Passo 2 - dar um jeito de identificar o clique do usuário na seta avançar.
// Passo 3 - fazer aparecer o próximo cartão da lista.
// Passo 4 - buscar o cartão que está selecionado e esconder.

// OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista.
  
// Passo 1 - dar um jeito de pegar o elemento HTML da seta voltar.
// Passo 2 - dar um jeito de identificar o clique do usuário na seta voltar.
// Passo 3 - fazer aparecer o cartão anterior da lista.
// Passo 4 - buscar o cartão que está selecionado e esconder.

// ----------------------------------------------------------------------------------------------

// OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista.
// Passo 1 - dar um jeito de pegar o elemento HTML da seta avançar.

/* Não é bom escrever o "documente.getElementById" e depois chamar o "EventListener". O ideal é criar uma variável primeiro.
Variáveis são espaços de memória do computador destinadas a dados que são maninpulados e alterados durante a execução de um algoritmo.
No código abaixo o "const" é uma delas. Aqui temos a 'DECLARAÇÃO - const', 'Nome da variável - btnAvancar' e 'atribuição = document.getElementById("btn-avancar")'*/

// console.log(document.getElementById("btn-avancar"));
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar"); // Essa é a variável para voltar. Passo 1.
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

// Passo 2 - dar um jeito de identificar o clique do usuário na seta avançar.
btnAvancar.addEventListener("click", function (){

    /* ESQUEMA 01 : Aqui vamos fazer um código para evitar erro quando chagamos no final dos cartões e some tudo da tela.
    Atualmente temos apenas as posições (0,1,2,3,4,5), quando passa disso os cartões somem resultando em um erro no console da nossa página e não queremos isso. Então, faremos o seguinte código: "length - 1 é para dizer que quando chegar ao final pode parar.*/
    if (cartaoAtual === cartoes.length - 1 ) return;

    // Passo 4 - buscar o cartão que está selecionado e esconder.
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    // Passo 3 - fazer aparecer o próximo cartão da lista e colocando a classe 'selecionado' nele.

    /* A variável a baixo colocaremos na linha 27 já que a variável tem que vim antes da declaração dela, o que estamos fazendo na linha 34 no "ESQUEMA 01" */
    // const cartoes = document.querySelectorAll(".cartao");

    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");
});



// OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista.
// Passo 1 - dar um jeito de pegar o elemento HTML da seta voltar. A declaração abaixo está na linha 26, lembrando sempre que a variável vem antes da declaração.

// Passo 2 - dar um jeito de identificar o clique do usuário na seta voltar.
btnVoltar.addEventListener("click", function (){

    /* Aqui faremos o mesmo ESQEUEMA de antes só que agora para a função voltar já que voltando acontece o mesmo que antes quando avançava, somem os cartões.*/
    if(cartaoAtual === 0) return;

    // Passo 4 - buscar o cartão que está selecionado e esconder.
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");


    // Passo 3 - fazer aparecer o cartão anterior da lista.
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");
});