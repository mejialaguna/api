import React, { useEffect, useState } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from "../utils/actions";
import Products from "../Products"
const axios = require("axios");

function Categories() {
  const [name, setName] = useState();
  const [state, dispatch] = useStoreContext();
  const { categories } = state;
   

  const productsCategories = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/categories")
      .catch((err) => {
        console.log(`error , ${err}`);
      });
    // console.log(response);
    if (response) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: response.data,
      });
    }
  };

    
  const dispatchCategory = (event) => {
    event.preventDefault();
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: name
    });
  };  
  
  useEffect(() => {
    productsCategories();
  }, []);

  return (
    <div>
      <form onSubmit={dispatchCategory}>
      {categories.map((cat) => {
        return (
            <button onClick={() => setName(cat)} key={cat} type="submit">
              {cat}
            </button>
        );
      })}        
      </form>
      <Products />
    </div>
  );
}

export default Categories;
