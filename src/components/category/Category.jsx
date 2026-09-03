import { Stack } from "@mui/material";
import { category } from "../../const/index";
import {colors} from '../../const/colors'

const Category = ({handlesellectedCategory, sellectedCategory}) => {




  return (
    <Stack direction={'row'} style={{overflowX:"scroll",  scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },}}>
      {category.map((item) => {
        return (
          <button key={item.name} className="category-btn" style={{borderRadius:'0px'  , background:item.name===sellectedCategory && colors.secondary, 
            color:item.name===sellectedCategory && "#fff"
          }} onClick={()=>(handlesellectedCategory(item.name))}  >
            <span style={{color:colors.secondary,
                color:item.name===sellectedCategory ? "#fff" :sellectedCategory,
                marginRight:'15px'}}>{item.icon}</span>
            <span style={{opacity:'1'}}>{item.name}</span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Category;
