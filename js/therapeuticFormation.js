function therapeuticFunction() {
  let therapeuticDiv = document.createElement('div');
  therapeuticDiv.className = 'therapeutic__div';

  let therapeuticTitleParagraph = document.createElement('div');
  therapeuticDiv.appendChild(therapeuticTitleParagraph).className = 'therapeutic__title';
  
  let therapeuticTitleParagraphPart01 = document.createElement('span');
  therapeuticTitleParagraphPart01.className = 'therapeutic__title__part01'
  therapeuticTitleParagraph.appendChild(therapeuticTitleParagraphPart01).textContent = 'Formações Terapêuticas e';
  
  if (therapeutic) {
    let partBR = document.createElement('br'); 
    partBR.className = 'therapeutic__partBR';
    therapeuticTitleParagraph.appendChild(partBR).textContent = '';
  } else {
    let partBR = document.createElement('span'); 
    partBR.className = 'therapeutic__partBR';
    therapeuticTitleParagraph.appendChild(partBR).textContent = ' ';
  }

  let therapeuticTitleParagraphPart02 = document.createElement('span');
  therapeuticTitleParagraphPart02.className = 'therapeutic__title_part02'
  therapeuticTitleParagraph.appendChild(therapeuticTitleParagraphPart02).textContent = 'Cursos Complementares';

  let informationBlock = document.createElement('div');
  therapeuticDiv.appendChild(informationBlock).className = 'information__block__therapeutic';

  let iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__therapeutic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  let texttherapeutic = document.createElement('span');
  texttherapeutic.className = 'text__therapeutic';
  informationBlock.appendChild(texttherapeutic).textContent = 'Capacitações Terapêuticas no Centro Metamorfose – Deva Nishok.';

  informationBlock = document.createElement('div');
  therapeuticDiv.appendChild(informationBlock).className = 'information__block__therapeutic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__therapeutic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  texttherapeutic = document.createElement('span');
  texttherapeutic.className = 'text__therapeutic';
  informationBlock.appendChild(texttherapeutic).textContent = 'PNL – Programação Neurolinguística na Actius com Fernando Dalgalarrondo.';

  informationBlock = document.createElement('div');
  therapeuticDiv.appendChild(informationBlock).className = 'information__block__therapeutic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__therapeutic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  texttherapeutic = document.createElement('span');
  texttherapeutic.className = 'text__therapeutic';
  informationBlock.appendChild(texttherapeutic).textContent = 'Desenvolvimento de Lideranças e Motivação, pelo Sebrae.';

  informationBlock = document.createElement('div');
  therapeuticDiv.appendChild(informationBlock).className = 'information__block__therapeutic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__therapeutic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  texttherapeutic = document.createElement('span');
  texttherapeutic.className = 'text__therapeutic';
  informationBlock.appendChild(texttherapeutic).textContent = 'Vivência na Westshore, Victoria, BC, Canada.';

  informationBlock = document.createElement('div');
  therapeuticDiv.appendChild(informationBlock).className = 'information__block__therapeutic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__therapeutic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  texttherapeutic = document.createElement('span');
  texttherapeutic.className = 'text__therapeutic';
  informationBlock.appendChild(texttherapeutic).textContent = 'Gestão de Pessoas e Equipes pela Catho.';

  informationBlock = document.createElement('div');
  therapeuticDiv.appendChild(informationBlock).className = 'information__block__therapeutic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__therapeutic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  texttherapeutic = document.createElement('span');
  texttherapeutic.className = 'text__therapeutic';
  informationBlock.appendChild(texttherapeutic).textContent = 'Como influenciar pessoas pela Catho.';

  informationBlock = document.createElement('div');
  therapeuticDiv.appendChild(informationBlock).className = 'information__block__therapeutic';

  iconDone = document.createElement('span');
  iconDone.className = 'material-icons icon__color__therapeutic';
  informationBlock.appendChild(iconDone).textContent = 'done';

  texttherapeutic = document.createElement('span');
  texttherapeutic.className = 'text__therapeutic';
  informationBlock.appendChild(texttherapeutic).textContent = 'Como Desenvolver Lideranças e Motivação pelo Sebrae.';

  screen.appendChild(therapeuticDiv);
}

function therapeuticFunction720() {
  screen = document.querySelector('#therapeutic720');
  therapeutic = true;
  therapeuticFunction();
}

function therapeuticFunction721() {
  screen = document.querySelector('#therapeutic721');
  therapeutic = false;
  therapeuticFunction();
}
