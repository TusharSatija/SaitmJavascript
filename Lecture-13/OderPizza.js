function makeChesse()
{
    return new Promise(function(resolve,reject){
        console.log('start making chesse ...');
        setTimeout(()=>{
            const chesse='🧀';
            console.log(`chesee is ready ${chesse}`)
            resolve(chesse);
        },3000);
    })
}
function makeBase()
{
    return new Promise(function(resolve,reject){
        console.log('start making pizza base');
        setTimeout(()=>{
            const base='🍞';
            console.log(`base is ready ${base}`)
            resolve(base);
        },3000)
    })
}
function addTopping()
{
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const topping='🍅';
            console.log(`topping is added ${topping}`)
            resolve();
        },3000);
    })
}   

makeChesse()
.then(makeBase())
.then(addTopping())
.then(()=>{  
})