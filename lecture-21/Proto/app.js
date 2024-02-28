let Person={
    name:"tushar",
    fun:function(){
        console.log("inside Person Object");
    }
};
let a=Object.create(Person);
let b=Object.create(a);
