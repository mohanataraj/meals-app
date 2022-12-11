import react from "react";
import { List, Text } from "react-native-paper";
import { ScrollView } from "react-native";
export const RestaurantMenuList = () => {
  const [breakfastExpanded, setbreakfastExpanded] = react.useState(false);
  const [lunchExpanded, setlunchExpanded] = react.useState(false);
  const [dinnerExpanded, setdinnerExpanded] = react.useState(false);
  const [drinksExpanded, setdrinksExpanded] = react.useState(false);

  return (
    <ScrollView>
      <List.Section title="Menu">
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice-outline" />}
          onPress={() => setbreakfastExpanded(!breakfastExpanded)}
          expanded={breakfastExpanded}
        >
          <List.Item title="first item" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="food" />}
          onPress={() => setlunchExpanded(!lunchExpanded)}
          expanded={lunchExpanded}
        >
          <List.Item title="first item" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-turkey" />}
          onPress={() => setdinnerExpanded(!dinnerExpanded)}
          expanded={dinnerExpanded}
        >
          <List.Item title="first item" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="liquor" />}
          onPress={() => setdrinksExpanded(!drinksExpanded)}
          expanded={drinksExpanded}
        >
          <List.Item title="first item" />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};
