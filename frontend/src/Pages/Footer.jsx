import React from 'react'

function Footer() {
    return (
        <>

            <div className="container-fluid footer" style={{ backgroundColor: 'black' }}>
                <div className="row text-center">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <h4 className='text-white text-uppercase bold fw-bold mt-2'>Men</h4>
                        <div className="footer_links-parent">
                            <a href="men-shirt.html">shirts</a>
                            <a href="men-jeans.html">jeans</a>
                            <a href="men-hoodie.html">hoodies</a>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <h4 className='text-white text-uppercase bold fw-bold mt-2'>women</h4>
                        <div className="footer_links-parent">
                            <a href="women-dress.html">Dresses</a>
                            <a href="women-pant.html">Pants</a>
                            <a href="women-skirt.html">skirts</a>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <h4 className='text-white text-uppercase bold fw-bold mt-2'>kids</h4>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <h4 className='text-white text-uppercase bold fw-bold mt-2'>links</h4>
                        <div className="footer_links-parent">
                            <a href="index.html">Home</a>
                            <a href="contact.html">Contact</a>
                            <a href="">Logout</a>
                        </div>
                    </div>
                    <hr className="mx-auto text-white" style={{ width: '90%' }} />
                    <div className="pb-2">
                        <p className="text-white">Copyright &#169;Ecommerce 2023-24</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Footer