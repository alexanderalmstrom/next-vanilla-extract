import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import Theme from "../theme/Theme";
import { main } from "./Layout.css";

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Theme>
      <Header />
      <main className={main}>{children}</main>
      <Footer />
    </Theme>
  );
}
