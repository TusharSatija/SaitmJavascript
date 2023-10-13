// Promise Fullfilled
async function add(a,b)
{
    let c=a+b;
    console.log(`sum of two is ${c}`);
}
add();

// Promise Reject
async function add(a,b)
{
    return new Promise(function(res,rej){
        rej();
    })
}
add();
// Promise Pending state
async function add(a,b)
{
    return new Promise(function(res,rej){
    })
}
add();