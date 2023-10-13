
let str = 'This is some string';
let str2 = 'I.S.R.O'
let str3 = '      Mahatama Gandhi    '

console.log(str.toUpperCase());
console.log(str2.toLowerCase());
console.log(str3.trim());
console.log(str.indexOf('is'));
console.log(str.split(' '))
console.log(str2.split('.'))

let profile = 'shreyance.jpg' 
function upload(){
    console.log('file Uploaded!');
}
let format = profile.split('.').pop();
if(['jpg', 'jpeg', 'png'].indexOf(format) !== -1){
    upload();
}
else{
    console.log('cannot upload!');
}

// [jpg, jpeg, png] 

// -------- home work
let menu = ['Chole Rice', 'Kadhai Paneer', 'Rajwa Rice', 'Kadhai chicken', 'chicken tandoori', 'fish fry', 'Idli', 'Dosa', 'Kadhai chaap', 'momos'];