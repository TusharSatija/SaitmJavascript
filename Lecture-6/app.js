// console.log('hello');

// console.log(this);

//this in function

// function fun()
// {
//     return this;
// }

// console.log(fun());


fun=()=>{
    return  this;
}
console.log(fun());

let obj={
    //key :value,
    name:'tushar',
    id:1234,
    fun:()=>
    {
        return `${this.name}  ${this.id}`; ;
    }
};
console.log(obj.fun());
// console.log(obj.name);

const Person1={
    name:'tushar',
    surname:'satija',
    sayname:function(city,country)
    {
        return `${this.name}  ${this.surname} ${city}  ${country} `
    }
};
const Person2={
    name:'rohan',
    surname:'sharma',
}
console.log(Person1.sayname.call(Person2,'faridabad','India'));
// console.log(Person1.sayname.apply(Person2,['delhi','India']));
const p2=Person1.sayname.bind(Person2,'delhi','India');
console.log(p2());




function Student(name,age,rollNo)
{
    this.name=name;
    this.age=age;
    this.rollNo=rollNo;
}

let s2=new Student('rohit',19,1234);
console.log(s2);