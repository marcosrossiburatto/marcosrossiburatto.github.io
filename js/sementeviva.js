function sementevivaFunction() {
  let sementevivaDiv = document.createElement('div');
  sementevivaDiv.className = 'sementeviva__div';

  let informationBlock = document.createElement('div');
  sementevivaDiv.appendChild(informationBlock).className = 'information__block__sementeviva__title';

  let informationBlockAhref = document.createElement('a');
  informationBlock.appendChild(informationBlockAhref).className = 'information__block__ahref';
  informationBlockAhref.href = 'https://www.marcosanand.com.br/';
  informationBlockAhref.target = '_blank';
  informationBlockAhref.rel = 'noreferrer noopener';
  informationBlockAhref.title = 'Semente Viva Website';

  let informationBlockImg = document.createElement('img');
  informationBlockAhref.appendChild(informationBlockImg).className = 'information__block__sementeviva__title__img';
  informationBlockImg.src = "./imgs/logos/logo_ti_semente_viva.png";
  informationBlockImg.alt = "Logo_sementeviva.jpg";

  let informationBlockDatas = document.createElement('div');
  informationBlock.appendChild(informationBlockDatas).className = 'information__block__sementeviva__title__datas';

  let informationBlockDate = document.createElement('p');
  informationBlockDate.className = 'information__block__sementeviva__title__date';
  informationBlockDatas.appendChild(informationBlockDate).textContent = '09/2013 - 02/2020 Campinas, SP';

  let informationBlockSementeVivaAhref = document.createElement('a');
  informationBlockDatas.appendChild(informationBlockSementeVivaAhref).className = 'information__block__sementeviva__ahref';
  informationBlockSementeVivaAhref.href = 'https://www.marcosanand.com.br/';
  informationBlockSementeVivaAhref.target = '_blank';
  informationBlockSementeVivaAhref.rel = 'noreferrer noopener';
  informationBlockSementeVivaAhref.title = 'Semente Viva Website';

  let sementevivaTitleParagraph = document.createElement('p');
  sementevivaTitleParagraph.className = 'sementeviva__title__01';
  informationBlockSementeVivaAhref.appendChild(sementevivaTitleParagraph).textContent = 'Semente Viva';

  sementevivaTitleParagraph = document.createElement('p');
  sementevivaTitleParagraph.className = 'sementeviva__title__02';
  informationBlockSementeVivaAhref.appendChild(sementevivaTitleParagraph).textContent = 'Desenvolvimento Humano';

  let textActivities = document.createElement('p');
  textActivities.className = 'sementeviva__text__activities';
  informationBlockDatas.appendChild(textActivities).textContent = 'Empresa própria de desenvolvimento emocional e gerenciamento de equipes de alta performance.';

  let informationBlockText = document.createElement('p');
  sementevivaDiv.appendChild(informationBlockText).className = 'sementeviva__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__sementeviva__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  let textInformation = document.createElement('span');
  textInformation.className = 'sementeviva__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Elaboração de toda a divulgação dos trabalhos, através da elaboração e execução de sites na internet (www.marcosanand.com.br), Meta (Facebook), Instagram, Google ADS, Marketing, e-mails ... .';

  informationBlockText = document.createElement('p');
  sementevivaDiv.appendChild(informationBlockText).className = 'sementeviva__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__sementeviva__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  textInformation = document.createElement('span');
  textInformation.className = 'sementeviva__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Cursos e palestras destinados a elevação do padrão emocional pessoal de equipes, integrando corpo, mente e espírito.';

  screen.appendChild(sementevivaDiv);
}

function sementevivaFunction720() {
  screen = document.querySelector('#sementeviva720');
  sementevivaFunction();
}

function sementevivaFunction721() {
  screen = document.querySelector('#sementeviva721');
  sementevivaFunction();
}
