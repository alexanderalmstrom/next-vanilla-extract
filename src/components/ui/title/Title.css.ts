import { recipe } from "@vanilla-extract/recipes";
import { hero } from "../../hero/Hero.css";

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
        fontSize: "clamp(4rem, 8vw, 12rem)",
        lineHeight: 1,
        letterSpacing: "-0.02em",
        fontWeight: 800,
        selectors: {
          [`${hero} &`]: {
            marginBottom: 0,
          },
        },
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
