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
          <PageHeader title="Terms of Service" background="handsonlaptop" />

          <div className="container">
            <div className="row">
              <div className="col-8 legal">
                <p>The following terms and conditions, (&ldquo;Terms of Service&rdquo;) govern all use of InterntReputation.com website and all services (the &ldquo;Site &amp; Services&rdquo;) and content, features, activities and products available at or through the website, including, but not limited to, use of the site, consulting, online reputation management tools, do it yourself tool (&ldquo;DIY&rdquo; or &ldquo;Reputation Station&rdquo;), etc. (collectively, the &ldquo;Services&rdquo;).</p>

                <p>The Services and Site are owned and operated by InternetReputation.com (&ldquo;IR&rdquo;, &ldquo;us,&rdquo; &ldquo;we,&rdquo; &ldquo;our&rdquo;). These terms and conditions, which, together InternetReputation.com&rsquo;s Privacy Policy, Cookie Policy, and any other agreement with InternetReputation.com, which are incorporated by reference herein in their entirety.</p>

                <p>By using or accessing our Site or Services, you agree to be bound by these Terms of Service. If you do not agree to all these terms, then you should not access or use the Services or Site &amp; Services. You (the User) agree that by clicking &ldquo;Submit&rdquo;, &ldquo;Sign Up&rdquo; or similar, registering, accessing or using our services (described above), you are agreeing to enter into a legally binding contract with InternetReputation.com. If you do not agree to this agreement (&ldquo;Agreement&rdquo; or &ldquo;User Agreement&rdquo;), do not click &ldquo;Submit&rdquo; or any other form submission, and do not access or otherwise use any of our Services or Site.</p>

                <p><strong>DIY License Grant.</strong> Subject to your compliance with these Terms, if you purchase the IR DIY Tools or Reputation Station, you are hereby granted a non-exclusive, limited, non-transferable, revocable license to use the Services as we intend for them to be used.  As a paying Reputation Station or DIY  user, you are licensed to keep, for your own personal records, electronic or physical copies of documents purchased from IR. You may not copy the content of the IR DIY Tools or Reputation Station for use or sale outside of IR. Any rights not expressly granted in these Terms are reserved by IR.</p>

                <p>Resale or unauthorized distribution of materials downloaded from IR website &amp; Services is strictly prohibited. Use of these materials is for your personal or business use. Any resale or redistribution of our materials requires the express, written consent of IR.</p>

                <p><strong>Intellectual Property Rights.</strong> IR retains all right, title and interest in and to its products and services, including, without limitation, software, images, text, graphics, illustrations, logos, service marks, copyrights, photographs, videos, music, and all related intellectual property rights. Except as otherwise provided in this agreement, you may not, and may not permit others to:</p>

                    <ul>
                        <li>reproduce, modify, translate, enhance, decompile, disassemble, reverse engineer or create derivative works of any of our products and services;</li>
                        <li>sell, license, sublicense, rent, lease, distribute, copy, publicly display, publish, adapt or edit any of our products and services; or</li>
                        <li>circumvent or disable any security or technological features of our products and services.</li>
                    </ul>

                <p>The design, text, graphics and selection and arrangement thereof and services and the IR DIY Tools or Reputation Station, documents, guidance and all other content found on our Site &amp; Services (&ldquo;Service Content&rdquo;) are copyright © InternetReputation.com. All rights reserved.</p>

                <p><strong>Third Party Links.</strong> IR&rsquo;s website may contain links to third party resources and businesses on the Internet, called here &ldquo;links&rdquo; or &ldquo;Linked Sites.&rdquo; Those links are provided for your convenience to help you identify and locate other Internet resources that may be of interest to you. IR does not sponsor and is not legally associated with any third party &ldquo;linked sites.&rdquo; IR is not legally authorized to use any trade name, registered trademark, logo, official seal or copyrighted material that may appear in the link.</p>

                <p>IR does not control, endorse or monitor the contents of any Linked Site &amp; Services. That includes, without limitation, any further link contained in a Linked Site &amp; Services, and any changes or updates to a Linked Site &amp; Services. IR is not responsible for webcasting or for any other form of transmission received from any Linked Site &amp; Services. These Terms do not cover your interaction with Linked sites. You should carefully review the terms and conditions and privacy policies of any third-party sites.</p>

                <p>If you use any service provided on a Linked Site &amp; Services, (a) IR will not be responsible for any act or omission of the third party, including the third party&rsquo;s access to or use of your customer data and (b) IR does not warrant or support any service provided by the third party.</p>

                <p><strong>Limitation of Liability.</strong> In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Site &amp; Services, even if we have been advised of the possibility of such damages. notwithstanding anything to the contrary contained herein, our liability to you for any cause whatsoever and regardless of the form of the action, will at all times be limited to the amount paid, if any, by you to us during the six (6) month period prior to any cause of action arising. Certain state laws do not allow limitations on implied warranties or the exclusion or limitation of certain damages.</p>

                <p>The information, software, products, and services made available through IR may include inaccuracies or typographical errors. IR and/or its suppliers may at any time make improvements or changes to our Services. Information received via IR should not be relied upon for personal, medical, legal, or financial decisions. You should consult an appropriate professional for specific advice tailored to your situation. In short, your use of our Services is at your own risk.</p>

                <p>TO THE FULLEST EXTENT PERMITTED BY LAW, IR AND ITS AFFILIATES, SUPPLIERS AND DISTRIBUTORS MAKE NO WARRANTIES, EITHER EXPRESS OR IMPLIED, ABOUT THE SERVICES. THE SERVICES ARE PROVIDED &ldquo;AS IS.&rdquo; WE ALSO DISCLAIM ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. INFORMATION AND OPINIONS RECEIVED VIA THE WEBSITE &amp; SERVICES SHOULD NOT BE RELIED UPON FOR PERSONAL, MEDICAL, LEGAL OR FINANCIAL DECISIONS AND YOU SHOULD CONSULT AN APPROPRIATE PROFESSIONAL FOR SPECIFIC ADVICE TAILORED TO YOUR SITUATION.</p>

                <p>TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL IR, ITS AFFILIATES, SUPPLIERS OR DISTRIBUTORS BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE, EXEMPLARY OR CONSEQUENTIAL DAMAGES OR ANY LOSS OF USE, DATA, BUSINESS, OR PROFITS, REGARDLESS OF LEGAL THEORY, WHETHER OR NOT IR HAS BEEN WARNED OF THE POSSIBILITY OF SUCH DAMAGES, AND EVEN IF A REMEDY FAILS OF ITS ESSENTIAL PURPOSE.</p>

                <p>IR&rsquo;S AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICES SHALL IN NO EVENT EXCEED THE GREATER OF $500 OR THE AMOUNT PAID BY YOU TO IR FOR THE 12 MONTHS PRECEDING THE SERVICES IN QUESTION.</p>

                <p><strong>Indemnification.</strong>  You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys&rsquo; fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Site &amp; Services; (3) breach of these Terms; (4) any breach of your representations and warranties set forth in these Terms; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the Site &amp; Services with whom you connected via the Site &amp; Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.</p>

                <p>IR may, in the future, make changes to these provisions regarding dispute resolution and arbitration by providing notice in accordance with the section of these Terms entitled &ldquo;Modifications&rdquo; below.</p>

                <p><strong>Waiver, Severability and Assignment.</strong> IR&rsquo;s failure to enforce a provision is not a waiver of its right to do so later. If a provision is found unenforceable, the remaining provisions of the Terms will remain in full effect and an enforceable term will be substituted reflecting our intent as closely as possible. You may not assign any of your rights under these Terms, and any such attempt will be void. IR may assign its rights to any of its affiliates or subsidiaries, or to any successor in interest of any business associated with the Services.</p>

                <p><strong>Payment.</strong> If you purchase any of our Services you agree to pay all charges at the prices then in effect for your purchases, and you authorize us to charge your chosen payment provider for any such purchases. Failure to pay these charges will result in the termination of your Services. Also, you agree that: Fees may be charged on a per purchase basis or on a monthly or other recurring basis. We may store and continue billing your payment method (e.g. credit card) even after it has expired, to avoid interruptions in your Services and to use to pay other Services you may buy. If your purchase is subject to recurring charges, then you consent to us charging your payment method in advance on a recurring basis, without requiring your prior approval for each recurring charge. Recurring charges will continue until you notify us of your cancellation. Charges for renewal periods shall be calculated at the prevailing rates then offered by us. We reserve the right to suspend access to the Services in the event you fail to make a timely payment hereunder. We reserve the right to refuse any order placed through the Site &amp; Services. We also reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.</p>

                <p><strong>Term and Termination.</strong> These Terms shall remain in full force and effect while you use the Site and/or Services. Without limiting any other provision of these terms, we reserve the right to, in our sole discretion and without notice or liability, deny access to and use of the Site &amp; Services (including blocking certain IP addresses), to any person for any reason or for no reason, including without limitation for breach of any representation, warranty, or covenant contained in these terms or any applicable law of regulation. We may terminate your use or participation in the Site &amp; Services or delete your account and any content or information that you posted at any time, without warning, in our sole discretion.</p>

                <p>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</p>

                <p><strong>Disclaimer.</strong> IR and the IR DIY Tools (i.e. Reputation Station) provides a platform for information, draft templates, and self-service. Our templates and content are intended for private use and are to be used as suggestions to control your online reputation.</p>

                <p>The Site &amp; Services are provided on an as-is and as-available basis. You agree that your use of the Site &amp; Services and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the Site &amp; Services and your use thereof, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We make no warranties or representations about the accuracy or completeness of the site content or the content of any website linked to the Site and we will assume no liability or responsibility for any (1) errors, mistakes, or inaccuracies of content and materials, (2) personal injury or property damage, of any nature whatsoever, resulting from your access to and use of the Site &amp; Services, (3) any unauthorized access to or use of our secure servers and/or any and all personal information and/or financial information stored therein, (4) any interruption or cessation of transmission to or from the Site &amp; Services, (5) any bugs, viruses, trojan horses, or the like which may be transmitted to or through the Site &amp; Services by any third party, and/or (6) any errors or omissions in any content and materials or for any loss or damage of any kind incurred as a result of the use of any content posted, transmitted, or otherwise made available via the Site &amp; Services. We do not warrant, endorse, guarantee, or assume responsibility for any product or service advertised or offered by a third party through the Site &amp; Services, any hyperlinked website &amp; Services, or any website &amp; Services or mobile application featured in any banner or other advertising, and we will not be a party to or in any way be responsible for monitoring any transaction between you and any third-party providers of products or services. As with the purchase of a product or service through any medium or in any environment, you should use your best judgment and exercise caution where appropriate.</p>

                <p><strong>Electronic Communications, Transactions, and Signatures.</strong> Visiting the Site and using the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site &amp; Services, satisfy any legal requirement that such communication be in writing. You hereby agree to the use of electronic signatures, contracts, orders, and other records, and to electronic delivery of notices, policies, and records of transactions initiated or completed by us or via the Site &amp; Services. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</p>

                <p><strong>California Users and Residents.</strong> If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.</p>

                <p className="updatedDate">Last Updated: April 21, 2020</p>
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