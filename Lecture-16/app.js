let str="this is some dummy data data dummy dummy this some is"
// this -2
// is 2
// some -2
// dummy-3
// data- 2
let words=str.split(' ');
console.log(words);
const map=new Map();
for(let word of words)
{
    if(map.has(word))
    {
        map.set(word,map.get(word)+1);
    }
    else{
        map.set(word,1);
    }
}
console.log(map);
for(let item of map)
{
    console.log(`${item[0]} => ${item[1]}`);
}
