//!4)for-in-loop--itterate over object keys
let user = {
  name: "sai",
  age: 21,
  isMarried: false
}
for (let keys in user) {
  console.log(keys)
  console.log(user[keys])
}
//!5)for-of-loops --itterate over the variable of string and array
let str = "haii"
let arr = ["html", "css", "js"]

for (let character of str) {
  console.log(character)
}
for (let elements of arr) {
  console.log(elements)
}

