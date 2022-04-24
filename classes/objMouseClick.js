      
const groupMouseClick = () => {

      nod0.addEventListener("click", click0, false);
      nod1.addEventListener("click", click1, false);
      nod2.addEventListener("click", click2, false);
      nod3.addEventListener("click", click3, false);
      nod4.addEventListener("click", click4, false);
      nod5.addEventListener("click", click5, false);
      nod6.addEventListener("click", click6, false);
      nod7.addEventListener("click", click7, false);
      nod8.addEventListener("click", click8, false);
      nod9.addEventListener("click", click9, false);
      nodAC.addEventListener("click", clickAC, false);
      nodRQ.addEventListener("click", clickRQ, false);
      nodEXP.addEventListener("click", clickEXP, false);
      nodDIV.addEventListener("click", clickDIV, false);
      nodMULT.addEventListener("click", clickMULT, false);
      nodSUB.addEventListener("click", clickSUB, false); 
      nodADI.addEventListener("click", clickADI, false);
      nodDOT.addEventListener("click", clickDOT, false);
      nodIGU.addEventListener("click", clickIGU, false);     
}

var join = "0";
var comando = "";
let elemAA = "";
let elemBB = "";

const click0 = () => {
      nod0.elected = !nod0.elected;

      if (comando == "") {
            elemAA = elemAA + "0";
      } else if (comando !== "") {
            elemBB = elemBB + "0";
      }

      nodVIS.textContent = (`${elemAA} ${comando} ${elemBB}`);
}

const click1 = () => {
      nod1.elected = !nod1.elected;

      if (comando == "") {
            elemAA = elemAA + "1";
      } else if (comando !== "") {
            elemBB = elemBB + "1";
      }

      nodVIS.textContent = (`${elemAA} ${comando} ${elemBB}`);
}

const click2 = () => {
      nod2.elected = !nod2.elected;

      if (comando == "") {
            elemAA = elemAA + "2";
      } else if (comando !== "") {
            elemBB = elemBB + "2";
      }

      nodVIS.textContent = (`${elemAA} ${comando} ${elemBB}`);
}

const click3 = () => {
      nod3.elected = !nod3.elected;
      
      if (comando == "") {
            elemAA = elemAA + "3";
      } else if (comando !== "") {
            elemBB = elemBB + "3";
      }

      nodVIS.textContent = (`${elemAA} ${comando} ${elemBB}`);
}

const click4 = () => {
      nod4.elected = !nod4.elected;
      
      if (comando == "") {
            elemAA = elemAA + "4";
      } else if (comando !== "") {
            elemBB = elemBB + "4";
      }

      nodVIS.textContent = (`${elemAA} ${comando} ${elemBB}`);
}

const click5 = () => {
      nod5.elected = !nod5.elected;
      
      if (comando == "") {
            elemAA = elemAA + "5";
      } else if (comando !== "") {
            elemBB = elemBB + "5";
      }

      nodVIS.textContent = (`${elemAA} ${comando} ${elemBB}`);
}

const click6 = () => {
      nod6.elected = !nod6.elected;
      
      if (comando == "") {
            elemAA = elemAA + "6";
      } else if (comando !== "") {
            elemBB = elemBB + "6";
      }

      nodVIS.textContent = (`${elemAA} ${comando} ${elemBB}`);
}

const click7 = () => {
      nod7.elected = !nod7.elected;
      
      if (comando == "") {
            elemAA = elemAA + "7";
      } else if (comando !== "") {
            elemBB = elemBB + "7";
      }

      nodVIS.textContent = (`${elemAA} ${comando} ${elemBB}`);
}

const click8 = () => {
      nod8.elected = !nod8.elected;
      
      if (comando == "") {
            elemAA = elemAA + "8";
      } else if (comando !== "") {
            elemBB = elemBB + "8";
      }

      nodVIS.textContent = (`${elemAA} ${comando} ${elemBB}`);
}

const click9 = () => {
      nod9.elected = !nod9.elected;
      
      if (comando == "") {
            elemAA = elemAA + "9";
      } else if (comando !== "") {
            elemBB = elemBB + "9";
      }

      nodVIS.textContent = (`${elemAA} ${comando} ${elemBB}`);
}

