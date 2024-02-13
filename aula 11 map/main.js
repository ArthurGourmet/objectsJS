// map usado para 

const pessoas =[
    {id: 4, nome: 'Pedro'},
    {id: 2, nome: 'Jave'},
    {id: 1, nome: 'Arthur'},
]

const novaspessoas = new Map();

for (const pessoa of pessoas) {
    const {id}= pessoa;
    novaspessoas.set(id,{...pessoa})
}
console.log(novaspessoas)