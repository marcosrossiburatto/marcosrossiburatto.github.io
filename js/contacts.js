function contactsFunction() {
  let contactsDiv = document.createElement('div');
  contactsDiv.className = 'contacts__div';

  let contactsTitleParagraph = document.createElement('p');
  contactsTitleParagraph.className = 'contacts__title';
  contactsDiv.appendChild(contactsTitleParagraph).textContent = 'Contatos';

  let informationBlock = document.createElement('div');
  contactsDiv.appendChild(informationBlock).className = 'information__block__contacts';

  iconsBlockAhref = document.createElement('a');
  informationBlock.appendChild(iconsBlockAhref).className = 'left__side__icons__block__ahref';
  iconsBlockAhref.href = 'https://api.whatsapp.com/send?phone=5519981946837';
  iconsBlockAhref.target = '_blank';
  iconsBlockAhref.rel = 'noreferrer noopener';
  iconsBlockAhref.title = 'whatsapp';

  let iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__contacts';
  iconsBlockAhref.appendChild(iconGrade).textContent = 'phone';

  iconsBlockAhref = document.createElement('a');
  informationBlock.appendChild(iconsBlockAhref).className = 'left__side__icons__block__ahref';
  iconsBlockAhref.href = 'https://api.whatsapp.com/send?phone=5519981946837';
  iconsBlockAhref.target = '_blank';
  iconsBlockAhref.rel = 'noreferrer noopener';
  iconsBlockAhref.title = 'whatsapp';

  let textcontacts = document.createElement('span');
  textcontacts.className = 'text__contacts';
  iconsBlockAhref.appendChild(textcontacts).textContent = '+55 19 98194-6837';

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

  iconsBlockAhref = document.createElement('a');
  informationBlock.appendChild(iconsBlockAhref).className = 'left__side__icons__block__ahref';
  iconsBlockAhref.href = 'mailto:marcosrburatto@gmail.com';
  iconsBlockAhref.target = '_blank';
  iconsBlockAhref.rel = 'noreferrer noopener';
  iconsBlockAhref.title = 'mail_to';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__contacts';
  iconsBlockAhref.appendChild(iconGrade).textContent = 'email';

  iconsBlockAhref = document.createElement('a');
  informationBlock.appendChild(iconsBlockAhref).className = 'left__side__icons__block__ahref';
  iconsBlockAhref.href = 'mailto:marcosrburatto@gmail.com';
  iconsBlockAhref.target = '_blank';
  iconsBlockAhref.rel = 'noreferrer noopener';
  iconsBlockAhref.title = 'mail_to';

  textcontacts = document.createElement('span');
  textcontacts.className = 'text__contacts';
  iconsBlockAhref.appendChild(textcontacts).textContent = 'marcosrburatto@gmail.com';

  informationBlock = document.createElement('div');
  contactsDiv.appendChild(informationBlock).className = 'information__block__contacts';

  iconsBlockAhref = document.createElement('a');
  informationBlock.appendChild(iconsBlockAhref).className = 'left__side__icons__block__ahref';
  iconsBlockAhref.href = 'https://marcosrossiburatto.github.io/cv_ti.html';
  iconsBlockAhref.target = '_blank';
  iconsBlockAhref.rel = 'noreferrer noopener';
  iconsBlockAhref.title = 'CV_Marcos_Buratto';

  iconGrade = document.createElement('span');
  iconGrade.className = 'material-icons icon__color__contacts';
  iconsBlockAhref.appendChild(iconGrade).textContent = 'computer';

  iconsBlockAhref = document.createElement('a');
  informationBlock.appendChild(iconsBlockAhref).className = 'left__side__icons__block__ahref';
  iconsBlockAhref.href = 'https://marcosrossiburatto.github.io/cv_ti.html';
  iconsBlockAhref.target = '_blank';
  iconsBlockAhref.rel = 'noreferrer noopener';
  iconsBlockAhref.title = 'CV_Marcos_Buratto';

  textcontacts = document.createElement('span');
  textcontacts.className = 'text__contacts';
  iconsBlockAhref.appendChild(textcontacts).textContent = 'marcosrossiburatto.github.io/cv_ti.html';

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
