//*Primitive DataTypes

//!1)Number 
// var num = 10;
// var discount = 55.5;
// console.log(num)//10
// console.log(typeof num)//number
// console.log(discount)//55.5
// console.log(typeof discount)//number

//!2)string
// let tranier = "Monty";
// let letter = 's';
// let subject = `JS`;
// console.log(tranier)//Monty
// console.log(typeof tranier)//string
// console.log(letter)//s
// console.log(typeof letter)//string
// console.log(subject)//JS
// console.log(typeof subject)//string

//!3)Boolean
// const feelingsleepy = true;
// const understand = false;
// console.log(feelingsleepy)//true
// console.log(typeof feelingsleepy)//Boolean
// console.log(understand)//false
// console.log(typeof understand)//Boolean

//!4)Undefine -- absence of a value for a variable
// var food;
// console.log(food)//undefine
// console.log(typeof food)//undefine

//!5)Null --intentional absence of a value for a variable
// var heyy = null;
// console.log(heyy)//null
// console.log(typeof heyy)//null

//!6) BigInt
let amount = 123468648428467755567788n
console.log(amount)//123468648428467755567788n
console.log(typeof amount)//Bigint
//!7)Symbole
let tranier = Symbol("suresh");
let model = Symbol("suresh");
console.log(tranier == model)//false
console.log(tranier)//symbole(suresh)
console.log(typeof tranier)//symbole


//*Non - primitive/reference datatypes
//!1)arrays -- used to store multiple d/f values
let snacks = ["samosa", "tea", "panipuri"]
let user = ["pavan", 25, true, null, undefined]
console.log(snacks)//["samosa","tea","panipuri"]
console.log(typeof snacks)//object
console.log(user)//["pavan",25,true,null,undefined]
console.log(typeof user)//object


//!2)object --used to store in the form of key value
let obj = {
  title: "jim-jam",
  category: "biscuit",
  price: 10
}
console.log(obj)
console.log(typeof obj)//object
//!3)Functions--resuable block of code used to perform a specfic task
function askQuestion() {
  console.log("are you guys feeling bored ?")
}
askQuestion()
askQuestion()
askQuestion()
console.log(typeof askQuestio)


//!Mutable vs Immutable
//*String_(primitive)
let str = "late"
str[0] = "p"
console.log(str)//late (String areimmutable i.e cannot be changed after creation)
//*Array_(non-primitive)
let arr = ["lift", "traffic", "bus", "petrol"]
arr[2] = "water prblm"
console.log(arr)//["lift", "traffic", "water prblm", "petrol"] (array are mutable i.e can be changed after creation)