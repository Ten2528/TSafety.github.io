const cookieBox = document.querySelector(".wrapper"),
buttons = document.querySelectorAll(".button");

const executeCodes = () => {
    // Esto es para que la cookie solo se muestre una vez si contiene "AngelitoTenuncio " se devolvera y no se ejecutara
    if(document.cookie.includes("Codinglab")) return;
     cookieBox.classList.add("show");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");

            //if button has acceptBtn id
            if(button.id == "acceptBtn"){
               //set cookies for 1 month. 60 = 1min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
               document.cookie = "cookieBy= pipipi; max-age="+ 60 * 60 * 24 * 30;
            }
        });
    });
};

// Esto es para que la funcíon se ejecute al cargar la página web
window.addEventListener("load", executeCodes);