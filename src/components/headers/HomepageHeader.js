import React, { Component } from 'react'

export class PageHeader extends Component {
  topofForm() {
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
      <div id="pageTitle" className="homepage mobilephone">
        <h1>What is the internet saying about you?
          <button className="btn btn-blue btn-lg" onClick={this.topofForm}>Find Out Now <i className="fa fa-search"></i></button>
        </h1>

        <div className="featured">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <img src={process.env.PUBLIC_URL + '/global/images/logos/featured.png'} alt="As Featured In" />
              </div>

              <div className="col-3">
                <img src={process.env.PUBLIC_URL + '/global/images/logos/topseo.png'} alt="TopSEO Rankers" />
              </div>

              <div className="col-3">
                <a href="https://finance.yahoo.com/news/remove-information-internet-internetreputation-com-204612770.html" target="_blank" rel="noopener noreferrer">
                  <img src={process.env.PUBLIC_URL + '/global/images/logos/yahoo-finance2.png'} alt="Yahoo! Finance" />
                </a>
              </div>

              <div className="col-3">
                <a href="https://www.inc.com/profile/internetreputationcom" target="_blank" rel="noopener noreferrer">
                  <img src={process.env.PUBLIC_URL + '/global/images/logos/inc1.png'} alt="Inc.500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PageHeader