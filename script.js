// Mobile Menu

const openMenuBtn = document.querySelector('.mobile-menu');
const closeMenuBtn = document.querySelector('.close-menu');
const mobileNav = document.querySelector('.mobile-nav');
const headerMobile = document.querySelector('.head_mobile');

openMenuBtn.addEventListener('click', () => {
  mobileNav.classList.add('open');
  headerMobile.style.display = 'none'; //hides the header
});

closeMenuBtn.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  headerMobile.style.display = 'flex'; // show the header again 
});


// Why Choose Us section

const whyCards = [
  {
    image: 'assets/icons/price.png',
    title: 'Payment methods',
    description: 'We have a lot of them, from cryptocurrencies to barter for potatoes'
  },
  {
    image: 'assets/icons/hotel.png',
    title: 'Simple search process',
    description: 'We checked it out, even the kid did it, but it was my mom\'s friend\'s son'
  },
  {
    image: 'assets/icons/support.png',
    title: '24/7 Support',
    description: 'Is there something you don\'t understand? Feel free to call us. Phone number in the footer'
  },
  {
    image: 'assets/icons/star.png',
    title: 'We are nice',
    description: 'Fantasy is over, there will be something really convincing here'
  }
];

const container = document.getElementById('why-choose-us-container');

// Create a wrapper for the cards
const cardsWrapper = document.createElement('div');
cardsWrapper.classList.add('why-cards-wrapper');

// For each card, create an HTML block
whyCards.forEach(card => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('why-card');

  cardElement.innerHTML = `
    <img src="${card.image}" alt="${card.title}">
    <h3>${card.title}</h3>
    <p>${card.description}</p>
  `;

  cardsWrapper.appendChild(cardElement);
});

// Insert all cards into the container
container.appendChild(cardsWrapper);
