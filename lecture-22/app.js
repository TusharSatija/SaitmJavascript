let str="the sky is blue";

// str ="blue is sky the ";
// str ="eht yks si eulb ";

let words=str.split(" ");
let res="";
for(let word of words)
{
    res+=word.split("").reverse().join("")+" ";
}
console.log(res);




// console.log(str.split(" ").reverse().join(" "));


let str2="this is some is this data dummy this this is";
let words1=str2.split(" ");
let set=new Set(words1);
let res1=Array.from(set);
console.log(res1.join(" ")); 
