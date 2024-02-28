let radii=[1,2,3,4,5,6,7];
function Calculate(logic)
{
    let res=[];
    for(let raduis of radii)
    {
        res.push(logic(raduis));
    }
    return res;
}
function Area(r)
{
    return Math.PI*r*r;
}
function Peri(r)
{
    return 2*Math.PI*r;
}
function vol(r)
{
    return 4/3*(Math.PI*r*r*r);
}
function hemi(r)
{
    return 2/3*(Math.PI*r*r*r);
}
console.log(Calculate(Area));
console.log(Calculate(Peri));
console.log(Calculate(vol));
console.log(Calculate(hemi));