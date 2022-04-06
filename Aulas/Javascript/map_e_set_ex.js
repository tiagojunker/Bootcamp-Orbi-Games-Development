function getAdmins(map) {
    let admins = []
    for ([key, value] of map) {
        if (value === 'Admin'){
           admins.push(key) 
        }
    }
    return admins;
}

const usuarios = new Map()

usuarios.set('Tiago', 'Admin');
usuarios.set('Larissa', 'Admin');
usuarios.set('Andre', 'User');
usuarios.set('Caio', 'Admin');
usuarios.set('Ana', 'Use');

console.log(getAdmins(usuarios))

const meuArray = ['2', '3', '4', '4', '7', '8', '8', '9', '10']

function valoresUnicos(array) {
    const mySet = new Set(array);
    return [...mySet]; //Faz com que os elementos do Set sejam elementos do array
}

console.log(valoresUnicos(meuArray))
