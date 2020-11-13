import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import ProductPrice from './products/ProductPrice';
import ProductOffers from './products/ProductOffers';

export class PriceTable extends Component  {
  render() {
    const prod = this.props.product;
    const prodsm = prod.toLowerCase().replace(" ", "-");
    let link = '';

    switch(prod) {
      case 'Privacy Protection': { link = '/services/privacy-monitoring/privacy-protection-form'; break; }
      case 'Reputation Management': { link = '/services/reputation-management/rep-man-reputation-management-form'; break; }
      case 'Personal Branding': { link = '/personal-branding/personal-branding-form'; break; }
      case 'Reputation Station': { link = '/reputation-station-signup'; break; }
      default: { break; }
    }

    return (
      <>
        <div className="price" id={ prodsm }>
          <div className="productName">
            <h3>{ prod }</h3>
          </div>

          {/* <ProductPrice product={ prod } /> */}
          <ProductOffers product={ prod } />

          <div className="productButton">
            <Link to={link} className="btn">Sign Up Now</Link>
          </div>
        </div>
      </>
    );
  }
}

export default PriceTable