function outerFun(){
    let money = 150;
    function innerFun(){
        money++;
        console.log(money);
    }
    return innerFun;
}
let fun1 = outerFun();
let fun2 = outerFun();

fun1(); //151 //151
fun1(); //152 //152
fun2(); //151 //153
fun2(); //152 //154
fun1(); //153 //155

