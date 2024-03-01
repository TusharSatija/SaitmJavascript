let inp=document.querySelector('input');
let btn=document.querySelector('article');
console.log(inp);
console.log(btn);

btn.addEventListener('click',(e)=>{
    // console.log(e.target.nodeName);
    // console.log(e.target.innerText);
    if(e.target.innerText==='C')
    {
        inp.value="";
    }
    else if(e.target.innerText==="bspace")
    {
        if(inp.value!="")
        {
            let data=inp.value.split('');
            data.pop();
            inp.value=data.join("");
        }
    }
    else if(e.target.innerText==='=')
    {
        try{
            inp.value=eval(inp.value);
        }
        catch(e){
            inp.value="Invalid";
        }
    }
    else{
        inp.value+=e.target.innerText;
    }
})
