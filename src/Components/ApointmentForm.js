import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Form from "react-bootstrap/Form";

export class ApointmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  createAppointment = (e) => {
    e.preventDefault();
    const requestBody = {
      name: e.target.name.value,
      description: e.target.description.value,
      phone: e.target.phone.value,
    };
    console.log('phone'+e.target.phone.value);
    axios
      .post(`${this.props.url}/buyer`, requestBody)
      .then((responce) => {
        this.setState({
          buyer: responce.data,
        });
      })
      .catch((error) => console.log(error.message));
  };

  render() {
    return (
      <div>
        <Modal show={this.props.show}>
          <Modal.Header >
            <Modal.Title>Book Appointment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.createAppointment(e)}>
              <Form.Group
                className="mb-3"
                controlId="name"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" required />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="description"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Write Description" required />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="phone"
              >
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" name="phone" required />
              </Form.Group>
              <button variant="primary" type="submit" >
              ok
            </button>
            <button variant="secondary" onClick={this.props.closeForm}>
              Close
            </button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ApointmentForm;
