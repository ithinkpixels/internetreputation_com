import React, { Component } from 'react'

export class PageHeader extends Component {
  state = {
    paragraph: '',
    button1: '',
    button2: '',
  }

  componentDidMount() {
    switch (this.props.page) {
      case 'repman':
        this.setState({
          paragraph: 'Your name is being searched for online. Control what people find about you through personal online reputation management.',
        });
        break;

      case 'privacy':
        this.setState({
          paragraph: 'With Privacy Monitoring we offer monitoring and removal services for businesses and individuals. As the landscape of the Internet is continuously changing, it is easier now than ever for anyone to access your private information online. In just a few clicks, anyone can locate your personal information and use it in ways to harm you. Our Privacy Monitoring gives you the ability to regain control of your information and protect yourself in an increasingly vulnerable world.',
        });
        break;

      case 'inforemoval':
        this.setState({
          paragraph: 'One undesirable search result on Google’s first page can hurt your online reputation. Don’t let Google define who you are online. Take control of your online reputation now.',
        });
        break;

      case 'team':
        this.setState({
          paragraph: 'Our Cutting Edge Technology & Services have earned us the prestigious recognition of Innovative Tech Firm of the Year.',
        });
        break;

      case 'diytools':
        this.setState({
          paragraph: 'Free ORM tools and resources for Individuals.',
        });
        break;

      case 'autosuggest':
        this.setState({
          paragraph: 'For a free, confidential consultation, call 888-221-1704.',
        });
        break;

      case 'faqs':
        this.setState({
          paragraph: 'You have the power to control your online reputation with trusted whitehat techniques from the professionals at Internet Reputation.',
        });
        break;

      case 'casestudies':
        this.setState({
          paragraph: 'Below are examples of our campaigns to show you the results we can achieve. Each case and situation will always vary for end results and timeframe. Most campaigns will require at least 4-6 Months to clean up Google results, while more difficult campaigns may take up to 12 months. In some cases due the complexity of the situation, it will require an ongoing effort. Please contact a representative who can inform you of specific details and pricing your particular situation.',
        });
        break;

      case 'testimonials':
        this.setState({
          paragraph: 'See what our clients think about us; our clients are our biggest supporters. Take a look for yourself at the testimonials below.',
        });
        break;

      case 'press':
        this.setState({
          paragraph: 'Read what people have to say about InternetReputation.com',
        });
        break;

      default: break;
    }
  }

  render() {

    return (
      <div id="pageTitle" className={ this.props.background }>
        <h1><span>{ this.props.title }</span></h1>
        <p dangerouslySetInnerHTML={{ __html: this.state.paragraph }} />
        <div className="buttons">
          { this.state.button1 } { this.state.button2 }
        </div>
      </div>
    )
  }
}

export default PageHeader