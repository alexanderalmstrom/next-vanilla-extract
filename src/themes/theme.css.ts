import {
  createGlobalThemeContract,
  createThemeContract,
  style,
} from "@vanilla-extract/css";

export const vars = createThemeContract({
  backgroundColor: {
    body: "",
  },
  color: {
    body: "",
  },
});

export const styles = style({
  backgroundColor: vars.backgroundColor.body,
  color: vars.color.body,
});
