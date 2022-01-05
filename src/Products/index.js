import React from "react";
import { useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../utils/actions";
import { Container, Row, Col} from "react-bootstrap";

import Cards from "../Cards";

const axios = require("axios");

const display = {
  margin: {
    marginBottom: "55px"
  }
}

export default function Products() {
  const [state, dispatch] = useStoreContext();
  const { currentCategory } = state;

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

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category === currentCategory
    );
  }
  return (
    <Container >
      <Row >
      {filterProducts().map((items) => {
        return (
            <Col md={4} key={items.id} style={display.margin}>
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
            </Col>
        );
      })}
      </Row>
    </Container>
  );
}
