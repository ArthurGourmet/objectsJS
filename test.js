const frutas ={nome:'banana', preço:5};
const controles ={...frutas}
Object.defineProperties(controles,{
    preço:{
        enumerable:false
    }

})
console.log(controles)

