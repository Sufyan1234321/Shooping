import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
 const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function SearchResults() {
    const baseurl = import.meta.env.VITE_BASE_URL
  const [products, setProducts] = useState([]);
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query');

  useEffect(() => {
    if (query) {
      fetch(`${backendUrl}/products?search=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.error('Error fetching search results:', err));
    }
  }, [query]);

  return (
    <div className="container mt-3">
      <h2>Search Results for "{query}"</h2>
      {products.length > 0 ? (
        <div className="row">
          {products.map((product, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="product-item">
                <h5>{product.title}</h5>
                <img
                src={`${baseurl}/uploads/${product.image}`}
                alt={product.title}
                style={{ width: '200px', height: 'auto' }}
              />
                <p>{product.description}</p>
                <p><strong>Price:</strong> ${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
