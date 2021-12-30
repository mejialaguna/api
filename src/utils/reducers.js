import { useReducer } from "react";

import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  CURRENT_CATEGORY,
  SAVE_PRODUCTS,
} from "./Actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };
    case CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };
    case SAVE_PRODUCTS:
      return {
        ...state,
        saveProducts: [...action.saveProducts],
      };
    default:
      return state;
  }
};
export function useProductReducer(initialState) {
     return useReducer(reducer, initialState)
 }