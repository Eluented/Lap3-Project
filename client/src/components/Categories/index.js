import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories, categories } from "../../reducers/categoriesSlice";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  CircularProgress,
  Typography,
} from "@mui/material";


const Categories = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleChange = (e) => {setValue(e.target.value)};

  const allCategories = useSelector(categories);

  // fixing the problem
  const categoriesSliced = allCategories.slice(24)

  const categoryStatus = useSelector(state => state.categories.status);
    // if the default state is idle (which it is on load) - fetch categories from trivia

  useEffect(() => {
    if (categoryStatus === "idle") {
      dispatch(fetchCategories());
    }
  }, [categoryStatus, dispatch]);

  
  console.log(categoriesSliced)
    
    // if the default state is idle (which it is on load) - fetch categories from trivia
  
    if (categoryStatus === "loading") {
      return (
      <Box mt={20}>
        <CircularProgress size={150} />
      </Box>
    );
  }

  if (categoryStatus === "failed") {
    return (
      <Typography variant="h6" mt={20} color="red">
        Technical Difficulties! Refresh the Page and Take a Shot!
      </Typography>
    );
  }

  return (
    <Box mt={3} width="100%">
      <FormControl  fullWidth size='small'>
        <InputLabel>Categories</InputLabel>
        <Select value={value} label="Categories" onChange={handleChange}>
          {categoriesSliced.map(({name}, id) => (
            <MenuItem value={id} key={id}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Categories;
