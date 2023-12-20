import React from 'react'
import CardBody from './CardBody';

function AllCards({product}) {
  
  console.log(product)
  return (
    <>
        
          <div className="col-md-3 col-sm-6 pb-3">
            <div className="card-parent">
              <div className="card">
                <figure>
                  <img src={product.images[2]} className="card-img-top" alt="..." />
                </figure>
                <CardBody product={product}/>
              </div>
            </div>
          </div>
       
    </>
  )
}

export default AllCards