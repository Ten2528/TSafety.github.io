const downloadBtn = document.querySelector(".download-btn");
//google drive's file link
const fileLink = "https://drive.google.com/uc?export=download&id=1h5hNCZWpuM2ZribRuAYASj5v6afh7oif";

const initTimer = () => {
    //if downloadBtn contains disable-timer class then only if conditional code will run
    if (downloadBtn.classList.contains("disable-timer")) {
        return (location.href = fileLink);
    }
    //getting data-timer attribute from HTML
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    //replacing downladBtn's html by fllowing text
    downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`;

    //creating initCounter variable with setInterval function
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