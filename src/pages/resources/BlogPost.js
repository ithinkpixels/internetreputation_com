import React from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

import PageHeader from '../../components/headers/PageHeader';
import AuthorBio from '../../components/posts/AuthorBio';
// import Contact from '../../components/forms/ContactSidebar';

class Page extends React.Component {
  state = {
    pathname: window.location.pathname.split('/'),
    blogpost: {},
    title: '',
    content: '',
    author: {},
    avatar: {},
    category: {},
    date: '',
    // imgUrl: '',
    isLoaded: false
  }

  componentWillMount () {
    console.log('Blog Post');
    window.scrollTo(0, 0);

    this.setState({ slug: this.state.pathname[2] })

    // const getPost = axios.get(`https://app.marca-global.com/wp-json/wp/v2/posts?slug=${this.state.pathname[2]}`);
    // const getAuthor = axios.get(`https://app.marca-global.com/wp-json/wp/v2/users/${this.state.authorid}`);
    // const getCategory = axios.get(`https://app.marca-global.com/wp-json/wp/v2/categories/${this.state.catid}`);

    // Promise.all([getPost]).then(res => {
    //   console.log(res);
    //   this.setState({
    //     blogpost: res[0].data[0],
    //     title: res[0].data[0].title.rendered,
    //     content: res[0].data[0].content.rendered,
    //     authorid: res[0].data[0].author,
    //     catid: res[0].data[0].categories[0],
    //     isLoaded: true
    //   });

    //   Promise.all([getAuthor, getCategory]).then(res => {
    //     this.setState({
    //       author: res[0].data[0],
    //       category: res[1].data[0]
    //     });
    //   });
    // });

    fetch('https://app.marca-global.com/wp-json/wp/v2/posts?slug='+this.state.pathname[2])
      .then(res => res.json())
      .then(
        (result) => {
          console.dir(result);
          this.setState({
            isLoaded: true,
            blogpost: result[0],
            title: result[0].title.rendered,
            content: result[0].content.rendered
          });

          // console.dir(this.state.blogpost.date);
          let fDate = new Date(this.state.blogpost.date);
          // console.log(fDate.getFullYear());
          let options = { month: 'long'};
          let m = new Intl.DateTimeFormat('en-US', options).format(fDate);
          this.setState({ date: m+ ' ' +fDate.getDate()+ ', ' +fDate.getFullYear() })

          fetch('https://app.marca-global.com/wp-json/wp/v2/users/'+this.state.blogpost.author).then(res => res.json())
          .then(
            (result) => {
              // console.dir(result);
              this.setState({
                isLoaded: true,
                author: result,
                avatar: result.acf
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          );

          fetch('https://app.marca-global.com/wp-json/wp/v2/categories/'+this.state.blogpost.categories[0]).then(res => res.json())
          .then(
            (result) => {
              // console.dir(result);
              this.setState({
                isLoaded: true,
                category: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          );
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    // console.dir(this.state.author);
    const { title, content, date } = this.state;
    // const { date } = this.state.blogpost;
    const { name } = this.state.author;
    const catname = this.state.category.name;

    return (
      <>
        <section className="content sidebarEnabled">
          <PageHeader title="Industry News" background="handsonlaptop" />

          <div className="section whiteBkg postPage">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="meta">
                    <span className="author">
                      <i className="fa fa-user"></i>
                      { name }
                    </span>
                    <span className="pubDate">
                      <i className="fa fa-calendar"></i>
                      { date }
                    </span>
                    <span className="topic">
                      <i className="fa fa-folder-open-o"></i>
                      { catname }
                    </span>
                  </div>

                  <h2 dangerouslySetInnerHTML={{ __html: title }} />
                  <div dangerouslySetInnerHTML={{ __html: content }} />

                  <AuthorBio author={ this.state.author } acf={ this.state.avatar } />
                </div>

                {/* <div className="col-4">
                  <Contact />
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Page;