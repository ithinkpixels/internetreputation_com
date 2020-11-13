import React, { Component } from 'react';

export class FormButton extends Component  {
  topofForm() {
    let form = document.querySelector('#contactForm');
    console.log('scroll to form');
    const y = form.offsetTop - 120;

    window.scrollTo({
        top: y,
        behavior: 'smooth'
    })
  }

  render() {
    return (
      <>
        <button className="btn btn-blue" onClick={this.topofForm}>{ this.props.text }</button>
      </>
    );
  }
}

export default FormButton