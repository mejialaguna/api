import React, { useEffect, useState } from "react";
import {useStoreContext} from "../utils/GlobalState";
import { UPDATE_CATEGORIES, CURRENT_CATEGORY } from "../utils/Actions";
const axios = require("axios");

function Categories() {
  const [data, setData] = useState([]);
  const [state, dispatch] = useStoreContext({});
  
  const { categories } = state;
 
  useEffect(() => {
    axios("https://fakestoreapi.com/products/").then((response) => {
      setData(response.data);
    })

    if (data) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: data
      });
    } 
  }, [dispatch]);  

  console.log(data);  

  function handleClick(id) {
    dispatch({
      type: CURRENT_CATEGORY,
      currentCategory: id
    });
    console.log(id)
  }

  return (
    <div>
      {data.filter((categories) => {
        return (
          <button onClick={handleClick} > {categories.name}</button>
        )
      })}
    </div>
  );
}

export default Categories;
