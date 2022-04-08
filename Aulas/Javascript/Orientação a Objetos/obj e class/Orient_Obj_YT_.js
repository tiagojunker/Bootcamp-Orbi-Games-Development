/* 
O Objeto é formado por sua classe, atributos e metodos

    O que é uma Classe? - Uma forma de definir a representação do mundo
real em uma linguagem orientada a Objetos. É formada por dados e comportamentos onde os dados são os atributos(ID, Nome, Valor) e os comportamentos são os metodos(adicionar, deletar, editar) que manipulam os dados.

*/

class Produto {
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }

    
    lerDados(){
        let produto = {}
        produto.id = this.id
        produto.nomeProduto = document.getElementById('produto').value;
        produto.preço = document.getElementById('preço').value;

        return produto;
    }

    validaCampos(produto){
        let msg = ''
        if (produto.nomeProduto == '') {
            msg += 'informe o Produto \n'
        }

        if (produto.preço == '') {
            msg += 'informe o preço \n'
        }

        if (msg != '') {
            alert(msg);
            return false
        }

        return true;
    }
   

    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.id++;
    }


    salvar() {
       let produto = this.lerDados();
       
       if(this.validaCampos(produto)){
            this.adicionar(produto);
       }

       this.listaTabela();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = ''
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].preço;
            
        }

    }

    cancelar() {
        
    }
}

var produto = new Produto()

























