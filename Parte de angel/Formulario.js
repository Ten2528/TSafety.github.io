const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

      //   Este es el codigo para mostrar/ocultar contraseña y cambiar icono
      pwShowHide.forEach(eyeIcon =>{
          eyeIcon.addEventListener("click",()=>{
              pwFields.forEach(pwField =>{
                  if(pwField.type ==="password"){
                      pwField.type = "text";

                      pwShowHide.forEach(icon =>{
                          icon.classList.replace("uil-eye-slash","uil-eye");
                      })
                  }else{
                      pwField.type = "password";

                      pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye","uil-eye-slash");
                    })
                  }   
              })
          })
      })


      // esto es para que aparezca el formulario de registro e inicio de sesión
      signUp.addEventListener("click",()=>{
        container.classList.add("active");
      });
      login.addEventListener("click",()=>{
        container.classList.remove("active");
      });