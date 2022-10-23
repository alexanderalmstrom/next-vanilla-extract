import { useTheme } from "../../hooks/theme";
import { Button } from "../ui/button/Button";
import { Title } from "../ui/title/Title";
import { header, title } from "./Header.css";

export function Header() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <>
      <header className={header}>
        <Title as="h1" size="small" className={title}>
          Next Vanilla Extract
        </Title>
        <Button variant="link" size="small" onClick={toggleTheme}>
          Theme: {theme}
        </Button>
      </header>
    </>
  );
}
