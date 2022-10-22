import { useTheme } from "../../hooks/theme";
import { darkTheme } from "../../themes/dark.css";
import { lightTheme } from "../../themes/light.css";
import { themeClass } from "../../themes/theme.css";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { main } from "./Layout.css";

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();

  return (
    <div className={theme === "dark" ? darkTheme : lightTheme}>
      <div className={themeClass}>
        <Header />
        <main className={main}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
