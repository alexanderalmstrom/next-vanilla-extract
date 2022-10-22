export type TitleType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TitleProps {
  type: TitleType;
  children: React.ReactNode;
}

export function Title({ type, children }: TitleProps) {
  const Component = type;

  return <Component>{children}</Component>;
}
