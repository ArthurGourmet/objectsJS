//e-comerce

function produto(nome,preço){
    this.nome= nome
    this.preço=preço
}
produto.prototype.desconto = function(valor){
    return this.preço = this.preço - valor
}
produto.prototype.aumento = function(valor){
    return this.preço = this.preço + valor
}

function camisa(nome,preço,cor){
    produto.call(this,nome,preço)
    this.cor =cor
}
camisa.prototype = Object.create(produto.prototype)
camisa.prototype.contructor = camisa

const camisaPolo = new camisa('polo',34,'red')
camisaPolo.desconto(12)
console.log(camisaPolo)