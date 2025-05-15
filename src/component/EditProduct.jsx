import React from 'react'

function EditProduct() {
  return (
    <div>
       
     {['mens', 'womens', 'kids', 'computerAndAccessories', 'appliances', 'mobilePhoneAndAccessories'].map((category) => (
          <span key={category} className='btn btn-primary me-3 mb-2'>
            {category}
          </span>
        ))}
    </div>
  )
}

export default EditProduct
