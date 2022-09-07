
/*
1. variable did'nt assign value
2. declare function but did'nt return any thing and its undefined.
3. wrote return but not any thing return and it  undefined
4. parameter did'nt pass and it s undefined
5. didnt object prperty in an array ande its undefined.
*/
let first;
// console.log(first)
function number(a, b){
    const sum = a + b;
}
const result = number(10, 23) 
// console.log(result)

function add(a, b){
    const sum = a * b;
    if(b < 10){
        return;
    }
    
}
const folafol = add(2, 9)
// console.log(folafol)


function multiple(m , n){
    const double = m*2;
    // console.log(n)
    return double;
    
}
 multiple(3)

 const phone = {name: 'Samsung', price: 40000, color: 'blue'}
 console.log(phone.id)

