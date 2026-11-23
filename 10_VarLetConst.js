//!Declaration without initialization
// var a;
// console.log(a);//undefined

// let b;
// console.log(b)//undefined

// const c;
// console.log(c);//Uncaught SyntaxError: Missing initializer in const declaration

//!Re-assignement
// var sir = "deve";
// sir = "rahul"
// console.log(sir);//rahul

// let bunk = "boring"
// bunk = "sleepy"
// console.log(bunk);//sleepy

// const subject = "sql"
// subject = "js"
// console.log(subject);//Uncaught TypeError: Assignment to constant variable.

//!Re-Declaration
// var snacks = "samosa"
// var snacks = "tea"
// console.log(snacks);

// let snacks = "samosa"
// let snacks = "tea"
// console.log(snacks);//Uncaught SyntaxError: Identifier 'snacks' has already been declared

// const food = "papurice"
// const food = "biryani"
// console.log(food);//Uncaught SyntaxError: Identifier 'food' has already been declared

//!Attributes to window
var skill1 = "html";
let skill2 = "css";
const skill3 = "js";
console.log(window.skill1);//html
console.log(window.skill2)//undefined
console.log(window.skill3)//undefined