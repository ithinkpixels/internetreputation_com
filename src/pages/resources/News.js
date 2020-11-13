import React from 'react';
// import { Link } from 'react-router-dom';

import PageHeader from '../../components/headers/PageHeader';
import Contact from '../../components/forms/ContactSidebar';

import Pagination from '../../components/posts/Pagination';
import Posts from '../../components/posts/Posts';

class Page extends React.Component {
  componentDidMount() {
    console.log('Recources: Industry News Page');
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <section className="content sidebarEnabled">
          <PageHeader title="Industry News" background="handsonlaptop" />

          <div className="section whiteBkg">
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <Posts />
                  <Pagination />
                </div>

                <div className="col-4">
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Page;