import React from 'react'

import AllCards from './AllCards';



function Card({products}) {
  return (
    <>

      <div className="container-fluid my-3">
        
        <div className="row">

          {products && products.map((product)=>{
            return <AllCards product={product}/>
          })}
        
        </div>
      </div>
    </>
  )
}

export default Card;