import React from 'react';
import { Route } from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Default from './pages/Homepage';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import ServicesRepMan from './pages/services/Reputation-Management';
import SercicesPersonalBrand from './pages/services/Personal-Branding';
import SercicesPrivacy from './pages/services/Privacy-Monitoring';
import SercicesRepStation from './pages/services/Reputation-Station';
import ServicesInfoRemoval from './pages/services/Information-Removal';
import AutoSuggestServices from './pages/services/RepMan-Auto-Suggest';
import Resources from './pages/Resources';
import ResourcesFreeTools from './pages/resources/Free-Tools';
import ResourcesFaqs from './pages/resources/Faqs';
import ResourcesNews from './pages/resources/News';
import BlogPost from './pages/resources/BlogPost';
import ResourcesCaseStudies from './pages/resources/Case-Studies';
import ResourcesTestimonials from './pages/resources/Testimonials';
import OurTeam from './pages/Our-Team';
import Tos from './pages/Terms-of-Service';
import Pp from './pages/Privacy-Policy';
import Cookies from './pages/Cookies-Policy';

export default function App() {
  return (
    <>
      <Header />

        <Route exact path="/" component={Default} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/services" component={Services} />
          <Route exact path="/services/reputation-management" component={ServicesRepMan} />
          <Route exact path="/personal-branding" component={SercicesPersonalBrand} />
          <Route exact path="/services/privacy-monitoring" component={SercicesPrivacy} />
          <Route exact path="/reputation-station" component={SercicesRepStation} />
          <Route exact path="/remove-information-from-google" component={ServicesInfoRemoval} />
          <Route exact path="/services/reputation-management/auto-suggest-solutions" component={AutoSuggestServices} />
        <Route exact path="/resources" component={Resources} />
          <Route exact path="/diy-reputation-tools" component={ResourcesFreeTools} />
          <Route exact path="/faq" component={ResourcesFaqs} />
          <Route exact path="/industry-news" component={ResourcesNews} />
          <Route path="/blog" component={BlogPost} />
          <Route exact path="/case-studies" component={ResourcesCaseStudies} />
          <Route exact path="/case-studies/testimonials" component={ResourcesTestimonials} />
        <Route exact path="/meet-the-team" component={OurTeam} />
        <Route exact path="/terms-of-service" component={Tos} />
        <Route exact path="/privacy-policy" component={Pp} />
        <Route exact path="/cookies-policy" component={Cookies} />

      <Footer />
    </>
  );
}
