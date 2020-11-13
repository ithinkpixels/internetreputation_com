import React from 'react';
// import { Link } from 'react-router-dom';

import PageHeader from '../components/headers/PageHeader';
import Contact from '../components/forms/Contact';
import TeamMember from '../components/singlets/TeamMember';
// import BoardMember from '../components/singlets/BoardMember';

class Page extends React.Component {
  componentDidMount() {
    console.log('Team Page');
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <section className="content">
          <PageHeader page="team" title="Our Internet Reputation Team" background="handsonlaptop" />

          <div className="container">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <p className="centered">We are an experienced, award winning Internet Reputation management firm that specializes in online crisis management situations. We provide real, proven results fast. Internet Reputation requires cutting edge technology in conjunction with sophisticated SEM professionals. Our technicians have spent years and thousands of hours on R&amp;D, studying SERPs, analytics, keyword and URL targeting and know how to swiftly remove negative listings and prevent future online attacks.</p>
              </div>
              <div className="col-1"></div>
            </div>
          </div>

          <section className="marcaTeam">
            <TeamMember id="28" name="Colleen Birdnow Brown" />
            <TeamMember id="29" name="Blair Brown" />
            <TeamMember id="34" name="Melissa Talcott" />
            <TeamMember id="36" name="Ken Klispie" />
            <TeamMember id="38" name="Gardenia Willoughby" />
            <TeamMember id="40" name="Rebecca Moore-Leach" />
          </section>

          {/* <section className="advisoryBoard">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="centered">Advisory Board</h2>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <BoardMember id="44" name="Michael Robinson" />
                <BoardMember id="45" name="Laura Lee" />
                <BoardMember id="46" name="Mike May" />
                <BoardMember id="47" name="Chelsea Grayson" />
                <BoardMember id="48" name="Brian McHale" />
              </div>
            </div>
          </section> */}

        </section>

        <Contact />
      </>
    );
  }
}

export default Page;