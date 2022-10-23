import { buttonRecipe } from "./Button.css";

export type ButtonType = "button" | "submit" | "reset";

export type ButtonColor = "primary" | "secondary";

export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonType;
  color?: ButtonColor;
  size?: ButtonSize;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
}

export function Button({ children, type = "button", ...props }: ButtonProps) {
  return (
    <button
      className={buttonRecipe({ color: props.color, size: props.size })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
