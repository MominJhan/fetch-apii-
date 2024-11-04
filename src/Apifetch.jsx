import React, { useState, useEffect } from "react";

const Apifetch = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(" https://fakestoreapi.com/products");
        const allproducts = await response.json();
        setData(allproducts);
      } catch (error) {
        console.error("error to catching products", error);
      }
    };
    fetchProducts();
  }, []);

  const products = (category) => {
    
      const updatedList = data.filter(
        (product) => product.category === category
      );
      setFilter(updatedList);
    
  };
  return (
    <>
      <div className="container">
        <button onClick={() => products("men's clothing")}>
          Men Clothing
        </button>
        <button onClick={() => products("women's clothing")}>
          WomenClothing
        </button>
        <button onClick={() => products("jewelery")}>Jewelry</button>
        <button onClick={() => products("electronics")}>
          Electronics
        </button>
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {filter.map((user, index) => (
              <tr key={index}>
                <td>
                  <img src={user.image} alt="" className="img" />
                </td>
                <td>{user.title}</td>
                <td>{user.price}</td>
                <td>{user.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Apifetch;
