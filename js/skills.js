function skillsFunction() {
  let skillsDiv = document.createElement('div');
  skillsDiv.className = 'skills__div';

  let skillsTitleParagraph = document.createElement('p');
  skillsTitleParagraph.className = 'skills__title';
  skillsDiv.appendChild(skillsTitleParagraph).textContent = 'Principais competências';

  let informationBlock = document.createElement('div');
  skillsDiv.appendChild(informationBlock).className = 'information__block__skills';

  let iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__positive__skills';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__positive__skills';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__positive__skills';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__negative__skills';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  let textskills = document.createElement('span');
  textskills.className = 'text__skills';
  informationBlock.appendChild(textskills).textContent = 'Project Management';

  informationBlock = document.createElement('div');
  skillsDiv.appendChild(informationBlock).className = 'information__block__skills';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__positive__skills';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__positive__skills';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__positive__skills';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__negative__skills';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  textskills = document.createElement('span');
  textskills.className = 'text__skills';
  informationBlock.appendChild(textskills).textContent = 'Melhoria de Processos';

  informationBlock = document.createElement('div');
  skillsDiv.appendChild(informationBlock).className = 'information__block__skills';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__positive__skills';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__positive__skills';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__negative__skills';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__negative__skills';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  textskills = document.createElement('span');
  textskills.className = 'text__skills';
  informationBlock.appendChild(textskills).textContent = 'Desenvolvimento Softwares';

  screen.appendChild(skillsDiv);
}

function skillsFunction720() {
  screen = document.querySelector('#skills720');
  skillsFunction();
}

function skillsFunction721() {
  screen = document.querySelector('#skills721');
  skillsFunction();
}
