import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/headers/PageHeader';
import Contact from '../../components/forms/Contact';
import FormButton from '../../components/FormButton';

class Page extends React.Component {
  componentDidMount() {
    console.log('Services: Privacy Monitoring Page');
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <section className="content">
          <PageHeader page="privacy" title="Control Your Personal Information Online" background="handsonlaptop" />

          <div className="section whiteBkg">
            <div className="container">
              <div className="row">
                <div className="col-12 centered">
                  <h2>Features of Privacy Services</h2>
                </div>

                <div className="col-4 service">
                  <div className="top">
                    <img src={process.env.PUBLIC_URL + '/global/images/icons/remove-public-listings.png'} className="" alt="search bar similar to Google" />
                  </div>
                  <div className="bottom">
                    <p><Link to="">Remove Personal Details From Public Listings</Link></p>
                    <p>Clear your addresses and phone numbers from data-sharing sites.</p>
                  </div>
                </div>

                <div className="col-4 service">
                  <div className="top">
                    <img src={process.env.PUBLIC_URL + '/global/images/icons/protect-privacy.png'} className="" alt="Man sitting at laptop upset" />
                  </div>
                  <div className="bottom">
                    <p><Link to="">Protect Your Private &amp; Personal Information</Link></p>
                    <p>Fend off unwanted attention by safeguarding your sensitive information.</p>
                  </div>
                </div>

                <div className="col-4 service">
                  <div className="top">
                    <img src={process.env.PUBLIC_URL + '/global/images/icons/under-radar.png'} className="" alt="Coffee cup and newspapers" />
                  </div>
                  <div className="bottom">
                    <p><Link to="">Go Under The Radar</Link></p>
                    <p>Live comfortably while knowing your privacy is in good hands.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section greyBkg">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h2>Is There Too Much Information About You on the Internet?</h2>
                  <p>When you type your name into a search engine, are the results too revealing?
                    Data-sharing websites make addresses, phone numbers, and other sensitive materials
                    easily available via web search. To clean up these invasive data shares and
                    protect your privacy, InternetReputation.com offers Privacy Monitoring.</p>
                  <FormButton text="Get Started" />
                </div>

                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/photos/privacy-protection.jpg'} className="responsive rounded" alt="Person looking at laptip with privacy alerts." />
                </div>
              </div>
            </div>
          </div>

          <div className="section whiteBkg photoLeft">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/photos/monitoring-alerts.jpg'} className="responsive rounded" alt="Person looking at phone with privacy information." />
                </div>

                <div className="col-6">
                  <h2>Prevent Future Infractions with Ongoing Monitoring and More</h2>
                  <p>Our Privacy Monitoring team will delete your information from numerous data aggregate
                    sites, but unfortunately the problem doesn’t stop there. These sites often duplicate
                    their data in order to optimize it. They also constantly update your information in
                    their databases, which means that every time you move, get married or experience any
                    other significant life event, your new information can manifest on these sites. To
                    protect you against further identity and privacy threats, our team of experts continually
                    monitor the web for your information and expedite the removals for an entire year.</p>
                  <FormButton text="Get Started" />
                </div>
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