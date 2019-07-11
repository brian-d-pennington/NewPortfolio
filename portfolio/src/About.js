import React from 'react';
import Modal from 'react-responsive-modal';

export class About extends React.Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div>
        <button className="ui button" id="about"
          style={{backgroundColor: '#ffffff'}}
          onClick={this.onOpenModal}>ABOUT</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="ui segment" style={{marginTop: '35px', fontFamily: 'sans-serif'}}>
            <p style={{fontSize: '17px'}}>Brian Pennington is a Junior Developer based in Milwaukee, WI.</p>
            <p>Experience in the following:</p>
            <ul>
              <li>React/JavaScript (used to build this page)</li>
              <li>C#/ASP.Net Core</li>
              <li>NodeJS</li>
              <li>SQL and NoSQL Databases</li>
              <li>RESTful APIs</li>
              <li>HTML/CSS</li>
            </ul>
            <p>For a resume or references, please contact srsrec at gmail dot com.</p>
          </div>
        </Modal>
      </div>
    );
  }
}

export default About;