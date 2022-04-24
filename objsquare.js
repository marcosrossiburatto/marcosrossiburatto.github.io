
function start() {
  screen = document.getElementsByTagName("body") [0];
  screen.style.textAlign = "center";
  
  titleText();
  sequenciaBox();
  groupMouseOver()
  groupMouseOut()
  groupMouseClick()
}

  window.addEventListener("load", start, false);

