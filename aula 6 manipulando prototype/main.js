// //

// function produto(nome,preço){
//     this.nome=nome,
//    this.preço = preço
// }
// function produto2(nome,preço){
//     this.nome=nome,
//    this.preço = preço
// }
// produto.prototype.desconto = function(desconto){
//     return this.preço = this.preço - (this.preço * desconto) / 100
// }


// const p = new produto2('short praia',60)
// Object.setPrototypeOf(p, produto.prototype)
// const camiseta = new produto('camisa polo',55)
// console.log(camiseta.preço)

// camiseta.desconto(50)
// p.desconto(50)
// console.log(p.preço)
// console.log(camiseta.preço)




function obja(chave){
    this.chavea=chave
}
function objb(chave){
    this.chaveb=chave
}

const a = new obja('a');
const b = new objb('b');

Object.setPrototypeOf(b,a)
console.log(b.chavea)