function tecmanFunction() {
  let tecmanDiv = document.createElement('div');
  tecmanDiv.className = 'tecman__div';

  let informationBlock = document.createElement('div');
  tecmanDiv.appendChild(informationBlock).className = 'information__block__tecman__title';

  let informationBlockAhref = document.createElement('a');
  informationBlock.appendChild(informationBlockAhref).className = 'information__block__ahref';
  // informationBlockAhref.href = '';
  informationBlockAhref.target = '_blank';
  informationBlockAhref.rel = 'noreferrer noopener';
  informationBlockAhref.title = '';

  let informationBlockImg = document.createElement('img');
  informationBlockAhref.appendChild(informationBlockImg).className = 'information__block__tecman__title__img';
  informationBlockImg.src = "./imgs/logos/Logo_Tecman.png";
  informationBlockImg.alt = "Logo Tecman Manutenção";

  let informationBlockDatas = document.createElement('div');
  informationBlock.appendChild(informationBlockDatas).className = 'information__block__tecman__title__datas';

  let informationBlockDate = document.createElement('p');
  informationBlockDate.className = 'information__block__tecman__title__date';
  informationBlockDatas.appendChild(informationBlockDate).textContent = '11/1987 – 03/1990 São Paulo, SP';

  let informationBlocktecmanAhref = document.createElement('a');
  informationBlockDatas.appendChild(informationBlocktecmanAhref).className = 'information__block__tecman__ahref';
  // informationBlocktecmanAhref.href = '';
  informationBlocktecmanAhref.target = '_blank';
  informationBlocktecmanAhref.rel = 'noreferrer noopener';
  informationBlocktecmanAhref.title = '';

  let tecmanTitleParagraph01 = document.createElement('p');
  tecmanTitleParagraph01.className = 'tecman__title__01';
  informationBlocktecmanAhref.appendChild(tecmanTitleParagraph01).textContent = 'TECMAN MANUTENÇÃO LTDA';

  let tecmanTitleParagraph02 = document.createElement('p');
  tecmanTitleParagraph02.className = 'tecman__title__02';
  informationBlocktecmanAhref.appendChild(tecmanTitleParagraph02).textContent = '';

  let textActivities = document.createElement('p');
  textActivities.className = 'tecman__text__activities';
  informationBlockDatas.appendChild(textActivities).textContent = 'Empresa nacional do segmento mecânico.';

  textRole = document.createElement('p');
  textRole.className = 'tecman__text__role';
  informationBlockDatas.appendChild(textRole).textContent = '';

  let informationBlockText = document.createElement('p');
  tecmanDiv.appendChild(informationBlockText).className = 'tecman__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__tecman__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  let textInformation = document.createElement('span');
  textInformation.className = 'tecman__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Implantação de computadores, e treinamentos de funcionários, incluindo manutenção e implantação de softwares, em 1.988/89.';

  screen.appendChild(tecmanDiv);
}

function tecmanFunction720() {
  screen = document.querySelector('#tecman720');
  tecmanFunction();
}

function tecmanFunction721() {
  screen = document.querySelector('#tecman721');
  tecmanFunction();
}
