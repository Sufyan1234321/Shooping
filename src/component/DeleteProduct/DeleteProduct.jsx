import React, { useEffect, useState } from 'react';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function DeleteProduct() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const response = await fetch('backendUrl/Dashboard/deletproduct');
        const data = await response.json();
        
        console.log("Fetched data:", data); // Log the entire response
        
        if (data && Array.isArray(data)) {
          const collectionNames = data.map(item => item.collection);
          setCollections(collectionNames);
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    }
  
    fetchAllProducts();
  }, []);

  return (
    <div>
      <strong>Delete Product (List of Collections)</strong>
      <ul>
        {collections.map((col, index) => (
          <li key={index}>{col}</li>
        ))}
      </ul>
    </div>
  );
}
