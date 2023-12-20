import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearValues, createProduct, handleInputChange } from '../features/product/productSlice';
import { toast } from 'react-toastify';

function AddProduct() {
  const dispatch = useDispatch();
  const [files,setFiles] = useState([]);
  
  const {productCategoryOptions,productName,productDescription,productPrice,productCategory,isLoading} = useSelector(state=>state.product);
  const handleChange = (e)=>{
    if(e.target.name==='productPrice'){
      if(e.target.value===''){
        return;
      }
      const price = parseInt(e.target.value)
      console.log(typeof(price))
      if(isNaN(price)){
        e.target.value = null;
        toast.error('Please enter a number!');
        return;
      }
   
    }
    const name = e.target.name
    const value = e.target.value
    console.log(name,value)
    dispatch(handleInputChange({name, value}));
    
  }

  const handleImageUpload = (e)=>{
    setFiles(e.target.files)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const productData = new FormData();

   

    if(files.length ===0 || !productCategory || !productDescription || !productName || !productPrice){
      toast.error('Please provide all fields');
      return;
    }

   
    for(const file of files){
      productData.append('multi-files',file)
    }
   
    productData.append('productName',productName);
    productData.append('productPrice',productPrice);
    productData.append('productDescription',productDescription);
    productData.append('productCategory',productCategory);

    console.log({files,productName,productCategory,productDescription,productPrice})
    console.log({productData})

    // dispatch(createProduct({productName,productCategory,productDescription,productPrice,productData}))
    dispatch(createProduct(productData))
    dispatch(clearValues())
  }


  if(isLoading){
    return <isLoading />
  }
  
  return (
    <>
      <div className="all_container" style={{marginLeft:"20rem"}}>
        <h2 className="py-3">Add Products</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="productName">Product Name</label>
            <textarea
                rows="2"
                placeholder="Product Name"
                
                onChange={handleChange}
                className="form-control"
                name='productName'
                value={productName}
              ></textarea>
          </div>
          <div className="form-group">
            <label for="productDescription" className=''>Product Description</label>
            <textarea
                rows="2"
                placeholder="Write Some Text..."
                
                className="form-control"
                id="exampleInputPassword1"
                name='productDescription'
                onChange={handleChange}
                value={productDescription}
              ></textarea>
          </div>
          <div className="form-group">
            <label for="login-password"   >Product Category</label>
             <select className='w-100'onChange={handleChange} name='productCategory' value={productCategory}>
              <option value=''>------Choose Category-------</option>
           {productCategoryOptions.map((productCategoryOption,index)=>{
            return    <option key={index} value={productCategoryOption}>{productCategoryOption}</option>
       
           })}
             </select>
          </div>

          <div className="form-group">
            <label for="productPrice" className=''>Product Amount</label>
              <input type='text' maxLength={4} name='productPrice' value={productPrice} onChange={handleChange} className='w-100' placeholder='Enter Amount'   multiple />
          </div>

          <div className="form-group d-flex mt-3">
              <input type='file' className='w-100' name='multi-files'  multiple onChange={handleImageUpload}/>   
              {/* <input type='checkbox' className='' name='productImages'  /> */}
          </div>

          <button type="submit" className="btn w-100 my-3 fs-5 text-white" style={{backgroundColor:"#337CCF"}}>Submit</button>
     
        </form>
      </div>
    </>
  )
}

export default AddProduct;