// prototype ajudam a aumentar a performace fazendo com que o proto seja reutilizado por todos os objetos



function pessoa(nome,idade){
    this.nome= nome,
    this.idade= idade
}
pessoa.prototype.idadeCompleta = function(){ //assim criasse um prototype
    return `${this.nome} tem ${this.idade} anos`
}
const pessoa1 = new pessoa('Pedro',5)
console.log(pessoa1.inf())