var a = 10;

function fun(){
    console.log(y);
    var y = 20;
    console.log('Inside fun function');
    console.log(y);


    console.log(a);
    var a;
}

fun();
console.log(a);