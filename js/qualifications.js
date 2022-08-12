function qualificationsFunction() {
  let qualificationsDiv = document.createElement('div');
  qualificationsDiv.className = 'qualifications__div';

  let qualificationsTitleParagraph = document.createElement('p');
  qualificationsTitleParagraph.className = 'qualifications__title';
  qualificationsDiv.appendChild(qualificationsTitleParagraph).textContent =
    'Síntese de Qualificações';

  let informationBlockQualifications = document.createElement('div');
  qualificationsDiv.appendChild(informationBlockQualifications).className =
    'information__block__qualifications';

  let iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__qualifications';
  informationBlockQualifications.appendChild(iconDone).textContent = 'done';

  let textqualifications = document.createElement('span');
  textqualifications.className = 'text__qualifications';
  informationBlockQualifications.appendChild(textqualifications).textContent =
    'Carreira desenvolvida na Gestão de Projetos, com ênfase nas Áreas Técnica em empresas como General Electric e UTC Climate, Controls & Security (Kidde Brasil).';

  informationBlockQualifications = document.createElement('div');
  qualificationsDiv.appendChild(informationBlockQualifications).className =
    'information__block__qualifications';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__qualifications';
  informationBlockQualifications.appendChild(iconDone).textContent = 'done';

  textqualifications = document.createElement('span');
  textqualifications.className = 'text__qualifications';
  informationBlockQualifications.appendChild(textqualifications).textContent =
    'Desenvolvimento de processos para a coordenação dos projetos com o desenvolvimento de softwares específicos para cada área de atuação.';

  informationBlockQualifications = document.createElement('div');
  qualificationsDiv.appendChild(informationBlockQualifications).className =
    'information__block__qualifications';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__qualifications';
  informationBlockQualifications.appendChild(iconDone).textContent = 'done';

  textqualifications = document.createElement('span');
  textqualifications.className = 'text__qualifications';
  informationBlockQualifications.appendChild(textqualifications).textContent =
    'Voluntariado desenvolvido em diversos Centros Espirituais de Campinas, tais como: CEIR, Hospital da Luz, Nave, GMEL, AEUPT, entre outros.';

  informationBlockQualifications = document.createElement('div');
  qualificationsDiv.appendChild(informationBlockQualifications).className =
    'information__block__qualifications';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__qualifications';
  informationBlockQualifications.appendChild(iconDone).textContent = 'done';

  textqualifications = document.createElement('span');
  textqualifications.className = 'text__qualifications';
  informationBlockQualifications.appendChild(textqualifications).textContent =
    'Experiência em entregas técnico-comerciais de equipamentos de grande porte nas indústrias em vários estados brasileiros.';

  informationBlockQualifications = document.createElement('div');
  qualificationsDiv.appendChild(informationBlockQualifications).className =
    'information__block__qualifications';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__qualifications';
  informationBlockQualifications.appendChild(iconDone).textContent = 'done';

  textqualifications = document.createElement('span');
  textqualifications.className = 'text__qualifications';
  informationBlockQualifications.appendChild(textqualifications).textContent =
    'Perfil generalista, focado no resultado e formação de cultura corporativa, com grande capacidade de organização e desenvolvimento de equipes.';

  informationBlockQualifications = document.createElement('div');
  qualificationsDiv.appendChild(informationBlockQualifications).className =
    'information__block__qualifications';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__qualifications';
  informationBlockQualifications.appendChild(iconDone).textContent = 'done';

  textqualifications = document.createElement('span');
  textqualifications.className = 'text__qualifications';
  informationBlockQualifications.appendChild(textqualifications).textContent =
    'Hábil no relacionamento com clientes (internos e externos), fornecedores e prestadores de serviços.';

  screen.appendChild(qualificationsDiv);
}

function qualificatiosFunction720() {
  screen = document.querySelector('#qualifications720');
  qualificationsFunction();
}

function qualificationsFunction721() {
  screen = document.querySelector('#qualifications721');
  qualificationsFunction();
}
