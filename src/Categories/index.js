const axios = require("axios");
import React, { useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from "../utils/actions";

function Categories() {
  const [state, dispatch] = useStoreContext();
  const { categories } = state;

  const productsCategories = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/categories")
      .catch((err) => {
        console.log(`error , ${err}`);
      });
    console.log(response);
    if (response) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: response.data,
      });
    }
  };
  useEffect(() => {
    productsCategories();
  }, []);

  const currentCategory = (categoryName) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: categoryName
    })
    console.log(categoryName)
  }

  return (
    <div>
      {categories.map((cat) => {
        return <button key={cat}>{cat}</button>;
      })}
    </div>
  );
}

export default Categories;