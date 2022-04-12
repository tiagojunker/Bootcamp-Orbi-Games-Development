// OBJETO "Ex --> pessoa = {}"
/* Um objeto é um coleção de propriedades, e uma propriedade é uma associação
entre um nome (Ou chave) e um valor. Um valore de propriedade pode ser função, 
que é considerada um método do objeto. */

let pessoa = {
    /*--DECLARAO AS PROPRIEDADES --*/
    nome: "Jonatas",
    idade: 35,
    feliz: true,
    pets: ["cachorro", "Gato"],
    carros: {

        camaro: {
            placa: "123456",
            cor: "verde",
        },

        uno: {
            placa: "9876543",
            cor: "Branco"
        }
    }
    /*-----------------------------*/
}

// pessoa.nome = "Carlos" //rescreve a propriedade nome no objeto pessoa
// pessoa.pets[1] = "Tartaruga" //rescreve a propriedade pets no objeto pessoa

// pessoa.carros.camaro.cor = "Amarelo"  // Rescreve a cor do objeto camaro, dentro do objeto carro, dentro do objeto pessoa


//########################## | ORIENTAÇÃO A OBJETOS | ###############################//

//Obs: Classes são do tipo "Function"

class Livro {
    constructor(nome, editora, paginas){ //Construtor declaro os parâmetros (propriedades).
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }                            // E abaixo do construtor aplico as funções para dar comportamento a classe 

    anunciar () {
        console.log(`Titulo ${this.nome}`)
    }
    descrever () {
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} paginas.`)
    }
}

const nodeJs = new Livro("Primeiros passos com NodeJs", "Casa do Código", 195) //Crio o objeto Livro
nodeJs.anunciar() //chamo a função interna anunciar
nodeJs.descrever()  //chamo a função interna anunciar

//------ Herança de classes -------//

class LivroColecao extends Livro{  //estends faz LivroColecao herdar propriedades da classe livro
    constructor(nome, nomeColecao){
        super(nome)  //super disponibiliza a propriedade de uma classe no construtor de uma nova.
        this.nomeColecao = nomeColecao
    }

    descreverColecao(){
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}.`)
    }
}

const logicaProg = new LivroColecao ("Lógica de Programação", "Comece a Programar")
logicaProg.descreverColecao() //Uso da função Criada
logicaProg.anunciar()  //Uso da função herdada

