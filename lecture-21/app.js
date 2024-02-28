let  words="HeLLoWoRlD";
let res="";
for(let word of words)
{
    if(word===word.toLowerCase())
    {
        res+=word.toUpperCase();
    }
    else{
        res+=word.toLowerCase();
    }
}
console.log(res);