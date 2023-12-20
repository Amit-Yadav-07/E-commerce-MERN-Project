import React from 'react'

function SingleProduct() {
    return (
        <>
            <div className='container my-3' >
                <div className='row d-flex align-items-center'>
                    <div className='col-md-6  col-12 p-2 border border-black'>
                        <div className='row '>

                            <div className='col-6 text-center'><img className='img-fluid single-product-img-parent' src={require('../Pages/Product_img/girl-four.jpg')} /></div>
                            <div className='col-6 text-center'><img className='img-fluid single-product-img-parent' src={require('../Pages/Product_img/girl-four.jpg')} /></div>

                        </div>

                        <div className='row d-flex justify-content-center my-2'>

                            <div className='col-4 text-center'><img className='img-fluid single-product-img-parent-middle' src={require('../Pages/Product_img/girl-four.jpg')} /></div>


                        </div>
                        <div className='row'>

                            <div className='col-6 text-center'><img className='img-fluid single-product-img-parent' src={require('../Pages/Product_img/girl-four.jpg')} /></div>
                            <div className='col-6 text-center'><img className='img-fluid single-product-img-parent' src={require('../Pages/Product_img/girl-four.jpg')} /></div>

                        </div>


                    </div>
                    <div className='col-md-6 col-12 bg-info p-2'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        </p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SingleProduct