function kiddeBrasilFunction() {
  let kiddeBrasilDiv = document.createElement('div');
  kiddeBrasilDiv.className = 'kiddeBrasil__div';

  let informationBlock = document.createElement('div');
  kiddeBrasilDiv.appendChild(informationBlock).className = 'information__block__kiddeBrasil__title';

  let informationBlockAhref = document.createElement('a');
  informationBlock.appendChild(informationBlockAhref).className = 'information__block__ahref';
  informationBlockAhref.href = 'https://www.kidde.com.br/';
  informationBlockAhref.target = '_blank';
  informationBlockAhref.rel = 'noreferrer noopener';
  informationBlockAhref.title = 'Kidde Brasil Website';

  let informationBlockImg = document.createElement('img');
  informationBlockAhref.appendChild(informationBlockImg).className = 'information__block__kiddeBrasil__title__img';
  informationBlockImg.src = "./imgs/logos/logo_ti_kidde_brasil.png";
  informationBlockImg.alt = "Logo_KiddeBrasil.png";

  let informationBlockDatas = document.createElement('div');
  informationBlock.appendChild(informationBlockDatas).className = 'information__block__kiddeBrasil__title__datas';

  let informationBlockDate = document.createElement('p');
  informationBlockDate.className = 'information__block__kiddeBrasil__title__date';
  informationBlockDatas.appendChild(informationBlockDate).textContent = '08/2010 – 08/2013 Vinhedo, SP';

  let informationBlockKiddeBrasilAhref = document.createElement('a');
  informationBlockDatas.appendChild(informationBlockKiddeBrasilAhref).className = 'information__block__kiddeBrasil__ahref';
  informationBlockKiddeBrasilAhref.href = 'https://www.kidde.com.br/';
  informationBlockKiddeBrasilAhref.target = '_blank';
  informationBlockKiddeBrasilAhref.rel = 'noreferrer noopener';
  informationBlockKiddeBrasilAhref.title = 'Kidde Brasil Website';

  let kiddeBrasilTitleParagraph01 = document.createElement('p');
  kiddeBrasilTitleParagraph01.className = 'kiddeBrasil__title__01';
  informationBlockKiddeBrasilAhref.appendChild(kiddeBrasilTitleParagraph01).textContent = 'KIDDE BRASIL';

  let kiddeBrasilTitleParagraph02 = document.createElement('p');
  kiddeBrasilTitleParagraph02.className = 'kiddeBrasil__title__02';
  informationBlockKiddeBrasilAhref.appendChild(kiddeBrasilTitleParagraph02).textContent = 'UTC Climate, Controls & Security';

  let textActivities = document.createElement('p');
  textActivities.className = 'kiddeBrasil__text__activities';
  informationBlockDatas.appendChild(textActivities).textContent = 'Empresa multinacional fabricante de equipamentos e projetos para detecção e supressão de incêndios.';

  textRole = document.createElement('p');
  textRole.className = 'kiddeBrasil__text__role';
  informationBlockDatas.appendChild(textRole).textContent = 'Departamento de Projetos e Obras.';

  let informationBlockText = document.createElement('p');
  kiddeBrasilDiv.appendChild(informationBlockText).className = 'kiddeBrasil__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__kiddeBrasil__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  let textInformation = document.createElement('span');
  textInformation.className = 'kiddeBrasil__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Responsável pela execução de serviços de projetos e obras, confeccionando macros para planejamento, controle e execução dos projetos através do Excel-MS.';

  informationBlockText = document.createElement('p');
  kiddeBrasilDiv.appendChild(informationBlockText).className = 'kiddeBrasil__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__kiddeBrasil__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  textInformation = document.createElement('span');
  textInformation.className = 'kiddeBrasil__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Negociação direta com os principais clientes para atendimento das expectativas contratuais, renegociação de aditivos contratuais e análise da execução de instalações em campo.';

  screen.appendChild(kiddeBrasilDiv);
}

function kiddeBrasilFunction720() {
  screen = document.querySelector('#kiddeBrasil720');
  kiddeBrasilFunction();
}

function kiddeBrasilFunction721() {
  screen = document.querySelector('#kiddeBrasil721');
  kiddeBrasilFunction();
}
