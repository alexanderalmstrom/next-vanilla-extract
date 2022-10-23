import { recipe } from "@vanilla-extract/recipes";

export const titleRecipe = recipe({
  base: {
    lineHeight: 1.1,
    marginTop: 0,
    marginBottom: "0.5em",
    fontWeight: 400,
    letterSpacing: "0.01em",
  },
  variants: {
    size: {
      display: {
        fontSize: "clamp(3rem, 6vw, 12rem)",
        lineHeight: 0.9,
      },
      large: {
        fontSize: "3rem",
      },
      medium: {
        fontSize: "2rem",
      },
      small: {
        fontSize: "1.25rem",
      },
    },
  },
});