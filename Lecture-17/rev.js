// let a=10;
// let b=30;
// if(b>26)
// {
//     let b=100;
//     console.log(b);
// }
// console.log(b);

// {
//     const a=100;
// }
// // console.log(a);

// function fun()
// {
//     var i=10;
// }
// fun();
// console.log(i);


let x=10;
function f()
{
    x=100;
    console.log(x);    //100
    x=1000;
}
console.log(x);  //10
f();
console.log(x);  //10



// const a=100;
// if(a>99)
// {
//     console.log(a);   // 100
//     a=10000;
//     console.log(a);   //err
// }
// console.log(a);  100

for(let i=0;i<10;i++)
{
    setTimeout(()=>{
        console.log(i);
    },100);
}