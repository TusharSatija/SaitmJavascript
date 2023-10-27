// let str="abcd";
// let data=Array.from(str);
// console.log(data);

// const data= document.getElementById('head');
// console.log(data);

/* 
inp : data.style.color='red'
op  : 'red'
inp : data.style.border='3px solid black';
op  : '3px solid black'
ip  : data.style.backgroundColor='yellow';
op  : 'yellow'
*/


let heading1=document.getElementsByClassName('box');
console.log(heading1);

const data1=Array.from(heading1);
console.log(data1);
const n=data1.length;
for(let i=0;i<n;i++)
{
    data1[i].style.color='red';
    console.log(data1[i]);
}

for(let item of data1)
{
    item.style.color='orange';
    console.log(item);
}