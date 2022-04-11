//######################  MANIPULANDO A DOM  #################### //

/* ----------------- MÉTODOS ---------------------
    
    document.createElement(element)  ---> Cria um novo Elemento HTML
    document.removeChild(element)  ---> Remove um Elemento
    document.appendChild(element)  ---> Adiciona um Elemento
    document.replaceChild(new, old)  ---> Substitui um Elemento

    ----------------- Estilos ---------------------

    const meuElemento = documento.getElementById('meu-elemento')

    meu-elemento.classList.add("novo-estilo")  ---> Adiciona a classe meu estilo
    meu-elemento.classList.remove("classe")  ---> Remove a classe "Classe"
    meu-elemento.classList.toggle("dark-mode")  ---> Adiciona a Classe "dark-mode" caso ele não faça parte da list e remove caso faça


    ------------------ CSS  ------------------------

    document.getElementById('titulo').tyle.color = 'blue'

    ---------------- EVENTOS ------------------------

    mouseover ---> mouse em cima
    mouseout ---> mouse sai de cima
    click ---> click simples
    dbclick ---> duploclick
    change ---> atualiza a pagina quando o calor de um campo mudar
    load ---> assim que a pagina terminou de carregar

    addEventListener() ---> cria um evento que vai ser chamado quando determinada ação acontecer

*/

function changeMode(){
    changeClasses()
    changeText()
}

function changeClasses() {
    button.classList.toggle('dark-mode')
    h1.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')
    footer.classList.toggle('dark-mode')
}

function changeText() {

    if(body.classList.contains("dark-mode")){
        button.innerHTML ='Ligth Mode' 
        h1.innerHTML =' Dark Mode On'
    } else {
        button.innerHTML ='Dark Mode'
        h1.innerHTML ='Light Mode On'
    }
}

const button = document.getElementById("mode-selector")
const h1 = document.getElementById("page-title")
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]



button.addEventListener('click', changeMode)