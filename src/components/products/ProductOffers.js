import React, { Component } from 'react';

export class ProductOffer extends Component  {
  render() {
    let price = '';
    let offers = [];

    switch(this.props.product) {
      case 'Privacy Protection': {
        price = '<span>Starting At</span> $750 <span>Per Year</span>';
        offers = ['Online Information Analysis', 'Executive Monitoring', 'Content Control', 'Data Concealment', 'Online Threat Alerts', 'Scam Protection', 'No Long Term Contracts'];
        break;
      }
      case 'Reputation Management': {
        price = '<span>Starting At</span> $1,095 <span>Per Year</span>';
        offers = ['Online Reputation Analysis', 'Executive Monitoring', 'Content Control & Creation', 'Website Development', 'Search Engine Optimization', 'Auto Suggest Solutions', 'Review Management'];
        break;
      }
      case 'Personal Branding': {
        price = 'Customized Solutions Vary in Price';
        offers = ['Online Profile Analysis', 'Executive Monitoring', 'Content Control & Creation', 'Website Development', 'Search Engine Optimization', 'Brand Management', 'Social Media Management'];
        break;
      }
      case 'Reputation Station': {
        price = '<span>15 Day</span> FREE TRIAL <span>Then $29.99 per month</span>';
        offers = ['DIY Reputation Management', 'Customizable Dashboard', 'Best Practice Guidelines', 'Task Management Calendar', 'Branding Resources', 'Online Content Templates', 'Professional Developed Content'];
        break;
      }
      default: { break; }
    }

    // console.dir(this.props.product);
    // console.dir(offers);
    this.items = offers.map((item, key) =>
      <p key={key}>{ item }</p>
    );

    return (
      <>
        <div className="productPrice" dangerouslySetInnerHTML={{ __html: price }}></div>

        <div className="productOffers">
          { this.items }
        </div>
      </>
    );
  }
}

export default ProductOffer