import React from 'react';
// import { Link } from 'react-router-dom';

import PageHeader from '../components/headers/HomepageHeader';
import Contact from '../components/forms/Contact';
import FormButton from '../components/FormButton';

class Page extends React.Component {
  componentDidMount() {
    console.log('Home Page');
    window.scrollTo(0, 0);

    console.log('hash: ' + window.location.hash);
  }

  render() {
    return (
      <>
        <section className="content">
          <PageHeader />

          <div className="section whiteBkg photoLeft">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/photos/working-fistbump.jpg'} className="responsive rounded" alt="Coworkers working togehter" />
                  <blockquote>
                    <p>&ldquo;One can survive everything, nowadays, except death, and live down everything except a good reputation.&rdquo;
                      <span>&mdash; Oscar Wilde</span></p>
                  </blockquote>
                </div>

                <div className="col-6">
                  <h2>Top Rated Reputation Management Services for Individuals</h2>
                  <p>With a personalized reputation management plan crafted to achieve your
                    individual online reputation goals, you can control your reputation, and
                    your future.</p>
                  <FormButton text="Get Started" />
                </div>
              </div>
            </div>
          </div>

          <div className="section greyBkg">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h2>Fully Integrated Online Reputation Management Solutions: We've Got This!</h2>
                  <p>At InternetReputation.com our history of focusing specifically on online
                    reputation management for individuals has allowed us to rise to the top of
                    our industry.</p>

                  <p>Our holistic approach to online reputation management takes all aspects of
                    your personal internet reputation into account. Our trusted solutions combine
                    social media, content marketing and local SEO to ensure that you look your
                    best online.</p>
                  <FormButton text="Get Started" />
                </div>

                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/photos/working-computer.jpg'} className="responsive rounded" alt="Developer working on a computer" />
                </div>
              </div>
            </div>
          </div>

          <div className="section whiteBkg photoLeft">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/photos/man-computer.jpg'} className="responsive rounded" alt="Happy man working on computer" />
                </div>

                <div className="col-6">
                  <h2>Repairing, Protecting and Improving Your Internet Reputation</h2>
                  <p>Every online reputation issue requires a unique approach. That’s where
                    <a href="https://www.internetreputation.com"> InternetReputation.com </a> comes
                    in. We offer a wide range of services to address the different needs of our
                    clients. Unlike other reputation management companies, we provide custom
                    solutions to ensure that you only pay for what you need.</p>

                  <p>Whether you want to clean up your internet reputation, protect your online
                    privacy, or build your personal brand, we’ll put together a plan that’s
                    custom-tailored to meet your individual needs without breaking your budget.</p>
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