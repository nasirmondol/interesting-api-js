// closure: kono ekta function theke jodi r ekta function k return kora hoy tahole sob koyta function tader nijeder encapsulation or private variable dore rakhe take closure bole. 

function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}

let clock1 = stopWatch();
// console.log(clock1())
// console.log(clock1())
// console.log(clock1())

let clock2 = stopWatch()
console.log(clock2())