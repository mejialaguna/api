import React , {useState , useEffect} from "react";
import { useStoreContext } from "../utils/GlobalState";
import { Card, Button } from "react-bootstrap";

function Saved() {
  const [state, dispatch] = useStoreContext();
  const { savedProducts } = state;
  console.log(savedProducts);  


  return (
    <div>
      {!savedProducts ? (
        <p> start saving some products before checking your favorites </p>
      ) : (
        savedProducts.map((items , i) => { console.log(items)
          return (
            <Card style={{ width: "18rem" }} key= {i}>
              <Card.Img variant="top" src={items.image} />
              <Card.Body>
                <Card.Title>{items.Title}</Card.Title>
                <Card.Text>
                  {items.description}
                </Card.Text>
                <Card.Footer> {items.price}</Card.Footer>
              </Card.Body>
            </Card>
          );
        })
      )}
      
    </div>
  );
}

export default Saved;
