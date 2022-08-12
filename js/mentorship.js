function mentorshipFunction() {
  let mentorshipDiv = document.createElement('div');
  mentorshipDiv.className = 'mentorship__div';

  let informationBlock = document.createElement('div');
  mentorshipDiv.appendChild(informationBlock).className = 'information__block__mentorship__title';

  let informationBlockAhref = document.createElement('a');
  informationBlock.appendChild(informationBlockAhref).className = 'information__block__ahref';
  // informationBlockAhref.href = '';
  informationBlockAhref.target = '_blank';
  informationBlockAhref.rel = 'noreferrer noopener';
  informationBlockAhref.title = '';

  let informationBlockImg = document.createElement('img');
  informationBlockAhref.appendChild(informationBlockImg).className = 'information__block__mentorship__title__img';
  informationBlockImg.src = "./imgs/logos/Logo_Mentorship.png";
  informationBlockImg.alt = "Logo_Mentorship.png";

  let informationBlockDatas = document.createElement('div');
  informationBlock.appendChild(informationBlockDatas).className = 'information__block__mentorship__title__datas';

  let informationBlockDate = document.createElement('p');
  informationBlockDate.className = 'information__block__mentorship__title__date';
  informationBlockDatas.appendChild(informationBlockDate).textContent = '02/2020 - Atual - Campinas, SP';

  let informationBlockMentorshipAhref = document.createElement('a');
  informationBlockDatas.appendChild(informationBlockMentorshipAhref).className = 'information__block__mentorship__ahref';
  // informationBlockMentorshipAhref.href = '';
  informationBlockMentorshipAhref.target = '_blank';
  informationBlockMentorshipAhref.rel = 'noreferrer noopener';
  informationBlockMentorshipAhref.title = '';

  let mentorshipTitleParagraph01 = document.createElement('p');
  mentorshipTitleParagraph01.className = 'mentorship__title__01';
  informationBlockMentorshipAhref.appendChild(mentorshipTitleParagraph01).textContent = 'Mentoria em Gerenciamento de Projetos';

  let mentorshipTitleParagraph02 = document.createElement('p');
  mentorshipTitleParagraph02.className = 'mentorship__title__02';
  informationBlockMentorshipAhref.appendChild(mentorshipTitleParagraph02).textContent = '';

  let textActivities = document.createElement('span');
  textActivities.className = 'mentorship__text__activities';
  informationBlockDatas.appendChild(textActivities).textContent = 'Atividade on-line para esclarecer dúvidas sobre atuações em Gerenciamento de Projetos.';

  textRole = document.createElement('p');
  textRole.className = 'mentorship__text__role';
  informationBlockDatas.appendChild(textRole).textContent = '';

  let informationBlockText = document.createElement('p');
  mentorshipDiv.appendChild(informationBlockText).className = 'mentorship__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__mentorship__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  let textInformation = document.createElement('span');
  textInformation.className = 'mentorship__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Aplicação de pequenas mentorias, através da internet.';

  informationBlockText = document.createElement('p');
  mentorshipDiv.appendChild(informationBlockText).className = 'mentorship__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__mentorship__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  textInformation = document.createElement('span');
  textInformation.className = 'mentorship__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'As mentorias são voltadas às reuniões com clientes da área técnica, com a finalidade de solução de problemas.';

  informationBlockText = document.createElement('p');
  mentorshipDiv.appendChild(informationBlockText).className = 'mentorship__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__mentorship__text';
  informationBlockText.appendChild(iconLess).textContent = '';

  textInformation = document.createElement('span');
  textInformation.className = 'mentorship__text__information';
  informationBlockText.appendChild(textInformation).textContent = '';

  screen.appendChild(mentorshipDiv);
}

function mentorshipFunction720() {
  screen = document.querySelector('#mentorship720');
  mentorshipFunction();
}

function mentorshipFunction721() {
  screen = document.querySelector('#mentorship721');
  mentorshipFunction();
}
