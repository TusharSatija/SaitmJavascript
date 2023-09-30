// console.log('hello world')
let Person={
    name:'Tushar',
    Age:23,
    IsAdult:true
}
console.log(Person);
const P1=Object.create(Person);
P1.name
'Tushar'
P1
{}
P1.IsAdult;
true
P1.age
undefined
P1.Age
23
P1.hasOwnProperty('Age');
false
P1.hasOwnProperty('Name');
false

P1.__proto__===Person