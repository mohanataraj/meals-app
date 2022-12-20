import react from "react";
import { TextInput, Button } from "react-native-paper";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import AnimatedLottieView from "lottie-react-native";
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <AccountBackground>
        <AccountCover />
        <AnimatedLottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../assests/peas.json")}
        />
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
    </KeyboardAvoidingView>
  );
};
