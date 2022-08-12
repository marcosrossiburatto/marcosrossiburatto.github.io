screen = document.getElementsByTagName("body") [0];

let header = document.createElement('header');

screen.appendChild(header);

let headerDiv = document.createElement('div');
header.appendChild(headerDiv).className = "container";

let imageTitle = document.createElement("div");
headerDiv.appendChild(imageTitle).id = "imageTitleSection"

let image = document.createElement('img');
imageTitle.appendChild(image).id = "headerContainerImage";
imageTitle.appendChild(image).className = "header__container__image";
image.src = "../images/personal/Marcos20191106A.jpg";
image.alt = "logo";

let titleDiv = document.createElement('div');
imageTitle.appendChild(titleDiv).className = "title__section";

subTitleDiv = document.createElement('div');
titleDiv.appendChild(subTitleDiv).className = "title__section__name";
titleDiv.appendChild(subTitleDiv).textContent = "marcos rossi buratto";
subTitleSpan = document.createElement('span');
subTitleDiv.appendChild(subTitleSpan).id = "titleSectionName";

subTitleDiv = document.createElement('div');
titleDiv.appendChild(subTitleDiv).className = "title__section__divisor";
titleDiv.appendChild(subTitleDiv).textContent = "_________________________";
subTitleSpan = document.createElement('span');
subTitleDiv.appendChild(subTitleSpan).id = "titleSectionDivisor";

subTitleDiv = document.createElement('div');
titleDiv.appendChild(subTitleDiv).className = "title__section__subject";
titleDiv.appendChild(subTitleDiv).textContent = "biblioteca";
subTitleSpan = document.createElement('span');
subTitleDiv.appendChild(subTitleSpan).id = "titleSectionSubject";

let menuDiv = document.createElement('div');
headerDiv.appendChild(menuDiv).className = "menu__section";

let containerMenu = document.createElement('div');
menuDiv.appendChild(containerMenu).className = "container__menu";

let checkboxMenu = document.createElement('input');
containerMenu.appendChild(checkboxMenu).type = "checkbox";
containerMenu.appendChild(checkboxMenu).id = "checkbox-menu";

let labelCheckboxMenu = document.createElement('label');
containerMenu.appendChild(labelCheckboxMenu).className = "menu__button__container";
containerMenu.appendChild(labelCheckboxMenu).htmlFor = "checkbox-menu";

let spanLabelCheckboxMenu = document.createElement('span');
labelCheckboxMenu.appendChild(spanLabelCheckboxMenu).id = "checkboxSpan01";

spanLabelCheckboxMenu = document.createElement('span');
labelCheckboxMenu.appendChild(spanLabelCheckboxMenu).id = "checkboxSpan02";

spanLabelCheckboxMenu = document.createElement('span');
labelCheckboxMenu.appendChild(spanLabelCheckboxMenu).id = "checkboxSpan03";

let aside = document.createElement('aside');
containerMenu.appendChild(aside).id = "n01";

let ul = document.createElement('ul');
aside.appendChild(ul).className = "menu";

let li = document.createElement('li');
ul.appendChild(li).id = "n04";

let aLi = document.createElement('a')
li.appendChild(aLi).href = "#";
li.appendChild(aLi).textContent = "Home";

li = document.createElement('li');
ul.appendChild(li).id = "n05";

aLi = document.createElement('a')
li.appendChild(aLi).href = "#";
li.appendChild(aLi).textContent = "Configurações";

li = document.createElement('li');
ul.appendChild(li).id = "n06";

aLi = document.createElement('a')
li.appendChild(aLi).href = "#";
li.appendChild(aLi).textContent = "Contato";


