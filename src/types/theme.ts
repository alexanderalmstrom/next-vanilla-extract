export type ThemeTypes = "light" | "dark" | string;

export interface UseThemeProps {
  forcedTheme?: ThemeTypes;
  theme?: ThemeTypes;
  setTheme: (theme: string) => void;
}

export interface ThemeProviderProps {
  children?: React.ReactNode;
  forcedTheme?: ThemeTypes;
  defaultTheme?: ThemeTypes;
}
