const data = [{l:5, b:4}, {l:14, b:8}, {l:2, b:6}, {l:5, b:5}];

// const areaRes = [20, 112, 12, 25];
// const perimeterRes = []

const area = (l, b) => l*b;
const permiter = (l, b) => 2*(l+b);

let areaRes = [];
let perimeterRes = [];

// for(let rect of data){
//     let ans = area(rect.l, rect.b);
//     areaRes.push(ans);
// }

// for(let rect of data){
//     let ans = permiter(rect.l, rect.b);
//     perimeterRes.push(ans);
// }

function calculate(data, logic){
    let result = [];
    for(let rect of data){
        let ans = logic(rect.l, rect.b);
        result.push(ans);
    }
    return result;
}

areaRes = calculate(data, area);
perimeterRes = calculate(data, permiter);

console.log(areaRes);
console.log(perimeterRes);
