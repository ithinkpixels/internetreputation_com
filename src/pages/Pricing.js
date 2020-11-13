import React from 'react';

import PageHeader from '../components/headers/PageHeader';
import Price from '../components/Price';
import Contact from '../components/forms/Contact';

class Page extends React.Component {
  componentDidMount() {
    console.log('Pricing Page');
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <section className="content">
          <PageHeader title="Reputation Management Pricing" background="handsonlaptop" />

          <div className="container">
            <div className="row priceTable">
              <div className="col-3"><Price product="Privacy Protection" /></div>
              <div className="col-3"><Price product="Reputation Management" /></div>
              <div className="col-3"><Price product="Personal Branding" /></div>
              <div className="col-3"><Price product="Reputation Station" /></div>
            </div>

            <div className="row">
              <div className="col-12">
                <h2>What does online reputation management include?</h2>
                <p>Our team of experts will work with you to legally remove any negative
                  content possible. We use whitehat SEO tactics to suppress any content
                  that cannot be removed while creating, promoting, and optimizing positive
                  content to replace it.  We staff professional journalists to create this
                  content and use our robust list of industry connections to feature it on
                  authoritative websites, blogs, online journals, and more. In addition, we
                  create and/or optimize your social media accounts such as Instagram,
                  Pinterest, LinkedIn and Facebook. Your dedicated Account Manager will
                  provide you with weekly progress reports and is there to assist and
                  communicate with you every step of the way.</p>

                <h2>I’m ready to take control of my online reputation! What does the process look like?</h2>
                <p>We start by providing a free consultation, where we get to know you and
                  your personal branding goals. We discuss which facets of your online
                  reputation are important to you, such as preventing cyberbullying, removing
                  negative content, building your personal brand, protecting your online
                  privacy, etc. From there, our specialists dig deep to provide a technical
                  analysis of your case. Once the analysis is completed, we deliver a
                  comprehensive online reputation management strategy to accomplish your goals.</p>

                <h3>The cost of a personal online reputation management campaign varies and depends heavily on the following factors:</h3>
                <ul>
                  <li>The type or mix of services you choose (reputation management, personal
                    branding, content suppression/removal) and how aggressive you want to be
                    with each one.</li>
                  <li>The current status of your online reputation. The amount of high authority
                    content currently dominating the SERPs will dictate the number and volume
                    of resources needed to solve a problem.</li>
                  <li>Changes to Google’s algorithms. Our team of SEO specialists are always
                    up to date with algorithm changes and adjust strategies as necessary.
                    However, we cannot predict what these changes will be, nor how they will
                    affect the required quality and placement of assets.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </>
    );
  }
}

export default Page;