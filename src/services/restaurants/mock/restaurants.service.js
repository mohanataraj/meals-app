import { mocks } from "./index";
import { restaurantMappedResult } from "../../Utils/restaurantutility";

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  const locationLatitude = JSON.stringify(location.lat);
  const locationLongitude = JSON.stringify(location.lng);
  const loc = `${locationLatitude},${locationLongitude}`;
  return new Promise((resolve, reject) => {
    const mock = mocks[loc];
    if (!mock) {
      reject("location not found");
    }

    resolve(mock);
  });
};
