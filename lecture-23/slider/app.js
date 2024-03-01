let arr=[
    "https://images.unsplash.com/photo-1707391464182-dda2c341ba74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1708913156364-b454d4e3f6a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1707391464204-47fa6cc35d22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1708973908941-e043bdee8a88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
];
let img=document.querySelector('img');
console.log(img);
let n=arr.length;
let stopid;
for(let count=0;count<n;count++)
{
     stopid=setInterval(()=>{
        img.setAttribute("src",arr[count]);

        console.log(arr[count]);
    },3000);
    if(count===n)
    {
        count=0;
    }
} 
setTimeout(()=>{
    console.log(stopid);
    clearInterval(stopid);
},3000);

