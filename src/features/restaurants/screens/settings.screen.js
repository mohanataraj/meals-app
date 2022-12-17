import react from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { SafeArea } from "./utility/screen.utility";
import { AuthenticationContext } from "../../../services/firebase/authentication/authentication.context";

export const SettingScreen = () => {
  const { logoutRequest, isAuthenticated } = react.useContext(
    AuthenticationContext
  );
  return (
    <SafeArea>
      <View style={{ width: 300, alignItems: "center" }}>
        <Button
          icon="lock"
          mode="contained"
          title="Logout"
          onPress={() => logoutRequest()}
        >
          Logout
        </Button>
      </View>
    </SafeArea>
  );
};
