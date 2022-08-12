function contactsFunction() {
  let contactsDiv = document.createElement('div');
  contactsDiv.className = 'contacts__div';

  let contactsTitleParagraph = document.createElement('p');
  contactsTitleParagraph.className = 'contacts__title';
  contactsDiv.appendChild(contactsTitleParagraph).textContent = 'Contatos';

  let informationBlock = document.createElement('div');
  contactsDiv.appendChild(informationBlock).className = 'information__block__contacts';

  let iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__contacts';
  informationBlock.appendChild(iconGrade).textContent = 'phone';

  let textcontacts = document.createElement('span');
  textcontacts.className = 'text__contacts';
  informationBlock.appendChild(textcontacts).textContent = '+55 19 98194-6837';

  informationBlock = document.createElement('div');
  contactsDiv.appendChild(informationBlock).className = 'information__block__contacts';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__contacts';
  informationBlock.appendChild(iconGrade).textContent = 'room';

  textcontacts = document.createElement('span');
  textcontacts.className = 'text__contacts';
  informationBlock.appendChild(textcontacts).textContent = 'Campinas, SP';

  informationBlock = document.createElement('div');
  contactsDiv.appendChild(informationBlock).className = 'information__block__contacts';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__contacts';
  informationBlock.appendChild(iconGrade).textContent = 'email';

  textcontacts = document.createElement('span');
  textcontacts.className = 'text__contacts';
  informationBlock.appendChild(textcontacts).textContent = 'marcosrburatto@gmail.com';

  informationBlock = document.createElement('div');
  contactsDiv.appendChild(informationBlock).className = 'information__block__contacts';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__contacts';
  informationBlock.appendChild(iconGrade).textContent = 'computer';

  textcontacts = document.createElement('span');
  textcontacts.className = 'text__contacts';
  informationBlock.appendChild(textcontacts).textContent = 'marcosanand.com.br';

  screen.appendChild(contactsDiv);
}

function contactsFunction720() {
  screen = document.querySelector('#contacts720');
  contactsFunction();
}

function contactsFunction721() {
  screen = document.querySelector('#contacts721');
  contactsFunction();
}
