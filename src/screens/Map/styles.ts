import styled, { css } from "styled-components/native";
import MapView from "react-native-maps";
import { Dimensions } from "react-native";
export const Container = styled.View`
  position: relative;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
  flex: 0.8;
`;

export const Card = styled.View`
  ${({ theme }) => css`
    flex: 0.2;
    padding: 20px;
    padding-bottom: 100px;
    background-color: ${theme.colors.secondary100};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-top: -40px;
    width: 100%;
  `}
`;

export const SearchContainer = styled.View`
  width: ${Dimensions.get("window").width};
  height: ${Dimensions.get("window").height};
  background-color: transparent;
  position: absolute;
  top: 0;
  z-index: 3;
  padding: 8px;
`;
