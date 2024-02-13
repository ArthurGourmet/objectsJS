// usar factory junto com prototype e mais simples opis podemos colocar o proto fora da funçao
const prototype ={
    fala(){
        console.log(`${this.nome} esta falando..`)
    }
}
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
pessoa1.fala()