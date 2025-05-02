import React, { useState } from 'react';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

function AddProduct() {

  const [Category_dropdown, setCategory_dropdown] = useState([])
  const [manageCateory, setmanageCateory] = useState("")

  const [manageSubCategory, setmanageSubCategory] = useState("")

     

  console.log(Category_dropdown)

  const Sub_Category_Options = {

    mens: [
      "T-Shirt", "Casual Shirts", "Shirts", "Kurta", "Formal Shirt", "Hoodies", "Shorts", "Jeans","Cargo Pants", "Kurta Pajama Bottoms", "Track Pants", "Dhoti"],
    womens: ["Soft Cotton Kurtis", "Linen & Chanderi Tops", "Stretchy Indo-Western Tops",
      "Slouchy Angrakha & Wrap Tops", "Patiala Suit Tops with Elastic Waists",
      "Nightwear-Inspired Ethnic Tops", "Leggings", "Jeans", "skirt", "Palazzos", "Jeggings",
      "Dresses"],
    kids: ["Kurta Pajama", "Sherwani", "Dhoti Kurta", "Nehru Jacket", "Party Frock", "Gowns", "Sequined Dresses", "Tutu Skirts"],
    computerAndAccessories: ["Laptops", "Gaming Laptops", "Desktops", "All-in-One PCs",
      "Processors", "Motherboards", "RAM", "Graphics Cards", "Power Supply Units",
      "Keyboards & Mice", "Monitors", "Webcams", "Speakers & Headphones", "UPS & Surge Protectors", "External Hard Drives", "SSD Drives", "Pen Drives", "WiFi Routers", "Networking Cables", "Home & Appliances"],
    appliances: ["Mixer Grinders", "Microwave Ovens", "Coffee Makers", "Toasters", "Chimneys", "Water Purifiers", "Air Conditioners", "Fans", "Iron Boxes", "Washing Machines",
      "Smart Lights", "Smart Plugs", "Smart Assistants", "Robot Vacuums"]
  }



  const [productdata, setProductdata] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    Sub_Category: ""
  });
console.log(productdata)
  const [image, setImage] = useState(null);

  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setmanageCateory(value)
    setProductdata(
      {
        ...productdata,

        [name]: value
      });
    setCategory_dropdown(Sub_Category_Options[value] || []);
  };
     
  function hanlderadiobtnchange(e) {
    const value = e.target.value;
    setmanageSubCategory(value);
    setProductdata(prevData => ({
      ...prevData,
      Sub_Category: value
    }));
  }
  


  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // use FormData for file uploads
    const formData = new FormData();
    formData.append('title', productdata.title);
    formData.append('description', productdata.description);
    formData.append('price', productdata.price);
    formData.append('category', productdata.category);
    formData.append('Sub_Category', productdata.Sub_Category);

    formData.append('image', image); // file

    try {
      const response = await fetch(`${backendUrl}/dashboard/Addproduct`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      alert(result.message || 'Product added');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='container-fluid w-50 mt-5 border border-dark rounded p-4'>
      <div className='mt-3'>
        <label className='form-label'>Product Title</label>
        <input className='form-control' type="text" name='title' placeholder='Enter Product Title' onChange={handleCategoryChange} />
      </div>

      <div className='mt-3'>
        <label>Description:</label>
        <textarea name="description" rows="4" cols="50" placeholder="Enter full description here" onChange={handleCategoryChange}></textarea>
      </div>

      <div className='mt-3'>
        <label>Enter Price</label>
        <input type="number" name='price' onChange={handleCategoryChange} />
      </div>

      <div className='mt-3'>
        <label>Upload Image</label>
        <input className='form-control' type="file" name='image' onChange={handleImageChange} />
      </div>

      <div className='mt-3'>
        <label>Select Category</label>
        <select name="category" className='form-select' onChange={handleCategoryChange}>
          <option value="">Select</option>
          <option value="mens">Mens</option>
          <option value="womens">Womens</option>
          <option value="kids">Kids</option>
          <option value="appliances">Appliances</option>
          <option value="computerAndAccessories">Computer & Accessories</option>
          <option value="mobilePhoneAndAccessories">Mobile Phones & Accessories</option>
        </select>
      </div>





      <button type='submit' className='btn btn-primary mt-3'>Add Product</button>

      {Category_dropdown.map((item, index) => (
        <div key={index}>
          <input onChange={hanlderadiobtnchange}
            type="radio"
            name="subCategory"
            id={`sub-${index}`}
            value={item}
          />
          <label htmlFor={`sub-${index}`}>{item}</label>
        </div>
      ))}

    </form>
  );
}


export default AddProduct;