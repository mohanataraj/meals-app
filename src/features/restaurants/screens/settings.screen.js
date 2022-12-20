import react from "react";
import styled from "styled-components";
import { List, Avatar } from "react-native-paper";
import { View } from "react-native";
import { SafeArea } from "./utility/screen.utility";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/typography.component";
import { AuthenticationContext } from "../../../services/firebase/authentication/authentication.context";
//import { useNavigation } from "@react-navigation/native";
const SettingsItem = styled(List.Item)`
  padding: 16px;
`;

const AvatarContainer = styled(View)`
  align-items: center;
`;

export const SettingScreen = ({ navigation }) => {
  const { user, logoutRequest, isAuthenticated } = react.useContext(
    AuthenticationContext
  );

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={120} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          {!user ? (
            <Text variant="label">Unknow user</Text>
          ) : (
            <Text variant="label">{user.email}</Text>
          )}
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={logoutRequest}
        />
      </List.Section>
    </SafeArea>
  );
};
