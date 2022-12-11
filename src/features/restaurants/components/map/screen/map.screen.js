import react, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import MapView, { Marker, MarkerAnimated } from "react-native-maps";
//relative imports...
import { SafeArea } from "../../../screens/utility/screen.utility";
import { SearchBar } from "../map.component";
import { LocationContext } from "../../../../../services/locations/locations.context";
import { RestaurantContext } from "../../../../../services/restaurants/mock/restaurants.context";

export const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantContext);
  const [latDelta, setLatDelta] = useState(0);
  const { viewport, lat, lng } = location;
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    const latDelta = northeastLat - southwestLat;

    setLatDelta(latDelta);
  }, [location, viewport]);

  return (
    <SafeArea>
      <SearchBar />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MarkerAnimated
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            />
          );
        })}
      </Map>
    </SafeArea>
  );
};
