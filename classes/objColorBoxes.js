function titleText() {
  
    var ethText = "Calculadora Experimental";  
    
    eth = document.createElement ("div");
    eth.style.height = "20px";
    eth.style.marginLeft = "28%";
    eth.style.border = "solid #ff0000";
    eth.style.borderWidth = "6px";
    eth.style.borderRadius = "10%"
    eth.style.textAlign = "center";
    eth.style.paddingTop = "5px";
    eth.style.paddingBottom = "15px";
    eth.style.color = "#11607c";
    eth.style.width = "40%";
    eth.style.marginTop = "30px";
    eth.style.marginBottom = "0%";  
    eth.style.fontSize = "2vw";
    eth.style.fontWeight = "800";
    eth.textContent = ethText
    screen.appendChild(eth);
}

function nodisks() {
      nod = document.createElement ("div");
      nod.style.borderWidth = "6px";
      nod.style.borderRadius = "25%";
      nod.style.fontWeight = "800";
      nod.style.backgroundColor = "#EBEBE8"; 
      nod.style.float = "left";
      nod.style.minWidth = "5%";
      nod.style.maxWidth = "5%";
      nod.style.minHeight = "20px";
      nod.style.maxHeight = "20px";
      nod.style.padding = "0px 0 18px 0";
      nod.style.fontSize = "210%";
      nod.style.margin = "3px -31.5% 3px 34%";
};

function colorDisks01() {
      nodisks();
      colorBox = "1";
      nod.style.border = "solid #6B8903";
      nod.style.color = "#6B8903";
      nod1 = nod;
      nod1.textContent = "1";
      screen.appendChild(nod1);
};

function colorDisks02() {
      nodisks();
      colorBox = "2";
      nod.style.border = "solid #075025";
      nod.style.color = "#075025";
      nod2 = nod;
      nod2.textContent = "2";
      screen.appendChild(nod2);
};

function colorDisks03() {
      nodisks();
      colorBox = "3";
      nod.style.border = "solid #890348";
      nod.style.color = "#890348";
      nod3 = nod;
      nod3.textContent = "3";
      screen.appendChild(nod3);
};

function colorDisks04() {
      nodisks();
      colorBox = "4";
      nod.style.border = "solid #770389";
      nod.style.color = "#770389";
      nod4 = nod;
      nod4.textContent = "4";
      screen.appendChild(nod4);
};

function colorDisks05() {
      nodisks();
      colorBox = "5";
      nod.style.border = "solid #4C0389";
      nod.style.color = "#4C0389";
      nod5 = nod;
      nod5.textContent = "5";
      screen.appendChild(nod5);
};

function colorDisks06() {
      nodisks();
      colorBox = "6";
      nod.style.border = "solid #110389";
      nod.style.color = "#110389";
      nod6 = nod;
      nod6.textContent = "6";
      screen.appendChild(nod6);
};

function colorDisks07() {
      nodisks();
      colorBox = "7";
      nod.style.border = "solid #037989";
      nod.style.color = "#037989";
      nod7 = nod;
      nod7.textContent = "7";
      screen.appendChild(nod7);
};

function colorDisks08() {
      nodisks();
      colorBox = "8";
      nod.style.border = "solid #038956";
      nod.style.color = "#038956";
      nod8 = nod;
      nod8.textContent = "8";
      screen.appendChild(nod8);
};

function colorDisks09() {
      nodisks();
      colorBox = "9";
      nod.style.border = "solid #038905";
      nod.style.color = "#038905";
      nod9 = nod;
      nod9.textContent = "9";
      screen.appendChild(nod9);
};

function colorDisks00() {
      nodisks();
      colorBox = "0";
      nod.style.border = "solid #892B03";
      nod.style.color = "#892B03";
      nod0 = nod;
      nod0.textContent = "0";
      screen.appendChild(nod0);
};

function space() {
      spaceNol = document.createElement ("div");
      spaceNol.style.clear = "both";
      spaceNol.style.paddingTop = "5px";
      spaceNol.style.paddingBottom = "5px";
      screen.appendChild(spaceNol);
};

function space01() {
      spaceNol = document.createElement ("div");
      spaceNol.style.clear = "both";
      spaceNol.style.paddingTop = "25px";
      spaceNol.style.paddingBottom = "25px";
      screen.appendChild(spaceNol);
};

