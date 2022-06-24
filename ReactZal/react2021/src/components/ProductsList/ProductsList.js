import React from "react";
import { connect } from "react-redux";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import axios from "axios";



function ProductsList({
  productsFromRedux,
  setSelectedProducts,
  setLoadingShopingProduct
}) {

  const onRightClickHandler = async(product)=>{ 

    try{
      setLoadingShopingProduct(true)
      await axios.post("http://localhost:9000/products/shopingList/new", {...product})
      let shopingList = await axios.get("http://localhost:9000/products/shopingList")
      setSelectedProducts(shopingList.data)
      setLoadingShopingProduct(false)
    }catch (err){
      console.log(err);
    }
    
  }

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Products list</p>
        <ul> {productsFromRedux.map((product)=>(
        <li key={product.id} onClick={()=> onRightClickHandler(product)} >{`${product.name}`}</li>
        
        
        ))}
        </ul>
        {/* Poniżej znajduje się ostylowany aktywny produkt do zadania 5 */}
        {/* <span
          style={{
            backgroundColor: "white",
            border: "1px black solid",
            borderRadius: "16px",
            padding: "6px",
          }}
        >
          Przykładowy aktywny produkt
        </span> */}
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
const mapStateToProps =(state)=>{
  return {
    productsFromRedux: state.products.productsList,
 }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductsList);
