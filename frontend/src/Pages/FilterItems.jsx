import React from 'react'

function FilterItems() {
  return (
    <>
      <div className='bg-info d-flex shadow justify-content-around mx-auto align-items-center' style={{width:'80%',borderRadius:'30px'}}>
        <input type='checkbox' name='check' className='form-check-input' style={{width:'18px'}} />
        <select className="form-select form-select-sm w-25 m-3">
          <option disabled selected>---Select Your Item---</option>
          <option value='jeans' >Jeans</option>
          <option value='Shirts'>Shirt's</option>
          <option value='Hoodies' >Hoodies</option>
          <option value='Shoes' >Shoes</option>
        </select>
      </div>
    </>
  )
}

export default FilterItems;