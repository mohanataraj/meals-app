import react from "react";
import AnimatedLottieView from "lottie-react-native";
import { Button } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import styled from "styled-components";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
} from "../components/account.styles";

const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
`;

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <AnimatedLottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../assests/peas.json")}
        />
      </AnimationWrapper>
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
          icon="book-open-outline"
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
