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
{  return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const topping='🍅';
            console.log(`topping is added ${topping}`)
            resolve(topping);
        },3000);
    })
} 

async function makePizza()
{
    const  getchesse=await makeChesse();
    console.log(getchesse)
    const base =await makeBase();
    console.log(base);
    const topping=await addTopping();
    console.log(topping);
}
makePizza();

// makeChesse()
// .then(makeBase())
// .then(addTopping())
// .then(()=>{  
// })