// -------- Método Map -------- //

/* O Map Cria um novo Array e não faz modificações no array original 

    sintaxe:
    array.map(callback, thisArg) - Valor de this dentro da função callback (opicional)
        callback(item, index, array) - Função a ser executada em cada elemento

*/




const array = [1, 2, 3, 4, 5]
//console.log(array.map((item) => item * 2)) //retorna um novo array [2, 4, 6, 8, 10]

// -------- Método Filter -------- //

/* Um filtro condicional para um array, os itens desse array que corresponderem a condição
estabelecida serão retornados em um novo array.

    sintaxe:
    array.filter(callback, thisArg) - Valor de this dentro da função callback (opicional)
        callback(item, index, array) - Função a ser executada em cada elemento

*/

const frutas = ['maça fuji', 'maça verde', 'laranja', 'abacaxi']
//console.log(frutas.filter((fruta) => fruta.includes('maça'))) //retorna um novo array ['maça fuji', 'maça verde']





// -------- Método Reduce -------- //

/* Executa uma função em todos os elementos do array, retornando um valor unico

    sintaxe:
    array.reduce(callback, initialValue) - Valor de this dentro da função callback (opicional)
        callback() - Função a ser executada a partir do acumulador
        initialValue - Valor sobre o qual o retorno final irá atuar
*/


//################################ EXERCICIOS PROPOSTOS ##################################//
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value
    }, thisArg)
}

function mapSemThis(arr){
    return arr.map(function(item){
        return item*2
    })
}

const nums = [1, 2]
console.log('#### Respostas exercicio com Map ####\n')
console.log(`this -> maca`,mapComThis(nums, maca))
console.log(`this -> laranja`,mapComThis(nums, laranja))

console.log(mapSemThis(nums)+`\n\nFim do Ex001 com Map\n##########################\n\n\n\n\n\n`)




