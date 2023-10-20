let arr=[1,2,3,1,2,3,2,1,1,1,2,2];
const set=new Set();
for(let elem of arr)
{
    set.add(elem);
}
console.log(set);

let str="this is some dummy data data dummy dummy this some is"
let words=str.split(' ');
const set1=new Set();

for(let word of words)
{
    set1.add(word);
}
console.log(set1)

for(let item of set1)
{
    console.log(item);
}