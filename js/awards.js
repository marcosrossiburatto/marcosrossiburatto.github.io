function awardsFunction() {
  let awardsDiv = document.createElement('div');
  awardsDiv.className = 'awards__div';

  let awardsTitleParagraph = document.createElement('p');
  awardsTitleParagraph.className = 'awards__title';
  awardsDiv.appendChild(awardsTitleParagraph).textContent = 'Prêmios Recebidos';

  let informationBlock = document.createElement('div');
  awardsDiv.appendChild(informationBlock).className = 'information__block__awards';

  let iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__awards';
  informationBlock.appendChild(iconGrade).textContent = 'done';

  let textawards = document.createElement('span');
  textawards.className = 'text__awards';
  informationBlock.appendChild(textawards).textContent = 'Negociações técnicas bem sucedidas de projetos, pela empresa Kidde Brasil em 2010, 2011 e 2012.';

  informationBlock = document.createElement('div');
  awardsDiv.appendChild(informationBlock).className = 'information__block__awards';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__awards';
  informationBlock.appendChild(iconGrade).textContent = 'done';

  textawards = document.createElement('span');
  textawards.className = 'text__awards';
  informationBlock.appendChild(textawards).textContent = 'Entrega e exportação de equipamentos fabricados em tempo recorde, pela empresa GE Brasil em 2007.';

  informationBlock = document.createElement('div');
  awardsDiv.appendChild(informationBlock).className = 'information__block__awards';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__awards';
  informationBlock.appendChild(iconGrade).textContent = 'done';

  textawards = document.createElement('span');
  textawards.className = 'text__awards';
  informationBlock.appendChild(textawards).textContent = 'Entrega de ampliação de energia de um data-center no Rio de Janeiro, pela empresa Nortel Eletricidade em 2004.';

  screen.appendChild(awardsDiv);
}

function awardsFunction720() {
  screen = document.querySelector('#awards720');
  awardsFunction();
}

function awardsFunction721() {
  screen = document.querySelector('#awards721');
  awardsFunction();
}
