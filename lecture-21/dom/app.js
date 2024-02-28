// let h1=document.querySelector('h1');
// let h1=document.getElementsByTagName('h1');
// let h1=document.getElementsByClassName('btn')
let h1=document.querySelectorAll('.btn')
let data=Array.from(h1);
console.log(data);

for(let item of data)
{
    item.style.height="100px"
    item.style.width="300px"
    item.style.border="2pc solid black"
    item.style.borderRadius="12px"
    // item.style.color="yellow"
    // item.style.border="3px dotted black"
    // console.log(item)
}
// h1.style.color="red";
// h1.style.border="2px solid black"
// h1.style.textAlign="center";
// h1.style.backgroundColor="blue"
// h1.innerText="head";