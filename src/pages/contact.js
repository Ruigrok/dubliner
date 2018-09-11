import React from 'react'

import Layout from '../components/layout'

const SecondPage = (props) => (
  <Layout location={props.location}>
    <div className="contact-container" style={{marginTop: 87}}>
      <div className="contact-wrap">
        <form className="contact-form">
          <span className="contact-title">
            Send Us A Message
            </span>
          <label className="input-label" htmlFor="first-name">Tell us your name *</label>
          <div className="input-wrap rs1-input-wrap" data-validate="Type first name">
            <input id="first-name" className="input" type="text" name="first-name" placeholder="First name" />
            <span className="input-focus" />
          </div>
          <div className="input-wrap rs2-input-wrap" data-validate="Type last name">
            <input className="input" type="text" name="last-name" placeholder="Last name" />
            <span className="input-focus" />
          </div>
          <label className="input-label" htmlFor="email">Enter your email *</label>
          <div className="input-wrap" data-validate="Valid email is required: ex@abc.xyz">
            <input id="email" className="input" type="text" name="email" placeholder="Eg. example@email.com" />
            <span className="input-focus" />
          </div>
          <label className="input-label" htmlFor="phone">Enter phone number</label>
          <div className="input-wrap">
            <input id="phone" className="input" type="text" name="phone" placeholder="Eg. +1 800 000000" />
            <span className="input-focus" />
          </div>
          <label className="input-label" htmlFor="message">Message *</label>
          <div className="input-wrap" data-validate="Message is required">
            <textarea id="message" className="input" name="message" placeholder="Write us a message" defaultValue={""} />
            <span className="input-focus" />
          </div>
          <div className="btn-container" style={{ marginTop: 20, width: '100%' }}>
            <button className="btn contact-btn">
              Send Message
              </button>
          </div>
        </form>

        <div className="contact-more contact-side-column" style={{ backgroundImage: 'url("images/bg-01.jpg")' }}>
          <div className="flex-wrap size1 p-b-47">
            <div className="txt1 p-r-25">
              <span className="lnr lnr-map-marker" />
            </div>
            <div className="flex-col size2">
              <span className="txt1 p-b-20">
                Current Location
            </span>
              <span className="txt2">
                The Grenadines
            </span>
            </div>
          </div>
          <div className="dis-flex size1 p-b-47">
            <div className="txt1 p-r-25">
              <span className="lnr lnr-phone-handset" />
            </div>
            <div className="flex-col size2">
              <span className="txt1 p-b-20">
                Lets Talk
            </span>
              <span className="txt3">
                +1 800 1236879
            </span>
            </div>
          </div>
          <div className="dis-flex size1 p-b-47">
            <div className="txt1 p-r-25">
              <span className="lnr lnr-envelope" />
            </div>
            <div className="flex-col size2">
              <span className="txt1 p-b-20">
                Direct Contact
            </span>
              <span className="txt3">
                Brian
            </span>
              <span className="txt3">
                sailruig@gmail.com
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
