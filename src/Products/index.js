import React, { useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../utils/actions";
import Cards from "./Cars";
const axios = require("axios");

function Products() {
  const [state, dispatch] = useStoreContext({});
  const {products} = state
    
  const getProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/")
      .catch((err) => {
        console.log(`error , ${err}`);
      });
    console.log(response);

    if (response) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: response.data,
      });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Cards />
    </div>
  );
}

export default Products;
