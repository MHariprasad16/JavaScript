//!Eample 1:
// var a = "hi";
// function outer() {
//   let b = "There";
//   const c = "You are"
//   console.log(a);
//   function inner() {
//     let d = "Dumb"
//     console.log(c + " " + d);
//   }
//   inner()
// }
// outer()
//!Example 2:
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count)
  };
}
const increment = counter();
increment();
increment();
increment();
