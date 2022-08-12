function jurubatubaFunction() {
  let jurubatubaDiv = document.createElement('div');
  jurubatubaDiv.className = 'jurubatuba__div';

  let informationBlock = document.createElement('div');
  jurubatubaDiv.appendChild(informationBlock).className = 'information__block__jurubatuba__title';

  let informationBlockAhref = document.createElement('a');
  informationBlock.appendChild(informationBlockAhref).className = 'information__block__ahref';
  // informationBlockAhref.href = '';
  informationBlockAhref.target = '_blank';
  informationBlockAhref.rel = 'noreferrer noopener';
  informationBlockAhref.title = '';

  let informationBlockImg = document.createElement('img');
  informationBlockAhref.appendChild(informationBlockImg).className = 'information__block__jurubatuba__title__img';
  informationBlockImg.src = "./imgs/logos/logo_ti_jurubatuba.png";
  informationBlockImg.alt = "Logo Jurubatuba";

  let informationBlockDatas = document.createElement('div');
  informationBlock.appendChild(informationBlockDatas).className = 'information__block__jurubatuba__title__datas';

  let informationBlockDate = document.createElement('p');
  informationBlockDate.className = 'information__block__jurubatuba__title__date';
  informationBlockDatas.appendChild(informationBlockDate).textContent = '04/1985 – 11/1987 São Paulo, SP';

  let informationBlockjurubatubaAhref = document.createElement('a');
  informationBlockDatas.appendChild(informationBlockjurubatubaAhref).className = 'information__block__jurubatuba__ahref';
  // informationBlockjurubatubaAhref.href = '';
  informationBlockjurubatubaAhref.target = '_blank';
  informationBlockjurubatubaAhref.rel = 'noreferrer noopener';
  informationBlockjurubatubaAhref.title = '';

  let jurubatubaTitleParagraph01 = document.createElement('p');
  jurubatubaTitleParagraph01.className = 'jurubatuba__title__01';
  informationBlockjurubatubaAhref.appendChild(jurubatubaTitleParagraph01).textContent = 'JURUBATUBA MECÂNICA DE PRECISÃO';

  let jurubatubaTitleParagraph02 = document.createElement('p');
  jurubatubaTitleParagraph02.className = 'jurubatuba__title__02';
  informationBlockjurubatubaAhref.appendChild(jurubatubaTitleParagraph02).textContent = '';

  let textActivities = document.createElement('p');
  textActivities.className = 'jurubatuba__text__activities';
  informationBlockDatas.appendChild(textActivities).textContent = 'Empresa multinacional do segmento mecânico.';

  textRole = document.createElement('p');
  textRole.className = 'jurubatuba__text__role';
  informationBlockDatas.appendChild(textRole).textContent = 'Engenharia de Produtos.';

  let informationBlockText = document.createElement('p');
  jurubatubaDiv.appendChild(informationBlockText).className = 'jurubatuba__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__jurubatuba__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  let textInformation = document.createElement('span');
  textInformation.className = 'jurubatuba__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Implantação da rede de computadores, máquinas CNC, Sistema CADCAM, treinamentos de funcionários, incluindo manutenção e implantação de softwares, em 1.986/87.';

  informationBlockText = document.createElement('p');
  jurubatubaDiv.appendChild(informationBlockText).className = 'jurubatuba__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__jurubatuba__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  textInformation = document.createElement('span');
  textInformation.className = 'jurubatuba__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Membro do Grupo de Implantação de CAD na UMC - Universidade de Mogi das Cruzes.';

  informationBlockText = document.createElement('p');
  jurubatubaDiv.appendChild(informationBlockText).className = 'jurubatuba__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__jurubatuba__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  textInformation = document.createElement('span');
  textInformation.className = 'jurubatuba__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Coordenador de projetos elétricos e eletrônicos, como único engenheiro eletricista na fábrica.';

  screen.appendChild(jurubatubaDiv);
}

function jurubatubaFunction720() {
  screen = document.querySelector('#jurubatuba720');
  jurubatubaFunction();
}

function jurubatubaFunction721() {
  screen = document.querySelector('#jurubatuba721');
  jurubatubaFunction();
}
