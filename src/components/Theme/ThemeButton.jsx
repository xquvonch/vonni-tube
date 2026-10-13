import { Button } from "@mui/material";
import { useThemeStore } from "../../store/themeStore";
import { colors } from "../../const/colors";

export const ThemeButton = () => {
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  return (
    <Button onClick={toggleTheme}  sx={{color:theme==='dark'?colors.secondary:colors.secondaryDark}}>
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </Button>
  );
};
