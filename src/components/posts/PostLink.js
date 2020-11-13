import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';

export class PostLink extends Component {
  state = {
    imgUrl: '', imgAlt: '', authorName: '',
    imgLoaded: false
  }

  static propTypes = {
    post: PropTypes.object.isRequired
  }

  componentDidMount () {
    // console.dir(this.props.post);
    const { featured_media, author } = this.props.post;
    const getImageUrl = axios.get(`https://app.marca-global.com/wp-json/wp/v2/media/${featured_media}`);
    const getAuthor = axios.get(`https://app.marca-global.com/wp-json/wp/v2/users/${author}`);

    Promise.all([getImageUrl, getAuthor]).then(res => {
      // console.dir(res);
      this.setState({
        imgUrl: res[0].data.media_details.sizes.full.source_url,
        imgAlt: res[0].data.caption.rendered.replace(/<[^>]+>/g, ''),
        imgLoaded: true,
        authorName: res[1].data.name
      });

      // console.dir(this.props.post);
      let fDate = new Date(this.props.post.date);
      // console.log(fDate.getFullYear());
      let options = { month: 'long'};
      let m = new Intl.DateTimeFormat('en-US', options).format(fDate);
      this.setState({ date: m+ ' ' +fDate.getDate()+ ', ' +fDate.getFullYear() })
    });
  }

  render() {
    // console.dir(this.state);
    const { id, title, slug, excerpt } = this.props.post;
    const { imgUrl, imgAlt, date } = this.state;
    const { authorName } = this.state;
    const fullLink = '/blog/' + slug;
    const postId = 'post' + id;

    // if (imgLoaded === true) {
    //   let img = document.querySelector('#'+postId+' .blog-content img');
    //   img.setAttribute('src', imgUrl);
    //   img.setAttribute('alt', imgAlt);
    // };

    return (
      <div className="blog-item" id={ postId }>
        <h3>
          <a href={ fullLink } title={ title.rendered } dangerouslySetInnerHTML={{ __html: title.rendered }} />
        </h3>

        <div className="blog-meta">
          <span>
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            { date }
          </span>
          <span>
            <i className="fa fa-user" aria-hidden="true"></i>
            { authorName }
          </span>
        </div>

        <div className="blog-content">
          <span>
            <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
            {/* <p> { excerpt.rendered.replace(/<[^>]+>/g, '') } </p> */}
            <a href={ fullLink } title={ title.rendered } className="btn btn-blue"> Read More <i className="fa fa-caret-right" aria-hidden="true"></i></a>
          </span>
          <img src={ imgUrl } alt={ imgAlt } />
        </div>
      </div>
    )
  }
}

export default PostLink