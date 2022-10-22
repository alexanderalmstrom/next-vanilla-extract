import { createThemeContract, style } from "@vanilla-extract/css";

export const vars = createThemeContract({
  backgroundColor: {
    body: "",
  },
  color: {
    body: "",
  },
});

export const themeClass = style({
  backgroundColor: vars.backgroundColor.body,
  color: vars.color.body,
  minHeight: "100vh",
});
