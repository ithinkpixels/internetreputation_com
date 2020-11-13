import React, { Component } from 'react';

export class ProductPrice extends Component  {
  render() {
    let offers = [];

    switch(this.props.product) {
      case 'Privacy Protection': {
        offers = ['Online Information Analysis', 'Executive Monitoring', 'Content Control', 'Data Concealment', 'Online Threat Alerts', 'Scam Protection', 'No Long Term Contracts'];
        break;
      }
      case 'Reputation Management': {
        offers = ['Online Reputation Analysis', 'Executive Monitoring', 'Content Control & Creation', 'Website Development', 'Search Engine Optimization', 'Auto Suggest Solutions', 'Review Management'];
        break;
      }
      case 'Personal Branding': {
        offers = ['Online Profile Analysis', 'Executive Monitoring', 'Content Control & Creation', 'Website Development', 'Search Engine Optimization', 'Brand Management', 'Social Media Management'];
        break;
      }
      case 'Reputation Station': {
        offers = ['DIY Reputation Management', 'Customizable Dashboard', 'Best Practice Guidelines', 'Task Management Calendar', 'Branding Resources', 'Online Content Templates', 'Professional Developed Content'];
        break;
      }
      default: { break; }
    }

    // console.dir(this.props.product);
    // console.dir(offers);

    return (
      <>
        <div className="productPrice">
          <p>
            <span>Starting At</span>
            $750
            <span>Per Year</span>
          </p>
        </div>
      </>
    );
  }
}

export default ProductPrice