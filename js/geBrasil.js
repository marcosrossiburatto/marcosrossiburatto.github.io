function geBrasilFunction() {
  let geBrasilDiv = document.createElement('div');
  geBrasilDiv.className = 'geBrasil__div';

  let informationBlock = document.createElement('div');
  geBrasilDiv.appendChild(informationBlock).className = 'information__block__geBrasil__title';



  let informationBlockAhref = document.createElement('a');
  informationBlock.appendChild(informationBlockAhref).className = 'information__block__ahref';
  informationBlockAhref.href = 'https://www.ge.com/research/technology-domains/controls-optimization';
  informationBlockAhref.target = '_blank';
  informationBlockAhref.rel = 'noreferrer noopener';
  informationBlockAhref.title = 'GE Brasil Website';


  let informationBlockImg = document.createElement('img');
  informationBlockAhref.appendChild(informationBlockImg).className = 'information__block__geBrasil__title__img';
  informationBlockImg.src = "./imgs/logos/Logo_GE_Brasil.png";
  informationBlockImg.alt = "Logo GE Brasil";




  let informationBlockDatas = document.createElement('div');
  informationBlock.appendChild(informationBlockDatas).className = 'information__block__geBrasil__title__datas';

  let informationBlockDate = document.createElement('p');
  informationBlockDate.className = 'information__block__geBrasil__title__date';
  informationBlockDatas.appendChild(informationBlockDate).textContent = '09/2005 – 06/2009 Campinas, SP';




  let informationBlockgeBrasilAhref = document.createElement('a');
  informationBlockDatas.appendChild(informationBlockgeBrasilAhref).className = 'information__block__geBrasil__ahref';
  informationBlockgeBrasilAhref.href = 'https://www.ge.com/research/technology-domains/controls-optimization';
  informationBlockgeBrasilAhref.target = '_blank';
  informationBlockgeBrasilAhref.rel = 'noreferrer noopener';
  informationBlockgeBrasilAhref.title = 'GE Brasil Website';

  let geBrasilTitleParagraph01 = document.createElement('p');
  geBrasilTitleParagraph01.className = 'geBrasil__title__01';
  informationBlockgeBrasilAhref.appendChild(geBrasilTitleParagraph01).textContent = 'GENERAL ELECTRIC DO BRASIL';

  let geBrasilTitleParagraph02 = document.createElement('p');
  geBrasilTitleParagraph02.className = 'geBrasil__title__02';
  informationBlockgeBrasilAhref.appendChild(geBrasilTitleParagraph02).textContent = 'Controls & Optimization';






  let textActivities = document.createElement('p');
  textActivities.className = 'geBrasil__text__activities';
  informationBlockDatas.appendChild(textActivities).textContent = 'Empresa multinacional americana fabricante de equipamentos para controle de geração de energia.';

  textRole = document.createElement('p');
  textRole.className = 'geBrasil__text__role';
  informationBlockDatas.appendChild(textRole).textContent = 'Departamento de Suprimentos.';

  let informationBlockText = document.createElement('p');
  geBrasilDiv.appendChild(informationBlockText).className = 'geBrasil__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__geBrasil__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  let textInformation = document.createElement('span');
  textInformation.className = 'geBrasil__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Planejamento da produção customizada na confecção de painéis elétricos e equipamentos mecânicos (unidade de pressão hidráulica) para controle e monitoramento de turbinas de geração de energia elétrica de usinas hidrelétricas nacionais e internacionais.';

  informationBlockText = document.createElement('p');
  geBrasilDiv.appendChild(informationBlockText).className = 'geBrasil__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__geBrasil__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  textInformation = document.createElement('span');
  textInformation.className = 'geBrasil__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Desenvolvimento de processos internos, desenvolvendo e utilizando diversos Macros com o Excel – MS, para controle de pagamento a fornecedores de serviços, registros de inspeção de qualidade, processo de classificação fiscal e processos de importação e exportação via desembaraço expresso visando redução de prazo.';

  informationBlockText = document.createElement('p');
  geBrasilDiv.appendChild(informationBlockText).className = 'geBrasil__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__geBrasil__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  textInformation = document.createElement('span');
  textInformation.className = 'geBrasil__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Implantação do sistema SAP no escritório do México e preparação para os escritórios da Argentina, Chile e Venezuela na área de sourcing.';

  informationBlockText = document.createElement('p');
  geBrasilDiv.appendChild(informationBlockText).className = 'geBrasil__information__block__text';

  iconLess = document.createElement('span');
  iconLess.className = 'icon__color__geBrasil__text';
  informationBlockText.appendChild(iconLess).textContent = '-';

  textInformation = document.createElement('span');
  textInformation.className = 'geBrasil__text__information';
  informationBlockText.appendChild(textInformation).textContent = 'Recebimento de premiação devido à entrega de projetos em produção em tempo inferior ao planejado.';






  screen.appendChild(geBrasilDiv);
}

function geBrasilFunction720() {
  screen = document.querySelector('#geBrasil720');
  geBrasilFunction();
}

function geBrasilFunction721() {
  screen = document.querySelector('#geBrasil721');
  geBrasilFunction();
}