function nodisksEX() {
      nod = document.createElement ("div");
      nod.style.borderWidth = "6px";
      nod.style.borderRadius = "25%";
      nod.style.border = "solid #FFC300";
      nod.style.fontWeight = "800";
      nod.style.color = "#000";
      nod.style.backgroundColor = "#FFC300"; 
      nod.style.float = "left";
      nod.style.minWidth = "5%";
      nod.style.maxWidth = "5%";
      nod.style.minHeight = "20px";
      nod.style.maxHeight = "20px";
      nod.style.padding = "6px 0 13px 0";
      nod.style.fontSize = "160%"
      nod.style.margin = "3px -31.5% 3px 34%";
};

function colorDisksAC() {
      nodisksEX();
      colorBox = "AC";
      nodAC = nod;
      nodAC.textContent = "AC";
      screen.appendChild(nodAC);
};

function colorDisksRQ() {
      nodisksEX();
      colorBox = "RQ";
      nodRQ = nod;
      nodRQ.textContent = "√";
      screen.appendChild(nodRQ);
};

function colorDisksEXP() {
      nodisksEX();
      colorBox = "EXP";
      nod.style.paddingTop = "10px";
      nod.style.paddingBottom = "9px";
      nodEXP = nod;
      nodEXP.textContent = "^";
      screen.appendChild(nodEXP);
};

function colorDisksDIV() {
      nodisksEX();
      colorBox = "DIV";
      nodDIV = nod;
      nodDIV.textContent = "÷";
      screen.appendChild(nodDIV);
};

function colorDisksMULT() {
      nodisksEX();
      colorBox = "MULT";
      nod.style.paddingTop = "2px";
      nod.style.paddingBottom = "17px";
      nodMULT = nod;
      nodMULT.textContent = "x";
      screen.appendChild(nodMULT);
};

function colorDisksSUB() {
      nodisksEX();
      colorBox = "SUB";
      nod.style.paddingTop = "2px";
      nod.style.paddingBottom = "17px";
      nodSUB = nod;
      nodSUB.textContent = "-";
      screen.appendChild(nodSUB);
};

function colorDisksADI() {
      nodisksEX();
      colorBox = "ADI";
      nod.style.paddingTop = "5px";
      nod.style.paddingBottom = "14px";
      nodADI = nod;
      nodADI.textContent = "+";
      screen.appendChild(nodADI);
};

function colorDisksDOT() {
      nodisksEX();
      colorBox = "DOT";
      nodDOT = nod;
      nodDOT.textContent = ".";
      screen.appendChild(nodDOT);
};

function colorDisksIGU() {
      nodisksEX();
      colorBox = "IGU"
      nod.style.paddingTop = "5px";
      nod.style.paddingBottom = "14px";
      nod.style.minWidth = "12.7%";
      nod.style.maxWidth = "12.7%";
      nodIGU = nod;
      nodIGU.textContent = "=";
      screen.appendChild(nodIGU);
};

function colorDisksVIS() {
      nodisksEX();
      colorBox = "VIS";
      nod.style.backgroundColor = "#EBEBE8";
      nod.style.borderRadius = "5%";
      nod.style.minWidth = "24.8%";
      nod.style.maxWidth = "24.8%";
      nod.style.minHeight = "25px";
      nod.style.maxHeight = "25px";
      nodVIS = nod;
      nodVIS.textContent = join;
      nodVIS.style.textAlign = "right";
      nodVIS.style.padding = "6px 2% 13px 2%"
      screen.appendChild(nodVIS);
};

function sequenciaBox() {
      space01();
      colorDisksVIS();        //boxNumber = 01
      space();
      colorDisksAC();         //boxNumber = 02
      colorDisksRQ();         //boxNumber = 03
      colorDisksEXP();        //boxNumber = 04
      colorDisksDIV();        //boxNumber = 05
      space();
      colorDisks07();         //boxNumber = 06
      colorDisks08();         //boxNumber = 07
      colorDisks09();         //boxNumber = 08
      colorDisksMULT();       //boxNumber = 09
      space();
      colorDisks04();         //boxNumber = 10
      colorDisks05();         //boxNumber = 11
      colorDisks06();         //boxNumber = 12
      colorDisksSUB();        //boxNumber = 13
      space();
      colorDisks01();         //boxNumber = 14
      colorDisks02();         //boxNumber = 15
      colorDisks03();         //boxNumber = 16
      colorDisksADI();        //boxNumber = 17
      space();
      colorDisksDOT();        //boxNumber = 18
      colorDisks00();         //boxNumber = 19
      colorDisksIGU();        //boxNumber = 20
      space();
}
