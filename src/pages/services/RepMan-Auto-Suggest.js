import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/headers/PageHeader';
import Contact from '../../components/forms/Contact';
import FormButton from '../../components/FormButton';

class Page extends React.Component {
  componentDidMount() {
    console.log('Services: Reputation Management Page');
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <section className="content">
          <PageHeader page="autosuggest" title="All About Google AutoComplete and How to Fix AutoSuggest Problems!" background="handsonlaptop" />

          <div className="section whiteBkg">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h2>What are Google AutoComplete Predictions?</h2>
                  <p>When searching for something on Google, you’ve probably noticed that a list of phrases related to whatever you’re searching for drops down underneath the search bar as you type. these phrases are known as <a href="https://support.google.com/websearch/answer/106230?hl=en" target="_blank" rel="noopener noreferrer"> autocomplete </a> predictions. these automatically generated search predictions that appear everytime you type in a phrase on google and cannot be turned off are a result of a project Google rolled out in 2008, what they call their autocomplete program.</p>
                  <FormButton text="Get Started" />
                </div>

                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/graphics/personal-auto-suggest-example.png'} className="responsive rounded" alt="Personal Google AutoComplete" />
                </div>
              </div>
            </div>
          </div>

          <div className="section greyBkg photoLeft">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/photos/how-does-google-determine.jpg'} className="responsive rounded" alt="Developer sitting in front of computer monitors with code." />
                </div>

                <div className="col-6">
                  <h2>How does Google Determine Autocomplete Predictions</h2>
                  <p>AutoComplete predictions are possible search terms that reflect what other people are searching
                    for and the content of web pages. hence the phrases that appear in the drop-down list have been
                    entered into google search by others or appear on the internet somewhere.</p>
                  <p>Google AutoComplete uses a unique algorithm to automatically generate search predictions based
                    on a number of objective factors. two important factors that google’s autocomplete algorithm takes
                    into account are range of information on the web and search volume – i.e. how often people have
                    searched for a word or phrase.</p>
                  <FormButton text="Get Started" />
                </div>
              </div>
            </div>
          </div>

          <div className="section whiteBkg">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h2>Google AutoComplete &amp; Online Reputation Management</h2>
                  <p>This tool is useful for individuals looking to expand on what they’re trying to find in the search
                    engines. Unfortunately, this tool can also cause serious problems for business owners and prominent
                    figures if the wrong Auto Suggest phrase is associated with their name or business name.</p>
                  <p>Many business owners find themselves with the AutoFill of “[Your Business Name Here] scam” – this
                    can cause several problems for companies.</p>
                  <FormButton text="Get Started" />
                </div>

                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/graphics/business-auto-suggest-example.png'} className="responsive rounded" alt="Business Google AutoComplete" />
                </div>
              </div>
            </div>
          </div>

          <div className="section greyBkg photoLeft">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/photos/can-you-change-autocomplete-terms.jpg'} className="responsive rounded" alt="Man and woman looking at laptop and ipad." />
                </div>

                <div className="col-6">
                  <h2>Can You Change Google Autocomplete Terms?</h2>
                  <p>We spent months in research and development to determine what causes these autosuggest problems,
                    and how to fix them quickly and effectively. After months of testing, we launched our
                    &ldquo;Autosuggest RX&rdquo; solution. With this solution, we can fix your autosuggest problems.
                    Autosuggest RX has proven to be extremely effective.</p>

                  <p>If you’ve ever searched something on google, you’ve likely seen the autosuggest feature. It
                    automatically provides a list of recommended search terms and phrases based on the letters that
                    you’ve typed. Most people believe that these terms appear because several searchers have manually
                    typed them into the search engine, but this is not always true.</p>

                  <p>The terms recommended by google autocomplete or autosuggest are usually listed in order of
                    popularity. This creates the potential for a cascade effect, which occurs when more people begin
                    clicking on the top suggested terms. For example, if the term &ldquo;why is the sky blue&rdquo;
                    appears in the autosuggest list after you’ve typed &ldquo;why,&rdquo; this doesn’t mean that most
                    people are typing the query &ldquo;why is the sky blue.&rdquo; The result could instead imply that
                    several people have clicked that suggestion out of curiosity, even if they originally intended to
                    type something else. As additional people are distracted from their original searches to click
                    these seemingly-random suggestions, the viral effect takes over. The terms that get clicked the
                    most will move to the top of the list.</p>
                  <FormButton text="Get Started" />
                </div>
              </div>
            </div>
          </div>

          <div className="section whiteBkg">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h2>Why Fix Google Autocomplete Problems</h2>
                  <p>This convenient search feature can create problems for companies and individuals when negative
                    statements about their reputations are listed amongst the suggestions. Imagine this scenario:
                    Two potential customers or new acquaintances begin typing your company name or birth name into
                    the Google search box. Before they finish typing, the following suggestion appears at the top
                    of their dropdown lists: &ldquo;[Your Business Name Here] is a scam.&rdquo; They get curious enough to click
                    it, they view the negative information and they make the AutoSuggest option more popular,
                    further its negative impact.</p>
                  <p>The average web searcher believes that these negative recommendations are what most people type,
                    and they get the impression that this search term is based on fact. The truth is that this
                    suggestion is usually at the top of the list because other searchers were curious enough to click
                    it, despite originally typing something else!</p>
                  <FormButton text="Get Started" />
                </div>

                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/photos/why-fix-google-autocomplete.jpg'} className="responsive rounded" alt="Man and woman looking at laptop." />
                </div>
              </div>
            </div>
          </div>

          <div className="section greyBkg">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>How To Change Google AutoComplete Suggestions</h2>
                  <p>At InternetReputation.com, we take a two-pronged approach to change what Google Autocomplete terms show up when a name
                    or business is googled. Our approach successfully alters what search terms show up under the search bar as a phrase is
                    being entered into Google Search.</p>

                  <h2>AutoSuggest RX</h2>
                  <p>Our AutoSuggest RX program eliminates negative or unwanted auto suggestions and it replaces them with positive keywords.
                    We work with our clients to pick 3 to 5 positive keywords that they would like see in AutoSuggest. Then, we use our
                    technology to implement these changes. Through a combination of social media buzz and organic search queries across
                    targeted geographic areas, we change the AutoSuggest list.</p>

                  <h2>AutoSuggest Reputaion Management</h2>
                  <p>We recommend using our AutoSuggest RX program in combination with our <Link to="/services">reputation management program </Link>
                    to improve the first pages for each targeted keyword. This will give you or your company control of your online presence.</p>
                  <p>Another way that the Google AutoSuggest feature is coaxed into recommending negative search terms is through defamatory
                    blog posts or viral forum threads. If someone writes something bad about your company or personal reputation, and he or
                    she then begins sharing this information through social networks, it can spread like wildfire. This causes a frenzy of
                    searchers to type the title or topic of the negative blog post into the Google search box, and it then causes the term
                    to reach the AutoSuggest list.</p>
                  <p>Nine times out of ten, AutoSuggest terms originate from a single piece of negative content that generates significant
                    interest. Eventually, this article is rewritten and rehashed by webmasters who are desperate to generate traffic from
                    any controversy that they can find. As more people begin to search for this article and its variations, the topic hits
                    the AutoSuggest list and the defacing begins.</p>

                  <FormButton text="Get Started" />
                </div>
              </div>
            </div>
          </div>

          <div className="section whiteBkg photoLeft">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <img src={process.env.PUBLIC_URL + '/global/images/photos/can-you-change-autocomplete-terms.jpg'} className="responsive rounded" alt="Man and woman looking at laptop and ipad." />
                </div>

                <div className="col-6">
                  <h2>We Can Help Get Rid of Negative Google Autocomplete Phrases</h2>
                  <p>Fortunately, the professionals at InternetReputation.com can change Google AutoSuggest terms
                    through a combination of content publishing and proprietary technology. We fight fire with fire
                    by taking advantage of the same concept that causes negative terms to appear in the Autocomplete
                    list.</p>
                  <p>We can also create, publish and promote positive content in order remove unwanted web pages
                    from the top of search results. For example, if you’re trying to remove the term &ldquo;[Your Business
                    Name Here] is a ripoff,&rdquo; we can ensure that even if people click that suggestion,
                    they will only find pages with positive information. In addition, after we repair your
                    internet reputation, we can launch a protective campaign to continually monitor AutoSuggest
                    terms and recently published content in order to maintain and protect your positive reputation online.</p>
                  <p>If you’re interested in learning more about how we can help you change Google AutoSuggest
                    terms, contact us at 888-221-1704 for a free consultation.</p>
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