const downloadBtn = document.querySelector(".download-btn");
//Este es el link de descarga de google drive 
const fileLink = "https://drive.google.com/uc?export=download&id=1h5hNCZWpuM2ZribRuAYASj5v6afh7oif";

const initTimer = () => {
    //Por lo que tengo entendido si downloadBtn contiene disable-timer entonces solo se ejecutura la condicional?
    if (downloadBtn.classList.contains("disable-timer")) {
        return (location.href = fileLink);
    }
    //El atributo data timer de html
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    //Esto es para reemplazar el downloadbtn del html
    downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`;

    // Aquí Creamos la variable initcounter con set interval
    const initCounter = setInterval(() => {
        if(timer > 0){
        timer--;
        return (downloadBtn.innerHTML `Your file will download in  <b>${timer}</b>seconds`); 
        }
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.textContent ="Your file is downloading...";

        setTimeout(() => {
            downloadBtn.classList.replace("timer","disable-timer");
            downloadBtn.innerHTML =`<span class=" icon material-symbols-outlined">vertical_align_bottom</span>
            <span class="text">Download again </span>`;
        },3000);
    },1000); //1000 milliseconds=1seg
};


downloadBtn.addEventListener("click", initTimer);