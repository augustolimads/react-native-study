import styled, { css } from "styled-components/native";
import { ThemeProps } from "src/theme";

const sizes = {
  h1: "56px",
  h2: "48px",
  h3: "32px",
  h4: "24px",
  body: "18px",
  caption: "14px",
};

function fontSize(h1, h2, h3, h4, caption) {
  const params = { h1, h2, h3, h4, caption };
  const stringKeys = Object.keys(params);
  const Paramsvalues = Object.values(params);
  const indexValue = Paramsvalues.findIndex((el) => el === true);
  const choosedValue = stringKeys[indexValue];
  return `font-size: ${choosedValue ? sizes[choosedValue] : sizes["body"]}`;
}

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
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  caption?: boolean;
  theme: ThemeProps;
};

type TextAttrs = { isBold: boolean; theme: ThemeProps };

export const Text = styled.Text.attrs(({ isBold, theme }: TextAttrs) => ({
  style: {
    fontFamily: isBold ? theme.fontWeights.bold : theme.fontWeights.regular,
  },
}))`
  ${({ color, theme, h1, h2, h3, h4, caption }: TextProps) => css`
    color: ${theme.colors[color || "heading"]};
  `}
  ${({ h1, h2, h3, h4, caption }) => fontSize(h1, h2, h3, h4, caption)}
`;
