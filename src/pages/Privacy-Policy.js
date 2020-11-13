import React from 'react';

import PageHeader from '../components/headers/PageHeader';
import Contact from '../components/forms/ContactSidebar';

class Page extends React.Component {
  componentDidMount() {
    console.log('Terms of Service Page');
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <section className="content sidebarEnabled">
          <PageHeader title="Privacy Policy" background="handsonlaptop" />

          <div className="container">
            <div className="row">
              <div className="col-8 legal">

                <p>We respect the privacy of our users (&ldquo;user&rdquo; or &ldquo;you&rdquo;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website InternetReputation.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the &ldquo;Site&rdquo;). Please read this Privacy Policy carefully.  If you do not agree with the terms of this Privacy Policy, please do not access the site.</p>

                <p>We reserve the right to make changes to this Privacy Policy at any time and for any reason.  We will alert you about any changes by updating the &ldquo;Last Updated&rdquo; date of this Privacy Policy.  Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification.</p>

                <p>You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.</p>

                <p className="strong">What information do we collect?</p>
                <p><strong>Personal Data.</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us, when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Site.</p>

                <p><strong>Derivative Data.</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</p>

                <p><strong>Mobile Device Data.</strong> Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the Site from a mobile device</p>

                <p className="strong">What do we use your information for?</p>
                <p>Any of the information we collect from you may be used in one of the following ways:; To personalize your experience (your information helps us to better respond to your individual needs); To improve our website (we continually strive to improve our website offerings based on the information and feedback we receive from you); To improve customer service (your information helps us to more effectively respond to your customer service requests and support needs);</p>

                <p>Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.</p>

                <p><strong>To send periodic emails:</strong> The email address you provide may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc.</p>

                <p className="strong">How do we protect your information?</p>
                <p>We use administrative, technical, and physical security measures to help protect your personal information.  While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.  Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.</p>

                <p className="strong">Disclosure of your information</p>
                <p><strong>By Law or to Protect Rights.</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.  This includes exchanging information with other entities for fraud protection and credit risk reduction.</p>

                <p><strong>Third-Party Service Providers.</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, customer service, and marketing assistance.</p>

                <p><strong>Affiliates.</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.</p>

                <p><strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services or promotions.</p>

                <p><strong>Other Third Parties.</strong> We may share your information with advertisers and investors for the purpose of conducting general business analysis. We may also share your information with such third parties for marketing purposes, as permitted by law.</p>

                <p className="strong">Do we use cookies?</p>
                <p>Yes (Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information.)</p>

                <p>We use cookies to compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business.</p>

                <p className="strong">Do we disclose any information to outside parties?</p>
                <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others’ rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>

                <p className="strong">Third party links</p>
                <p>Occasionally, at our discretion, we may include or offer third party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>

                <p className="strong">California Online Privacy Protection Act Compliance</p>
                <p>California Civil Code Section 1798.83, also known as the &ldquo;Shine The Light&rdquo; law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>

                <p>If you are under 18 years of age, reside in California, and have a registered account with the Site [or our mobile application], you have the right to request removal of unwanted data that you publicly post on the Site [or our mobile application]. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California.  We will make sure the data is not publicly displayed on the Site [or our mobile application], but please be aware that the data may not be completely or comprehensively removed from our systems.</p>

                <p className="strong">Children’s Online Privacy Protection Act Compliance</p>
                <p>We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data, we have collected from children under age 13, please contact us using the contact information provided below.</p>

                <p>We are in compliance with COPPA (Children’s Online Privacy Protection Act), we do not collect any information from anyone under 13 years of age.</p>

                <p className="strong">Online Privacy Policy Only</p>
                <p>This online Privacy Policy applies only to information collected through our website and not to information collected offline.</p>

                <p className="strong">Contacting Us</p>
                <p>If there are any questions regarding this Privacy Policy, you may contact us using the information below.</p>

                <div className="contactInfo">
                    <p><a href="https://www.internetreputation.com">www.internetreputation.com</a></p>
                    <p><a href="mailto:customercare@internetreputation.com">customercare@internetreputation.com</a></p>
                    <p>
                        7100 East Belleview Ave. #310<br/>
                        Greenwood Village, CO 80111<br/>
                        (888) 475-3745
                    </p>
                </div>

                <p className="updatedDate">Last Updated: January 2, 2020</p>

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