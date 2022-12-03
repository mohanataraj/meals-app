import { mockImages } from "../restaurants/mock";
import { camelCasing } from "./camelcasing";

export const restaurantMappedResult = ({ results = [] }) => {
  const mappedResult = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemperorily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelCasing(mappedResult);
};
