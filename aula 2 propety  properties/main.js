

const p1= new CriaPessoa('lucas',5,656);
p1.nome= 'roberto' // sem o property ey posse fazer alteraçoes quando quiser
console.log(p1)
p1.registro= 555;// mas com o property nao da pra fazer alteraçoes se vc nao configurou ele  para tal
console.log(p1.registro)



function CriaObj(nome,preco,estoque){
    Object.defineProperties(this,{
        
        nome:{
            enumerable:true,//ele vao aparecer
            value: nome,
            writable: false,//nao podera ser alterado
            configurable: false// ou reconfigurado

        },
        preco:{
            enumerable:true,
            value:preco,
            writable:true,//poderar ser alterado
            configurable:false // nao poderar er reconfigurado

        },
        estoque:{
            enumerable:false,// nao sera exibido
            value:estoque,
            writable:true,// podera ser alterado
            configurable:false

        }
    })
}

const banana= new CriaObj('banana',2,500);
banana.preco = 1.5,
banana.nome = 'pera'
console.log(banana.nome)