const rootContainer = document.querySelector('#root');

const carCards = carData.map(({ brand, model, desc, imgSrc, linkAddress }) => new Card({
  desc,
  imgSrc,
  title: brand + ' ' + model,
  href: linkAddress,
}));
const carCardContainer = new CardContainer(carCards);

const animalCards = animalData.map(({ name, kind, about, imgSrc, link }) => new Card({
  imgSrc,
  desc: about,
  title: name + ' ' + kind,
  href: link,
}));
const animalCardContainer = new CardContainer(animalCards);

const table1 = new Table({ 
  columns: ['Vardas', 'Pavardė'],
  rows: [
    ['Kibiras', 'Kentaurius'],
    ['Kibiras', 'Kentaurius'],
    ['Kibiras', 'Kentaurius'],
    ['Kibiras', 'Kentaurius'],
    ['Kibiras', 'Kentaurius'],
    ['Kibiras', 'Kentaurius'],
    ['Kibiras', 'Kentaurius']
  ]
});
const table2 = new Table({ 
  columns: ['Vardas', 'Pavardė', 'Svoris (kg)', 'Ūgis (m)'],
  rows: [
    ['Kevinas', 'Barbenis', '80', '1.80'],
    ['Kevinas', 'Barbenis', '80', '1.80'],
    ['Kevinas', 'Barbenis', '80', '1.80'],
    ['Kevinas', 'Barbenis', '80', '1.80'],
    ['Kevinas', 'Barbenis', '80', '1.80'],
    ['Kevinas', 'Barbenis', '80', '1.80'],
    ['Kevinas', 'Barbenis', '80', '1.80'],
    ['Kevinas', 'Barbenis', '80', '1.80'],
    ['Kevinas', 'Barbenis', '80', '1.80'],
  ]
 });

// rootContainer.appendChild(carCardContainer.element);
// rootContainer.appendChild(animalCardContainer.element);
rootContainer.appendChild(table1.element);
rootContainer.appendChild(table2.element);
