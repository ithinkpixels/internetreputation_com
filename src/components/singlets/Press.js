import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';

export class Question extends Component {
  state = {
    imgUrl: '', imgAlt: '',
    imgLoaded: false
  }

  static propTypes = {
    press: PropTypes.object.isRequired
  }

  componentDidMount () {
    // console.dir(this.props.post);
    const { featured_media } = this.props.press;
    const getImageUrl = axios.get(`https://app.marca-global.com/wp-json/wp/v2/media/${featured_media}`);

    Promise.all([getImageUrl]).then(res => {
      // console.dir(res);
      this.setState({
        imgUrl: res[0].data.media_details.sizes.full.source_url,
        imgAlt: res[0].data.caption.rendered.replace(/<[^>]+>/g, ''),
        imgLoaded: true,
      });
    });
  }

  render() {
    console.dir(this.props.press);
    const { imgUrl, imgAlt } = this.state;
    const { id, title, content, acf } = this.props.press;
    const vl = (acf.press_link) ? 'btn btn-blue' : 'hidden';

    return (
      <div id={ id } className="col-4">
        <div className="release">
          <img className="" src={ imgUrl } alt={ imgAlt } />
          <h3 className="line centered" dangerouslySetInnerHTML={{ __html: title.rendered }} />
          <span dangerouslySetInnerHTML={{ __html: content.rendered }} />
          <a className={ vl } href={ acf.press_link } target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      </div>
    )
  }
}

export default Question