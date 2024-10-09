import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us Now For More Details' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Contact Us Easy and Fast</h4> <br />
            <div>
              <input type='text' placeholder='Enter Your Name' />
              <input type='text' placeholder='Enter Your Email' />
            </div>
            <p>Leave a Comment for Us</p>
            <textarea cols='30' rows='10'></textarea>
            <button>Submit</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
