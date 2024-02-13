// quando as filhas da classe mae possuem metodos iguaiss com funçoes difrentes

// exemplo de interaçao de conta bancaria

function ContaBancaria(agencia,conta,saldo){
    this.agencia = agencia,
    this.conta = conta,
    this.saldo = saldo
}

//sistema deposito
    ContaBancaria.prototype.desposito = function(valor){
        this.saldo += valor
    }
// sistema mostrar saldo

ContaBancaria.prototype.mostrarSaldo = function(){
    console.log(`CONTA:${this.conta} SALDO: R$${this.saldo.toFixed(2)}`)
}

// criando filhas conta corrente e poupança

function contaCorrente(agencia,conta,saldo,limite){
    ContaBancaria.call(this,agencia,conta,saldo)
    this.limite = limite

}

contaCorrente.prototype = Object.create(ContaBancaria.prototype)
contaCorrente.prototype.constructor = contaCorrente

contaCorrente.prototype.sacar = function(valor){
    if(valor > this.saldo + this.limite){
        console.log(`Saldo insuficiente para o saque`)
        return
    }
    this.saldo = this.saldo - valor

}
function contaPoupança(agencia,conta,saldo){
    ContaBancaria.call(this,agencia,conta,saldo)

}
contaPoupança.prototype = Object.create(ContaBancaria.prototype)
contaPoupança.prototype.constructor = contaPoupança

contaPoupança.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log(`Saldo insuficiente`)
        return
    }
    this.saldo = this.saldo - valor

}
const conta1 = new ContaBancaria(22,45632,500);
const conta2 = new contaCorrente(22,4534,500,100);
const conta3 = new contaPoupança(22,3455,1000);

console.log(conta3)
conta3.desposito(500)
conta3.mostrarSaldo()
conta3.sacar(1500)
conta3.sacar(1)
conta3.mostrarSaldo()