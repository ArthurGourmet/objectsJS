// usar factory junto com prototype e mais simples opis podemos colocar o proto fora da funçao
const fala = {
    fala1(){
        console.log(`${this.nome} esta falando..`)
    }
}
const andar = {
    fala2(){
        console.log(`${this.nome} esta andando..`)
    }
}
const piada = {
    fala3(){
        console.log(`${this.nome} esta contando uma piada..`)
    }
}






const prototype ={...fala,...andar,...piada}


function pessoa(nome, sobrenome){

    return Object.create(prototype,{
        nome:{
            value:nome
        },
        sobrenome:{
            value: sobrenome
        }
    
    })
}

const pessoa1 = pessoa('arthur','carneiro')
pessoa1.fala2()