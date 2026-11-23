let form = document.querySelector("form")
let nameField = document.getElementById("name")
let emailField = document.getElementById("email")
let phoneField = document.getElementById("phone")
let passwordField = document.getElementById("password")
let cpasswordField = document.getElementById("cpassword")
let passwordEye = document.getElementById("passwordEye")
let cpasswordEye = document.getElementById("cpasswordEye")
let errorInfo = document.getElementById("error_info")

//!Show/Hide Password Functionality
let isPasswordVisible = false;
passwordEye.addEventListener("click", () => {
  if (isPasswordVisible) {
    passwordField.type = "password"
    isPasswordVisible = false
    passwordEye.classList.replace("fa-eye-slash", "fa-eye")
  } else {
    passwordField.type = "text"
    isPasswordVisible = true
    passwordEye.classList.replace("fa-eye", "fa-eye-slash")
  }
})

//!Show/Hide Confirm Password Functionality
let isCPasswordVisible = false;
cpasswordEye.addEventListener("click", () => {
  if (isCPasswordVisible) {
    cpasswordField.type = "password"
    isCPasswordVisible = false
    cpasswordEye.classList.replace("fa-eye-slash", "fa-eye")
  } else {
    cpasswordField.type = "text"
    isCPasswordVisible = true
    cpasswordEye.classList.replace("fa-eye", "fa-eye-slash")
  }
})

//!Validation
form.addEventListener("submit", (e) => {
  e.preventDefault()
  let name = nameField.value.trim()
  let email = emailField.value.trim()
  let phone = phoneField.value.trim()
  let password = passwordField.value
  let cpassword = cpasswordField.value

  errorInfo.innerHTML = ""
  errorInfo.style.color = "red"

  //!Name Field Functionality
  if (name === "" || name.length < 3 || name.length > 10) {
    errorInfo.innerHTML = "Enter a valid name"
    return;
  }
  //!Email Field Functionality
  if (email === "" || !email.includes("@") || !email.endsWith(".com")) {
    errorInfo.innerHTML = "Enter a valid email"
    return;
  }
  //!Phone Field Functionality
  if (phone.length === "" || phone.length != 10 || isNaN(phone) || !phone.startsWith("9")) {
    errorInfo.innerHTML = "Enter a valid number"
    return;
  }
  //!Password Field Functionality
  if (password === "" || password.length < 6 || password.length > 15) {
    errorInfo.innerHTML = "Enter a valid password"
    return;
  }
  //!Confirm Password Field Functionality
  if (password != cpassword) {
    errorInfo.innerHTML = "Password donot match"
    return;
  }
  errorInfo.innerHTML = "Registration Successful ✅"
  errorInfo.style.color = "green"
})
