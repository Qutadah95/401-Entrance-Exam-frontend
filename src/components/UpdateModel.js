// import { render } from '@testing-library/react';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import FavFruit from './FavFruit';




class UpdateModel extends React.Component {
    
    render() {
      return (
        
           <Modal.Dialog  show="false" onHide={this.props.close}>
  <Modal.Header closeButton>
    <Modal.Title> Update Model</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Form onSubmit={this.UpdateModel}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control name="name" type="text" placeholder={this.props.fruit.name} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>image</Form.Label>
    <Form.Control name="image" type="text" placeholder={this.props.fruit.image} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>price</Form.Label>
    <Form.Control name="price" type="text" placeholder={this.props.fruit.price} />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </Modal.Body>

  <Modal.Footer>
  
  </Modal.Footer>
</Modal.Dialog>
        
      );
    }
  }
  

  
export default UpdateModel;