function p1()
{
    return new Promise(function(resolve,reject){
        const rand=Math.floor(Math.random()*10);
        console.log(rand);
        if(rand%2===0)
        {
            resolve();
        }
        else{
            reject();
        }
    })
}
console.log(p1());

// let rand=Math.floor(Math.random()*10+11);
// console.log(rand);