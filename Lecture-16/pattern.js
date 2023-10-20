//   *
//  **
// *** 

let row=4;
for(let i=1;i<=row;i++)
{
    let str="";
    for(let j=0;j<row-i;j++)
    {
        str+=" ";
    }
    for(let k=0;k<i;k++)
    {
        str+="*";
    }
    console.log(str);
}