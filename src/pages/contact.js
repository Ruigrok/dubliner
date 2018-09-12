import React from 'react';
import { navigate, Link } from 'gatsby';

import Layout from '../components/layout';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {

    return (
      <Layout /* location={props.location} */>

        <div
          style={{
            marginBottom: '1.45rem',
            background: '#f2f2f2',
            position: 'absolute',
            top: 0,
            width: '100%',
            zIndex: 1
          }}
        >
          <div
            style={{
              margin: '0 auto',
              padding: '1.45rem 1.0875rem',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                Lagoon 420
            </Link>
            </h1>

            <div className='btn-container'>
              <button className='btn nav-btn' onClick={() => navigate('/')}>
                Return Home
              </button>
            </div>
          </div>
        </div>

        <div className="contact-container" style={{ marginTop: 87 }}>
          <div className="contact-wrap">
            <form
              className="contact-form"
              name="contact"
              method="post"
              action="/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <input type="hidden" name="lagoon-420" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </p>
              <span className="contact-title">
                Send Us A Message
              </span>
              <label className="input-label" htmlFor="first-name">Tell us your name *</label>
              <div className="input-wrap rs1-input-wrap" data-validate="Type first name">
                <input
                  id="first-name"
                  className="input"
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  onChange={this.handleChange}
                />
                <span className="input-focus" />
              </div>
              <div className="input-wrap rs2-input-wrap" data-validate="Type last name">
                <input
                  className="input"
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  onChange={this.handleChange}
                />
                <span className="input-focus" />
              </div>
              <label className="input-label" htmlFor="email">Enter your email *</label>
              <div className="input-wrap" data-validate="Valid email is required: ex@abc.xyz">
                <input
                  id="email"
                  className="input"
                  type="type"
                  name="email"
                  placeholder="Eg. example@email.com"
                />
                <span className="input-focus" />
              </div>
              <label className="input-label" htmlFor="phone">Enter phone number</label>
              <div className="input-wrap">
                <input
                  id="phone"
                  className="input"
                  type="text"
                  name="phone"
                  placeholder="Eg. +1 800 000000"
                  onChange={this.handleChange}
                />
                <span className="input-focus" />
              </div>
              <label className="input-label" htmlFor="message">Message *</label>
              <div className="input-wrap" data-validate="Message is required">
                <textarea
                  id="message"
                  className="input"
                  name="message"
                  placeholder="Write us a message"
                  defaultValue={""}
                  onChange={this.handleChange}
                />
                <span className="input-focus" />
              </div>
              <div className="btn-container" style={{ marginTop: 20, width: '100%' }}>
                <button type="submit" className="btn contact-btn">
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
    );
  }
}

export default ContactPage;
