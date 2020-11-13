import React, { Component } from 'react';
import axios from 'axios';

export class BoardMember extends Component {
  state = {
    employeeId: this.props.id,
    imgLoaded: false
  }

  componentDidMount() {
    // console.dir(this.props);
    const { id } = this.props;
    const getEmployee = axios.get(`https://app.marca-global.com/wp-json/wp/v2/employee/${id}`);

    Promise.all([getEmployee]).then(res => {
      console.dir(res);
      const featured_media = res[0].data.featured_media;
      const getImageUrl = axios.get(`https://app.marca-global.com/wp-json/wp/v2/media/${featured_media}`);

      Promise.all([getImageUrl]).then(res => {
        // console.dir(res);
        this.setState({
          imgUrl: res[0].data.media_details.sizes.full.source_url,
          imgLoaded: true
        })
      });

      this.setState({
        slug: res[0].data.slug,
        name: res[0].data.title.rendered,
        location: res[0].data.acf.location,
        imgAlt: res[0].data.title.rendered + ' - ' + res[0].data.acf.location,
        bio: res[0].data.content.rendered.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&')
      });
    });
  }

  render() {
    return (
      <div className="col-4 boardMember" tabIndex="0">
        <div className="cardFront">
          <img src={ this.state.imgUrl } alt="{ this.state.imgAlt }" />
          <h4>{ this.state.name }</h4>
          <p>{ this.state.location }</p>
        </div>

        <div className="cardBack">
          <h4>{ this.state.name }</h4>
          <p>{ this.state.bio }</p>
        </div>
      </div>
    )
  }
}

export default BoardMember