/* eslint-disable react/react-in-jsx-scope */
import { Fragment } from "react/cjs/react.production.min";

import { RestaurantCard } from "./restaurant-card.component";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const rest = {
    name: "Bubba",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address: "230 some random street",
    isOpenNow: false,
    rating: 4,
    placeId: "",
    isClosedTemporarily: true,
  };

  return (
    <Fragment>
      <RestaurantCard restaurant={restaurant} key={restaurant.name} />
    </Fragment>
  );
};
