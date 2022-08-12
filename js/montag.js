function montagEngenhariaFunction() {
  let montagEngenhariaDiv = document.createElement('div');
  montagEngenhariaDiv.className = 'montagEngenharia__div';

  let informationBlock = document.createElement('div');
  montagEngenhariaDiv.appendChild(informationBlock).className = 'information__block__montagEngenharia__title';

  let informationBlockAhref = document.createElement('a');
  informationBlock.appendChild(informationBlockAhref).className = 'information__block__ahref';
  // informationBlockAhref.href = '';
  informationBlockAhref.target = '_blank';
  informationBlockAhref.rel = 'noreferrer noopener';
  informationBlockAhref.title = '';

  let informationBlockImg = document.createElement('img');
  informationBlockAhref.appendChild(informationBlockImg).className = 'information__block__montagEngenharia__title__img';
  informationBlockImg.src = "./imgs/logos/Logo_Montag_Engenharia.png";
  informationBlockImg.alt = "Logo Montag Engenharia";

  let informationBlockDatas = document.createElement('div');
  informationBlock.appendChild(informationBlockDatas).className = 'information__block__montagEngenharia__title__datas';

  let informationBlockDate = document.createElement('p');
  informationBlockDate.className = 'information__block__montagEngenharia__title__date';
  informationBlockDatas.appendChild(informationBlockDate).textContent = '03/1992 – 12/1996 Campinas, SP';

  let informationBlockmontagEngenhariaAhref = document.createElement('a');
  informationBlockDatas.appendChild(informationBlockmontagEngenhariaAhref).className = 'information__block__montagEngenharia__ahref';
  // informationBlockmontagEngenhariaAhref.href = '';
  informationBlockmontagEngenhariaAhref.target = '_blank';
  informationBlockmontagEngenhariaAhref.rel = 'noreferrer noopener';
  informationBlockmontagEngenhariaAhref.title = '';

  let montagEngenhariaTitleParagraph01 = document.createElement('p');
  montagEngenhariaTitleParagraph01.className = 'montagEngenharia__title__01';
  informationBlockmontagEngenhariaAhref.appendChild(montagEngenhariaTitleParagraph01).textContent = 'MONTAG ENGENHARIA INDUSTRIAL';

  let montagEngenhariaTitleParagraph02 = document.createElement('p');
  montagEngenhariaTitleParagraph02.className = 'montagEngenharia__title__02';
  informationBlockmontagEngenhariaAhref.appendChild(montagEngenhariaTitleParagraph02).textContent = '';

  let textActivities = document.createElement('p');
  textActivities.className = 'montagEngenharia__text__activities';
  informationBlockDatas.appendChild(textActivities).textContent = 'Empresa nacional do segmento de instalações industriais.';

  textRole = document.createElement('p');
  textRole.className = 'montagEngenharia__text__role';
  informationBlockDatas.appendChild(textRole).textContent = 'Engenheiro Eletricista / Planejamento.';

  let informationBlockText = document.createElement('p');
  montagEngenhariaDiv.appendChild(informationBlockText).className = 'montagEngenharia__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__montagEngenharia__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  let textInformation = document.createElement('span');
  textInformation.className = 'montagEngenharia__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Atuação na execução de obras de instalações elétricas de alta e baixa tensões, automação, hidro-sanitárias, combate a incêndio, sistema de proteção contra descargas elétricas atmosféricas, som e telefonia.';

  informationBlockText = document.createElement('p');
  montagEngenhariaDiv.appendChild(informationBlockText).className = 'montagEngenharia__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__montagEngenharia__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  textInformation = document.createElement('span');
  textInformation.className = 'montagEngenharia__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Implantação dos computadores na empresa, instalando inclusive redes de comunicação, treinamento de pessoas e implantação dos softwares necessários.';

  screen.appendChild(montagEngenhariaDiv);
}

function montagEngenhariaFunction720() {
  screen = document.querySelector('#montagEngenharia720');
  montagEngenhariaFunction();
}

function montagEngenhariaFunction721() {
  screen = document.querySelector('#montagEngenharia721');
  montagEngenhariaFunction();
}
