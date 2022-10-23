import { recipe } from "@vanilla-extract/recipes";

export const buttonRecipe = recipe({
  base: {
    padding: "0.75em 1.25em",
    backgroundColor: "transparent",
    color: "currentColor",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: "0.03em",
    border: "1px solid currentColor",
    borderRadius: 4,
    whiteSpace: "nowrap",
    cursor: "pointer",
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
    variant: {
      link: {
        padding: 0,
        border: 0,
        paddingBottom: "0.1em",
        borderBottom: "1px solid currentColor",
        borderRadius: 0,
        ":hover": {
          borderBottomColor: "transparent",
        },
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
