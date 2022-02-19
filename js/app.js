// add click event
document.getElementById("login").addEventListener("click", function () {
  // get user email
  const emailFild = document.getElementById("user-email");
  const userEmail = emailFild.value;
  //   get user password
  const passwordFild = document.getElementById("user-password");
  const userPassword = passwordFild.value;
  //   login condition
  if (userEmail == "admin@email.com" && userPassword == "Admin") {
    window.location.href = "banking.html";
  } else {
    alert("wrong password");
  }
});
