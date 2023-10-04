let arr1=[1,2,3,4];
let arr2=[5,6,7,8];
// let arr3=[...arr1,...arr2];
// console.log(arr3)
for(let i=0;i<4;i++)
{
    let data=arr2.pop();
    arr1.push(data);
}
