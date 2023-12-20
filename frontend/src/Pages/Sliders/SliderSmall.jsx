import React from 'react'

function SliderSmall() {
  return (
    <>


<main className="small">
        {/*------------------ sm screen carousel--------------------------- */}
        <div className="wapper">
          <div id="my" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* card start */}
                <div className="card-wapper">
                  <div className="card">
                    <figure>
                      <img
                        src={require('../Product_img/img-16.webp')}
                        className="card-img-top"
                        alt="..."/>
                    </figure>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>

                      <a className="btn"><i className="bi bi-cart4 fa-2x"></i>Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="card-wapper">
                  <div className="card">
                    <figure>
                      <img
                        src={require('../Product_img/girl-one.jpg')}
                        className="card-img-top"
                        alt="..."/>
                    </figure>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>

                      <a className="btn"><i className="bi bi-cart4 fa-2x"></i>Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="card-wapper">
                  <div className="card">
                    <figure>
                      <img
                        src={require('../Product_img/kids-1.jpg')}
                        className="card-img-top img-fluid"
                        alt="..."/>
                    </figure>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a className="btn"><i className="bi bi-cart4 fa-2x"></i>Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#my"
              data-bs-slide="prev"
              style={{width: 'auto', height: 'fit-content', margin: 'auto 0px'}}>
              <span
                className="carousel-control-prev-icon bg-black"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#my"
              data-bs-slide="next"
              style={{width: 'auto', height: 'fit-content', margin: 'auto 0px'}}>
              <span
                className="carousel-control-next-icon bg-black"
                aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </main>
   
    </>
  )
}

export default SliderSmall