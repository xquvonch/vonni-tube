import { Stack } from "@mui/material";
import { category } from "../../const/index";
import { colors } from "../../const/colors";
import { useThemeStore } from "../../store/themeStore";

const Category = ({ handlesellectedCategory, sellectedCategory }) => {
  const theme = useThemeStore((s) => s.theme);

  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        position: "fixed",
        top: "86px",
        zIndex: 999,
        background: theme === "dark" ? colors.primaryDark : colors.primary,
      }}
    >
      {category.map((item) => {
        return (
          <button
            key={item.name}
            className={`${theme==='dark'?'category-btn':'category-btn-light'}`}
            style={{
              borderRadius: "0px",
              background:
                item.name === sellectedCategory &&
                (theme === "dark" ? colors.secondary : colors.secondaryDark),
              color:
                item.name === sellectedCategory
                  ? // ? theme==='dark'
                    // ?
                    "#fff"
                  : // : "#000"
                    theme === "dark"
                    ? colors.primary
                    : colors.secondaryDark,
            }}
            onClick={() => handlesellectedCategory(item.name)}
          >
            <span
              style={{
                color:
                  item.name === sellectedCategory
                    ? // ?
                      //  theme==='dark'
                      "#fff"
                    : // : "#000"
                      theme === "dark"
                      ? colors.pri
                      : colors.secondaryDark,
                marginRight: "15px",
              }}
            >
              <span>{item.icon}</span>
            </span>
            <span style={{ opacity: "1" }}>{item.name}</span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Category;
