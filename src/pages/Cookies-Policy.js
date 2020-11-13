import React from 'react';

import PageHeader from '../components/headers/PageHeader';
import Contact from '../components/forms/ContactSidebar';

class Page extends React.Component {
  componentDidMount() {
    console.log('Cookies Policy Page');
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <section className="content sidebarEnabled">
          <PageHeader title="Cookies Policy" background="handsonlaptop" />

          <div className="container">
            <div className="row">
              <div className="col-8 legal">

                <p>We use cookies on InternetReputation.com (the Site). By using the Site, you consent to the use of cookies.</p>

                <p>Our Cookies Policy explains what cookies are, how we use cookies, how third-parties we may partner with may use cookies on the Site, your choices regarding cookies and further information about cookies.</p>

                <p className="strong">What are cookies.</p>
                <p><strong>Personal Data.</strong> Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Site or a third-party to recognize you and make your next visit easier and the Site more useful to you.</p>

                <p>Cookies can be &ldquo;persistent&rdquo; or &ldquo;session&rdquo; cookies.</p>

                <p><strong>How InternetReputation.com uses cookies.</strong> When you use and access the Site, we may place a number of cookies files in your web browser.</p>

                <p>We use cookies for the following purposes: to enable certain functions of the Site, to provide analytics, to store your preferences, to enable advertisements delivery, including behavioral advertising.</p>

                <p>We use both session and persistent cookies on the Site and we use different types of cookies to run the Site:</p>

                <p><strong>Essential cookies.</strong> We may use essential cookies to authenticate users and prevent fraudulent use of user accounts.</p>

                <p><strong>Third-party cookies.</strong> In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Site, deliver advertisements on and through the Site, and so on.</p>

                <p><strong>What are your choices regarding cookies.</strong> If you’d like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.</p>

                <p>Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.</p>

                <p className="updatedDate">Last Updated: November 19, 2019</p>

              </div>

              <div className="col-4">
                <Contact />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Page;