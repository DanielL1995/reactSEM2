import { createSelector } from "@reduxjs/toolkit"


export const getSelectedProduct = (store) => {
 return  store.products.shopingList;
};
export const loadingProduct = (store)=>{
    return store.products.loadingShopingList
}           

export const filteredProducts = createSelector(
    (store)=>store.products.productsList,
    (store)=>store.products.filtered,
    (productsList,filtered)=>{
        return productsList.filter((product)=>product.name.includes(filtered.action.value)
        );
    }
);
