import React from "react";
import { useStoreContext } from "../utils/GlobalState";
// import { Card } from "react-bootstrap";
import Cards from "../Cards"

function Saved() {
  const [state, dispatch] = useStoreContext();
  const { savedProducts } = state;
  console.log(savedProducts);

  return (
    <div>
      {!savedProducts.length ? (
        <p> start saving some products before checking your favorites </p>
      ) : (
        savedProducts.map((items, i) => {
          console.log(items);
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
        })
      )}
    </div>
  );
}

export default Saved;
