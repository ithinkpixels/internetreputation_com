import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Footer extends Component  {
  getYear() {
    return new Date().getFullYear();
  }

  topOfForm() {
    let form = document.querySelector('#contactForm');
    console.log('scroll to form');
    const y = form.offsetTop - 120;

    window.scrollTo({
        top: y,
        behavior: 'smooth'
    })
  }

  render() {
    return (
      <>
        <footer className="footer">
          <div className="top">
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <h3>Services</h3>
                  <ul>
                    <li> <Link to="/services/reputation-management/">Reputation Management</Link> </li>
                    <li> <Link to="/personal-branding/">Personal Branding</Link> </li>
                    <li> <Link to="/services/privacy-monitoring/">Privacy Services</Link> </li>
                    <li> <Link to="/reputation-station/">Reputaion Station</Link> </li>
                  </ul>
                </div>

                <div className="col-3">
                  <h3>About</h3>
                  <ul>
                    <li> <Link to="/meet-the-team">Our Team</Link> </li>
                    <li> <button className="link" onClick={this.topOfForm}>Contact Us Now</button> </li>
                    <li> <Link to="/privacy-policy">Privacy Policy</Link> </li>
                    <li> <Link to="/terms-of-service">Terms of Service</Link> </li>
                  </ul>
                </div>

                <div className="col-3">
                  <h3>Resources</h3>
                  <ul>
                    <li> <Link to="/industry-news">Industry News</Link> </li>
                    {/* <li> <Link to="/case-studies">Case Studies</Link> </li> */}
                    <li> <Link to="/case-studies/testimonials/">Testimonials &amp; Press</Link> </li>
                  </ul>
                </div>

                <div className="col-3 address">
                  <Link to="/">
                    <img src={process.env.PUBLIC_URL + '/global/images/logo-sticky.png'} alt="Internet Reputation" />
                  </Link>

                  <p>7100 E Belleview Ave<br />
                    Suite 310<br />
                    Greenwood Village, CO 80111</p>

                  <ul className="social">
                    <li>
                      <a target="_blank" href="https://twitter.com/internetrepu"  rel="noopener noreferrer">
                        <span className="hidden">Twitter</span>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.facebook.com/InternetReputationcom-208936369122205/" rel="noopener noreferrer">
                        <span className="hidden">Facebook</span>
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.linkedin.com/company/internetreputation" rel="noopener noreferrer">
                        <span className="hidden">LinkedIn</span>
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.instagram.com/internetreputation/" rel="noopener noreferrer">
                        <span className="hidden">Instagram</span>
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>

                  <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"  rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + '/global/images/creativeCommons.png'} alt="Creative Commons" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <img src={process.env.PUBLIC_URL + '/global/images/awards.png'} className="awards" alt="As Featured In: Inc 500, Yahoo Finance and TopSEO" />
                  <p>&copy; { this.getYear() }. <strong>Internet Reputation&reg;</strong> | All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer