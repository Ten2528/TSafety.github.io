const btnSignIn = document.getElementById("sign-in"),
      btnSignup = document.getElementById("sign-up"),
      formRegister = document.querySelector(".register"),
      forLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
})