'use strict'
let numbers=[100,20,33,45,44,37,10,2,3,5,15,12,31,32,88,94,62,63,77,66,27,1,7,8,9];
let evenCount=0;
let oddCount=0;
function evenNumbers(nums){
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){
        console.log(numbers[i]+' an even number');
        evenCount++;
    }
    else{
        oddCount++;
    }
}
console.log('number of even numbers is  '+ evenCount);
console.log('number of odd numbers is   '+ oddCount);

}

evenNumbers(numbers);
