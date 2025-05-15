import React, { useState, useEffect } from 'react';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function DeleteProduct() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('mens'); // default category

  // Fetch products when category changes
  useEffect(() => {
    fetch(`http://localhost:4000/Dashboard/deleteproduct?category=${selectedCategory}`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err));
  }, [selectedCategory]);

  // Handle category button click
  const handleCategoryClick = (e) => {
    const category = e.target.textContent.trim();
    setSelectedCategory(category);
  };


    //handle delete product
    const hanleDeletePRoduct = async (category , id)=>{
          try {
    const response = await fetch(`http://localhost:4000/Dashboard/deleteproduct?category=${selectedCategory}&id=${id}`, {
      method: 'POST'
    });

    if (response.ok) {
      // Remove the deleted product from state without refreshing
      setProducts(prevProducts => prevProducts.filter(product => product._id !== id));
    } else {
      console.error('Failed to delete product');
    }
  } catch (err) {
    console.error('Error deleting product:', err);
  }
          
    }
  return (
    <div>
      {/* Category Filter Buttons */}
      <div className='container-fluid d-flex flex-wrap mb-3' onClick={handleCategoryClick}>
        <strong className='mt-2 me-2'>Select Category:</strong>{['mens', 'womens', 'kids', 'computerAndAccessories', 'appliances', 'mobilePhoneAndAccessories'].map((category) => (
          <span key={category} className='btn btn-primary me-3 mb-2'>
            {category}
          </span>
        ))}
      </div>

      {/* Products Display */}
      <div className="container d-flex flex-wrap" >
        {products.length > 0 ? (
          products.map((item) => (
            <div key={item._id} className="mb-3 p-2 border me-2" style={{width:"49%"}}>
              <span className='d-flex justify-content-between align-items-center'>  
                <p>product id: </p>
                <p>{item._id}</p>
                 <h5>{item.title.length > 15 ? item.title.slice(0, 10) + "..." : item.title}</h5>

                 <i className="bi bi-trash text-danger fs-5" style={{cursor:"pointer"}} onClick={()=>{hanleDeletePRoduct(item.category ,item._id)}}></i>
              </span>
              
              
              <img
                src={`${backendUrl}/uploads/${item.image}`}
                alt={item.title}
                className="card-img-top "
                style={{ height: '150px', width:"120px" }}
              />
              <p>{item.description.slice(0,60)}</p>
              <strong>Price: ₹{item.price}</strong>
            </div>
          ))
        ) : (
          <p>No products found for category: {selectedCategory}</p>
        )}
      </div>
    </div>
  );
}
