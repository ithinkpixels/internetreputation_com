import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/headers/PageHeader';
import Contact from '../../components/forms/Contact';

class Page extends React.Component {
  componentDidMount() {
    console.log('Recources: Free Tools Page');
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <section className="content">
          <PageHeader page="diytools" title="DIY Online Reputation Management" background="handsonlaptop" />

          <div className="section whiteBkg">
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <p>New to the world of online reputation management? The processes can seem daunting!
                    With so many companies promising to fix your online reputation, it's hard to know
                    which services you actually need and who to turn to for help. The best place to start
                    is to get an idea of your current online presence, then decide whether you can handle
                    online reputation management by yourself.</p>

                  <p>Here are the top 6 free tools for individuals to analyze their current personal online
                    reputation and start taking steps to control their online presence. If you find your
                    online reputation situation is too complex to handle on your own, we're here to help.</p>
                </div>

                <div className="col-4">
                  <blockquote>
                    <p>&ldquo;There is no advertisement as powerful as a positive reputation traveling fast.&rdquo;
                      <span>&mdash; Brian Koslow</span></p>
                  </blockquote>
                </div>

                <div className="col-12">
                  <h3>1. Reputation Station</h3>
                  <p><strong>DIY Reputation Management Has Never Been Easier!</strong></p>
                  <p>Reputation Station features a variety of customizable, easy-to-use tools and resources for managing and protecting your personal brand online.</p>
                  <p>Complete with full suite of online profile management and content management options, including an a la carte menu of optimized ORM and content creation services, Reputation Station ensures you can control and track your digital image from anywhere and at any time.</p>
                  <p>The Reputation Station Dashboard from Internet Reputation&trade; allows you to schedule, organize, manage and change critical reputation tasks from one central location—and access professional support, services and resources when and where it works best for you.</p>
                  <p><Link to="/reputation-station-signup/">Create your free Reputation Station account today to get started!</Link></p>
                </div>

                <div className="col-12">
                  <h3>2. Google</h3>
                  <img src={process.env.PUBLIC_URL + '/global/images/photos/womanphonesearch-300x143.jpg'} className="pull-right rounded" alt="Woman on phone doing a Google Search" />
                  <p>If you want to know your reputation online, start by Googleing yourself! Start with your name and then dive into related searches, queries that appear in Google AutoSuggest, and what shows up under, “People Also Ask”. What pops up will give you an idea of the most visible types of content relating to your personal brand.</p>
                  <p>You can get an idea of the content type, the accuracy and the sentiment. You can also see who is controlling the conversation (it might not be you) and decide if you have the time and skills necessary to regain control and positively build your personal brand. </p>
                </div>

                <div className="col-12">
                  <h3>3. My Life</h3>
                  <p>One of the largest data aggregation sites, <a href="https://www.mylife.com/" target="_blank" rel="noopener noreferrer"> MyLife </a> compiles a “reputation profile” on each individual and strive to include everything that could affect someone's reputation. That could consist of Criminal and Civil Court Records, lawsuits, liens, judgements, income, property records, social media, work &amp; education history, photos, personal reviews, and complete contact details.</p>

                  <p>While this might seem terrifying (as it should, “remove mylife” is searched over 3,000 times per month), it is a great place to see what information others are getting when they use this and other data aggregation sites to learn about you.</p>

                  <ul>
                    <li><a href="https://www.usatoday.com/story/tech/2019/12/09/how-remove-your-info-sites-like-mylife-spokeo-and-whitepages/2619131001/" target="_blank" rel="noopener noreferrer"> Learn how to remove your info from people search engines </a></li>
                    <li><a href="https://www.reputationsciences.com/what-you-need-to-know-about-mylife/" target="_blank" rel="noopener noreferrer"> Learn more about MyLife </a></li>
                  </ul>
                </div>

                <div className="col-12">
                  <h3>4. Google Alerts</h3>
                  <p>For DIY reputation management strategists, <a href="https://www.google.com/alerts" target="_blank" rel="noopener noreferrer"> Google Alerts </a> offers a simple and relatively easy way to monitor mentions of your brand online. Free to anyone with a Google account, the Google Alerts tool allows you to set up an alert that emails you anytime it recognizes a new mention of your business, ensuring you can react and respond quickly to news surrounding your brand.</p>

                  <p>Though the Alerts tool does have a number of limitations, it is fairly intuitive—and may be a good place to start if you're taking on the challenge of online reputation management services on your own.</p>
                </div>

                <div className="col-12">
                  <h3>5. Personal Brand Health Checker</h3>
                  <p>Yes, &ldquo;Social Media Influencer&rdquo; is an actual job title these days. Whether or not you are trying to be the next <a href="https://www.instagram.com/loganpaul/" target="_blank" rel="noopener noreferrer"> Logan Paul </a> or <a href="https://www.instagram.com/jennamarbles/" target="_blank" rel="noopener noreferrer"> Jenna Marbles </a>, social media profile management must be a part of your personal branding strategy. Influencer Marketing Hub provides a plethora of tools and resources including their  <a href="https://influencermarketinghub.com/what-is-personal-branding/" target="_blank" rel="noopener noreferrer"> Personal Brand Health Checker </a> that allows you to monitor your brand' sentiment by pulling content relating to it from across the web based off your Instagram handle.</p>
                </div>

                <div className="col-12">
                  <h3>5. Social Mention</h3>
                  <p>Don't let the name confuse you. This is not a tool based solely on social media. <a href="http://socialmention.com/" target="_blank" rel="noopener noreferrer"> Social Mention</a>'s real time analysis tool helps you keep track of your brand mentions across multiple platforms including blog posts, news articles, images and videos to name a few.</p>

                  <p>It also provides metrics on brand strength, reach, passion and sentiment, as well as providing top keywords relating to your brand, top users talking about your brand and top #tags associated with your brand.</p>
                </div>

                <div className="col-12">
                  <h3>Where Do I Go From Here? </h3>
                  <p>Now that you have dipped your toe into the waters of personal branding, it is up to you to decide what next steps to take. At Internet Reputation, we have a <a href="https://www.internetreputation.com/services/" target="_blank" rel="noopener noreferrer"> variety of different services </a> ranging from fast information removal services and to complete Online Reputation Management solutions and our cutting edge Privacy Guard technology. We enable you with everything you need to achieve a safe, secure and beneficial online space well into the future.</p>
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