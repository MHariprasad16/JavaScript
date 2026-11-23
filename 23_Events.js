// //!DOM Properties
// let h1Tag = document.getElementById("heading")
// h1Tag.onclick = () => {
//   h1Tag.style.color = "green"
//   h1Tag.style.background = "Black"
// }

// let h2Tag = document.getElementById("greet")
// h2Tag.ondblclick = () => {
//   h2Tag.style.border = "2px dotted blue"
// }

// //!addEventListiner(fn,event,useCapture)
// let paraTag = document.getElementById("para")
// paraTag.addEventListener("click", () => {
//   paraTag.style.color = "Yellow"
//   paraTag.style.background = "lightblue"
// })

// let pTag = document.getElementById("request")
// pTag.addEventListener("dblclick", () => {
//   pTag.style.color = "white"
//   pTag.style.background = "purple"
// })

//!Event Object
// let form = document.querySelector('form')
// form.addEventListener("submit", (e) => {
//   e.preventDefault()
//   console.log(e)
//   console.log(e.target)
//   console.log(e.type);
//   console.log(e.target[1].value)
//   console.log(e.target[2].value)
//   console.log("Logged in Successfully 🥳")
// })


//!Focus,Input,Change,Blur
// let inputTag = document.getElementById("searchField");

//*Focus
// inputTag.addEventListener("focus", (e) => {
//   e.target.style.outline = "2px solid red"
// })

//*Input
// inputTag.addEventListener("input", (e) => {
//   console.log(e.target.value)
// })

//*change
// inputTag.addEventListener("change", (e) => {
//   e.target.style.height = "200px"
// })

//*Blur
// inputTag.addEventListener("blur", (e) => {
//   e.target.style.outline = "2px solid pink"
// })

// //!Keyup and KeyDown
// let textarea = document.querySelector("textarea");

//*Keyup
// textarea.addEventListener("keyup", (e) => {
//   console.log(e)
//   console.log("key is Up")
// })

//*KeyDown
// textarea.addEventListener("keydown", (e) => {
//   console.log(e)
//   console.log("Key is Down")
// })

//!DomContentloaded
// document.addEventListener("DOMContentLoaded", (e) => {
//   console.log(e)
//   console.log("")
// })

//!Event Propagation
//It is the process of travelling of events from one element to another.

//!Phases of Event Propagation

let outer = document.getElementById("outer")
let inner = document.getElementById("inner")

//*1)Event Bubbling phase
//Propagation of event from target element to parent elements.
// outer.addEventListener("click", () => {
//   alert("outer Box Clicked 💗")
// }, false)

// inner.addEventListener("click", () => {
//   alert("inner Box Clicked 😊")
// }, false)

//*2)Event Capturing phase
//Propagation of event from parent elements to target element.
// outer.addEventListener("click", () => {
//   alert("outer Box Clicked 💗")
// }, true)

// inner.addEventListener("click", () => {
//   alert("inner Box Clicked 😊")
// }, true)

//!Interview
//IF one is true and another is false it always starts from true value.
// If both are true it starts from parent to child.
//  If both are false it starts from child to parent.

// outer.addEventListener("click", () => {
//   alert("outer Box Clicked 💗")
// }, false)

// inner.addEventListener("click", () => {
//   alert("inner Box Clicked 😊")
// }, true)

//!StopPropagation
// outer.addEventListener("click", () => {
//   alert("outer Box Clicked 💗")
// }, false)

// inner.addEventListener("click", (e) => {
//   alert("inner Box Clicked 😊")
//   e.stopPropagation()
// }, false)

//!Event Delegation
let courses = document.getElementById("courses")
courses.addEventListener("click", (e) => {
  console.log(e.target.innerHTML)
})