import React, { useEffect, useState } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from "../utils/actions";
import { Link } from "react-router-dom";
const axios = require("axios");

const display = {
  cat: {
    display: "flex",
    margin: "20px",
    justifyContent: "space-evenly",
  },
};

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
      currentCategory: name, //name is the state
    });
  };

  useEffect(() => {
    productsCategories();
  }, []);

  return (
    <div>
      <form onSubmit={dispatchCategory} style={display.cat}>
        {categories.map((cat) => {
          return (
            <button onClick={() => setName(cat)} key={cat} type="submit">
              {cat}
            </button>
          );
        })}
        <Link to="/savedProducts/">
          <button> Favorites </button>
        </Link>
      </form>
    </div>
  );
}

export default Categories;
