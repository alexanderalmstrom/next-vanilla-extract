export type ThemeTypes = "light" | "dark" | string;

export interface UseThemeProps {
  forcedTheme?: ThemeTypes;
  setTheme: (theme: string) => void;
  theme?: ThemeTypes;
}

export interface ThemeProviderProps {
  children?: React.ReactNode;
  forcedTheme?: ThemeTypes;
  defaultTheme?: ThemeTypes;
}
