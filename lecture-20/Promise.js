function Promise1()
{
    return new Promise((res,rej)=>{
        rej();
    })
    // return new Promise((res,rej)=>{
    //     res();
    // })
}
console.log(Promise1())
 