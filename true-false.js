
/*
False = 0, false, '', undefined, null, Nan;


Truthy = true, string, '0', 'false', [], {}, ' ';
white space string is truthy variable. '0'
any kind of number is true variable. Included negative of positive,
*/
let x  = ' ';
console.log('value of x is', x)
if(x){
    console.log('variable is true')
}
else{
    console.log('variable is false')
}