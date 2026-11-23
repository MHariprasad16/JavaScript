//!BOM
//Bom stands for Browser object model.
//Bom allows jvascript to "talk" to the browser and do things like open new windows, get the browser version, history, etc.
//Bom provides information related to browser(height,width,navigatinf,dialog etc...)
//Bom provided by the browser to javascript
//to interact with our browser we have window object

//!Window
// console.log(window)
//!Alert
let bom1 = () => {
  alert("Heyy Brother..💗")
}

//!Confirm
let bom2 = () => {
  confirm("How are youu..?")
}

//!Alert and Confirm
let bom3 = () => {
  let result = confirm("Really are you finee..?")
  if (result) {
    alert("Good to hear that..😀")
  }
  else {
    alert("Ohh..😔")
  }
}

//!Prompt
let bom4 = () => {
  let num1 = Number(prompt("Enter num 1", 0))
  let num2 = Number(prompt("Enter num 2", 0))
  console.log(num1 + num2)

}

//!open()
let a;
let bom5 = () => {
  a = open("https://www.flipkart.com", "_blank", "height=400,width=500,left=200,top=200")
}

//!close
let bom6 = () => {
  a.close()
}
//!Print
let bom7 = () => {
  print()
}

//!linnerHeight and outerHeight 
console.log(`innerHeight: ${innerHeight}`)
console.log(`outerHeight: ${outerHeight}`)

//!linnerWidth and outerWidth
console.log(`innerWidth: ${innerWidth}`)
console.log(`outerWidth: ${outerWidth}`)

//!Location object
console.log(location)

//*href
console.log(location.href)

//*host
console.log(location.host)
//*hostname
console.log(location.hostname)

//*port
console.log(location.port)

//*protocol
console.log(location.protocol)

//*reload
let bom8 = () => {
  location.reload()
}
//*assign
let bom9 = () => {
  location.assign("https://www.youtube.in")
}
//*replace
let bom10 = () => {
  location.replace("https://www.amazon.com/")
}

//!History object

//*length
console.log(history.length)

//*forward()
let bom11 = () => {
  history.forward()
}

//*back()
let bom12 = () => {
  history.back()
}

//*go() --forward 
let bom13 = () => {
  history.go(2)
}

//*go() --back
let bom14 = () => {
  history.go(-2)
}

//!Navigator object

//*onLine
console.log(navigator.onLine)

//*languages
console.log(navigator.languages)

//*geolocation
let bom15 = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
  })
}

//!Web Storage System

//!sessionStorage

//*setItem
sessionStorage.setItem("name", "hari")
sessionStorage.setItem("age", "22")
sessionStorage.setItem("place", "Mtpl")

//*getItem
console.log(sessionStorage.getItem("name"))
console.log(sessionStorage.getItem("age"))
console.log(sessionStorage.getItem("isMarried"))

//*removeItem
sessionStorage.removeItem("place")

//*clear
sessionStorage.clear()


//!localStorage

//*setItem
localStorage.setItem("name", "hari")
localStorage.setItem("age", "22")
localStorage.setItem("place", "Mtpl")

//*getItem
console.log(localStorage.getItem("name"))
console.log(localStorage.getItem("age"))
console.log(localStorage.getItem("isMarried"))

//*removeItem
localStorage.removeItem("place")

//*clear
localStorage.clear()






