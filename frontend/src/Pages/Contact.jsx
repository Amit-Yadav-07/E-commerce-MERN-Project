import React from 'react'
import ContactImg from './ContactImg'
import ContactForm from './ContactForm'


function Contact() {
  return (
    <>

      <div className='all_container px-4'>
        <div className="container my-3">
          <h2 className="text-center py-2">Contact Us</h2>
          <div
            className="row p-5 contact-row">
            <ContactImg />
            <ContactForm />
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact