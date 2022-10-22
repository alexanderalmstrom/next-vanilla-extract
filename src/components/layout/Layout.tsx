import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "../../contexts/theme";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { main } from "./Layout.css";

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const context = useContext<ThemeContextProps | undefined>(ThemeContext);

  return (
    <>
      <Header />
      <main className={main}>{children}</main>
      <Footer />
    </>
  );
}
