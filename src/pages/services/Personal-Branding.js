import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/headers/PageHeader';
import Contact from '../../components/forms/Contact';

class Page extends React.Component {
  componentDidMount() {
    console.log('Services: Personal Brand Page');
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <section className="content">
          <PageHeader title="Brand Yourself: Personal Branding for Individuals" background="handsonlaptop" />

          <div className="section whiteBkg">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>What is Personal Branding?</h2>
                  <p>Personal branding is the act of creating, promoting and protecting an image that represents
                    who you are and how you’d like to be seen. It is refusing to let someone else steer the
                    conversation surrounding your name, and instead taking control of how you look and what people
                    find when they come across your brand online.</p>

                  <p>Building a personal brand based on your unique knowledge, skills and experiences not only
                    helps to set you apart, but provides the online resume you need to achieve personal and
                    professional success.</p>


                  <h2>Why should you Brand Yourself?</h2>
                  <p>Proactive personal branding is often the difference between just &ldquo;having a brand&rdquo; and building
                    a reputation that gets results, not only in your personal life, but throughout your professional
                    career and beyond. </p>

                  <h3>An effective self-branding strategy is key to:</h3>
                </div>

                <div className="col-4">
                  <img src={process.env.PUBLIC_URL + '/global/images/graphics/boring-vs-wow-graphic.jpg'} className="responsive rounded" alt="Personal Branding Boring vs. WOW!" />
                </div>

                <div className="col-8">
                  <ul>
                    <li>Building a positive online presence.</li>
                    <li>Promoting your value to potential employers.</li>
                    <li>Maintaining productive professional relationships.</li>
                    <li>Strengthening trust with coworkers and friends.</li>
                    <li>Preventing crises and protecting your integrity.</li>
                  </ul>

                  <p>Take control of the online narrative. Brand yourself and start the process of developing a digital
                    resume that tells your story in your own way. A <a href="https://www.fastcompany.com/3039464/the-authentic-persons-guide-to-self-branding" rel="noopener noreferrer"> good self-branding </a>
                    approach highlights your best features and puts your best foot forward on the web, creating a
                    compelling digital footprint that inspires trust among hiring managers, coworkers, friends and
                    first dates.</p>

                  <p><strong><em>Bottom line: </em></strong>&nbsp; If you aren’t managing your online brand, you’re losing
                    opportunities. Daily. Your brand is your reputation, and failing to build a good one puts your image
                    and your future in the hands of an unpredictable digital environment.</p>
                </div>

                <div className="col-12">
                  <h3>Like it or not, you’re being Googled every day</h3>
                  <p>Business partners, managers, colleagues and relatives are all Googling YOU. And if you
                    aren’t taking steps towards curating your online presence, you’re giving ammunition to
                    those who may use what they find against you.</p>

                  <h2>How do you Brand Yourself?</h2>
                  <p>Creating a brand identity online is a multi-layered process involving a commitment of time, resources and expert knowledge of <a href="https://computer.howstuffworks.com/internet/basics/google1.htm" rel="noopener noreferrer"> how search engines populate results pages </a> (SERPs). Putting together an effective personal branding strategy requires knowing what makes up your online presence, how to manage problems and which methods are available to improve how you look on <a href="https://medium.com/swlh/how-to-rank-on-googles-first-page-43606e3feb0c" rel="noopener noreferrer"> Google’s first page</a>.</p>

                  <h3>Here are 5 steps to build your personal brand:</h3>
                </div>

                <div className="col-6">
                  <p><strong>Step 1:</strong>&nbsp; Perform an audit of your online footprint.</p>
                  <p><strong>Step 2:</strong>&nbsp; Remove threats hurting your reputation in search results.</p>
                  <p><strong>Step 3:</strong>&nbsp; Create and post assets highlighting your best qualities.</p>
                  <p><strong>Step 4:</strong>&nbsp; Strengthen your credibility through reputation maintenance.</p>
                  <p><strong>Step 5:</strong>&nbsp; Monitor the results and tweak your strategy based on successes.</p>

                  <p>Online reputation management (ORM) is a critical part of any personal branding strategy. ORM ensures all your bases are covered when it comes to managing threats and maximizing opportunity — and <Link to="/">building a personal brand you control</Link>.</p>

                  <p>These days, your career, business success and relationships hinge on how you look online. Creating positive, compelling content is crucial not only for building a stronger search presence, but for showcasing the qualities and qualifications needed to earn that next promotion, attract local customers and achieve the personal happiness you deserve.</p>

                  <h3>Here are <a href="https://influencermarketinghub.com/12-incredible-personal-branding-examples/" rel="noopener noreferrer"> <strong>a few notable personal branding examples</strong></a>:</h3>
                  <p><a href="https://en.wikipedia.org/wiki/Elon_Musk" rel="noopener noreferrer"> <strong>Elon Musk</strong> </a> — The trailblazing engineer, industrial designer, technology entrepreneur and philanthropist has built a personal brand instantly recognized in boardrooms and living rooms across the world.</p>
                  <p><a href="https://neilpatel.com/" rel="noopener noreferrer"> <strong>Neil Patel</strong> </a> — Patel is one of the top influencers on the web today. His name is synonymous with marketing and SEO thanks to his self-branding prowess.</p>
                  <p><a href="http://www.oprah.com/index.html" rel="noopener noreferrer"> <strong>Oprah Winfrey</strong> </a> — Oprah has devoted decades to cultivating and refining one of the most successful personal brands in history.</p>

                  <h3>A customized ORM campaign:</h3>
                  <ul>
                    <li>Identifies all mentions of your brand on the web, including on social platforms, news sites, review sites, images, videos and more.</li>
                    <li>Initiates a strategy for removing threats and negative links creating an unwanted association with your individual brand.</li>
                    <li>Uses the latest in SEO techniques and technology to push down negative results and give you ownership of your search presence.</li>
                    <li>Develops a clear, accurate, honest and positive brand reputation that employers and colleagues will trust.</li>
                    <li>Maintains a watchful eye that identifies new items when they pop up and pivots your strategy whenever needed.</li>
                  </ul>

                  <p>An effective personal branding strategy utilizes ORM to amplify your brand and expand your potential.</p>

                  <p>When your brand and reputation are working together, you’re not only making a great first impression; you’re creating a strong personal and <a href="https://www.livecareer.com/resources/resumes/basics/great-resumes-in-common" rel="noopener noreferrer"> professional resume </a> that enables success and opportunity for years to come.</p>
                </div>

                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/graphics/personal-branding-infographic.png'} className="responsive rounded" alt="Personal Branding: A step-by-step process" />
                </div>
              </div>
            </div>
          </div>

          <div className="section whiteBkg photoLeft">
            <div className="container">
              <div className="row">
                <div className="col-12 centered">
                  <h2>Need help with Personal Branding? <span>We've Got You!</span></h2>
                </div>

                <div className="col-12">
                  <p>At Internet Reputation, our goal is to build a <a href="https://influencermarketinghub.com/what-is-personal-branding/" rel="noopener noreferrer"> personal branding strategy </a> that creates opportunity and helps you shine online. We customize each approach to fit your unique situation and address your personal and professional needs.</p>

                  <p>After performing a complete audit of your online presence, we take time to understand your brand and your goals, asking questions like:</p>

                  <ul>
                    <li>What are you most proud of? </li>
                    <li>Which items are posing the greatest threat to your brand?</li>
                    <li>What do you want to accomplish?</li>
                    <li>What sets you apart from others in your field?</li>
                    <li>What qualities do you want to share and promote online?</li>
                  </ul>

                  <p>Once we know your objectives, our SEO and <Link to="/about">personal branding consultants</Link> go to work on your strategy, using the latest in search engine optimization tools and techniques to help you brand yourself and get the job, promotion, raise or partnership you’ve always wanted.</p>
                </div>

                <div className="col-12 centered">
                  <h3>Speak to a personal branding consultant today by calling <a href="tel:8007589012"> <strong>800-758-9012</strong></a>.</h3>
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