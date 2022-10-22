import { createTheme } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const darkTheme = createTheme(vars, {
  backgroundColor: {
    body: "black",
  },
  color: {
    body: "white",
  },
});
