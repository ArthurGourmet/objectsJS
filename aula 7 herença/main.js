// exxemplo ecomerce que vende camisetas e canecas

function produto(nome,preço){
    this.nome= nome,
    this.preço= preço
}
produto.prototype.desconto = function(valor){
    this.preço=this.preço - valor
}
produto.prototype.aumento = function(valor){
    this.preço= this.preço + valor
}

function camisas(nome,preço,cor){
    produto.call(this, nome,preço) // fazer a ligaçao das funçoes
    this.cor = cor
}
camisas.prototype = Object.create(produto.prototype)// fazer a ligaçao de prototype
camisas.prototype.constructor = camisas // assim define camisas com construtor

function caneca(nome,preço,material,e){
    produto.call(this, nome,preço)
    this.material = material;
    Object.defineProperty(this,'estoque',{
        enumerable:true,
        configurable:false,
        get(){
            return e
        },
        set(valor){
            if(typeof valor!=='number')return;
            e = valor
        }
    })
}
caneca.prototype = Object.create(produto.prototype)
caneca.prototype.constructor = caneca

const produto1 = new produto('camisa',50)
const camisa= new camisas('polo',50,'preta')
const star = new caneca('caneca',17,'vidro',5)
produto1.desconto(20)
console.log(produto1)
camisa.desconto(20)
console.log(camisa)
star.estoque = 10
console.log(star.estoque)
// get e set