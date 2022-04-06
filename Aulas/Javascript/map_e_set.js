//###### MAP ######
const myMap = new Map()

myMap.set('Apple', 'Fruit') //seta um conjunto de chave e valor 
myMap.get('Apple') // inserimos a chave e retorna o valor
myMap.delete("Apple") //deleta o conjunto chave e valor

//###### SET ######
/* No SET podemos ter apenas valores Unicos, no ARRAY não */

const mySet = new Set()

mySet.add(1)
mySet.add(2)  //Adiciona Valor ao Set

mySet.has(1) //Verifica se 1 pertence ao Set

mySet.delete(2)  //Deleta 2 do Set

//Verifica o tamanho do Set com o "size"
