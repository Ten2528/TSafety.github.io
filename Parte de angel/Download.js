const downloadBtn = document.querySelector(".download-btn");
//Este es el link de descarga de google drive
const fileLink = "https://drive.google.com/uc?export=download&id=1h5hNCZWpuM2ZribRuAYASj5v6afh7oif";

const initTimer = () => {
    //Por lo que tengo entendido si downloadBtn contiene disable-timer entonces solo se ejecutara la condicional?
    if(downloadBtn.classList.contains("disable-timer")) {
        return location.href = fileLink;
    }
    //El atributo data timer de html
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    //Esto es para reemplazar el downloadbtn del html 
    downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;

    //Aquí creamos la variable initcounter con set Interval 
    const initCounter = setInterval(() => {
        if(timer > 0) {
            timer--;
            return downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.innerText = "Your file is downloading...";
        setTimeout(() => {
            downloadBtn.classList.replace("timer", "disable-timer");
            downloadBtn.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                                     <span class="text">Download Again</span>`;
        }, 3000);
    }, 1000);
}

downloadBtn.addEventListener("click", initTimer);