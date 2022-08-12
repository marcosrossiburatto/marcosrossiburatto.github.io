function empresaFunction() {
  let empresaDiv = document.createElement('div');
  empresaDiv.className = 'empresa__div';

  let informationBlock = document.createElement('div');
  empresaDiv.appendChild(informationBlock).className = 'information__block__empresa__title';

  let informationBlockImg = document.createElement('img');
  informationBlock.appendChild(informationBlockImg).className = 'information__block__empresa__title__img';
  informationBlockImg.src = "./imgs/logos/Logo_empresa.png";
  informationBlockImg.alt = "Logo_empresa.png";

  let informationBlockDatas = document.createElement('div');
  informationBlock.appendChild(informationBlockDatas).className = 'information__block__empresa__title__datas';

  let informationBlockDate = document.createElement('p');
  informationBlockDate.className = 'information__block__empresa__title__date';
  informationBlockDatas.appendChild(informationBlockDate).textContent = '02/2020 - Atual - Campinas, SP';

  let empresaTitleParagraph = document.createElement('p');
  empresaTitleParagraph.className = 'empresa__title';
  informationBlockDatas.appendChild(empresaTitleParagraph).textContent = 'Mentoria em Gerenciamento de Projetos';

  let informationBlockTitleActivities = document.createElement('p');
  informationBlockDatas.appendChild(informationBlockTitleActivities).className = 'information__block__empresa__title__activities';

  let textActivities = document.createElement('span');
  textActivities.className = 'empresa__text__activities';
  informationBlockTitleActivities.appendChild(textActivities).textContent = 'Atividade on-line para esclarecer dúvidas sobre atuações em Gerenciamento de Projetos.';

  let informationBlockText = document.createElement('p');
  empresaDiv.appendChild(informationBlockText).className = 'empresa__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__empresa__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  let textInformation = document.createElement('span');
  textInformation.className = 'empresa__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Aplicação de pequenas mentorias, através da internet.';







  screen.appendChild(empresaDiv);
}

function empresaFunction720() {
  screen = document.querySelector('#empresa720');
  empresaFunction();
}

function empresaFunction721() {
  screen = document.querySelector('#empresa721');
  empresaFunction();
}
