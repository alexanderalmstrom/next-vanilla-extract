import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";
import { UseThemeProps } from "../types/theme";

const defaultContext: UseThemeProps = { setTheme: (_) => {} };

export const useTheme = () => useContext(ThemeContext) ?? defaultContext;
