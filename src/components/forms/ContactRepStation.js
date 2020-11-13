import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Contact extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        contactMethod: "",
        services_privacyProtection: "",
        services_repMan: "",
        services_personalBrand: "",
        budget: "",
        timeframe: "",
        comments: "",
        agreement: ""
      },
      isSubmitting: false,
      isError: false
    };
  }

  successfulSubmit = e => {
    document.querySelector('div.contactForm .form').innerHTML = '<h2>Thank You</h2><p>You are very important to us, all information received will always remain confidential. We will contact you as soon as we review your information.</p>';
  };

  submitForm = async e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ isSubmitting: true });
    console.log('submit to zoho');
    this.successfulSubmit();

    // zoho api auth
    // client id: 1000.9BS4IYAZ3X4X0UQJ843N6SFFYWPJ2H
    // client secret: c9223da99e9597a66cdc8339f2a60478475e1aeb38

    // const res = await fetch("https://accounts.zoho.com/oauth/v2/token", {
    //   authtoken: "1000.9BS4IYAZ3X4X0UQJ843N6SFFYWPJ2H",
    //   method: "POST",
    //   body: JSON.stringify(this.state.values),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // });
    // this.setState({ isSubmitting: false });
    // const data = await res.json();
    // !data.hasOwnProperty("error")
    //   ? this.setState({ message: data.success })
    //   : this.setState({ message: data.error, isError: true });

    // setTimeout(
    //   () =>
    //     this.setState({
    //       isError: false,
    //       message: "",
    //       values: {
    //         firstname: "",
    //         lastname: "",
    //         email: "",
    //         phone: "",
    //         contactMethod: "",
    //         services_privacyProtection: "",
    //         services_repMan: "",
    //         services_personalBrand: "",
    //         budget: "",
    //         timeframe: "",
    //         comments: "",
    //         agreement: "" }
    //     }),
    //   1600
    // );
  };

  handleInputChange = e =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });

  render() {
    return (
      <>
        <section className="contact" id="contactForm">
          <div className="container">
            <div className="row">
              <div className="col-6 contactForm">
                <div className="form">
                  <form id="irContact" onSubmit={this.submitForm}>
                    <label htmlFor="firstname" className="hidden">First Name*</label>
                    <input name="firstname" id="firstname" placeholder="First Name" type="text" onChange={this.handleInputChange} required></input>

                    <label htmlFor="lastname" className="hidden">Last Name*</label>
                    <input name="lastname" id="lastname" placeholder="Last Name" type="text" onChange={this.handleInputChange} required></input>

                    <label htmlFor="email" className="hidden">Email*</label>
                    <input name="email" id="email" placeholder="Email" type="email" onChange={this.handleInputChange} required></input>

                    <label htmlFor="phone" className="hidden">Phone Number*</label>
                    <input name="phone" id="phone" placeholder="Phone Number (ie: 555-555-5555)" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={this.handleInputChange} required></input>

                    <span>
                      <label htmlFor="AccountType">Account Type *</label>
                      <select name="AccountType" id="AccountType" onChange={this.handleInputChange}>
                        <option defaultValue>- Select -</option>
                        <option value="Business">Business</option>
                        <option value="Personal">Personal</option>
                      </select>
                    </span>

                    <label htmlFor="comments" className="hidden">Other Comments</label>
                    <textarea name="comments" id="comments" placeholder="Other Comments" onChange={this.handleInputChange}></textarea>

                    <span>
                      <span className="checkbox">
                        <input type="checkbox" id="agreement" name="agreement" value="Agree" onChange={this.handleInputChange} />
                        <label htmlFor="agreement" id="agreement">By clicking Get Started, you agree to our <Link to="/terms-of-service" target="_blank">Terms</Link> and that you have read our <Link to="/privacy-policy" target="_blank">Privacy Policy</Link>, including our <Link to="/cookies-policy" target="_blank">Cookie Use</Link>.*</label>
                      </span>
                    </span>

                    <span className="submitBtn">
                      <button className="btn btn-black">Submit</button>
                    </span>
                  </form>
                </div>
              </div>

              <div className="col-6">
                <h2>Try Reputation Station for FREE!</h2>
                <img src={process.env.PUBLIC_URL + '/global/images/Rep_station_Logo_Final-White-300x155.png'} className="" alt="Reputation Station Logo" />
                <p>Reputation Station puts the power of online reputation management in your hands.</p>
                <p>Use the form to sign up for your FREE TRIAL of our cutting-edge DIY dashboard!</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact