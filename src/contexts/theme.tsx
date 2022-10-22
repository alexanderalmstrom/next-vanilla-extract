import { createContext } from "react";
import { UseThemeProps } from "../types/theme";

export const ThemeContext = createContext<UseThemeProps | undefined>(undefined);
