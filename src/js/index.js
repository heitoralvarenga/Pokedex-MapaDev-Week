/*
Quando clincar no Pokémon da listagem, temos que esconder o cartão do Pokémon aberto e mostrar o cartão do que foi selecionado na listagem.

Para isso vamos precisar trabalhar com 2 eletmons: Listagem e o cartão do Pokémon

Precisamos criar duas vaariáveis JS para trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de Pokémons

- remover a classe aberto só do cartão que está aberto
- ao clicar em um pokémon da listagem, pegamos o id do Pokémon para saber qual cartão mostrar
- remover a classe ativo que marca o Pokémon selecionado
- adicionar a classe ativo no item da lista selecionado
*/

//Precisamos criar duas vaariáveis JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    //Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de Pokémons
    pokemon.addEventListener('click',() => {
    //remover a classe aberto só do cartão que está aberto
    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')

    //ao clicar em um pokémon da listagem, pegamos o id do Pokémon para saber qual cartão mostrar
    const idPokemonSelecionado = pokemon.attributes.id.value
    const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
    const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
    cartaoPokemonParaAbrir.classList.add('aberto')

    // remover a classe ativo que marca o Pokémon selecionado
    const pokemonAtivoNaListagem = document.querySelector('.ativo')
    pokemonAtivoNaListagem.classList.remove('ativo')

    //adicionar a classe ativo no item da lista selecionado
    const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
    pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})