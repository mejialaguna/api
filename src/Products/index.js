import React from "react";
import { useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../utils/actions";
import Cards from "./Cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const axios = require("axios");

function Products() {
  const [state, dispatch] = useStoreContext({});
  const { products } = state;

  const getProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/")
      .catch((err) => {
        console.log(`error , ${err}`);
      });
    // console.log(response);

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
      {products.map((items) => {
        return (
          <Cards
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
