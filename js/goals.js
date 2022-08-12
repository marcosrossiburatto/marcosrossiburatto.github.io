function goalsFunction() {
  let goalsDiv = document.createElement('div');
  goalsDiv.className = 'goals__div';

  let goalsTitleParagraph = document.createElement('p');
  goalsTitleParagraph.className = 'goals__title';
  goalsDiv.appendChild(goalsTitleParagraph).textContent = 'Objetivos';

  let informationBlock = document.createElement('div');
  goalsDiv.appendChild(informationBlock).className = 'information__block__goals';

  let iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__goals';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  let textGoals = document.createElement('span');
  textGoals.className = 'text__goals';
  informationBlock.appendChild(textGoals).textContent =
    'Atuação na área de tecnologia das empresas, projetando, instalando e executando softwares;';

  informationBlock = document.createElement('div');
  goalsDiv.appendChild(informationBlock).className =
    'information__block__goals';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__goals';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  textGoals = document.createElement('span');
  textGoals.className = 'text__goals';
  informationBlock.appendChild(textGoals).textContent =
    'Atuação na área de Projetos Técnicos e Industriais.';

  screen.appendChild(goalsDiv);
}

function goalsFunction720() {
  screen = document.querySelector('#goals720');
  goalsFunction();
}

function goalsFunction721() {
  screen = document.querySelector('#goals721');
  goalsFunction();
}
