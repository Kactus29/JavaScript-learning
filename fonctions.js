// Compteur de voyelles
var set = "aeiouyAEIOUY";
var count = 0;
var message = "aqzsdefrtghyjuzsedxcvyujfyzrgnizefhjnvzubgerconvbytrgun"
for (var i=0; i<message.length; i++) {
    if (set.includes(message[i])) {
        count += 1
    }
}
console.log(count);

// Fibonacci
function fibo(val) {
    if (val == 0) {
        return 0;
    }
    else if (val == 1) {
        return 1;
    }
    else {
        return fibo(val-1) + fibo(val-2);
    }
}
console.log(fibo(10));

/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)
*/
for (var i = 1; i<=7; i++) {
    msg = ""
    for (var j = 0; j<i; j++) {
      msg += "#"
    }
    console.log(msg)
    }


/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/
for (var i = 1; i<=100; i++) {
    if (i%3 == 0 && i%5 == 0) {
        console.log("FizzBuzz");
        }
    else if (i%3 == 0) {
        console.log("Fizz");
        }
    else if (i%5 == 0) {
        console.log("Buzz");
        }
    else {
        console.log(i);
    }
    }