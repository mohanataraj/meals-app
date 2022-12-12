import react from "react";
import styled from "styled-components";
import { View, Image, Pressable } from "react-native";
import { Text } from "../../../../components/typography/typography.component";
import WebView from "react-native-webview";
import { Platform } from "expo-modules-core";

const isAndroid = Platform.OS === "android";

const MyText = styled(Text)`
  font-weight: bold;
  font-variant-caps: small-caps;
`;
const IOSCompactCard = styled(Image)`
  max-width: 120px;
  align-items: center;
`;
export const MapCallout = ({ restaurant }) => {
  const Image = isAndroid ? WebView : IOSCompactCard;
  return (
    <View>
      <Image
        style={{ width: 100, height: 100, borderRadius: 10 }}
        source={{ uri: restaurant.photos[0] }}
      />
      <MyText center variant="error" numberOfLines={3}>
        {restaurant.name}
      </MyText>
    </View>
  );
};
