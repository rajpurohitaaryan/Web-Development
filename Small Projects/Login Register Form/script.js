console.log("-----Backend Started-----");
let savedemail = "";
let savedpass = "";

let btn = document.getElementById("sign-btn")
btn.addEventListener("click", () => {
  savedemail = document.getElementById("email").value
  savedpass = document.getElementById("password").value
  alert("You are Successfully Registered")
}
)
let email =document.getElementById("log-email")
let pass= document.getElementById("log-password")
let loginbtn =document.getElementById("login-btn")

loginbtn.addEventListener("click",() => {
  if (email.value === savedemail && pass.value === savedpass) {
    alert("You are successfully Loged In")
  } else {
    if (email.value != savedemail) {
      alert("Incorrect Email")
    } else {
      alert("Incorrect Password")
    }
  }
}
)