import { Button } from "@mui/material";
import { useThemeStore } from "../../store/themeStore";

export const ThemeButton = () => {
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  return (
    <Button onClick={toggleTheme} >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </Button>
  );
};
