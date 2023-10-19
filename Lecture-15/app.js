// let row =5;
// for(let i=1;i<=row;i++)
// {
//     let str="";
//     for(let j=0;j<i;j++)
//     {
//         str+="*";
//     }
//     console.log(str);
// }

let row=5, col=5;
for(let i=1;i<=row;i++)
{
    let str="";
    for(let j=1;j<=col;j++)
    {
        if(i===1 || j===1 || i===row || j===col)
        {
            str+="*";
        }
        else{
            str+=" ";
        }
    }
    console.log(str);
}