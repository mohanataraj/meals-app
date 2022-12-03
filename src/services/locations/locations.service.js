import camelize from "camelize";

import { locations } from "./locations.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm.toLowerCase()];
    if (!locationMock) {
      reject("not found");
    }
    console.log("lr:", locationMock);
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
