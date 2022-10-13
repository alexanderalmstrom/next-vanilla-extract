import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { main } from "./Layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className={main}>{children}</main>
      <Footer />
    </>
  );
}
