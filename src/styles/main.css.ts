import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *:after, *:before", {
  boxSizing: "border-box",
});

globalStyle("body", {
  margin: 0,
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
  fontWeight: 500,
  lineHeight: 1.5,
  letterSpacing: "0.03em",
  WebkitFontSmoothing: "antialiased",
});
