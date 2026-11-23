// //!DOM
// // DOM stands for Document Object Model
// // DOM represents Html document into a tree like structure of objects.
// // DOM is created whenever our webpage reloads.
// // DOM helps to access,modify,add,delete,style... html elements
// // document - represents dom

// //!Document
// console.log(document)

// //!Access the elements

// //*1)getElementById()
// let h1Tag = document.getElementById("heading")
// console.log(h1Tag)

// let paraTag = document.getElementById("para")
// console.log(paraTag)

// //*2)getElementsByClassName()
// let images = document.getElementsByClassName("poster")
// console.log(images)

// //*3)getElementsByTagName()
// let inputs = document.getElementsByTagName("input")
// console.log(inputs)

// //*4)querySelector()

// //@Id
// let headingTag1 = document.querySelector("#heading")
// console.log(headingTag1)
// //@class
// let poster1 = document.querySelector(".poster")
// console.log(poster1)
// //@Tag
// let inputTag1 = document.querySelector("input")
// console.log(inputTag1)

// //*5)querySelectorAll()

// //@Id
// let headingTag2 = document.querySelectorAll("#heading")
// console.log(headingTag2)
// //@class
// let poster2 = document.querySelectorAll(".poster")
// console.log(poster2)
// //@Tag
// let inputTag2 = document.querySelectorAll("input")
// console.log(inputTag2)

//!Accessing and changing text content

//*Accessing
// let pTag = document.getElementById("para")
// console.log(pTag)
// console.log(`innerText: ${pTag.innerText}`)
// console.log(`textContent: ${pTag.textContent}`)
// console.log(`innerHTML: ${pTag.innerHTML}`)

//*changing
// let divTag = document.querySelector("#content")
// console.log(divTag)
// divTag.innerText = "Hello from innerText"
// divTag.textContent = "Hello from textContent"
// divTag.innerHTML = `<h1>Hello from innerHTML</h1>
// <p>This is a sample paragraph</p>
// <button>Click</button>`

//!Stylings

// //*Single
// let h2Tag = document.getElementById("greet")
// console.log(h2Tag)
// h2Tag.style.color = "white"
// h2Tag.style.backgroundColor = "black"

// //*collection
// let headingTag2 = document.querySelectorAll("#greet")
// console.log(headingTag2)
// for (let i = 0; i < headingTag2.length; i++) {
//   headingTag2[i].style.color = "yellow"
//   headingTag2[i].style.backgroundColor = "black"
// }

//!Working with attributes
// let h1Tag = document.querySelector("h1")
// console.log(h1Tag)

//*setAttribute(attribute,value)
// h1Tag.setAttribute("id", "hello")
// h1Tag.setAttribute("class", "heyy")
// h1Tag.setAttribute("style", "color:blue")

//*getAttribute(attribute)
// console.log(h1Tag.getAttribute("id"))
// console.log(h1Tag.getAttribute("class"))
// console.log(h1Tag.getAttribute("style"))
// console.log(h1Tag.getAttribute("title")) //null

//*removeAttribute(attribute)
// h1Tag.removeAttribute("style")
// h1Tag.removeAttribute("class")
// h1Tag.setAttribute("style", "color:purple")

//!classList
// function dealWithClass() {
//   let paraTag = document.getElementById("para")
//   console.log(paraTag)
//   //*add()
//   paraTag.classList.add("coffee", "tea", "boost")
//   //*remove()
//   paraTag.classList.remove("tea")
//   //*toggle()
//   paraTag.classList.toggle("ginger")//add
//*contains()
//   console.log(paraTag.classList.contains("coffee"))//true
//   console.log(paraTag.classList.contains("tea"))//false
//   console.log(paraTag.classList.contains("ginger"))//true
// }

//!Creating ,Adding and Deleting Elements

//*createElement()
let h1Element = document.createElement("h1")
let paraElement = document.createElement("p")
let btnElement = document.createElement("button")
h1Element.innerText = "Heading"
paraElement.innerText = "This is a sample para"
btnElement.innerText = "click"
console.log(h1Element)
console.log(paraElement)
console.log(btnElement)

//*append()
document.body.append(h1Element, paraElement, btnElement)
//*prepend()
document.body.prepend(h1Element, paraElement, btnElement)
//*remove()
// paraElement.remove()

//!DOM Traversing

//*parentElement
console.log(document.body.parentElement)

//*children
console.log(document.body.children)

//*firstElementChild
console.log(document.body.firstElementChild)

//*lastElementChild
console.log(document.body.lastElementChild)

//*lastElementChild
console.log(document.body.lastElementChild)

//*nextElementSibling
console.log(document.body.firstElementChild.nextElementSibling)

//*previousElementSibling
console.log(document.body.lastElementChild.previousElementSibling)
