function personalPictureFunction() {
  let personalPictureDiv = document.createElement('div');
  personalPictureDiv.className = 'personalPicture__div';

  let informationBlockImg = document.createElement('img');
  personalPictureDiv.appendChild(informationBlockImg).className = 'information__block__personalPicture__title__img';
  informationBlockImg.src = "./imgs/pessoal/Marcos20191106A.jpg";
  informationBlockImg.alt = "photo Marcos Buratto";

  screen.appendChild(personalPictureDiv);
}

function personalPictureFunction720() {
  screen = document.querySelector('#personalPicture720');
  personalPictureFunction();
}

function personalPictureFunction721() {
  screen = document.querySelector('#personalPicture721');
  personalPictureFunction();
}
