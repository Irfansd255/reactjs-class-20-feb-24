import Axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddData() {
  const navigate = useNavigate();

  const baseUrl = "https://6603fb2b2393662c31d04b5f.mockapi.io/crud";

  const [data, setData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
  });

  const { name, mobile, email, address } = data;

  const handleChange = (e) => {
    // let name = e.target.name

    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);

    Axios.post(baseUrl, {
      name,
      mobile,
      email,
      address,
    }).then((res) => {
      setData({
        name: "",
        mobile: "",
        email: "",
        address: "",
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);

      console.log(res);
      toast.success("Data Successfully Added");
      // alert("Data Successfully Added");
    });
  };

  return (
    <>
      <h1 className="text-center text-danger">ADD DATA</h1>
      <hr />
      <ToastContainer />
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Col} md="6" className="mb-4">
          <Form.Label>Enter name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={handleChange}
            name="name"
          />
        </Form.Group>

        <Form.Group as={Col} md="6" className="mb-4">
          <Form.Label>Enter Mobile</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Enter mobile"
            value={mobile}
            onChange={handleChange}
            name="mobile"
          />
        </Form.Group>

        <Form.Group as={Col} md="6" className="mb-4">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
            name="email"
          />
        </Form.Group>

        <Form.Group as={Col} md="6" className="mb-4">
          <Form.Label>Enter Address</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={handleChange}
            name="address"
          />
        </Form.Group>

        <Button type="submit">Submit Data</Button>
      </Form>
    </>
  );
}

export default AddData;
