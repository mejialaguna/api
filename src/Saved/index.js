import React from "react";
import { useStoreContext } from "../utils/GlobalState";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../Cards";


const display = {
  margin: {
    marginBottom: "55px",
  },
};

function Saved() {
  const [state, dispatch] = useStoreContext();
  const { savedProducts } = state;
  console.log(savedProducts);

  return (
    <Container>
      <Row>
        {!savedProducts.length ? (
          <p> start saving some products before checking your favorites </p>
        ) : (
          savedProducts.map((items, i) => {
            console.log(items);
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
          })
        )}
      </Row>
    </Container>
  );
}

export default Saved;
