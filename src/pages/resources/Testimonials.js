import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

import PageHeader from '../../components/headers/PageHeader';
import Contact from '../../components/forms/Contact';
import Testimonial from '../../components/singlets/Testimonial';
import Press from '../../components/singlets/Press';

class Page extends React.Component {
  state = {
    testimonials: [],
    press: [],
    testLoaded: false,
    pressLoaded: false
  }

  componentDidMount() {
    console.log('Recources: Testimonials & Press Page');
    window.scrollTo(0, 0);

    axios.get('https://app.marca-global.com/wp-json/wp/v2/testimonial/').then(res => this.setState({
      testimonials: res.data,
      testLoaded: true
    }))
    .catch(err => console.log(err))

    axios.get('https://app.marca-global.com/wp-json/wp/v2/press/?per_page=21').then(res => this.setState({
      press: res.data,
      pressLoaded: true
    }))
    .catch(err => console.log(err))
  }

  render() {
    const { testimonials, press } = this.state;
    console.dir(press);

    return (
      <>
        <section className="content">
          <PageHeader page="testimonials" title="Internet Reputation Testimonials" background="handsonlaptop" />

          <div className="section whiteBkg">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="centered">Check out what others say about Internet Reputaion.</h2>
                  <h3 className="centered lead">Our overall ratng is 4.8/5</h3>
                </div>

                {testimonials.map(testi =>
                  <Testimonial key={ testi.id } testimonial={ testi } />
                )}

                <div className="col-12">


                  <div className="container contactPill">
                    <div className="row">
                      <div className="col-2"></div>

                      <div className="col-4">
                        <h3>Have a question for us?</h3>
                        <p>Contact us by phone</p>
                      </div>
                      <div className="col-4">
                        <a href="tel://844-924-0240">844-924-0240</a>
                      </div>

                      <div className="col-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <PageHeader page="press" title="Press" background="handsonlaptop" />
          <div className="section whiteBkg">
            <div className="container">
              <div className="row press">

                {press.map(press =>
                  <Press key={ press.id } press={ press } />
                )}

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