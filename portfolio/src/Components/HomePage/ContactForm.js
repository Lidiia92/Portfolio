import React, { Component } from "react";
import * as emailjs from "emailjs-com";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    successState: false
  };
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      from_name: email,
      to_name: "lidiiany92@gmail.com",
      subject: subject,
      message_html: message
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      )
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function(error) {
          console.log("FAILED...", error);
        }
      );

    this.resetForm();
    this.showSucessMessage();
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  showSucessMessage = () => {
    this.setState({ successState: true });
    window.setTimeout(this.hideSucessMessage, 5000);
  };

  hideSucessMessage = () => {
    this.setState({ successState: false });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit.bind(this)} className="form-wrapper">
          <div style={{ width: "60%" }}>
            <h2 className="contact-heading">Get in touch</h2>
            <input
              type="email"
              name="email"
              required
              value={this.state.email}
              className="text-primary"
              onChange={this.handleChange.bind(this, "email")}
              placeholder="Enter email"
            />

            <input
              type="text"
              name="name"
              required
              value={this.state.name}
              className="text-primary"
              onChange={this.handleChange.bind(this, "name")}
              placeholder="Name"
            />

            <input
              type="text"
              name="subject"
              required
              className="text-primary"
              value={this.state.subject}
              onChange={this.handleChange.bind(this, "subject")}
              placeholder="Subject"
            />

            <textarea
              name="message"
              required
              className="text-primary"
              value={this.state.message}
              onChange={this.handleChange.bind(this, "message")}
              placeholder="Your message"
              rows="4"
              cols="50"
            />

            <button variant="primary" type="submit" className="contact-btn">
              Submit
            </button>
            {this.state.successState ? (
              <p className="contact-success">
                Thank you! <span>😃</span>Your message has been successfully
                sent. I will contact you very soon!{" "}
                <span
                  style={{ marginLeft: 20, cursor: "pointer" }}
                  onClick={this.hideSucessMessage}
                >
                  ❎
                </span>
              </p>
            ) : null}
          </div>
        </form>
      </>
    );
  }
}
export default ContactForm;
