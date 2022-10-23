import classNames from "classnames";
import { titleRecipe } from "./Title.css";

export type TitleType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TitleSize = "display" | "large" | "medium" | "small" | undefined;

export interface TitleProps {
  className?: string;
  children: React.ReactNode;
  as: TitleType;
  size?: TitleSize;
}

export function Title({ children, as, size, ...props }: TitleProps) {
  const Component = as;

  return (
    <Component className={classNames(props.className, titleRecipe({ size }))}>
      {children}
    </Component>
  );
}
