function academicFunction() {
  let academicDiv = document.createElement('div');
  academicDiv.className = 'academic__div';

  let academicTitleParagraph = document.createElement('div');
  academicDiv.appendChild(academicTitleParagraph).className = 'academic__title';

  let academicTitleParagraphPart01 = document.createElement('span');
  academicTitleParagraph.appendChild(academicTitleParagraphPart01).textContent = 'Formação Acadêmica e';

  if (academic) {
    let partBR = document.createElement('br');
    academicTitleParagraph.appendChild(partBR).textContent = '';
  } else {
    let partBR = document.createElement('span');
    academicTitleParagraph.appendChild(partBR).textContent = ' ';
  }

  let academicTitleParagraphPart02 = document.createElement('span');
  academicTitleParagraph.appendChild(academicTitleParagraphPart02).textContent = 'Cursos Complementares';

  let informationBlock = document.createElement('div');
  academicDiv.appendChild(informationBlock).className =
    'information__block__academic';

  let iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__academic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  let textAcademic = document.createElement('span');
  textAcademic.className = 'text__academic';
  informationBlock.appendChild(textAcademic).textContent =
    'MBA Liderança Estratégica e Gestão de Pessoas na FGV-SP.';

  informationBlock = document.createElement('div');
  academicDiv.appendChild(informationBlock).className =
    'information__block__academic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__academic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  textAcademic = document.createElement('span');
  textAcademic.className = 'text__academic';
  informationBlock.appendChild(textAcademic).textContent =
    'Graduação em Engenharia Eletrotécnica e Eletrônica na FESP-SP.';

  informationBlock = document.createElement('div');
  academicDiv.appendChild(informationBlock).className =
    'information__block__academic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__academic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  textAcademic = document.createElement('span');
  textAcademic.className = 'text__academic';
  informationBlock.appendChild(textAcademic).textContent =
    'Administração de Empresas para Engenheiros na FAAP-SP.';

  informationBlock = document.createElement('div');
  academicDiv.appendChild(informationBlock).className =
    'information__block__academic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__academic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  textAcademic = document.createElement('span');
  textAcademic.className = 'text__academic';
  informationBlock.appendChild(textAcademic).textContent =
    'Desenvolvedor de Softwares - Web Full Stack – (em execução), pela Santander Universidades.';

  informationBlock = document.createElement('div');
  academicDiv.appendChild(informationBlock).className =
    'information__block__academic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__academic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  textAcademic = document.createElement('span');
  textAcademic.className = 'text__academic';
  informationBlock.appendChild(textAcademic).textContent =
    'Desenvolvedor Full Stack, pela StartSe Academy.';

  informationBlock = document.createElement('div');
  academicDiv.appendChild(informationBlock).className =
    'information__block__academic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__academic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  textAcademic = document.createElement('span');
  textAcademic.className = 'text__academic';
  informationBlock.appendChild(textAcademic).textContent =
    'Desenvolvedor Full Stack, pela A Liga Digital.';

  informationBlock = document.createElement('div');
  academicDiv.appendChild(informationBlock).className =
    'information__block__academic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__academic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  textAcademic = document.createElement('span');
  textAcademic.className = 'text__academic';
  informationBlock.appendChild(textAcademic).textContent =
    'Excel Avançado, pela People Computação.';

  informationBlock = document.createElement('div');
  academicDiv.appendChild(informationBlock).className =
    'information__block__academic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__academic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  textAcademic = document.createElement('span');
  textAcademic.className = 'text__academic';
  informationBlock.appendChild(textAcademic).textContent =
    'Instagram Marketing, pela Udemy.';

  informationBlock = document.createElement('div');
  academicDiv.appendChild(informationBlock).className =
    'information__block__academic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__academic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  textAcademic = document.createElement('span');
  textAcademic.className = 'text__academic';
  informationBlock.appendChild(textAcademic).textContent =
    'Desenvolvimento de plugins para WordPress.';

  informationBlock = document.createElement('div');
  academicDiv.appendChild(informationBlock).className =
    'information__block__academic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__academic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  textAcademic = document.createElement('span');
  textAcademic.className = 'text__academic';
  informationBlock.appendChild(textAcademic).textContent =
    'LinkedIn 2020 – Empregos & negócios, pela Udemy.';

  informationBlock = document.createElement('div');
  academicDiv.appendChild(informationBlock).className =
    'information__block__academic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__academic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  textAcademic = document.createElement('span');
  textAcademic.className = 'text__academic';
  informationBlock.appendChild(textAcademic).textContent =
    'Programação de Máquinas CN por Computador, pela Sobracon.';

  informationBlock = document.createElement('div');
  academicDiv.appendChild(informationBlock).className =
    'information__block__academic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__academic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  textAcademic = document.createElement('span');
  textAcademic.className = 'text__academic';
  informationBlock.appendChild(textAcademic).textContent =
    'Assembler – Hardware and Software, pela Bandeirantes Informática.';

  informationBlock = document.createElement('div');
  academicDiv.appendChild(informationBlock).className =
    'information__block__academic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__academic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  textAcademic = document.createElement('span');
  textAcademic.className = 'text__academic';
  informationBlock.appendChild(textAcademic).textContent =
    'Microsoft Excel, pela GE.';

  informationBlock = document.createElement('div');
  academicDiv.appendChild(informationBlock).className =
    'information__block__academic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__academic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  textAcademic = document.createElement('span');
  textAcademic.className = 'text__academic';
  informationBlock.appendChild(textAcademic).textContent =
    'Microsoft Project, pela GE.';

  informationBlock = document.createElement('div');
  academicDiv.appendChild(informationBlock).className =
    'information__block__academic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__academic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  textAcademic = document.createElement('span');
  textAcademic.className = 'text__academic';
  informationBlock.appendChild(textAcademic).textContent =
    'SAP – Módulo de Sourcing e Implantação, pela GE.';

  informationBlock = document.createElement('div');
  academicDiv.appendChild(informationBlock).className =
    'information__block__academic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__academic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  textAcademic = document.createElement('span');
  textAcademic.className = 'text__academic';
  informationBlock.appendChild(textAcademic).textContent =
    'Manutenção Eletro-Eletrônica de Máquinas a CNC, pela Indústrias Romi.';

  informationBlock = document.createElement('div');
  academicDiv.appendChild(informationBlock).className =
    'information__block__academic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__academic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  textAcademic = document.createElement('span');
  textAcademic.className = 'text__academic';
  informationBlock.appendChild(textAcademic).textContent =
    'Automação Pneumática, pela Schrader Bellows.';

  informationBlock = document.createElement('div');
  academicDiv.appendChild(informationBlock).className =
    'information__block__academic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__academic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  textAcademic = document.createElement('span');
  textAcademic.className = 'text__academic';
  informationBlock.appendChild(textAcademic).textContent =
    'Diversos Cursos Técnicos (Negociação, Green Belt, Empretec, SOX, PMP, Gestão de Projetos, de Pessoas, de Equipes, de Qualidade e Vendas, pela FGV, Sebrae e GE.';

  screen.appendChild(academicDiv);
}

function academicFunction720() {
  screen = document.querySelector('#academic720');
  academic = true;
  academicFunction();
}

function academicFunction721() {
  screen = document.querySelector('#academic721');
  academic = false;
  academicFunction();
}

