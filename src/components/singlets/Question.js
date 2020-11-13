import React, { Component } from 'react'
import PropTypes from 'prop-types';
// import axios from 'axios';

export class Question extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired
  }

  render() {
    // console.dir(this.state);
    const { id, title, content } = this.props.question;

    function accordianToggle(id) {
      let conts = document.querySelectorAll('.accordian div');
      let tcont = document.getElementById(id);

      conts.forEach(item => {
        item.classList.remove('open');
        item.lastElementChild.setAttribute('style', '');
      });

      tcont.classList.add('open');
      tcont.lastElementChild.style.height = tcont.lastElementChild.scrollHeight + 'px';
    }

    return (
      <div id={ id } className="cont">
        <h3 className="top" onClick={((e) => accordianToggle(id))} dangerouslySetInnerHTML={{ __html: title.rendered }} />
        <div className="bottom" dangerouslySetInnerHTML={{ __html: content.rendered }} />
      </div>
    )
  }
}

export default Question