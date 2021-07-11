import styled, { css } from "styled-components/native";
import { ThemeProps } from "src/theme";

type TextProps = {
  color?:
    | "primary"
    | "secondary100"
    | "highlight"
    | "heading"
    | "line"
    | "on"
    | "overlay";
  isBold?: boolean;
  theme: ThemeProps;
};

type TextAttrs = { isBold: boolean; theme: ThemeProps };

export const Text = styled.Text.attrs(({ isBold, theme }: TextAttrs) => ({
  style: {
    fontFamily: isBold ? theme.fontWeights.bold : theme.fontWeights.regular,
  },
}))`
  ${({ color, theme }: TextProps) => css`
    font-size: 20px;
    color: ${theme.colors[color || "heading"]};
  `}
`;
