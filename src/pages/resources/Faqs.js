import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

import PageHeader from '../../components/headers/PageHeader';
import Contact from '../../components/forms/Contact';
import Question from '../../components/singlets/Question';

class Page extends React.Component {
  state = {
    questions: [],
    isLoaded: false
  }

  componentDidMount() {
    console.log('Recources: FAQs Page');
    window.scrollTo(0, 0);

    axios.get('https://app.marca-global.com/wp-json/wp/v2/faq/').then(res => this.setState({
      questions: res.data,
      isLoaded: true
    }))
    .catch(err => console.log(err))
  }

  render() {
    const { questions } = this.state;

    return (
      <>
        <section className="content">
          <PageHeader page="faqs" title="FAQ: Online Reputation Management Services for Individuals" background="handsonlaptop" />

          <div className="section whiteBkg">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <p>The rise of online reputation management for businesses has resulted in an overwhelming
                    number of companies claiming to be the best at corporate reputation management. But what
                    about online reputation management for individuals? It can be hard to decipher which
                    companies tailor their strategies to individuals rather than just extend their corporate
                    services to us on a blanket level.</p>
                  <p>Never before have we been able to access an abundance of information on any individual
                    at the click of a button. Never before has one’s reputation been deemed more important
                    than their character. Never before have our job prospects, personal privacy, and personal
                    brand been controlled by online information.</p>
                  <h3>If you do not take control of your own reputation, then someone else will</h3>
                  <p>Here we will answer some frequently asked questions to help you understand which services
                    you need, what results are actually obtainable, and what you should expect to receive from
                    a professional online reputation management firm that focuses on individuals.</p>
                </div>

                <div className="col-12 accordian">
                  {questions.map(ques =>
                    <Question key={ ques.id } question={ ques } />
                  )}
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