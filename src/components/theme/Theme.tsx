import { darkTheme } from "../../themes/dark.css";
import { lightTheme } from "../../themes/light.css";
import { themeClass } from "../../themes/theme.css";
import { useTheme } from "../../hooks/theme";

export interface ThemeProps {
  children?: React.ReactNode;
}

export default function Theme({ children }: ThemeProps) {
  const { theme } = useTheme();
  const themeStyle = theme === "dark" ? darkTheme : lightTheme;

  return (
    <div className={themeStyle}>
      <div className={themeClass}>{children}</div>
    </div>
  );
}
