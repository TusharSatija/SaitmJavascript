let person = {
    'name':'abcd',
    'person age':25,
    'contact': 9090909090,
    address: 'New Delhi, India'
}

console.log(person);

// console.log(person.age);
console.log(person['person age']);

for(let key in person){
    console.log(person[key]);
}