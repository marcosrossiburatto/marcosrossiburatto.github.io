function footerFunction() {
  let footerDiv = document.createElement('div');
  footerDiv.className = 'footer__div';

  let footerTitleParagraph = document.createElement('p');
  footerDiv.appendChild(footerTitleParagraph).className = 'footer__block';

  let footerTitleSpan = document.createElement('span');
  footerTitleSpan.className = 'footer__title';
  footerTitleParagraph.appendChild(footerTitleSpan).textContent = ' ';

  footerTitleSpan = document.createElement('span');
  footerTitleSpan.className = 'footer__title__text';
  footerTitleParagraph.appendChild(footerTitleSpan).textContent = 'Siga-nos nas redes sociais: ';

  let iconsBlockAhref = document.createElement('a');
  footerTitleParagraph.appendChild(iconsBlockAhref).className = 'footer__icons__block__ahref';
  iconsBlockAhref.href = 'https://www.facebook.com/SementeVivaDesenvolvimentoHumano';
  iconsBlockAhref.target = '_blank';
  iconsBlockAhref.rel = 'noreferrer noopener';
  iconsBlockAhref.title = 'facebook_semente_viva';

  let iconBlockImg = document.createElement('img');
  iconsBlockAhref.appendChild(iconBlockImg).className = 'footer__block__icons';
  iconBlockImg.src = "./imgs/redes/meta.png";
  iconBlockImg.alt = "logo_facebook";

  iconsBlockAhref = document.createElement('a');
  footerTitleParagraph.appendChild(iconsBlockAhref).className = 'footer__icons__block__ahref';
  iconsBlockAhref.href = 'https://www.linkedin.com/in/marcosburatto/';
  iconsBlockAhref.target = '_blank';
  iconsBlockAhref.rel = 'noreferrer noopener';
  iconsBlockAhref.title = 'linkedin_Marcos_buratto';

  iconBlockImg = document.createElement('img');
  iconsBlockAhref.appendChild(iconBlockImg).className = 'footer__block__icons';
  iconBlockImg.src = "./imgs/redes/linkedin.png";
  iconBlockImg.alt = "logo_linkedin";

  iconsBlockAhref = document.createElement('a');
  footerTitleParagraph.appendChild(iconsBlockAhref).className = 'footer__icons__block__ahref';
  iconsBlockAhref.href = 'https://www.instagram.com/sementeviva_';
  iconsBlockAhref.target = '_blank';
  iconsBlockAhref.rel = 'noreferrer noopener';
  iconsBlockAhref.title = 'Instagram_sementeviva_';

  iconBlockImg = document.createElement('img');
  iconsBlockAhref.appendChild(iconBlockImg).className = 'footer__block__icons';
  iconBlockImg.src = "./imgs/redes/instagram.png";
  iconBlockImg.alt = "logo_instagram";

  iconsBlockAhref = document.createElement('a');
  footerTitleParagraph.appendChild(iconsBlockAhref).className = 'footer__icons__block__ahref';
  iconsBlockAhref.href = 'https://marcosrossiburatto.github.io/cv_ti.html';
  iconsBlockAhref.target = '_blank';
  iconsBlockAhref.rel = 'noreferrer noopener';
  iconsBlockAhref.title = 'site_semente_viva';

  iconBlockImg = document.createElement('img');
  iconsBlockAhref.appendChild(iconBlockImg).className = 'footer__block__icons';
  iconBlockImg.src = "./imgs/redes/site.png";
  iconBlockImg.alt = "logo_site";

  footerTitleParagraph = document.createElement('p');
  footerDiv.appendChild(footerTitleParagraph).className = 'footer__block';

  footerTitleSpan = document.createElement('span');
  footerTitleSpan.className = 'footer__title';
  footerTitleParagraph.appendChild(footerTitleSpan).textContent = ' ';

  footerTitleSpan = document.createElement('span');
  footerTitleSpan.className = 'footer__title__text';
  footerTitleParagraph.appendChild(footerTitleSpan).textContent = 'Entre em contato: ';

  iconBlockImg = document.createElement('img');
  footerTitleParagraph.appendChild(iconBlockImg).className = 'footer__block__icons';
  iconBlockImg.src = "./imgs/redes/telefone.png";
  iconBlockImg.alt = "logo_telefone";

  iconsBlockAhref = document.createElement('a');
  footerTitleParagraph.appendChild(iconsBlockAhref).className = 'footer__icons__block__ahref';
  iconsBlockAhref.href = 'https://api.whatsapp.com/send?phone=5519981946837';
  iconsBlockAhref.target = '_blank';
  iconsBlockAhref.rel = 'noreferrer noopener';
  iconsBlockAhref.title = 'whatsapp';

  iconBlockImg = document.createElement('img');
  iconsBlockAhref.appendChild(iconBlockImg).className = 'footer__block__icons';
  iconBlockImg.src = "./imgs/redes/whatsapp.png";
  iconBlockImg.alt = "logo_whatsapp";

  footerInformationTextSpan = document.createElement('span');
  footerInformationTextSpan.className = 'footer__information__text';
  footerTitleParagraph.appendChild(footerInformationTextSpan).textContent = '+55 19 9.8194-6837';

  footerTitleParagraph = document.createElement('p');
  footerDiv.appendChild(footerTitleParagraph).className = 'footer__block';

  footerTitleSpan = document.createElement('span');
  footerTitleSpan.className = 'footer__title';
  footerTitleParagraph.appendChild(footerTitleSpan).textContent = ' ';

  footerTitleSpan = document.createElement('span');
  footerTitleSpan.className = 'footer__title__text';
  footerTitleParagraph.appendChild(footerTitleSpan).textContent = ' ';

  iconsBlockAhref = document.createElement('a');
  footerTitleParagraph.appendChild(iconsBlockAhref).className = 'footer__icons__block__ahref';
  iconsBlockAhref.href = 'mailto:marcosrburatto@gmail.com';
  iconsBlockAhref.target = '_blank';
  iconsBlockAhref.rel = 'noreferrer noopener';
  iconsBlockAhref.title = 'mail_to';

  iconBlockImg = document.createElement('img');
  iconsBlockAhref.appendChild(iconBlockImg).className = 'footer__block__icons';
  iconBlockImg.src = "./imgs/redes/email.png";
  iconBlockImg.alt = "logo_email";

  iconsBlockAhref = document.createElement('a');
  footerTitleParagraph.appendChild(iconsBlockAhref).className = 'footer__icons__block__ahref';
  iconsBlockAhref.href = 'mailto:marcosrburatto@gmail.com';
  iconsBlockAhref.target = '_blank';
  iconsBlockAhref.rel = 'noreferrer noopener';
  iconsBlockAhref.title = 'mail_to';

  footerInformationTextSpan = document.createElement('span');
  footerInformationTextSpan.className = 'footer__information__text';
  iconsBlockAhref.appendChild(footerInformationTextSpan).textContent = 'marcosrburatto@gmail.com';

  footerTitleParagraph = document.createElement('p');
  footerDiv.appendChild(footerTitleParagraph).className = 'footer__block';

  footerTitleSpan = document.createElement('span');
  footerTitleSpan.className = 'footer__title';
  footerTitleParagraph.appendChild(footerTitleSpan).textContent = ' ';

  footerTitleSpan = document.createElement('span');
  footerTitleSpan.className = 'footer__title__text';
  footerTitleParagraph.appendChild(footerTitleSpan).textContent = 'Download do currículo:';

  iconsBlockAhref = document.createElement('a');
  footerTitleParagraph.appendChild(iconsBlockAhref).className = 'footer__icons__block__ahref';
  iconsBlockAhref.href = './pdfs/CV_Marcos_Buratto.pdf';
  iconsBlockAhref.download = 'CV_Marcos_Buratto.pdf';
  iconsBlockAhref.target = '_blank';
  iconsBlockAhref.rel = 'noreferrer noopener';
  iconsBlockAhref.title = 'pdf';

  iconBlockImg = document.createElement('img');
  iconsBlockAhref.appendChild(iconBlockImg).className = 'footer__block__icons';
  iconBlockImg.src = "./imgs/redes/download.png";
  iconBlockImg.alt = "logo_download";

  iconsBlockAhref = document.createElement('a');
  footerTitleParagraph.appendChild(iconsBlockAhref).className = 'footer__icons__block__ahref';
  iconsBlockAhref.href = './pdfs/CVTI_Marcos_Buratto.pdf';
  iconsBlockAhref.download = 'CVTI_Marcos_Buratto.pdf';
  iconsBlockAhref.target = '_blank';
  iconsBlockAhref.rel = 'noreferrer noopener';
  iconsBlockAhref.title = 'pdf';

  footerInformationTextSpan = document.createElement('span');
  footerInformationTextSpan.className = 'footer__information__text';
  iconsBlockAhref.appendChild(footerInformationTextSpan).textContent = 'Download CV';









  screen.appendChild(footerDiv);
}

function footerFunction720() {
  screen = document.querySelector('#footer720');
  footerFunction();
}
