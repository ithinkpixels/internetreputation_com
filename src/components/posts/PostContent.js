import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';

export class PostContent extends Component {
  state = {
    imgUrl: '', imgAlt: '', authorName: '',
    postdata: [],
    isLoaded: false
  }

  static propTypes = {
    post: PropTypes.object.isRequired
  }

  componentDidMount () {
    console.dir(this.props.post);
    const { featured_media, author } = this.props.post;
    const getImageUrl = axios.get(`https://app.marca-global.com/wp-json/wp/v2/media/${featured_media}`);
    const getAuthor = axios.get(`https://app.marca-global.com/wp-json/wp/v2/users/${author}`);

    Promise.all([getImageUrl, getAuthor]).then(res => {
      console.dir(res);
      this.setState({
        imgUrl: res[0].data.media_details.sizes.full.source_url,
        imgAlt: res[0].data.caption.rendered.replace(/<[^>]+>/g, ''),
        imgLoaded: true,
        authorName: res[1].data.name
      });
    });
  }

  render() {
    const { title, content } = this.props;
    // console.dir(this.state);

    return (
      <>
        <div className="meta">
          <span className="author">
            <i className="fa fa-user"></i>
          </span>
          <span className="pubDate">
            <i className="fa fa-calendar"></i>
          </span>
          <span className="topic">
            <i className="fa fa-folder-open-o"></i>
          </span>
        </div>

        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </>
    )
  }
}

export default PostContent