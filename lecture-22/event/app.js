let btn=document.querySelector('button');
let ip=document.querySelector('input');
console.log(ip);


ip.addEventListener('keyup',(e)=>{
    console.log(e.key);
});




console.log(btn);


btn.addEventListener('click',(e)=>{
    console.log("buttton clicked")
    btn.innerText="buttton clicked";
    console.log(e.target.innerText);
})