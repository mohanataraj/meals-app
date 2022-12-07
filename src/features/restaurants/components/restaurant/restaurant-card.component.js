/* eslint-disable react/react-in-jsx-scope */
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { Image } from "react-native";
//relative imports...
import star from "../../../../assests/star.js";
import open from "../../../../assests/open";
import { Spacer } from "../../../../components/spacer/spacer.component.js";
import { Text } from "../../../../components/typography/typography.component.js";
import {
  Icon,
  RestCard,
  RestCardCover,
  RestCardTitle,
  RestCardContent,
  Section,
  OpenSectionEnd,
  Rating,
} from "./restaurant-info.styles";

export const RestaurantCard = ({ restaurant }) => {
  const { name, address, photos, isOpenNow, rating, icon, placeId } =
    restaurant;

  const ratingArray = !rating
    ? Array.from(new Array(1))
    : Array.from(new Array(Math.floor(Math.abs(rating))));
  return (
    <RestCard key={name} outlined={true}>
      <RestCardTitle title={name} subtitle={address} />
      <RestCardContent>
        <Section>
          <OpenSectionEnd>
            {isOpenNow ? (
              <SvgXml xml={open} height={20} width={20} />
            ) : (
              <Text variant="error">CLOSED TEMPERORILY</Text>
            )}
          </OpenSectionEnd>
          <Spacer position="left" size="large">
            <Rating>
              {!ratingArray.length
                ? 0
                : ratingArray.map((_, i) => {
                    return (
                      <SvgXml
                        key={`start-${placeId}-${i}`}
                        xml={star}
                        height={20}
                        width={20}
                      />
                    );
                  })}
            </Rating>
          </Spacer>
          <Spacer position="left" size="large">
            <Image style={{ width: 20, height: 20 }} source={{ uri: icon }} />
          </Spacer>
        </Section>
      </RestCardContent>
      <RestCardCover source={{ uri: photos[0] }} />
    </RestCard>
  );
};
