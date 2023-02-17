# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.
When the code is executed, the first console.log statement logs the value of the global variable x to the console, which is 1. Then the function f1 is defined but not call yet.if the function call it return 2 because x inside the function declared and it is a local variable.

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.
The console.log(f1()) statement calls the function f1, which logs the value of x to the console, which is 10. However, the console.log(f1()) statement also logs the return value of the f1 function, which is undefined. This is because the f1 function does not have a return statement, so it returns the value undefined by default.
the second console.log has result in a ReferenceError because y is only defined within the scope of the f1 function and is not accessible outside of it.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
The code will output x= 9.
The reason is that the f1 function is called with x as its argument, which is then passed into the function as val. Within the function, val is incremented by 1, but this does not affect the value of x outside of the function.
So, when console.log(x) is called, it will output the original value of x, which is 9. The f1 function does not modify the original value of x.
The code will output { x: 10 }.
In this case, y is an object with a property x which has a value of 9. When f2 is called with y as its argument, val is a reference to the same object as y.
Within the f2 function, the x property of val (which is the same as the x property of y) is incremented by 1. This changes the value of the x property of the original object.
So, when console.log(y) is called, it will output the updated value of y, which is { x: 10 }. The f2 function modifies the original object.
