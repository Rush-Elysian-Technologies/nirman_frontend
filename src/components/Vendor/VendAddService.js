import React, { useState, useEffect } from 'react';
import VendSideDashboard from './VendSideDashboard';

function VendAddService() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [serviceImages, setServiceImages] = useState('');

  useEffect(() => {
    // Fetch categories from your API
    fetch('http://your-api-url/categories-endpoint')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []); // Empty dependency array means this effect will run once after the initial render

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleServiceImagesChange = (event) => {
    setServiceImages(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Make an API request to submit the form data
    const formData = {
      category: selectedCategory,
      price: price,
      description: description,
      serviceImages: serviceImages,
    };
    fetch('http://127.0.0.1:8000/api/addservice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => console.log('Service submitted successfully:', data))
      .catch(error => console.error('Error submitting service:', error));
  };

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-3 col-12 mb-2'>
          <VendSideDashboard />
        </div>
        <div className='col-md-9 col-12 mb-2'>
          <div className='card'>
            <h4 className='card-header'>Add Service</h4>
            <div className='card-body'>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="Title" className="form-label">Category</label>
                  <select
                    className='form-control'
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                  >
                    <option>Select a Category</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="Price" className="form-label">Price</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Price"
                    value={price}
                    onChange={handlePriceChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Description" className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows={8}
                    id="Description"
                    value={description}
                    onChange={handleDescriptionChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="ProductImg" className="form-label">Service Images</label>
                  <input
                    type="file"
                    className="form-control"
                    id="ProductImg"
                    value={serviceImages}
                    onChange={handleServiceImagesChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendAddService;






// import { Link } from 'react-router-dom';
// import logo from '../../logo.svg'; 
// import VendSideDashboard from './VendSideDashboard'; 

// function VendAddService(){
//     return(

//         <div className='container mt-4'>
//             <div className='row'>
//                 <div className='col-md-3 col-12 mb-2'>
//                     <VendSideDashboard/>
//                 </div>
//                 <div className='col-md-9 col-12 mb-2'>
//                     <div className='card'>
//                         <h4 className='card-header'>Add Service</h4>
//                         <div className='card-body'>
//                         <form>
//                             <div className="mb-3">
//                                 <label for="Title" className="form-label">Category</label>
//                                 <select className='form-control'>
//                                     <option>Select a Category</option>
//                                     <option>Architect</option>
//                                     <option>Carpenter</option>
//                                     <option>Electrician</option>
//                                     <option>Painter</option>
//                                     <option>Plumber</option>
//                                     <option>Interior Designer</option>
//                                 </select>
//                             </div>
//                             <div className="mb-3">
//                                 <label for="Price" className="form-label">Price</label>
//                                 <input type="text" className="form-control" id="Price" />
//                             </div>
//                             <div className="mb-3">
//                                 <label for="Description" className="form-label">Description</label>
//                                 <textarea className="form-control" rows={8} id="Description"></textarea>
//                             </div>
//                             <div className="mb-3">
//                                 <label for="ProductImg" className="form-label">Service Images</label>
//                                 <input type="file" className="form-control" id="ProductImg" />
//                             </div>
//                             <button type="submit" className="btn btn-primary">Submit</button>
//                         </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//         </div>

//     )
// }

// export default VendAddService;