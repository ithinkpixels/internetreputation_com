import React from 'react';
// import { Link } from 'react-router-dom';

import PageHeader from '../../components/headers/PageHeader';
import Contact from '../../components/forms/Contact';
import FormButton from '../../components/FormButton';

class Page extends React.Component {
  componentDidMount() {
    console.log('Services: Information Removal Page');
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <section className="content">
          <PageHeader page="inforemoval" title="Remove Information From Google" background="handsonlaptop" />

          <div className="section whiteBkg photoLeft">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/photos/how-can-one-bad-result-hurt.jpg'} className="responsive rounded" alt="Lady looking upset behind computer" />
                </div>

                <div className="col-6">
                  <h2>How can one bad result hurt my online reputation?</h2>
                  <p>You may have spent years or decades earning and maintaining the respect and
                    admiration of your colleagues, peers, friends, and family.</p>
                  <p>One undesirable Google search result can hurt the respect and trust you have
                    built for years and affect your professional and personal reputation.</p>
                  <p>This matters even more now, when the majority of the world relies on what they
                    find on the internet – about restaurants they visit, companies and people they
                    choose to work with, even their neighbors, families and friends.</p>
                  <p>If you want your Google search results to look better, we can help you! It’s
                    important for you to act sooner before the search result has stuck to the first
                    page of search results for a longer period of time. Our specialists will be
                    there to partner with you throughout your services.</p>
                  <p>First, we determine whether any undesirable search results can be taken down –
                    legally or by personal request. Second, we analyze what it would take to push
                    your undesirable search result off of the first page of Google. Then, we provide
                    you with a customized strategy to achieve your goals. We continuously analyze
                    and adapt our strategy to the changes in Google’s algorithms over the course of
                    the work.</p>
                  <FormButton text="Get Started" />
                </div>
              </div>
            </div>
          </div>

          <div className="section greyBkg">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h2>How to remove information from Google Search results</h2>
                  <p>Search Engines like Google rely on algorithms to deliver the most relevant
                    information to users. These algorithms are constantly changing, and we ensure
                    our services and strategies continue to adapt to those changes.</p>
                  <p>What can you do if you want to remove information from Google search pages?
                    The right answer is, <em><strong> it depends</strong></em>. And anyone who guarantees they can remove
                    search results is not giving you all the information. We guarantee we will
                    provide you with customized, transparent, agile, ethical and reliable solutions
                    and support. Call us now to get started.</p>
                  <FormButton text="Get Started" />
                </div>

                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/photos/remove-negative-google-search-results-individual.jpg'} className="responsive rounded" alt="Man looking at Google on laptop" />
                </div>
              </div>
            </div>
          </div>

          <div className="section whiteBkg photoLeft">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/photos/we-are-experts-in-google-removal.jpg'} className="responsive rounded" alt="Reputation Tachomoter" />
                </div>

                <div className="col-6">
                  <h2>We are experts in Google Information Removal</h2>
                  <p>Do you want to remove information from Google and the internet? Do you want
                    a team that will be your partner and commit to providing you with personalized
                    support and strategy? As proven experts in
                    <a href="/blog/everything-about-removing-articles-online/"> online information removal </a>
                    and suppression, we understand the complexities involved with removing information
                    from the internet and what it takes to remove information from thousands of sites.</p>
                  <p>We are industry leaders in utilizing unique, customized strategies and solutions
                    to remove information from Google’s search results. Take the risk out of your
                    reputation. Call us now to get started and speak to our consultative team of experts. </p>
                  <FormButton text="Get Started" />
                </div>
              </div>
            </div>
          </div>

          <div className="section whiteBkg">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>Remove Negative Google Search Results Today</h2>
                  <p>The longer negative content exists online, the more potential it has to ruin your
                    online reputation. Regardless of whether that negative item is an image, a blog, a
                    comment, an article, a review or link, it’s important to consult a professional
                    about how to remove information from Google as soon as possible.</p>
                  <p>To remove a link from Google, contact the company with the experience, expertise,
                    and resources needed to get it done quickly and discreetly. <strong> Contact us today </strong>
                    to find out more about information removal from Google today.</p>
                  <p>The longer content exists online, the more potential it has to stick around and affect
                    your online reputation. Whether that content is an image, blog, comment, article,
                    review or link, it’s important to talk to an online reputation expert who will provide
                    you with transparent and customized advice.</p>
                  <p>If you want to remove information from the internet, contact the company that guarantees
                    you customized solutions, personal support and a dedicated team to achieve your goals.
                    <strong> Contact us today </strong> to speak with one of our specialists.</p>
                  <FormButton text="Get Started" />
                </div>

                {/* <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/photos/remove-negative-google-search-results-individual.jpg'} className="responsive rounded" alt="Man looking at Google on laptop" />
                </div> */}
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