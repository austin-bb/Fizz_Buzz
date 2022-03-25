// For each number that is a multiple of 3, print "fizz" x
// For each number that is a multiple of 5, print "Buzz" x
// For numbers which are a multiple of both 3 and 5, print "FizzBuzz" x
//  All other numbers should print normally x

// write a code that will go through each number from 1 -100 x
// Write a code that will check if a number is divisible by 3 and 5 x
// write a code that will check if a number is divisible by 3 x
// write a code that will check if a number is divisible by 5 x

for( i = 1; i < 100; i++){
    if(i % 3 == 0 && i % 5 ==0){
        console.log("FizzBuzz");
    } else if(i % 3 == 0){
        console.log("Fizz");
    } else if(i % 5 == 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }  
}
