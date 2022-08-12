function internationalExperienceFunction() {
  let internationalExperienceDiv = document.createElement('div');
  internationalExperienceDiv.className = 'internationalExperience__div';

  let internationalExperienceTitleParagraph = document.createElement('p');
  internationalExperienceTitleParagraph.className = 'internationalExperience__title';
  internationalExperienceDiv.appendChild(internationalExperienceTitleParagraph).textContent = 'Experiência Internacional';

  let informationBlock = document.createElement('div');
  internationalExperienceDiv.appendChild(informationBlock).className = 'information__block__internationalExperience';

  let iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__internationalExperience';
  informationBlock.appendChild(iconDone).textContent = 'done';

  let textinternationalExperience = document.createElement('span');
  textinternationalExperience.className = 'text__internationalExperience';
  informationBlock.appendChild(textinternationalExperience).textContent = 'Estados Unidos – Reuniões técnicas e treinamentos.';

  informationBlock = document.createElement('div');
  internationalExperienceDiv.appendChild(informationBlock).className = 'information__block__internationalExperience';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__internationalExperience';
  informationBlock.appendChild(iconDone).textContent = 'done';

  textinternationalExperience = document.createElement('span');
  textinternationalExperience.className = 'text__internationalExperience';
  informationBlock.appendChild(textinternationalExperience).textContent = 'Chile – Serviços em obras.';

  informationBlock = document.createElement('div');
  internationalExperienceDiv.appendChild(informationBlock).className = 'information__block__internationalExperience';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__internationalExperience';
  informationBlock.appendChild(iconDone).textContent = 'done';

  textinternationalExperience = document.createElement('span');
  textinternationalExperience.className = 'text__internationalExperience';
  informationBlock.appendChild(textinternationalExperience).textContent = 'México – Implantação do sistema de controle SAP.';

  informationBlock = document.createElement('div');
  internationalExperienceDiv.appendChild(informationBlock).className = 'information__block__internationalExperience';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__internationalExperience';
  informationBlock.appendChild(iconDone).textContent = 'done';

  textinternationalExperience = document.createElement('span');
  textinternationalExperience.className = 'text__internationalExperience';
  informationBlock.appendChild(textinternationalExperience).textContent = 'Canadá – Estudos.';

  screen.appendChild(internationalExperienceDiv);
}

function internationalExperienceFunction720() {
  screen = document.querySelector('#internationalExperience720');
  internationalExperienceFunction();
}

function internationalExperienceFunction721() {
  screen = document.querySelector('#internationalExperience721');
  internationalExperienceFunction();
}
