import react from "react";
import { TextInput } from "react-native-paper";
import { View } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Button } from "react-native-paper";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  ErrorContainer,
  AccountVideoBackground,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/firebase/authentication/authentication.context";
import { Text } from "../../../components/typography/typography.component";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = react.useState("");
  const [password, setPassword] = react.useState("");
  const { user, isLoading, error, onLogin, isAuthenticated } = react.useContext(
    AuthenticationContext
  );

  return (
    <AccountBackground>
      <AccountCover />
      <Button icon="arrow-left" onPress={() => navigation.goBack()}>
        Back
      </Button>
      <AccountContainer>
        <TextInput
          label="Email"
          type="outlined"
          underlineColor="blue"
          textContentType="emailAddress"
          keyboardType="email-address"
          activeUnderlineColor="blue"
          autoCapitalization="none"
          value={email}
          style={{ width: 300 }}
          onChangeText={(email) => setEmail(email)}
        />

        <Spacer size="large" />
        <TextInput
          underlineColor="blue"
          activeUnderlineColor="blue"
          label="Password"
          textContentType="password"
          secureTextEntry
          value={password}
          type="outlined"
          style={{ width: 300 }}
          onChangeText={(password) => setPassword(password)}
        />
        <ErrorContainer>
          <Text variant="error"> {error}</Text>
        </ErrorContainer>
        <Button
          icon="lock-open-outline"
          color="red"
          mode="contained"
          style={{ padding: 5 }}
          onPress={() => onLogin(email, password)}
        >
          Login
        </Button>
      </AccountContainer>
    </AccountBackground>
  );
};
