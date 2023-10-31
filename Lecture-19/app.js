// let data=document.getElementsByTagName('h1');
// console.log(data);

// let h1tag=Array.from(data);
// console.log(h1tag);

// for(item of h1tag)
// {
//     item.style.color='red';
//     item.style.backgroundColor='yellow';
//     console.log(item);
// }
/*
let data1=document.getElementsByName('Username')
console.log(data1);
let item=Array.from(data1);
for(let itm of item)
{
    itm.style.border='3px solid red';
}
*/
let  data=document.querySelector('p');
console.log(data);
data.style.border='2px solid black'


// let  data1=document.querySelector('#head');
// console.log(data1);
// data1.style.border='2px solid red';

let  data1=document.querySelectorAll('.para');
console.log(data1);
let item=Array.from(data1);
console.log(item);
for(let itm of item)
{
    itm.style.border='2px solid red';
}