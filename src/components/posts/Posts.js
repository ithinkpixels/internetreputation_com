import React, { Component } from 'react';
import axios from 'axios';
import PostLinks from './PostLink';

export class Posts extends Component {
  state = {
    posts: [],
    isLoaded: false
  }

  componentDidMount () {
    // axios.get('https://app.marca-global.com/wp-json/wp/v2/posts/?tags=6&per_page=1').then(res => this.setState({

    const parsed = window.location.search;
    const page = (window.location.search.indexOf('page') > -1) ? parsed : '?page=1';

    axios.get('https://app.marca-global.com/wp-json/wp/v2/posts/'+page+'&tags=6&per_page=15').then(res => this.setState({
      posts: res.data,
      isLoaded: true
    }))
    .catch(err => console.log(err))
  }

  render() {
    // console.log(this.state);
    const { posts } = this.state;

    return (
      <section className="posts">
        {posts.map(post =>
          <PostLinks key={ post.id } post={ post } />
        )}
      </section>
    )
  }
}

export default Posts;