import { buttonRecipe } from "./Button.css";

export type ButtonType = "button" | "submit" | "reset";

export type ButtonColor = "primary" | "secondary" | undefined;

export type ButtonSize = "small" | "medium" | "large" | undefined;

export type ButtonVariant = "link" | undefined;

export interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonType;
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
}

export function Button({
  children,
  type = "button",
  color,
  size,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonRecipe({ color, size, variant })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
