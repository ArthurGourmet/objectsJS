// get e set
//get mostra o valor
//set altera

function criarPessoa(nome){
    let nomeobj= nome;
    Object.defineProperties(this,{
        nome:{
            enumerable: true,
            configurable: true,
            get(){ //eu mostro o valor
                return nomeobj
            },
            set(valor){// eu altero o valor
                if(typeof(valor)!=='string'){ //faço isso para limitar a trocar o valor somente se for um string
                    return

                }
                nomeobj =valor
            }
        }

    })
}

const p1 =new criarPessoa("pedro",'santos',5)
p1.nome= 'Ana';// esse e o valor imposto no set()
p1.nome= 5;

console.log(p1.nome)