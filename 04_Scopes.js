//!GlobalScope
var a = 10;
let b = 20;
const c = 30;
console.log(a)//10
console.log(b)//20
console.log(c)//30

function heyy() {
  console.log(a)//10
  console.log(b)//20
  console.log(c)//30
}
heyy()
{
  console.log(a)//10
  console.log(b)//20
  console.log(c)//30
}

console.log(window.a)//10
console.log(window.b)//undefined
console.log(window.c)//undefined

//!Local/Function_scope
function anything() {
  {
    var b1 = "jim-jam";
    let b2 = "oreo";
    const b3 = "hideNseek";
  }
  // console.log(b1)//jim-jam
  // console.log(b2)//uncaught referenceError:b2  is not define
  // console.log(b3)//uncaught referenceError:b3  is not define
}
anything()

//*Outside the function
// console.log(b1)//uncaught referenceError:b1  is not define
// console.log(b2)//uncaught referenceError:b2  is not define
// console.log(b3)//uncaught referenceError:b3  is not define

//!Block_Scope
{
  var snacks1 = "puri"
  let snacks2 = "samosa"
  const snacks3 = "ff"
  console.log(snacks1)//puri
  console.log(snacks2)//samosa
  console.log(snacks3)//ff
}
// console.log(snacks1)//puri
// console.log(snacks2)//uncaught referenceError:snacks2  is not define
// console.log(snacks3)//uncaught referenceError:snacks3  is not define

//!Lexical_Scope
function outer() {
  var one = "sai"
  let two = "hari"
  const three = "ammu"
  function inner() {
    console.log(one)//sai
    console.log(two)//hari
    console.log(three)//ammu
  }
  inner()
}
outer()