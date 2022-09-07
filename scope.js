// Block scope = if, switch, for, while loop, eder vitorer area ke block scope bole.
// block scope use korar jonno amra let & const variable use korbo. 
// globally scope use korar jonno amra var variable use korbo.
const favNumber = 100;
function add(first, second){
    const result = first + second;
    if(result > 20){
        const mood = 'happy';
        console.log(mood)
    }
    return result;
    
}
const sum = add(10, 11)
console.log(sum)
console.log(favNumber)