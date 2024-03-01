let input=document.querySelectorAll('input');
let span=document.querySelector('span');
let data=Array.from(input);

console.log(data[0]);


function validate(){
    if(data[0].innerText.length<=3)
    {
        span.innerText="**length too short"
    }
}


