function languagesFunction() {
  let languagesDiv = document.createElement('div');
  languagesDiv.className = 'languages__div';

  let languagesTitleParagraph = document.createElement('p');
  languagesTitleParagraph.className = 'languages__title';
  languagesDiv.appendChild(languagesTitleParagraph).textContent = 'Idiomas';

  let informationBlock = document.createElement('div');
  languagesDiv.appendChild(informationBlock).className = 'information__block__languages';

  let iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__positive__languages';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__positive__languages';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__positive__languages';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__negative__languages';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  let textlanguages = document.createElement('span');
  textlanguages.className = 'text__languages';
  informationBlock.appendChild(textlanguages).textContent = 'Inglês';

  informationBlock = document.createElement('div');
  languagesDiv.appendChild(informationBlock).className = 'information__block__languages';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__positive__languages';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__positive__languages';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__positive__languages';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__negative__languages';
  informationBlock.appendChild(iconGrade).textContent = 'grade';

  textlanguages = document.createElement('span');
  textlanguages.className = 'text__languages';
  informationBlock.appendChild(textlanguages).textContent = 'Espanhol';

  screen.appendChild(languagesDiv);
}

function languagesFunction720() {
  screen = document.querySelector('#languages720');
  languagesFunction();
}

function languagesFunction721() {
  screen = document.querySelector('#languages721');
  languagesFunction();
}
