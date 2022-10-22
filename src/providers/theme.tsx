import React, { useContext, useMemo } from "react";
import { ThemeContext } from "../contexts/theme";

export interface ThemeProviderProps {
  children?: React.ReactNode;
  theme?: string;
}

function Theme({ children, theme }: ThemeProviderProps) {
  const themeContextProviderValue = useMemo(
    () => ({
      theme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={themeContextProviderValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemeProvider(props: ThemeProviderProps) {
  const context = useContext(ThemeContext);

  if (context) return <>{props.children}</>;

  return <Theme {...props} />;
}
