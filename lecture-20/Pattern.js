let n=5;
for(let i=1;i<=n;i++)
{
    let str="";
    let count=i;
    for(let j=1;j<=i;j++)
    {
        str+=count + " ";
        count++;
    }
    console.log(str);
}