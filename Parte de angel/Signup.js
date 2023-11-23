// Esta es la seleccion de los elementos del form y input 
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

// Funcion para mostrar los mensajes de error 
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

// Esta es la funcion para gestionar el envio del formulario
const handleFormData = (e) => {
    e.preventDefault();

    // Recuperación de elementos de entradas 
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const dateInput = document.getElementById("date");
    const genderInput = document.getElementById("gender");

    //Esta funcion creo que es para obtener los valore recortados de los campos de entrada
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const date = dateInput.value;
    const gender = genderInput.value;

    // Aquí esta el patron para la validación del correo electronico
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Esto es para borrar mensajes anteriores de error
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

  // Estas son las comprabaciones de validación
    if (fullname === "") {
        showError(fullnameInput, "Enter your full name");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }
    if (password === "") {
        showError(passwordInput, "Enter your password");
    }
    if (date === "") {
        showError(dateInput, "Select your date of birth");
    }
    if (gender === "") {
        showError(genderInput, "Select your gender");
    }

    // Esta es la comprobación de los errores restantes antes de enviar el formulario
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // Envio del formulario 
    form.submit();
}

// Cambiar la visibilidad de la contraseña
passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

// Este es el evento de envió de formulario
form.addEventListener("submit", handleFormData);