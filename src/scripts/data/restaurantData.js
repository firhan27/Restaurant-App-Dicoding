import API_ENDPOINT from '../globals/api-endpoint';

const RestaurantData = {
  async getRestaurantList() {
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseJson = await response.json();
      return responseJson.restaurants; // Pastikan ini sesuai dengan struktur data dari API
    } catch (error) {
      console.error('Error fetching restaurant list:', error);
      return [];
    }
  },

  async getRestaurantDetail(id) {
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseJson = await response.json();
      return responseJson.restaurant; // Pastikan ini sesuai dengan struktur data dari API
    } catch (error) {
      console.error('Error fetching restaurant list:', error);
      return [];
    }
  },

};

export default RestaurantData;

// import API_ENDPOINT from '../globals/api-endpoint';

// class RestaurantData {
//   static async getRestaurantList() {
//     const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
//     const responseJson = await response.json();
//     return responseJson.restaurants;
//   }

//   static async getRestaurantDetail(id) {
//     const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));
//     const responseJson = await response.json();
//     return responseJson.restaurant;
//   }
// }

// export default DataRestaurant;
