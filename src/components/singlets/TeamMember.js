import React, { Component } from 'react';
import axios from 'axios';

export class TeamMember extends Component {
  state = {
    employeeId: this.props.id,
    imgLoaded: false
  }

  componentDidMount() {
    // console.dir(this.props);
    const { id } = this.props;
    const getEmployee = axios.get(`https://app.marca-global.com/wp-json/wp/v2/employee/${id}`);

    Promise.all([getEmployee]).then(res => {
      // console.dir(res);
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
        title: res[0].data.acf.titleposition,
        linkedin: res[0].data.acf.linkedin,
        imgAlt: res[0].data.title.rendered+ ' - ' +res[0].data.acf.titleposition,
        bio: res[0].data.content.rendered.replace(/<[^>]+>/g, '')
      });
    });
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="row" id={ this.state.slug }>
            <div className="col-3">
              <img src={ this.state.imgUrl } alt={ this.state.imgAlt } />
            </div>

            <div className="col-9 bio">
              <h4>
                { this.state.name }
                <a href={ this.state.linkedin } target="_blank" rel="noopener noreferrer">
                  <span className="hidden">Linked In Profile</span>
                  <i className="fa fa-linkedin-square"></i>
                </a>
              </h4>
              <h5>{ this.state.title }</h5>

              <p>{ this.state.bio }</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TeamMember