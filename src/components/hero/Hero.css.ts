import { style } from "@vanilla-extract/css";

export const hero = style({
  width: "100%",
  height: "min(100vh - 4.375rem, 100vh)",
  padding: "max(2rem, 4vw)",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "max(2rem, 2vw)",
});
