import { createTheme } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const lightTheme = createTheme(vars, {
  backgroundColor: {
    body: "white",
  },
  color: {
    body: "black",
  },
});
