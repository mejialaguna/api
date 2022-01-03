import React from "react";
import { useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../utils/actions";
import Cards from "./Cards";

const axios = require("axios");

function Products() {
  const [state, dispatch] = useStoreContext();
  const { currentCategory } = state;

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

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category === currentCategory
    );
  }

  return (
    <div>
      {filterProducts().map((items) => {
        return (
          <Cards
            key={items.id}
            id={items.id}
            description={items.description}
            category={items.category}
            image={items.image}
            title={items.title}
            price={items.price}
            rating={items.rating.count}
          />
        );
      })}
    </div>
  );
}

export default Products;
