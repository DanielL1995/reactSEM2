import { initialProductState } from "./initialState";


export const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case "SET_INITIAL_PRODUCTS_LIST":
      return { ...state, productsList: action.value };
    case "SET_LOADING_SHOPING_LIST":
      return { ...state, loadingShopingList: action.value};
    case "SET_SELECTED_PRODUCT":
        return { ...state, 
          shopingList: action.value
        };
    case "SET_DELETE_PRODUCT_FROM_SHOPING_LIST":
        return { ...state,deleteProduct: action.value};
    case "SET_FILTERED_PRODUCT_LIST":
      return {...state, filtered: action.value}
    default:
      return state;
  }
};
