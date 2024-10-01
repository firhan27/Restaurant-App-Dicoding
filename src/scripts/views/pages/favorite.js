import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantFavoriteTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
          <div class="content">
            <h2 class="content__heading">Favorite Restaurant</h2>
            <div id="restaurants" class="restaurants">
            </div>
          </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantFavoriteTemplate(restaurant);
    });
  },
};

export default Favorite;
