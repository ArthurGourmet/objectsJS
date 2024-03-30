const pessoaq = {nome:'Pedro',Sobrenome:"samapio"}
pessoaq.fala = function(){
   return console.log(`${this.nome} esta dizendo bom dia`)
}
pessoaq.fala()

function empregado(nome,sobrenome,cargo,inicio,sexo){
    return{
        nome: nome,
        sobrenome:sobrenome,
        cargo:cargo,
        inicio:inicio,
        sexo:sexo,
        bemvindo(){
            return console.log(`bem vindo a nossa empresa ${this.nome}`)
        }
    }
}

const pessoa1 = empregado('arthur','carneiro','sistemas',2019,'masculino')
console.log(pessoa1)
pessoa1.bemvindo()