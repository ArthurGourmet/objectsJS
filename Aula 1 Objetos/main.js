//obejtos
//formas de criar um obejto
const pessoa1 ={nome: 'Pedro', idade: 10}//forma literal
console.log(pessoa1)
const pessoa2= new Object();
pessoa2.nome = 'Pedro';
pessoa2.idade = 10;
console.log(pessoa2)
//apagar chaves
delete pessoa1.idade
console.log(pessoa1)
//metodos
pessoa1.fala = function(){
    return console.log(`${this.nome} esta dizendo bom dia`)
}
pessoa1.fala()
pessoa1.idade = 30;
pessoa1.AnoNascimento = function(){
    const ano = 2023
    return ano - this.idade
}
console.log(pessoa1.AnoNascimento())
//factory functioin
function NovoCliente(nome,sobrenome,idade){
    return {nome: nome,sobrenome: sobrenome,idade: idade,  bomdia(){
        return console.log(`${this.nome} ${this.sobrenome}`)
    }}

}
const pessoa3 = NovoCliente('Pedro','sampaio',25)
console.log(pessoa3)
pessoa3.bomdia()

//congelar objeto

const pessoa5 = {nome: 'Arthur', Sobrenome: 'Silva'} //assim e impossivel fazer futuras alteraçoes
Object.freeze(pessoa5)
pessoa5.nome = 'Pedro'
console.log(pessoa5)