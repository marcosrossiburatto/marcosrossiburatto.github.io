const boxHeader = document.getElementById("photoMarcosHeader");
const imgHeader = document.querySelector("img");

boxHeader.addEventListener("mousemove", (e) =>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    imgHeader.style.transformOrigin = '${x}px ${y}px';
    imgHeader.style.transform = "scale(2)";
});

boxHeader.addEventListener("mouseleave", () => {
    imgHeader.style.transformOrigin = "center center";
    imgHeader.style.transform = "scale(1)";
});
