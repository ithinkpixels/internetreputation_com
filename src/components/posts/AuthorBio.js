import React, { Component } from 'react'
import PropTypes from 'prop-types';
// import axios from 'axios';

export class AuthorBio extends Component {
  static propTypes = {
    author: PropTypes.object.isRequired,
    acf: PropTypes.object.isRequired
  }

  render() {
    // console.dir(this.props);
    const { name, description } = this.props.author;
    const { author_avatar } = this.props.acf;
    // console.dir(author_avatar);

    return (
      <div className="authorBio">
        <div className="avatar">
          <img src={ author_avatar } alt={ name } />
        </div>
        <div className="bio">
          <h3>{ name }</h3>
          <p>{ description }</p>
        </div>
      </div>
    )
  }
}

export default AuthorBio