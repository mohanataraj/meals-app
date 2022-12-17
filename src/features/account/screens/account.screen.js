import react from "react";
import { Button } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Button
          icon="lock-open-outline"
          color="red"
          mode="contained"
          style={{ padding: 5 }}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Button>
        <Spacer size="large" />
        <Button
          icon="lock-open-outline"
          color="red"
          mode="contained"
          style={{ padding: 5 }}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Button>
      </AccountContainer>
    </AccountBackground>
  );
};
