
let numbers = [1,2,3,4,5, {a:5, b:10}, 'random'];
console.log(numbers)

let fruits = {
    'Apple':4,
    'Mango':3,
    'Banana':6
}

// ------------- Normal Loop
// for(let i=0; i<5; i++){
//     console.log(numbers[i]);
// }

// -------------- for of

// for(let num of numbers){
//     console.log(num)
// }

// -------------- for in

for(let key in numbers){
    console.log(key)
}

for(let key in fruits){
    console.log(key);
    console.log(fruits[key]);
}

// -----------  for each
// aage pdenge