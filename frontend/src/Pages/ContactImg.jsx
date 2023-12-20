import React from 'react'

function ContactImg() {
  return (
    <>
        <div className="col-lg-6 content_parent pt-2">
          <figure className="Contact_Figure">
            <img src={require('../Pages/images/contact-side-img.jpg')} className="img-fluid " alt="Model-img"/>
          </figure>
        </div>
    </>
  )
}

export default ContactImg;