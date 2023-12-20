import React from 'react'

function ContactForm() {
  return (
    <>
        <div className="col-lg-6">
          <form id="form">
            <div className="form-group">
              <label for="exampleInputEmail1">Name:</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                required
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address:</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Message:</label>
              <textarea
                rows="3"
                placeholder="Write Some Text..."
                required
                className="form-control"
                id="exampleInputPassword1"
              ></textarea>
            </div>
            <button type="submit" className="btn w-100 mt-2 text-white fs-4 shadow" style={{backgroundColor:'var(--color)'}}>
              Submit
            </button>
          </form>
        </div>
    </>
  )
}

export default ContactForm