function professionalHistoryFunction() {
  let professionalHistoryDiv = document.createElement('div');
  professionalHistoryDiv.className = 'professionalHistory__div';

  let professionalHistoryTitleParagraph = document.createElement('p');
  professionalHistoryTitleParagraph.className = 'professionalHistory__title';
  professionalHistoryDiv.appendChild(professionalHistoryTitleParagraph).textContent = 'Histórico Profissional';

  screen.appendChild(professionalHistoryDiv);
}

function professionalHistoryFunction720() {
  screen = document.querySelector('#professionalHistory720');
  professionalHistoryFunction();
}

function professionalHistoryFunction721() {
  screen = document.querySelector('#professionalHistory721');
  professionalHistoryFunction();
}
