import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg"  style={{height:"100%",background:"#43C6AC"}}>
        <Navbar.Brand>&copy; Salam Mustafa</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;