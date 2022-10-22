import { createContext } from "react";

export interface ThemeContextProps {
  theme?: string;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);
