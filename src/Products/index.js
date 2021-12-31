// import React, { useState, useEffect } from "react";
// import { useStoreContext } from "../utils/GlobalState";
// import { UPDATE_PRODUCTS } from "../utils/Actions";
// const axios = require("axios");

// function Products() {
//   const [data, setData] = useState([]);
//   const [state, dispatch] = useStoreContext({});
  

//   useEffect(() => {
//     axios("https://fakestoreapi.com/products/").then((response) => {
//       setData(response.data);
//     });

//     if (data) {
//       dispatch({
//         type: UPDATE_PRODUCTS,
//         products: data,
//       });
//     }
//   }, [dispatch]);

//   console.log(data);
//   const categories = data

//   return (
//     <div>
//       <h1> hello world</h1>
//     </div>
//   )
// }

// export default Products;
