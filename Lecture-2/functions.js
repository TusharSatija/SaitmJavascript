// in javaScript, functions are also a datatype like string, number, boolean etc.

function getMeAMovie(movieName){

    console.log('inside getMeAMovie function');
    console.log(movieName());

    function jawan(){
        console.log('jawan')
    }

    function gadar(){
        console.log('gadar');
    }

    if(movieName === 'gadar'){
        return gadar;
    }
    else if(movieName === 'jawan'){
        return jawan;
    }
    else{
        return 'No movie found!!';
    }
}

function x(){
    console.log('inside x function');
}

var newFun = getMeAMovie(x);

console.log(newFun);

// getMeAMovie -> High order Function (HOF)
// movieName as function -> callback function
