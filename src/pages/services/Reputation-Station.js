import React from 'react';
// import { Link } from 'react-router-dom';

import PageHeader from '../../components/headers/PageHeader';
import Contact from '../../components/forms/ContactRepStation';

class Page extends React.Component {
  componentDidMount() {
    console.log('Services: Reputation Station Page');
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <section className="content">
          <PageHeader page="repstation" title="Reputation Station" background="train" />

          <div className="section whiteBkg">
            <div className="container">
              <div className="row">
                <div className="col-12 centered">
                  <h2>Internet Reputation’s Cutting-edge DIY Personal Branding Dashboard: Reputation Station</h2>
                </div>

                <div className="col-12">
                  <p>With Reputation Station, students, professionals and business owners have the comprehensive,
                    customized Online Reputation Management (ORM) Dashboard they need to organize and control their
                    online brands. A cutting-edge personal branding platform, the DIY Management tool allows users
                    to consolidate, monitor and manage more than 50 domains from one centralized location, ensuring
                    each element of your presence and digital image is working together to achieve your unique
                    online goals.</p>
                </div>

                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/photos/man-on-reputation-station.jpg'} className="responsive rounded" alt="Man on public transportaion using his phone" />
                </div>

                <div className="col-6">
                  <p>This one-of-a-kind reputation management solution includes a variety of <strong> user-friendly
                    features </strong> for managing your brand online, such as:</p>

                  <ul>
                    <li>A personalized home dashboard (with metrics for analyzing ORM campaign progress)</li>
                    <li>A shared task management calendar for scheduling critical updates and keeping your reputation on track</li>
                    <li>A digital toolbox with a carefully curated selection of ORM and personal branding resources </li>
                    <li>Best practice guidelines for creating and optimizing profiles on social sites, discussion forums, content platforms and business directories</li>
                    <li>Templates for creating and optimizing online content (based on SEO best practices)</li>
                    <li>Cloud-based storage to organize all your ORM and branding assets online</li>
                    <li>An a-la-carte menu for ordering professional-developed content to supplement your ORM campaign, including blogs, images, infographics, social posts and more</li>
                  </ul>
                </div>

                <div className="col-12">
                  <p>Internet Reputation’s advanced DIY support tool offers around-the-clock access to comprehensive,
                    customizable ORM services, allowing you to update your presence, monitor your progress and make
                    changes to your personal branding campaign from any device and at any time. Whether you’re at the
                    office or on-the-go, Reputation Station puts control of your reputation in your hands when you need
                    it most.</p>

                  <p>As the newest addition to Internet Reputation’s extensive suite of award-winning ORM services,
                    the revolutionary dashboard provides users a do-it-yourself solution unlike anything available
                    on the market today. Reputation Station’s features provide unmatched flexibility and a unique
                    opportunity to:</p>
                </div>

                <div className="col-6">
                  <ul>
                    <li>Access and use key ORM services without giving up control of your online accounts</li>
                    <li>Organize and track progress of your personal branding efforts from one convenient location</li>
                    <li>Pause and resume your campaign at your discretion</li>
                    <li>Choose what you want to manage and which elements to leave to the pros</li>
                    <li>Add or remove professional services with the click of a button</li>
                    <li>Manage tasks, store files and update assets 24/7</li>
                    <li>Get guidance from a leading ORM team whenever needed</li>
                    <li>Use innovative, industry-leading reputation management technology not available anywhere else.</li>
                  </ul>
                </div>

                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/graphics/man-ipad-graphic.png'} className="responsive rounded" alt="Graphic of man standing next to a large iPad with charts displayed." />
                </div>

                <div className="col-12">
                  <p>Reputation Station offers an exciting and powerful new way to manage threats, improve your search
                    presence and build a personal brand at your convenience. By putting the latest in digital ORM
                    technology, techniques and support at your fingertips, the Internet Reputation DIY Dashboard allows
                    you to defend and define your online footprint on your terms—and create the digital narrative that
                    empowers your success.</p>
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