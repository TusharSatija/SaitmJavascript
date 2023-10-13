
// console.log('hello');

// window.setTimeout(()=>{
//     console.log('coders');
// }, 5000)

// console.log('Bye Coders')


// ----------------------- setTimeout
console.log('One');

setTimeout(()=>{
    console.log('two')
}, 5000)

setTimeout(() => {
    console.log('two.1')
}, 0);

console.log('three');

setTimeout(()=>{
    console.log('Four')
}, 2000)


// -------------------- setInterval

// const id = setInterval(() => {
//     console.log('Hello')
// }, 100);

// setTimeout(() => {
//     clearInterval(id)
// }, 2000);