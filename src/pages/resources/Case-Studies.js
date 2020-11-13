import React from 'react';
// import { Link } from 'react-router-dom';

import PageHeader from '../../components/headers/PageHeader';
import Contact from '../../components/forms/Contact';

class Page extends React.Component {
  componentDidMount() {
    console.log('Recources: Case Studies');
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <section className="content">
          <PageHeader page="casestudies" title="Case Studies" background="handsonlaptop" />

          {/* <div className="section whiteBkg">
            <div className="container">
              <div className="row">
                <div className="col-12 centered">
                  <h2>Reputation Management: Protect and Define Yourself Online</h2>
                  <p>Don’t let online threats destroy your reputation! Our reputation management services help you defend and dictate who you are online.</p>
                </div>

                <div className="col-3 service no-padding">
                  <div className="top">
                    <img src={process.env.PUBLIC_URL + '/global/images/photos/internet-defamation-bw.jpg'} className="responsive" alt="Man typing on laptop" />
                  </div>
                  <div className="bottom">
                    <p><Link to="/services/reputation-management/">Content Control</Link></p>
                    <p>We offset undesirable search results by creating positive, highly optimized online assets.</p>
                    <Link to="/" className="btn btn-blue">Learn More</Link>
                  </div>
                </div>

                <div className="col-3 service no-padding">
                  <div className="top">
                    <img src={process.env.PUBLIC_URL + '/global/images/photos/searchblock-bw.jpg'} className="responsive" alt="search bar similar to Google" />
                  </div>
                  <div className="bottom">
                    <p><Link to="/personal-branding/">Syndicated Searches</Link></p>
                    <p>We direct traffic to new content we have developed to increase rankings.</p>
                    <Link to="/" className="btn btn-blue">Learn More</Link>
                  </div>
                </div>

                <div className="col-3 service no-padding">
                  <div className="top">
                    <img src={process.env.PUBLIC_URL + '/global/images/photos/internet-slander-bw.jpg'} className="responsive" alt="Man sitting at laptop upset" />
                  </div>
                  <div className="bottom">
                    <p><Link to="/services/privacy-monitoring/">Suppression</Link></p>
                    <p>We identify effective platforms and optimal content types to impact search results.</p>
                    <Link to="/" className="btn btn-blue">Learn More</Link>
                  </div>
                </div>

                <div className="col-3 service no-padding">
                  <div className="top">
                    <img src={process.env.PUBLIC_URL + '/global/images/photos/public-information-bw.jpg'} className="responsive" alt="Coffee cup and newspapers" />
                  </div>
                  <div className="bottom">
                    <p><Link to="/reputation-station/">Executive Monitoring</Link></p>
                    <p>In an uninfluenced search page, we track, relay, and remove any potential risks or threats.</p>
                    <Link to="/" className="btn btn-blue">Learn More</Link>
                  </div>
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
                  <h2>Today's Online Community: A Dangerous Place</h2>
                  <p>Your reputation is at risk of attack at any moment. Negative information
                    can come in many forms and from an endless array of online sources. When
                    a negative post gains traction in search results, your reputation could
                    be taking a hit on a daily, even hourly basis.</p>
                  <p>Unfortunately, negative information attracts a disproportionate amount
                    of attention online, regardless of whether it appears as a news article,
                    blog post, review, anonymous comment or public record. And when such a
                    post gains prominence in an otherwise harmless search of your name,
                    recovering from the fallout, or engaging in any reputation repair, could
                    seem nearly futile.</p>
                  <p>Fortunately, there is an answer. By using our reputation management
                    services, you can begin the recovery process, mitigating the effects
                    of that dangerous and unwanted item while building an online reputation
                    YOU can control.</p>
                  <p>Overcoming a threat to your reputation is possible, and we can help get
                    your online footprint aimed back in the right direction.</p>
                  <Link to="/#contactForm" className="btn btn-blue">Get Started</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="section greyBkg">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h2>Fighting Back with Internet Reputation Management</h2>
                  <p>If a negative post or unwanted personal information is threatening your
                    online reputation, we’re here to help.</p>
                  <p>Our comprehensive Internet reputation management services were designed
                    by digital experts who understand the complexities of online information.
                    We understand not only the many forms it can take but also the processes
                    and strategy needed for removal and suppression.</p>
                  <p>Our proprietary platform provides us the opportunity to tailor each
                    solution to your unique online needs, and to deliver the digital remedy
                    that quickly, safely and efficiently eliminates any threat to your
                    reputation. Built on industry insight and expertise accumulated over
                    years of experience, our reputation monitoring and reputation repair
                    solutions deliver you results, fast!</p>
                  <Link to="/#contactForm" className="btn btn-blue">Get Started</Link>
                </div>

                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/photos/internet-reputation-repair.jpg'} className="responsive rounded" alt="Man looking at Google on laptop" />
                </div>
              </div>
            </div>
          </div>

          <div className="section whiteBkg photoLeft">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/photos/fix-your-reputation.png'} className="responsive rounded" alt="Reputation Tachomoter" />
                </div>

                <div className="col-6">
                  <h2>Your Reputation Can’t Wait. Contact Us Today</h2>
                  <p>We are proven leaders in the digital reputation repair space. Through thousands
                    of customized campaigns, removals and privacy monitoring solutions, we have
                    achieved results for clients across the world.</p>
                  <p>Our strategy incorporates content creation and curation, technological innovation,
                    constant research and client-focused solutions.</p>
                  <p>We have specialized in online reputation management services since 2011, and
                    continue to seek out better, more efficient and more effective ways of exceeding
                    your expectations.</p>
                  <p>Discover what personal reputation management can do for you. Contact us today.</p>
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