import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import axios from 'axios';

export class Pagination extends Component {
  state = {
    posts: 0,
    isLoaded: false
  }

  componentDidMount () {
    axios.get('https://app.marca-global.com/wp-json/wp/v2/posts/?tags=6&per_page=15').then(res => this.setState({
      posts: res.headers['x-wp-total'],
      isLoaded: true
    }))
    .catch(err => console.log(err))
  }

  render() {
    // console.log(this.state.posts);
    const numpages = Math.ceil(this.state.posts / 15);
    const cont = document.querySelector('.pagination');
    let i = 1;


    while ( i <= numpages ) {
      let btn = document.createElement('a');
      btn.setAttribute('href', '/industry-news?page='+i);
      btn.innerHTML = i;

      cont.appendChild(btn);
      i++;
    }

    return (
      <div className="pagination"></div>
    )
  }
}

export default Pagination