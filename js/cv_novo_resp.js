/* Zoom Marcos´s picture */

const boxHeader = document.getElementById("photoMarcosHeaderBox");
const imgHeader = document.getElementById("photoMarcosHeaderID");

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

/* Zoom Facebook Icon */

const boxFace = document.getElementById("footerFacebookIcon");
const imgFace = document.getElementById("faceIcon");

boxFace.addEventListener("mousemove", (e) =>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    imgFace.style.transformOrigin = '${x}px ${y}px';
    imgFace.style.transform = "scale(1.5)";
});

boxFace.addEventListener("mouseleave", () => {
    imgFace.style.transformOrigin = "center center";
    imgFace.style.transform = "scale(1)";
});

/* Zoom Linkedin Icon */

const boxLinkedin = document.getElementById("footerLinkedinIcon");
const imgLinkedin = document.getElementById("linkedinIcon");

boxLinkedin.addEventListener("mousemove", (e) =>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    imgLinkedin.style.transformOrigin = '${x}px ${y}px';
    imgLinkedin.style.transform = "scale(1.5)";
});

boxLinkedin.addEventListener("mouseleave", () => {
    imgLinkedin.style.transformOrigin = "center center";
    imgLinkedin.style.transform = "scale(1)";
});

/* Zoom Instagram Icon */

const boxInstagram = document.getElementById("footerInstagramIcon");
const imgInstagram = document.getElementById("instagramIcon");

boxInstagram.addEventListener("mousemove", (e) =>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    imgInstagram.style.transformOrigin = '${x}px ${y}px';
    imgInstagram.style.transform = "scale(1.5)";
});

boxInstagram.addEventListener("mouseleave", () => {
    imgInstagram.style.transformOrigin = "center center";
    imgInstagram.style.transform = "scale(1)";
});

/* Zoom Site Icon */

const boxSite = document.getElementById("footerSiteIcon");
const imgSite = document.getElementById("siteIcon");

boxSite.addEventListener("mousemove", (e) =>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    imgSite.style.transformOrigin = '${x}px ${y}px';
    imgSite.style.transform = "scale(1.5)";
});

boxSite.addEventListener("mouseleave", () => {
    imgSite.style.transformOrigin = "center center";
    imgSite.style.transform = "scale(1)";
});

/* Zoom Whatsapp Icon */

const boxWhatsapp = document.getElementById("footerWhatsappIcon");
const imgWhatsapp = document.getElementById("whatsappIcon");

boxWhatsapp.addEventListener("mousemove", (e) =>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    imgWhatsapp.style.transformOrigin = '${x}px ${y}px';
    imgWhatsapp.style.transform = "scale(1.5)";
});

boxWhatsapp.addEventListener("mouseleave", () => {
    imgWhatsapp.style.transformOrigin = "center center";
    imgWhatsapp.style.transform = "scale(1)";
});

/* Zoom E-mail Icon */

const boxEmail = document.getElementById("footerEmailIcon");
const imgEmail = document.getElementById("emailIcon");

boxEmail.addEventListener("mousemove", (e) =>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    imgEmail.style.transformOrigin = '${x}px ${y}px';
    imgEmail.style.transform = "scale(1.5)";
});

boxEmail.addEventListener("mouseleave", () => {
    imgEmail.style.transformOrigin = "center center";
    imgEmail.style.transform = "scale(1)";
});

/* Zoom download CV Icon */

const boxCV = document.getElementById("footerCVIcon");
const imgCV = document.getElementById("cvIcon");

boxCV.addEventListener("mousemove", (e) =>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    imgCV.style.transformOrigin = '${x}px ${y}px';
    imgCV.style.transform = "scale(1.5)";
});

boxCV.addEventListener("mouseleave", () => {
    imgCV.style.transformOrigin = "center center";
    imgCV.style.transform = "scale(1)";
});


