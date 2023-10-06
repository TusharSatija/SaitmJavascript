class Car{
    constructor(name,color,price)
    {
        this.name=name;
        this.color=color;
        this.price=price;
    }

    //getter
    get getname()
    {
        return this.name;
    }
    //setter
    set setPrice(newPrice)
    {
        if(newPrice>this.price)
        {
            this.price=newPrice
        }
        else
            this.price;
    }
}
class RacingCar extends Car
{
    constructor(name,color,price,maxspeed)
    {
        super(name,color,price);
        this.maxspeed=maxspeed;
    }
}
const c1=new Car('BMW','black',9999);
const c2=new RacingCar('Ferrari','red',10000,400);