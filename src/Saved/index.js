import React from "react";
import { useStoreContext } from "../utils/GlobalState";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../Cards";

function Saved() {
  const [state, dispatch] = useStoreContext();
  const { savedProducts } = state;
  console.log(savedProducts);

  return (
    <Container>
        {savedProducts.length ? 
          <h1 style={{  margin: "25px" }}>
            total saved products: {savedProducts.length}
          </h1>
        : null}
      <Row>
        {state.savedProducts.length ? (
          savedProducts.map((items, i) => {
            return (
              <Col md={4} key={items.id} style={{ margin: "25px 0" }}>
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
          })
        ) : (
          <p> start saving some products before checking your favorites </p>
        )}
      </Row>
    </Container>
  );
}

export default Saved;
