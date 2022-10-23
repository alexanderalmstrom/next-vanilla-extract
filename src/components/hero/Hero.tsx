import { hero } from "./Hero.css";

export interface HeroProps {
  children?: React.ReactNode;
}

export default function Hero({ children }: HeroProps) {
  return <section className={hero}>{children}</section>;
}
