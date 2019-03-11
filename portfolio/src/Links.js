import React from 'react';
import Modal from 'react-responsive-modal';

export class Links extends React.Component {
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
        <button className="ui button" 
            style={{backgroundColor: '#ffffff'}}
            onClick={this.onOpenModal}>LINKS</button>
        <Modal open={open} onClose={this.onCloseModal} center>
        <div className="ui segment" style={{marginTop: '35px', fontFamily: 'sans-serif'}}>
          <p>(more coming soon)</p>
          <a href="https://github.com/brian-d-pennington">Github</a>
          <br />
          <a href="https://www.linkedin.com/in/brian-pennington-201319177/">LinkedIn</a>
        </div>
        </Modal>
      </div>
    );
  }
}

export default Links;