let str="The Sky is Blue";
// op :  Blue is Sky The
let res=str.split(' ').reverse().join(' '); 
console.log(res);
// console.log(rev);

let str1="The Sky is Blue";
// op : ehT ykS si eulB;

let res1=str1.split(' ');
console.log(res1);
let op="";
for(let item of res1)
{
    op+=item.split('').reverse().join('');
    op+=" ";
}
console.log(op);
