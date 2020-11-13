import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component  {
  componentDidMount() {
    this.mainNav();
    window.addEventListener('scroll', this.stickyHeader);
    window.addEventListener('scroll', this.forceClose);
    window.addEventListener('resize', this.forceClose);
    window.addEventListener('resize', this.mainNav);
  }

  stickyHeader() {
    let header = document.querySelector('header');
    (window.pageYOffset > header.clientHeight)? header.classList.add('sticky') : header.classList.remove('sticky');
  }

  forceClose() {
    let dropdowns = document.querySelectorAll('.dropdown');
    let hamburger = document.querySelector('.hamburger');

    hamburger.classList.remove('open');
    hamburger.nextElementSibling.classList.remove('open');
    dropdowns.forEach(item => {
      item.classList.remove('open');
    });
  }

  mainNav() {
    let dropdowns = document.querySelectorAll('.dropdown');
    let hamburger = document.querySelector('.hamburger');

    if(window.innerWidth <= 991) {
      // mobile navigation
      console.log('MOBILE NAV');

      hamburger.addEventListener('click', function() {
        this.classList.toggle('open');
        this.nextElementSibling.classList.toggle('open');
      }, true);

      dropdowns.forEach(item => {
        item.addEventListener('click', open, true);
        // item.addEventListener('click', close, true);
      });
    } else {
      // desktop navigation
      console.log('DESKTOP NAV');

      dropdowns.forEach(item => {
        item.addEventListener('mouseover', open, true);
        item.addEventListener('mouseout', close, true);
        item.addEventListener('focusin', open, true);
        item.addEventListener('focusout', close, true);
      });
    }

    function open() {
      let links = this.children[1].querySelectorAll('a');

      this.classList.add('open');
      let h = this.children[1].scrollHeight;
      this.children[1].style.height = h+'px';
      this.children[1].setAttribute('aria-hidden', 'false');

      links.forEach(item => {
        item.setAttribute('tabindex', 0);
      });
    }

    function close() {
      let links = this.children[1].querySelectorAll('a');

      this.classList.remove('open');
      this.children[1].style.height = '';
      this.children[1].setAttribute('aria-hidden', 'true');

      links.forEach(item => {
        item.setAttribute('tabindex', '-1');
      });
    }
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="irLogo">
            <Link to="/">
              <img src={process.env.PUBLIC_URL + '/global/images/logo-sticky.png'} className="logo" alt="Internet Reputation" />
            </Link>
          </div>

          <nav>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <ul className="mainNav">
              <li> <Link to="/">Home</Link> </li>
              <li className="dropdown">
                <Link to="/services">Services</Link>
                <ul aria-hidden="true">
                  <li> <Link to="/services/reputation-management" tabIndex="-1">Reputation Management</Link> </li>
                  <li> <Link to="/personal-branding" tabIndex="-1">Personal Branding</Link> </li>
                  <li> <Link to="/services/privacy-monitoring" tabIndex="-1">Privacy Monitoring</Link> </li>
                  <li> <Link to="/reputation-station" tabIndex="-1">Reputation Station</Link> </li>
                  <li> <Link to="/remove-information-from-google" tabIndex="-1">Information Removal</Link> </li>
                </ul>
              </li>
              <li> <Link to="/pricing">Pricing</Link> </li>
              <li className="dropdown">
                <Link to="/resources">Resources</Link>
                <ul aria-hidden="true">
                  <li> <Link to="/diy-reputation-tools" tabIndex="-1">Free DIY Tools</Link> </li>
                  <li> <Link to="/faq" tabIndex="-1">Frequently Asked Questions</Link> </li>
                  <li> <Link to="/industry-news" tabIndex="-1">Industry News</Link> </li>
                  {/* <li> <Link to="/case-studies" tabIndex="-1">Case Studies</Link> </li> */}
                  <li> <Link to="/case-studies/testimonials/" tabIndex="-1">Testimonials &amp; Press</Link> </li>
                </ul>
              </li>
              <li>
                <a href="tel:8007589012">
                  <span className="filled">Call Now</span>
                  <span className="number">800-758-9012</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header