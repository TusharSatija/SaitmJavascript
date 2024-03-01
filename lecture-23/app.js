let div=document.querySelector('div');
console.log(div);

function dice(){
    let rand=Math.floor(Math.random()*6+1);
    div.innerText=rand;
}