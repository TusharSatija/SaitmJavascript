// ---------- scope

function fun(y){
    if(y>5){
        var a = 'Inside if, var';
        let b = 'Inside if, let';
        console.log(a, b);
    }
    else{
        console.log(a);
    }

    // console.log(b)
}
fun(3);