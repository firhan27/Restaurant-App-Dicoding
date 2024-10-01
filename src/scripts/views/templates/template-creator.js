import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantListTemplate = (restaurant) => `
    <div class="restaurant-item">
    <div class="restaurant-item__header">
         <img class="lazyload" data-src=${CONFIG.BASE_IMAGE_URL + restaurant.pictureId} alt=${restaurant.name} crossorigin="anonymous" />
    </div>
    <div class="restaurant-text">
        <h3 class="restaurant-name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
        <p class="restaurant-rating"><i class="fa fa-star"></i>${restaurant.rating}</p>
        <p class="restaurant-city">${restaurant.city}</p>
        <p class="card-text">${restaurant.description}</p>
    </div>
    </div>
`;

const createRestaurantFavoriteTemplate = (restaurant) => `
   <div class="restaurant-item">
    <div class="restaurant-item__header">
         <img class="lazyload" data-src=${CONFIG.BASE_IMAGE_URL + restaurant.pictureId} alt=${restaurant.name} crossorigin="anonymous" /> 
    </div>
    <div class="restaurant-text">
        <h3 class="restaurant-name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
        <p class="restaurant-rating"><i class="fa fa-star"></i>${restaurant.rating}</p>
        <p class="restaurant-city">${restaurant.city}</p>
    </div>
    </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant_detail">
    <h1>${restaurant.name}</h1>
    <img class="lazyload" data-src=${CONFIG.BASE_IMAGE_URL + restaurant.pictureId} alt=${restaurant.name} crossorigin="anonymous" />
    <div class="restaurant_detail_info">
      <h2>Information</h2>
      <ul>
        <li>
          <h3>City</h3>
          <p>${restaurant.city}</p>
        </li>
        <li>
          <h3>Address</h3>
          <p>${restaurant.address}</p>
        </li>
        <li>
          <h3>Rating</h3>
          <p>${restaurant.rating}</p>
        </li>
        <li>
          <h3>Description</h3>
          <p>${restaurant.description}</p>
        </li>
        <li>
          <h3>Foods Menu</h3>
          <span id="food">
          <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
        <li>
          <h3>Drinks Menu</h3>
          <span id="drink">
          <p>${restaurant.menus.drinks.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
      </ul>
    </div>

    <div class="restaurant_detail_review">
      <h2>Reviews</h2>
      ${restaurant.customerReviews.map((review) => `
        <ul>
          <li>Name: ${review.name}</li>
          <li>Date: ${review.date}</li>
          <li>Review: ${review.review}</li>
          <br />
        </ul>    
        `).join('')}
    </div>
  </div>

`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantListTemplate,
  createRestaurantDetailTemplate,
  createRestaurantFavoriteTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
