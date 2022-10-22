import { darkTheme } from "../../themes/dark.css";
import { lightTheme } from "../../themes/light.css";
import { themeClass } from "../../themes/theme.css";
import { useTheme } from "../../hooks/theme";

export interface ThemeProps {
  children?: React.ReactNode;
}

export default function Theme({ children }: ThemeProps) {
  const { theme } = useTheme();

  return (
    <div className={theme === "dark" ? darkTheme : lightTheme}>
      <div className={themeClass}>{children}</div>
    </div>
  );
}
