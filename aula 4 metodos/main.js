//metodos uteis para objetos
//como copiar  um obejto

const pessoa1 = {nome: 'Andrer',trabalho:'enfremeiro'};
const pessoa1Copia={...pessoa1}// o jeito mais simples de realizar uma copia
pessoa1Copia.nome='maria'// o valor pode ser alterado por nao e uma referencia
console.log(pessoa1)
console.log(pessoa1Copia)

//motrar as chaves

console.log(Object.keys(pessoa1))
//congela o objt
// agr alteraçoes nao poderam ser feitas

// decriçao do property

console.log(Object.getOwnPropertyDescriptor(pessoa1, 'nome')) // vc ver


// mudar o property individualmente
Object.defineProperty(pessoa1,'nome',{
        value:'joao'
})
console.log(pessoa1)

//mostrar so os valorer
console.log(Object.values(pessoa1))
