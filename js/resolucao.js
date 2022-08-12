function resolucaoEngenhariaFunction() {
  let resolucaoEngenhariaDiv = document.createElement('div');
  resolucaoEngenhariaDiv.className = 'resolucaoEngenharia__div';

  let informationBlock = document.createElement('div');
  resolucaoEngenhariaDiv.appendChild(informationBlock).className = 'information__block__resolucaoEngenharia__title';

  let informationBlockAhref = document.createElement('a');
  informationBlock.appendChild(informationBlockAhref).className = 'information__block__ahref';
  // informationBlockAhref.href = '';
  informationBlockAhref.target = '_blank';
  informationBlockAhref.rel = 'noreferrer noopener';
  informationBlockAhref.title = '';

  let informationBlockImg = document.createElement('img');
  informationBlockAhref.appendChild(informationBlockImg).className = 'information__block__resolucaoEngenharia__title__img';
  informationBlockImg.src = "./imgs/logos/logo_ti_resolucao_engenharia.png";
  informationBlockImg.alt = "Logo Resolucao Engenharia";

  let informationBlockDatas = document.createElement('div');
  informationBlock.appendChild(informationBlockDatas).className = 'information__block__resolucaoEngenharia__title__datas';

  let informationBlockDate = document.createElement('p');
  informationBlockDate.className = 'information__block__resolucaoEngenharia__title__date';
  informationBlockDatas.appendChild(informationBlockDate).textContent = '12/1996 – 09/2005 Campinas, SP';

  let informationBlockresolucaoEngenhariaAhref = document.createElement('a');
  informationBlockDatas.appendChild(informationBlockresolucaoEngenhariaAhref).className = 'information__block__resolucaoEngenharia__ahref';
  // informationBlockresolucaoEngenhariaAhref.href = '';
  informationBlockresolucaoEngenhariaAhref.target = '_blank';
  informationBlockresolucaoEngenhariaAhref.rel = 'noreferrer noopener';
  informationBlockresolucaoEngenhariaAhref.title = '';

  let resolucaoEngenhariaTitleParagraph01 = document.createElement('p');
  resolucaoEngenhariaTitleParagraph01.className = 'resolucaoEngenharia__title__01';
  informationBlockresolucaoEngenhariaAhref.appendChild(resolucaoEngenhariaTitleParagraph01).textContent = 'RESOLUÇÃO ENGENHARIA';

  let resolucaoEngenhariaTitleParagraph02 = document.createElement('p');
  resolucaoEngenhariaTitleParagraph02.className = 'resolucaoEngenharia__title__02';
  informationBlockresolucaoEngenhariaAhref.appendChild(resolucaoEngenhariaTitleParagraph02).textContent = '';

  let textActivities = document.createElement('p');
  textActivities.className = 'resolucaoEngenharia__text__activities';
  informationBlockDatas.appendChild(textActivities).textContent = 'Empresa do segmento de instalações industriais.';

  textRole = document.createElement('p');
  textRole.className = 'resolucaoEngenharia__text__role';
  informationBlockDatas.appendChild(textRole).textContent = '';

  let informationBlockText = document.createElement('p');
  resolucaoEngenhariaDiv.appendChild(informationBlockText).className = 'resolucaoEngenharia__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__resolucaoEngenharia__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  let textInformation = document.createElement('span');
  textInformation.className = 'resolucaoEngenharia__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Planejamento e execução de Projetos em instalações elétricas (MT e BT), automação, hidro-sanitárias, mecânicas, sistema de proteção contra descargas elétricas atmosféricas, civil (bases de equipamentos), combate a incêndio, máquinas e equipamentos industriais.';

  informationBlockText = document.createElement('p');
  resolucaoEngenhariaDiv.appendChild(informationBlockText).className = 'resolucaoEngenharia__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__resolucaoEngenharia__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  textInformation = document.createElement('span');
  textInformation.className = 'resolucaoEngenharia__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Utilização e Elaboração de softwares para o planejamento e execução dos serviços.';

  informationBlockText = document.createElement('p');
  resolucaoEngenhariaDiv.appendChild(informationBlockText).className = 'resolucaoEngenharia__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__resolucaoEngenharia__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  textInformation = document.createElement('span');
  textInformation.className = 'resolucaoEngenharia__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Acompanhamento de verificação e testes dos sistemas implantados para comprovar a funcionalidade dos estudos e implantações efetuadas.';

  screen.appendChild(resolucaoEngenhariaDiv);
}

function resolucaoEngenhariaFunction720() {
  screen = document.querySelector('#resolucaoEngenharia720');
  resolucaoEngenhariaFunction();
}

function resolucaoEngenhariaFunction721() {
  screen = document.querySelector('#resolucaoEngenharia721');
  resolucaoEngenhariaFunction();
}
