import React, {useEffect, useState} from "react";
import styles from "../../common/styles/Headers.module.scss";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import {  useDispatch } from "react-redux"




function ProductsFilters() {

  const dispatch = useDispatch();
  
const [foodProduct, setFoodProduct] = useState(false)
const [searchPhrase, setSearchPhrase] = useState("")


useEffect(() => {
  dispatch({
    type: "SET_FILTERED_PRODUCT_LIST",
    value: {
      searchPhrase
  }})
}, [ searchPhrase, dispatch])



console.log(foodProduct);
console.log(searchPhrase);

  return (
    <div className={styles.filtersHeaderWrapper}>
      <Typography variant="h4">Filtruj produkty: </Typography>
      <FormGroup>
        <div className={styles.filtersForm}>
          <FormControlLabel
            control={
              <TextField
                margin="dense"
                label="Nazwa"
                variant="outlined"
                 value={searchPhrase}
                 onChange={(e)=>setSearchPhrase(e.target.value)}
              />
            }
          />
          <FormControlLabel
            control={<Checkbox checked={foodProduct} onClick={()=>setFoodProduct(!foodProduct)} />}
            label="Tylko produkty spożywcze"
          />
        </div>
      </FormGroup>
    </div>
  );
}


export default  ProductsFilters;
