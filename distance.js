
/*distance.js
Create four variables, x1, y1, x2, and y2 and store numbers in each of them.

Calculate the distance between coordinates (x1, y1) and (x2, y2). Log this distance out to the user in a human readable sentence.

The distance formula along with an example can be found below.

Remember, squaring a number or an expression just means to multiply that number or expression by itself. We can use the following syntax operations to square the number 5.

let a = 5;
let aSquared = a*a;

let b = 5;
let bSquared = b**2;
Remember, squaring a number or an expression just means to multiply that number or expression by itself. We can use the following syntax operations to square the number 5.

let a = 5;
let aSquared = a*a;

let b = 5;
let bSquared = b**2;

//both aSquared and bSquared will result to 25
total number result = 67082 see git hub image for more detail.

*/

let x1 = 1;
let x2 = 7;
let y1 = 3;
let y2 = 6;

let x3 = x2 - x1;
let y3 = y2 - y1;

let x3_squared = x3 ** 2;
let y3_squared = y3 ** 2;

let sum = x3_squared + y3_squared;

let distance = Math.sqrt(sum);

console.log(distance);


