export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonType;
}

export function Button({ children, type = "button" }: ButtonProps) {
  return <button type={type}>{children}</button>;
}
