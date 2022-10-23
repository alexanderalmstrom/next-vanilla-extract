import { recipe } from "@vanilla-extract/recipes";

export const buttonRecipe = recipe({
  base: {
    padding: "0.75em 1.25em",
    backgroundColor: "transparent",
    color: "currentColor",
    fontSize: 16,
    letterSpacing: "0.03em",
    border: "1px solid currentColor",
    borderRadius: 4,
  },
  variants: {
    color: {
      primary: {
        backgroundColor: "#000000",
        color: "#FFFFFF",
      },
      secondary: {
        backgroundColor: "#FFFFFF",
        color: "#000000",
      },
    },
    size: {
      small: {
        fontSize: 14,
      },
      medium: {
        fontSize: 16,
      },
      large: {
        fontSize: 18,
      },
    },
  },
});