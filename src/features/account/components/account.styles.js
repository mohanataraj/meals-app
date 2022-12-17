import react from "react";
import styled from "styled-components";
import { ImageBackground, Text, View } from "react-native";
import { Video } from "expo-av";
import { Assest, Asset, useAssets } from "expo-asset";
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from "react-native-paper";
const accountBackgroundImage = require("../../../assests/home_bg.jpg");

export const AccountBackground = styled.ImageBackground.attrs({
  source: accountBackgroundImage,
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`;
export const AccountVideoBackground = () => (
  <Video
    source={{ uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}
    shouldPlay={true}
    resizeMode="contain"
    useNativeControls={true}
  />
);
export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[1]};
`;

export const AuthButton = styled.Button.attrs({})`
  padding: 5px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
