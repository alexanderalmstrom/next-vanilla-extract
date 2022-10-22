import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeContext } from "../contexts/theme";
import { ThemeProviderProps, ThemeTypes, UseThemeProps } from "../types/theme";

function Theme({
  children,
  forcedTheme,
  defaultTheme = "light",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState(defaultTheme);

  const setTheme = useCallback(
    (theme: ThemeTypes) => {
      setThemeState(theme);
    },
    [forcedTheme]
  );

  const applyTheme = useCallback((theme: ThemeTypes) => {
    setThemeState(theme);
  }, []);

  useEffect(() => {
    applyTheme(forcedTheme ?? theme);
  }, [forcedTheme, theme]);

  const themeContextProviderValue = useMemo(
    () => ({
      theme,
      setTheme,
      forcedTheme,
    }),
    [theme, setTheme, forcedTheme]
  );

  return (
    <ThemeContext.Provider value={themeContextProviderValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemeProvider(props: ThemeProviderProps) {
  const theme = useContext<UseThemeProps | undefined>(ThemeContext);

  if (theme) return <>{props.children}</>;

  return <Theme {...props} />;
}
