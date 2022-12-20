import react from "react";
import { TextInput, Button } from "react-native-paper";
import { KeyboardAvoidingView } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  ErrorContainer,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/firebase/authentication/authentication.context";
import { Text } from "../../../components/typography/typography.component";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = react.useState("");
  const [password, setPassword] = react.useState("");
  const [repeatedPassword, setRepeatedPassword] = react.useState("");
  const { user, isLoading, error, registerUser } = react.useContext(
    AuthenticationContext
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
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
          <Spacer size="large" />
          <TextInput
            underlineColor="blue"
            activeUnderlineColor="blue"
            label="Confirm Password"
            textContentType="password"
            secureTextEntry
            value={repeatedPassword}
            type="outlined"
            style={{ width: 300 }}
            onChangeText={(repeatedPassword) =>
              setRepeatedPassword(repeatedPassword)
            }
          />
          <ErrorContainer>
            <Text variant="error"> {error}</Text>
          </ErrorContainer>
          <Button
            icon="book"
            color="red"
            dark={true}
            mode="contained"
            style={{ padding: 5 }}
            onPress={() => registerUser(email, password, repeatedPassword)}
          >
            Sign Up
          </Button>
        </AccountContainer>
      </AccountBackground>
    </KeyboardAvoidingView>
  );
};
