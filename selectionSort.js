const livros = require('./listaLivros');
const menorValor = require('./PegaMenor');



livros.forEach( (_,indice) => {
    
    let menor = menorValor(livros,indice);
    let livroAtual = livros[indice];
    console.log('posicao atual: ',indice);
    console.log('livro atual', livros[indice]);

    let livroMenorPreco = livros[menor];
    console.log('livro menor preco: ', livros[menor]);
    livros[indice]=livroMenorPreco;
    livros[menor]=livroAtual;
})
// for (let atual = 0;atual<livros.length;atual++){
//     let menor = menorValor(livros,atual);
//     let livroAtual = livros[atual];
//     console.log('posicao atual: ',atual);
//     console.log('livro atual', livros[atual]);


//     let livroMenorPreco = livros[menor];
//     console.log('livro menor preco: ', livros[menor]);
//     livros[atual]=livroMenorPreco;
//     livros[menor]=livroAtual
// |
// }


console.log(livros)