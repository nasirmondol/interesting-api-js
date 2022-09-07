const a = 12;
const b = 'Salam';
const c = true;


const nums = [23, 87, 90, 38, 89, 17]
// console.log(Array.isArray(nums))

let p='Javascript'; 
// console.log(p)
let q=p; 
p='React'; 
// console.log(q); 

// const isTrue='false'; 
// // console.log(typeof isTrue)
// if(!isTrue){
// console.log('hello');
// } 
// else {
// console.log('world'); 
// }f

function sum(p, q) {
    const sum = p + q;
    return sum
   }
   const result = sum(2, 3);
//    console.log(result);

// if ("2" === 2) {
//     console.log("Inside if");
//    } 
//    else {
//     console.log("Inside else");
//    }
function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32);