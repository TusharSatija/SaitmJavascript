function outerFun(){
    let money = 150;
    function innerFun(){
        let a = 10;
        money++;
        function innerMostFun(){
            money++;
            a++
            console.log(money, a);
        }
        return innerMostFun;
    }
    return innerFun;
}
let fun = outerFun();
let fun1 = fun();
let fun2 = fun();

fun1(); //152 //153
fun1(); //153 //154
fun2(); //    //155
fun2();       //156
fun1(); //154 //157
