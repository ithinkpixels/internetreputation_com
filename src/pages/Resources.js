import React from 'react';
// import { Link } from 'react-router-dom';

import PageHeader from '../components/headers/PageHeader';
import Contact from '../components/forms/Contact';

class Page extends React.Component {
  componentDidMount() {
    console.log('Resources Page');
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <section className="content">
          <PageHeader title="Tools For Your Reputation" background="handsonlaptop" />

          {/* <div className="section whiteBkg">
            <div className="container">
              <div className="row">
                <div className="col-12 centered">
                  <h2>We can make you look great on the internet</h2>
                  <p>Removing the bad, adding the good. Never worry about your reputation online again.</p>
                </div>

                <div className="col-3 service">
                  <img src={process.env.PUBLIC_URL + '/global/images/icons/IRiconblue-list.png'} className="responsive rounded" alt="Reputation Management Icon" />
                  <p><Link to="/services/reputation-management/">Reputation Management</Link></p>
                  <p>Take control of your online image with our proven internet reputation defense techniques.</p>
                </div>

                <div className="col-3 service">
                  <img src={process.env.PUBLIC_URL + '/global/images/icons/IRiconblue-2people.png'} className="responsive rounded" alt="Personal Branding Icon" />
                  <p><Link to="/personal-branding/">Personal Branding</Link></p>
                  <p>Stand out from the masses with online presence that showcases your personal and professional success.</p>
                </div>

                <div className="col-3 service">
                  <img src={process.env.PUBLIC_URL + '/global/images/icons/IRiconblue-lock.png'} className="responsive rounded" alt="Privacy Protection Icon" />
                  <p><Link to="/services/privacy-monitoring/">Privacy Protection</Link></p>
                  <p>Protect your private information from identity thieves and prying eyes.</p>
                </div>

                <div className="col-3 service">
                  <img src={process.env.PUBLIC_URL + '/global/images/icons/IRiconblue-lightbulb.jpg'} className="responsive rounded" alt="DIY Reputation Dashboard Icon" />
                  <p><Link to="/reputation-station/">DIY Reputation Dashboard</Link></p>
                  <p>Consolidate, monitor and manage more than domains from one centralized location.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="section greyBkg">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h2>Eliminate Online Harm with Fast Removal Services</h2>
                  <p>One negative post can effectively upend your online reputation, transforming
                    what was once a positive online image into a liability that leaves you
                    struggling to pick up the pieces. We strive to eliminate the harm of
                    negative online items and to restore your positive online reputation,
                    as quickly as possible.</p>
                  <Link to="/#contactForm" className="btn btn-blue">Get Started</Link>
                </div>

                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/photos/personal-eliminate-online-harm.jpg'} className="responsive rounded" alt="Lady using tablet computer" />
                </div>
              </div>
            </div>
          </div>

          <div className="section whiteBkg photoLeft">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/photos/pass-credit-card.jpg'} className="responsive rounded" alt="Person giving another person a business card" />
                </div>

                <div className="col-6">
                  <h2>Clean up Your Online Space with Online Reputation Management</h2>
                  <p>Your online image is more important than ever before. Your ability
                    to get a job, get accepted into college, maintain a relationship or
                    protect your career hinges on the quality of your online reputation.</p>

                  <p>At Internet Reputation, we understand how important it is to be
                  your best online, which is why we provide the best in Online Reputation
                  Management solutions. If your online image is being affected or harmed
                  by negative online information, we take steps to eliminate the threat
                  while cleaning up your online space, ensuring a search of your name
                  reaps the best results possible.</p>
                  <Link to="/#contactForm" className="btn btn-blue">Get Started</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="section greyBkg">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h2>Protect Your Online Identity with Privacy Guard</h2>
                  <p>Unfortunately, online identity and information theft are at all-time
                    highs, leaving your personal information more vulnerable than ever before.
                    Thousands of sites across the Web constantly scrape the Internet for names,
                    phone numbers, addresses, court records and more, potentially exposing
                    you and your family to threats you never knew existed.</p>

                  <p>Introducing Privacy Guard, our cutting-edge identity protection tool that
                    helps safeguard you and your loved ones from those that mean you harm.
                    This advanced tool scans the Web 24/7 for your information, notifies you
                    once that info is discovered, and provides information removal options
                    from data-search sites across the Internet.</p>
                  <Link to="/#contactForm" className="btn btn-blue">Get Started</Link>
                </div>

                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/photos/personal-protect-your-online-identity.jpg'} className="responsive rounded" alt="Man looking over womans sholder on bus" />
                </div>
              </div>
            </div>
          </div>

          <div className="section whiteBkg photoLeft">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/photos/personal-you-deserve-a-great-reputation.jpg'} className="responsive rounded" alt="Lady looking at tablet computer" />
                </div>

                <div className="col-6">
                  <h2>You Deserve a Great Online Reputation</h2>
                  <p>Your online reputation can’t wait! Take action now by contacting an
                  <a href="https://www.internetreputation.com"> InternetReputation.com </a>
                  Reputation Management professional today!</p>
                  <Link to="/#contactForm" className="btn btn-blue">Get Started</Link>
                </div>
              </div>
            </div>
          </div> */}
        </section>

        <Contact />
      </>
    );
  }
}

export default Page;