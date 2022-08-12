function stiInformaticaFunction() {
  let stiInformaticaDiv = document.createElement('div');
  stiInformaticaDiv.className = 'stiInformatica__div';

  let informationBlock = document.createElement('div');
  stiInformaticaDiv.appendChild(informationBlock).className = 'information__block__stiInformatica__title';

  let informationBlockAhref = document.createElement('a');
  informationBlock.appendChild(informationBlockAhref).className = 'information__block__ahref';
  // informationBlockAhref.href = '';
  informationBlockAhref.target = '_blank';
  informationBlockAhref.rel = 'noreferrer noopener';
  informationBlockAhref.title = '';

  let informationBlockImg = document.createElement('img');
  informationBlockAhref.appendChild(informationBlockImg).className = 'information__block__stiInformatica__title__img';
  informationBlockImg.src = "./imgs/logos/Logo_STI_Informatica.png";
  informationBlockImg.alt = "Logo STI Informatica";

  let informationBlockDatas = document.createElement('div');
  informationBlock.appendChild(informationBlockDatas).className = 'information__block__stiInformatica__title__datas';

  let informationBlockDate = document.createElement('p');
  informationBlockDate.className = 'information__block__stiInformatica__title__date';
  informationBlockDatas.appendChild(informationBlockDate).textContent = '03/1990 – 03/1992 São Paulo, SP';

  let informationBlockstiInformaticaAhref = document.createElement('a');
  informationBlockDatas.appendChild(informationBlockstiInformaticaAhref).className = 'information__block__stiInformatica__ahref';
  // informationBlockstiInformaticaAhref.href = '';
  informationBlockstiInformaticaAhref.target = '_blank';
  informationBlockstiInformaticaAhref.rel = 'noreferrer noopener';
  informationBlockstiInformaticaAhref.title = '';

  let stiInformaticaTitleParagraph01 = document.createElement('p');
  stiInformaticaTitleParagraph01.className = 'stiInformatica__title__01';
  informationBlockstiInformaticaAhref.appendChild(stiInformaticaTitleParagraph01).textContent = 'STI INFORMÁTICA LTDA';

  let stiInformaticaTitleParagraph02 = document.createElement('p');
  stiInformaticaTitleParagraph02.className = 'stiInformatica__title__02';
  informationBlockstiInformaticaAhref.appendChild(stiInformaticaTitleParagraph02).textContent = '';

  let textActivities = document.createElement('p');
  textActivities.className = 'stiInformatica__text__activities';
  informationBlockDatas.appendChild(textActivities).textContent = 'Empresa nacional do segmento de produção de softwares.';

  textRole = document.createElement('p');
  textRole.className = 'stiInformatica__text__role';
  informationBlockDatas.appendChild(textRole).textContent = '';

  let informationBlockText = document.createElement('p');
  stiInformaticaDiv.appendChild(informationBlockText).className = 'stiInformatica__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__stiInformatica__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  let textInformation = document.createElement('span');
  textInformation.className = 'stiInformatica__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Elaboração de softwares de treinamento, utilizando uma tecnologia da época baseado em CBT – Treinamento Baseado em Computador.';

  informationBlockText = document.createElement('p');
  stiInformaticaDiv.appendChild(informationBlockText).className = 'stiInformatica__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__stiInformatica__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  textInformation = document.createElement('span');
  textInformation.className = 'stiInformatica__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Participação em feiras de Informática com os produtos desenvolvidos.';

  informationBlockText = document.createElement('p');
  stiInformaticaDiv.appendChild(informationBlockText).className = 'stiInformatica__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__stiInformatica__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  textInformation = document.createElement('span');
  textInformation.className = 'stiInformatica__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Alguns Produtos: Aprendendo DOS (Sistema operacional da época para treinamento de funcionários em empresas que estavam implementando os computadores na época), Aprendendo Lotus-123 (planilha) e Aprendendo Wordstar (editor de texto).';

  screen.appendChild(stiInformaticaDiv);
}

function stiInformaticaFunction720() {
  screen = document.querySelector('#stiInformatica720');
  stiInformaticaFunction();
}

function stiInformaticaFunction721() {
  screen = document.querySelector('#stiInformatica721');
  stiInformaticaFunction();
}
