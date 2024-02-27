function sum(a,b)
{
    return a+b;
}

console.log(sum(2,3));

let add=(a,b)=>{
    return a+b;
}

console.log(add(4,5));


function sumofNatural(n)
{
    return n*(n+1)/2;
}
console.log(sumofNatural(5));


function factorial(a)
{
    let fact=1;
    for(let i=1;i<=a;i++)
    {
        fact=fact*i;
    }
    return fact;
}
console.log(factorial(5));

let ans1=factorial(5);
let ans2=factorial(5-2);
console.log(ans1/ans2);