import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';

export class Question extends Component {
  state = {
    imgUrl: '', imgAlt: '',
    imgLoaded: false
  }

  static propTypes = {
    testimonial: PropTypes.object.isRequired
  }

  componentDidMount () {
    // console.dir(this.props.post);
    const { featured_media } = this.props.testimonial;
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
    // console.dir(this.state);
    const { imgUrl, imgAlt } = this.state;
    const { id, title, content } = this.props.testimonial;

    return (
      <div id={ id } className="col-6">
        <div className="testimonial">
          <div className="pic">
            <img className="" src={ imgUrl } alt={ imgAlt } />
          </div>

          <p dangerouslySetInnerHTML={{ __html: content.rendered }} />
          <h3 className="line centered" dangerouslySetInnerHTML={{ __html: title.rendered }} />
        </div>
      </div>
    )
  }
}

export default Question