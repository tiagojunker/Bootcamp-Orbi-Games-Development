/*
ECMAScript error - Ocorrem em tempo de execução

    Mensagem
    nome 
    linha
    Call Stack

DOMExeption - Ocorre no Navegador
 */

// TRATAMENTO DE ERROS (Trhow e Return)

/*
Return - Retorna um valor
Trhow - Retorna com uma mensagem de erro

Try - tentativa de execução do código e caso dê erro manipula pelo Catch.
Catch - Saida para exibir o erro

finally - Instrução a sr chamada independente do programa ter erros
*/

// CRIANDO ERRORS

/*
const meuerro = Erro('String Invalida');
meuerro.name = 'invalidMessage';
trhow Erro
*/


const array = ['1' ,'3' ,'5' ,'7' ,'9' ,'11' ,'13' ,'15']
let numero = 8

function verArray(arr, num) {
  
    try {
        if (!arr || !num) {
            throw new ReferenceError('Envie os dois parametros')
        } else if (typeof arr !== 'object' || typeof num !== 'number'){
            throw new TypeError('Array precisa ser do tipo object e o numero do tipo Number.')
        } else if (arr.length !== num) {
            throw new RangeError('Numero não condiz com tamanho do array')
        } else {
            return arr;
        }
    }

    catch(e){
        if (e instanceof ReferenceError) {
            console.log('Este é um ReferenceError')
            console.log(e.message)
        }else if (e instanceof TypeError) {
            console.log('Este é um TypeError')
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log('Este é um RangeError')
            console.log(e.message)
        } else{
            console.log('tipo de erro não esperado')
        }
    }
}

console.log(verArray(array, numero))







