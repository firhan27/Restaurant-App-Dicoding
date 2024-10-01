import UrlParser from '../../routes/url-parser';
import RestaurantData from '../../data/restaurantData';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
          <div class="content">
            <h2 class="content__heading">Detail Restaurant</h2>
            <br />
            <div id="restaurant_detail"></div>
            <div id="likeButtonContainer"></div>
          </div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantData.getRestaurantDetail(url.id);
    const restaurantsContainer = document.querySelector('#restaurant_detail');
    restaurantsContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
