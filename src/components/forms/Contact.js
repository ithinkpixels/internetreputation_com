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
                      <label htmlFor="contactMethod">Preferred method of contact *</label>
                      <select name="contactMethod" id="contactMethod" onChange={this.handleInputChange}>
                        <option defaultValue>- Select -</option>
                        <option value="Email">Email</option>
                        <option value="Phone">Phone</option>
                      </select>
                    </span>

                    <span>
                      <fieldset>
                        <legend>Which service ate you interested in?* (select all that apply)</legend>
                        <span className="checkbox">
                          <input type="checkbox" id="services_privacyProtection" name="services_privacyProtection" value="Yes" onChange={this.handleInputChange} />
                          <label htmlFor="services_privacyProtection">Privacy Protection</label>
                        </span>
                        <span className="checkbox">
                          <input type="checkbox" id="services_repMan" name="services_repMan" value="Yes" onChange={this.handleInputChange} />
                          <label htmlFor="services_repMan">Reputation Management</label>
                        </span>
                        <span className="checkbox">
                          <input type="checkbox" id="services_personalBrand" name="services_personalBrand" value="Yes" onChange={this.handleInputChange} />
                          <label htmlFor="services_personalBrand">Personal Brand Management</label>
                        </span>
                      </fieldset>
                    </span>

                    <span>
                      <label htmlFor="budget">Estimated Budget*</label>
                      <select name="budget" id="budget" onChange={this.handleInputChange}>
                        <option defaultValue>- Select -</option>
                        <option value="$100 - $499">$100 - $499</option>
                        <option value="$500 - $999">$500 - $999</option>
                        <option value="$1000 - $2999">$1000 - $2999</option>
                        <option value="$3000 - $8999">$3000 - $8999</option>
                        <option value="$4000 - $14999">$4000 - $14999</option>
                        <option value="$15000 &amp; Up">$15000 &amp; Up</option>
                      </select>
                    </span>

                    <span>
                      <label htmlFor="timeframe">When would you like to start your campaign? *</label>
                      <select name="timeframe" id="timeframe" onChange={this.handleInputChange}>
                        <option defaultValue>- Select -</option>
                        <option value="Immediately">Immediately</option>
                        <option value="Within 1 month">Within 1 month</option>
                        <option value="Within 6 months">Within 6 months</option>
                        <option value="More than 6 months from now">More than 6 months from now</option>
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
                <h2>Free Online Reputation Consultation</h2>
                <p>Get in touch with one of our specialists at Internet Reputation today!</p>
                <a href="tel:8007589012" className="btn btn-blue">800-758-9012</a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact