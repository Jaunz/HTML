/*
* @autor João Victor Teixeira
*/

function mostrar(click){

    const caixas = document.querySelectorAll('.conhecimentos-conteudos');
    for (const caixa of caixas) {
        caixa.classList.add('oculto');
    }
    const caixa = document.querySelector('.conhecimentos-conteudos'+click);
    caixa.classList.remove('oculto');

    const botoes = document.querySelectorAll('.retangle button');
    for (const botao of botoes) {
        botao.classList.remove('ativo');
    }
    const botao = document.querySelector('button'+click);
    botao.classList.add('ativo');

}