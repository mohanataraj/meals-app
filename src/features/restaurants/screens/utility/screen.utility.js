import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  background-color: #fff; //#dc143c;
  flex: 1; // used to define the height in <safeaeraview> which defines the parent ie. the App...
  ${StatusBar.currentHeight &&
  `margin-top: ${StatusBar.currentHeight}px`}//seems to already work in newer version of android...
`;
