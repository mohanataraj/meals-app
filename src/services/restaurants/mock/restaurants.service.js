import { mocks } from "./index";
import { restaurantMappedResult } from "../../Utils/restaurantutility";
//import { camelCasing } from "../../Utils/camelcasing";

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("location not found");
    }

    resolve(mock);
  });
};
