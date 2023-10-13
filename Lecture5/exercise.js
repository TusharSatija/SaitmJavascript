// -------- home work
let menu = ['Chole Rice', 'Kadhai Paneer', 'Rajwa Rice', 'Kadhai chicken', 'chicken tandoori', 'fish fry', 'Idli', 'Dosa', 'Kadhai chaap', 'momos'];

let vegMenu = menu.filter((item)=>{
    if(item.indexOf('chicken') !== -1 || item.indexOf('fish') !== -1 ){
        return false;
    }
    else {
        return true;
    }
});
console.log(vegMenu);