// verificador de cpf

//705.484.450-52
//replace(/\D+/g)  vai remover tudo que nao for um numero
//70548445052
// transformar em arrys [7  0  5   4   8   4  4  5     0   5    2 ] 
//remover doi ultimos digitos
//[7  0  5   4   8   4  4  5     0  ]

//primeira conta
//  7   0   5   4   8   4   4   5   0
//* 10  9   8   7   6   5   4   3   2
//  70  0   40  28  48  20  16  15   0 = 237 reduce
//relizar conta complementrar
//11-(237%11)  = 5 primeiro digito


// segunda conta
//  7   0   5   4   8   4   4   5   0  5
//* 11  10  9   8   7   6   5   4   3   2
//  77   0  45  32  56  24  20   20  0   10 = 284
//relizar conta complementrar
//11-(284%11)  = 2 segundo digito

// parte final comparação
// 705.484.450-52 === 705.484.450-52
// validar ou nao


const cpf = new ValidaCpf('055.994.411.05')

function ValidaCpf(cpfenviado){
    Object.defineProperty(this,'cpfLimpo',{
        enumerable: true,
        get: function(){
            return cpfenviado.replace(/\D+/g, '')
        }
    })

}
ValidaCpf.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined' )return false
    if(this.cpfLimpo.length !== 11)return false
    if(this.repetido()) return false;
    const cpfParcial = this.cpfLimpo.slice(0,-2)
    const digito1 =  this.digito(cpfParcial)
    const digito2 =  this.digito(cpfParcial+ digito1)

    const novocpf = cpfParcial + digito1 + digito2;
    return novocpf === this.cpfLimpo

}
ValidaCpf.prototype.digito = function(cpf){
    const arrayCpf = Array.from(cpf)
    let regresso = arrayCpf.length +1;
    const total = arrayCpf.reduce((ac,val)=>{
        ac += (regresso * Number(val) )
        regresso--
        return ac

    },0)
    const digito = 11 - (total%11)
    return digito > 9 ? '0' : String(digito) 


}
ValidaCpf.prototype.repetido =function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;

}
if(cpf.valida()){
    console.log('cpf valido')
}else{
    console.log('cpf invalido')
}