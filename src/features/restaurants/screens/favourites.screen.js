import react from "react";
import { Card, Title, Paragraph, Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FavouriteContext } from "../../../services/favourites/favourites.context";
import { CompactRestaurantInfo } from "../../../components/restaurants/restaurant-compact.component";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { CompactFavouritesInfo } from "../../../components/favourite/favourites.settings";
import { RestaurantList, RestaurantListContainer } from "./restaurants.screen";
import { RestaurantCard } from "../components/restaurant/restaurant-card.component";
import { useNavigation } from "@react-navigation/native";

export const FavouriteScreen = () => {
  const { favourites } = react.useContext(FavouriteContext);
  const navigation = useNavigation();
  console.log(favourites);
  return (
    <RestaurantListContainer key={favourites.name}>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details", { restaurant: item })
              }
            >
              <RestaurantCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </RestaurantListContainer>
  );
};

/**
 *
 *  <Card>
      <Card.Content>
        <View
          style={{
            alignItems: "center",
            alignContent: "space-around",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >


          <Title>{favourites[0].name}</Title>
        </View>
      </Card.Content>
    </Card>
 */