const clickAC = () => {
      nodAC.elected = !nodAC.elected;

      elemAA = "";
      elemBB = "";
      comando = "";

      if ((elemAA == "" && elemBB == "" && comando == "")) {
            nodVIS.textContent = ("0");
      } else {
      nodVIS.textContent = (`${elemAA} ${comando} ${elemBB}`);
      };
};

const clickRQ = () => {
      nodRQ.elected = !nodRQ.elected;

      if (comando == "") {
            if (elemAA == "") {
                  nodVIS.textContent = ('insira um número');
            } else {
                  nodVIS.textContent = (Math.sqrt(parseFloat(elemAA)));
            }
      } else {
            nodVIS.textContent = (Math.sqrt(parseFloat(elemAA)));
      };
};

const clickEXP = () => {
      nodEXP.elected = !nodEXP.elected;

      if (comando == "") {
            if (elemAA == "") {
                  nodVIS.textContent = ('insira um número');
            } else {
                  comando = "^";
                  coman = "exp"
            }
      } else {
            comando = "^";
            coman = "exp";
            elemBB = "";
      }

      nodVIS.textContent = (`${elemAA} ${comando} ${elemBB}`);
};

const clickDIV = () => {
      nodDIV.elected = !nodDIV.elected;

      if (comando == "") {
            if (elemAA == "") {
                  nodVIS.textContent = ('insira um número');
            } else {
                  comando = "÷";
                  coman = "div"
            }
      } else {
            comando = "÷";
            coman = "div";
            elemBB = "";
      }

      nodVIS.textContent = (`${elemAA} ${comando} ${elemBB}`);
};

const clickMULT = () => {
      nodMULT.elected = !nodMULT.elected;

      if (comando == "") {
            if (elemAA == "") {
                  nodVIS.textContent = ('insira um número');
            } else {
                  comando = "x";
                  coman = "mult";
            }
      } else {
            comando = "x";
            coman = "mult";
            elemBB = "";
      }

      nodVIS.textContent = (`${elemAA} ${comando} ${elemBB}`);
};

const clickSUB = () => {
      nodSUB.elected = !nodSUB.elected;
      
      if (comando == "") {
            if (elemAA == "") {
                  nodVIS.textContent = ('insira um número');
            } else {
                  comando = "-";
                  coman = "sub";
            }
      } else {
            comando = "-";
            coman = "sub";
            elemBB = "";
      }

      nodVIS.textContent = (`${elemAA} ${comando} ${elemBB}`);
};

const clickADI = () => {
      nodADI.elected = !nodADI.elected;

      if (comando == "") {
            if (elemAA == "") {
                  nodVIS.textContent = ('insira um número');
            } else {
                  comando = "+";
                  coman = "adi";
            }
      } else {
            comando = "+";
            coman = "adi";
            elemBB = "";
      }

      nodVIS.textContent = (`${elemAA} ${comando} ${elemBB}`);
};

const clickDOT = () => {
      nodDOT.elected = !nodDOT.elected;

      if (comando == "") {
            if (elemAA !== "") {
                  elemAA = elemAA + ".";
            } else {
                  elemAA = elemAA + "0.";
            };

      } else if (comando !== "") {
            if (elemBB !== "") {
                  elemBB = elemBB + ".";
            } else {
                  elemBB = elemBB + "0.";
            };
      };

      nodVIS.textContent = (`${elemAA} ${comando} ${elemBB}`);
};

const clickIGU = () => {
      nodIGU.elected = !nodIGU.elected;

      if (elemAA == "" || elemBB == "") {
            nodVIS.textContent = ("Faltou componente");  
      } else {
            elemA = parseFloat(elemAA);
            elemB = parseFloat(elemBB);

            if (coman === "adi") {
                  nodVIS.textContent = (elemA + elemB);
            } else if (coman == "sub") {
                  nodVIS.textContent = (elemA - elemB);
            } else if (coman == "mult") {
                   nodVIS.textContent = (elemA * elemB);
            } else if (coman == "div") {
                   nodVIS.textContent = (elemA / elemB);
            } else if (coman == "exp") {
                   nodVIS.textContent = (elemA ** elemB);
            }

            elemAA = "";
            elemBB = "";
            comando = "";
      }
};

