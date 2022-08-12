function headerFunction() {
  let headerDiv = document.createElement('div');
  headerDiv.className = 'header__div';

  let headerName = document.createElement('p');
  headerName.className = 'header__name';
  headerDiv.appendChild(headerName).textContent = 'MARCOS ROSSI BURATTO, PMP';

  let headerLine = document.createElement('hr');
  headerDiv.appendChild(headerLine).className = 'header__line';

  let headerRole = document.createElement('p');
  headerRole.className = 'header__role';
  headerDiv.appendChild(headerRole).textContent = 'IT Project - Júnior';

  screen.appendChild(headerDiv);
}

function headerFunction720() {
  screen = document.querySelector('#header720');
  headerFunction();
}

function headerFunction721() {
  screen = document.querySelector('#header721');
  headerFunction();
}
