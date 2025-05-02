import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const baseurl = import.meta.env.VITE_BASE_URL;

function AddToCart() {
  const cartitem = useSelector((state) => state.cart.item);
  const [getItem, setGetItem] = useState([]);

  useEffect(() => {
    if (cartitem.length > 0) {
      const updatedCart = [...cartitem];
      localStorage.setItem("product", JSON.stringify(updatedCart));
      
      setGetItem(updatedCart);
    } else {
      const stored = JSON.parse(localStorage.getItem("product")) || [];
      setGetItem([...stored]);
    }
  }, [cartitem]);

  return (
    <>
      {getItem.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        getItem.map((item, index) => (
          <div key={index} className="container-fluid w-75 border rounded" >
            {/* <h5>{item.title}</h5>
            <img src={`${baseurl}/uploads/${item.image}`} alt="" style={{height:"200px"}}/> */}
            <span> <img src={`${baseurl}/uploads/${item.image}`} alt="" style={{height:"200px"}}/> </span>
            <span><strong>{item.title}</strong></span>
          </div>
        ))
      )}
    </>
  );
}

export default AddToCart;
