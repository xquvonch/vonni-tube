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
        background:theme==='dark'? colors.primaryDark:colors.primary,
      }}
    >
      {category.map((item) => {
        return (
          <button
            key={item.name}
            className="category-btn"
            style={{
              borderRadius: "0px",
              background: item.name === sellectedCategory && colors.secondary,
              color:
                item.name === sellectedCategory
                  ? theme==='dark'
                    ? "#fff"
                    : "#000"
                  : theme==='dark'?colors.secondary:colors.secondaryDark,
            }}
            onClick={() => handlesellectedCategory(item.name)}
          >
            <span
              style={{
                color:
                  item.name === sellectedCategory
                    ? theme==='dark'
                      ? "#fff"
                      : "#000"
                    : theme==='dark'?colors.secondary:colors.secondaryDark,
                marginRight: "15px",
              }}
            >
              {item.icon}
            </span>
            <span style={{ opacity: "1" }}>{item.name}</span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Category;
