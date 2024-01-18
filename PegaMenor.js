const livros = require('./listaLivros');


function menorValor(produtos, posicaoInicial){
    let maisBarato = posicaoInicial;
    for(let atual=posicaoInicial;atual<produtos.length;atual++){
        if(produtos[atual].preco < produtos[maisBarato].preco){
        maisBarato = atual; //pega o indice q tem o preco menor
        }
    }

    return maisBarato
}
module.exports = menorValor;


//console.log(`O livro mais barato custa: ${livros[maisBarato].preco} e o titulo ${livros[maisBarato].titulo}`);