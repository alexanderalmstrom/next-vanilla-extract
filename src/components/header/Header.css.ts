import { style } from "@vanilla-extract/css";
import { container } from "../../styles/container.css";

export const header = style([
  container,
  {
    position: "sticky",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    gap: "2rem",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
    color: "#FFFFFF",
    mixBlendMode: "difference",
  },
]);

export const title = style({
  marginBottom: 0,
});
