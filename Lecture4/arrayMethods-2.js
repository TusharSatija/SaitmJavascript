// map, filter, reduce, sort

// function(){} 
// ()=>{}

arr = [1, 2, 3, 4, 5];

let newArr = arr.map((num, index, arr) => {
    if (index % 2 === 0) {
        return num * 5;
    }
    else {
        return num;
    }

})
// console.log(newArr);
// console.log(arr);

const evenNums = arr.filter((num, index) => {
    // if(num %2 === 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    return num % 2 === 0;
});

console.log(evenNums);

let sum = arr.reduce((acc, num, index)=>{
    return acc + num;
}, 0)

console.log(sum)


let numbers = [1, 15, 0, -5, 200, 9, 6]

let sortedArr = numbers.sort((a, b)=>{
    // return a-b;  // ascending
    return b-a; // descending
})

console.log(sortedArr);