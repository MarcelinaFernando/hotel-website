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


// Special Offers section

const specialOffers = [
  {
    image: 'assets/images/hotel1.png',
    title: 'Wilderness Club at Big <br>Ceddar',
    date: '28 October — 1 November',
    price: '$2016',
    per: '/6 night',
    ratingImage: 'assets/icons/rating.png', 
    favoriteIcon: 'assets/icons/favorite.png'
  },
  {
    image: 'assets/images/hotel2.png',
    title: 'Wilderness Club at Big <br>Ceddar',
    date: '28 October — 1 November',
    price: '$2016',
    per: '/6 night',
    ratingImage: 'assets/icons/rating.png',
    favoriteIcon: 'assets/icons/favorite.png'
  },
  {
    image: 'assets/images/hotel3.png',
    title: 'Wilderness Club at Big <br>Ceddar',
    date: '28 October — 1 November',
    price: '$2016',
    per: '/6 night',
    ratingImage: 'assets/icons/rating.png',
    favoriteIcon: 'assets/icons/favorite.png'
  }
];

const offersContainer = document.getElementById('special-offers-container');

const offersWrapper = document.createElement('div');
offersWrapper.classList.add('offers-wrapper');

specialOffers.forEach(offer => {
  const offerCard = document.createElement('div');
  offerCard.classList.add('offer-card');

  offerCard.innerHTML = `
    <div class="image-wrapper">
      <img class="hotel-image" src="${offer.image}" alt="${offer.title}">
      <img class="rating-icon" src="${offer.ratingImage}" alt="Rating">
      <img class="favorite-icon" src="${offer.favoriteIcon}" alt="Favorite">
    </div>
    <div class="offer-info">
      <h3>${offer.title}</h3>
      <p class="date">${offer.date}</p>
      <p class="price">${offer.price} <span class="per">${offer.per}</span></p>
    </div>
  `;

  offersWrapper.appendChild(offerCard);
});

offersContainer.appendChild(offersWrapper);


// Testimonials section

const testimonials = [
  {
    image: 'assets/images/client1.png',
    text: `I quickly found the right tour for me, but I had a few questions about the hotel, 
    I wrote to tech support and they answered all my questions within an hour. 
    The vacation itself was perfect. Thank you very much. I will come back again and again.`,
    name: 'Jannike Borg',
    profession: 'Publisher'
  },
  {
    image: 'assets/images/client2.png',
    text: `I quickly found the right tour for me, but I had a few questions about the hotel, 
    I wrote to tech support and they answered all my questions within an hour. 
    The vacation itself was perfect. Thank you very much. I will come back again and again.`,
    name: 'LeBron Durant',
    profession: 'Flight attendant'
  },
  {
    image: 'assets/images/client3.png',
    text: `I quickly found the right tour for me, but I had a few questions about the hotel, 
    I wrote to tech support and they answered all my questions within an hour. 
    The vacation itself was perfect. Thank you very much. I will come back again and again.`,
    name: 'Kaarel Piho',
    profession: 'Chiropodist'
  }
];

const testimonialsContainer = document.getElementById('testimonials-container');

testimonials.forEach(testimonial => {
  const card = document.createElement('div');
  card.classList.add('testimonial-card');

  card.innerHTML = `
    <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-img">
    <p class="testimonial-text">${testimonial.text}</p>
    <p class="testimonial-author"><strong>${testimonial.name}</strong>, <em>${testimonial.profession}</em></p>
  `;

  testimonialsContainer.appendChild(card);
});

// Add an image to the "More Reviews" button
const moreReviewsImg = document.createElement('div');
moreReviewsImg.classList.add('more-reviews-image');
moreReviewsImg.innerHTML = `
  <img src="assets/images/more-reviews.png" alt="More Reviews">
`;

testimonialsContainer.appendChild(moreReviewsImg);