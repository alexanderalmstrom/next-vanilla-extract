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
  const [themeState, setThemeState] = useState<ThemeTypes>(defaultTheme);

  const setTheme = useCallback(
    (theme: ThemeTypes) => {
      if (forcedTheme) return;

      setThemeState(theme);
    },
    [forcedTheme, defaultTheme]
  );

  useEffect(() => {
    setThemeState(defaultTheme);
  }, [defaultTheme]);

  useEffect(() => {
    setThemeState(forcedTheme ?? themeState);
  }, [forcedTheme, themeState]);

  const themeContextProviderValue = useMemo(
    () => ({
      theme: themeState,
      setTheme,
    }),
    [themeState, setTheme]
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
