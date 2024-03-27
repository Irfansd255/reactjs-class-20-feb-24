import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

function AddData() {
  const navigate = useNavigate();

  const baseUrl = 'https://6603fb2b2393662c31d04b5f.mockapi.io/crud'
  
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <h1 className="text-center text-danger">ADD DATA</h1>
      <hr />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Col} md="6" className="mb-4">
          <Form.Label>Enter name</Form.Label>
          <Form.Control required type="text" placeholder="Enter name" />
          <Form.Control.Feedback type="invalid">
            please enter your name!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" className="mb-4">
          <Form.Label>Enter Mobile</Form.Label>
          <Form.Control required type="number" placeholder="Enter mobile" />
          <Form.Control.Feedback type="invalid">
            Please enter your mobile
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" className="mb-4">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control required type="email" placeholder="Enter email" />
          <Form.Control.Feedback type="invalid">
            Please enter your email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" className="mb-4">
          <Form.Label>Enter Address</Form.Label>
          <Form.Control required type="text" placeholder="Enter address" />
          <Form.Control.Feedback type="invalid">
            Please enter your adress
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" onClick={()=>navigate('/')}>Submit Data</Button>
      </Form>
    </>
  );
}

export default AddData;
