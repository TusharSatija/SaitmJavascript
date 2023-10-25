async function apicall()
{
    const data= await fetch('https://fakestoreapi.com/products/categories')
    console.log(data); 
} 
apicall();
// https://fakestoreapi.com/docs