import RestaurantData from '../../data/restaurantData';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
          <div class="content">
            <h2 class="content__heading">Restaurant</h2>
            <div id="restaurants" class="restaurants">
            </div>
          </div>
          `;
  },

  async afterRender() {
    const restaurants = await RestaurantData.getRestaurantList();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Home;
