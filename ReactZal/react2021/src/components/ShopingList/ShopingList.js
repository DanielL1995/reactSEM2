import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import {  connect, useSelector } from "react-redux";
import { getSelectedProduct, loadingProduct } from "../../redux/products/selectors";
import { CircularProgress } from "@mui/material";
import axios from "axios";





function ShopingList({
  setLoadingShopingProduct,
  setSelectedProducts

}) {


let shopingList = useSelector((store)=> getSelectedProduct(store));
let productIsLoading = useSelector((store)=>loadingProduct(store));


const handleRemoveProductFromShopingList = async(id)=>{
  try{
     setLoadingShopingProduct(true)
        await axios.delete(`http://localhost:9000/products/shopingList/${id}`);
     let updatedShopingList = await axios.get("http://localhost:9000/products/shopingList");
     setSelectedProducts(updatedShopingList.data)
     setLoadingShopingProduct(false)
  }catch (err){
      console.log(err);
  }
}

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shoping List</p>
        {shopingList?.map((product, index) => (
          <div key={index} onClick={()=>handleRemoveProductFromShopingList(product.id)}> {product.name} </div>
        ))}
        {productIsLoading && <CircularProgress/>}
        </header>
    </div>
  );
}

const mapDispatchToProps =(dispatch)=>{

  return {
    setSelectedProducts: (value)=>
      dispatch({type:"SET_SELECTED_PRODUCT", value: value}),
    setLoadingShopingProduct: (value)=>
      dispatch({type:"SET_LOADING_SHOPING_LIST", value: value})
 }
}
// bez mapStateToProps krzyczy dispatch is not a function, potrzebny jest  w connecie na pierwszym miejscu "null"
export default connect (null,mapDispatchToProps) (ShopingList);
