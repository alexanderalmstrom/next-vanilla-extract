export type TitleType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TitleProps {
  as: TitleType;
  children: React.ReactNode;
}

export function Title({ as, children }: TitleProps) {
  const Component = as;

  return <Component>{children}</Component>;
}
