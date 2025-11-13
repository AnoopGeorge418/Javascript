document.addEventListener("DOMContentLoaded", () => {
    const mainContainer = document.querySelector(".mainContainer");

    const themeChanger = document.createElement("button");
    themeChanger.classList.add("themeChanger");
    themeChanger.innerText = "Darkmode"

    themeChanger.addEventListener("click" , () => {
        if ( themeChanger.innerText === "Darkmode" ) {
            document.body.style.backgroundColor = "black";
            mainContainer.style.color = "white";
            themeChanger.innerText = "Lightmode";
        } else {
            document.body.style.backgroundColor = "white";
            mainContainer.style.color = 'black';
            themeChanger.innerText = "Darkmode";
        }
    });

    document.body.appendChild(themeChanger);

    setInterval(() => {
        let date = new Date();
        const hour = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
    
        mainContainer.textContent = `${hour}:${minutes}:${seconds}`;
    }, 1000);
});
