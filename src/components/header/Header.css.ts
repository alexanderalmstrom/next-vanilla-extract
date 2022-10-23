import { style } from "@vanilla-extract/css";
import { container } from "../../styles/container.css";

export const header = style([
  container,
  {
    maxWidth: 1170,
    paddingTop: "3rem",
  },
]);
