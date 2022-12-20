import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Platform, Dimensions } from "react-native";

const isAndroid = Platform.OS === "android";
const { width, height } = Dimensions.get("window");
console.log(width, height);
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const RestCard = styled(Card)`
  background-color: "#fff";
  padding: ${(props) => props.theme.space[3]};
  font-family: ${(props) => props.theme.fonts.body};
  margin: ${isAndroid ? (props) => props.theme.space[3] : 0};
  width: 100%;
`;

export const RestCardTitle = styled(Card.Title)`
  background-color: #fff;
  font-family: ${(props) => props.theme.fonts.body};
`;

export const RestCardCover = styled(Card.Cover)`
  background-color: #fff;
  padding: ${(props) => props.theme.space[2]};
`;

export const RestCardContent = styled(Card.Content)`
  background-color: #fff;
  flex-direction: row;
  padding: ${(props) => props.theme.space[0]};
  align-content: space-between;
  align-items: center;
  //justify-content: left;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[0]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  //padding: ${(props) => props.theme.space[1]};
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[0]};
`;

export const OpenSectionEnd = styled.View`
  flex: 1;
  flex-direction: row-reverse;
  justify-content: flex-end;
`;
