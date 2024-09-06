import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const App = () => {
  // State to hold form values and errors
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState("");

  // Handle form submission
  const handleSignUp = (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Form is valid, submit form (e.g., send data to backend)
      setStatus("Form submitted successfully!");
    } else {
      // Form has errors
      setFormErrors(errors);
    }
  };

  // Validate form fields
  const validateForm = () => {
    const errors = {};
    if (!firstName) errors.firstName = "First Name is required";
    if (!lastName) errors.lastName = "Last Name is required";
    if (!number) errors.number = "WhatsApp Number is required";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    if (password.length < 8 || password.length > 20) {
      errors.password = "Password must be 8-20 characters long";
    }
    if (password !== retypePassword) {
      errors.retypePassword = "Passwords do not match";
    }
    return errors;
  };

  return (
    <div className="bg-black pb-5">
      <Container className="bg-black">
        <Container
          className="border mt-5 justify-content-center"
          style={{ height: "100%" }}
        >
          <Col className="h1 text-center text-light col-12">SIGN UP</Col>
        </Container>
        <Row className="justify-content-center">
          <Col className="h5 text-center text-secondary col-12">
            <small>Form Validation </small>
          </Col>
        </Row>

        <Form onSubmit={handleSignUp}>
          <Row className="justify-content-center">
            <Col className="h5 mt-5 text-light col-8 col-lg-4">
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  isInvalid={!!formErrors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col className="h5 mt-1 text-light col-8 col-lg-4">
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  isInvalid={!!formErrors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col className="h5 mt-1 text-light col-8 col-lg-4">
              <Form.Group className="mb-3">
                <Form.Label>WhatsApp Number</Form.Label>
                <Form.Control
                  type="text"
                  id="number"
                  placeholder="WhatsApp Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  isInvalid={!!formErrors.number}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.number}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col className="h5 mt-1 text-light col-8 col-lg-4">
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={!!formErrors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col className="h5 mt-1 text-light col-8 col-lg-4">
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isInvalid={!!formErrors.password}
                  aria-describedby="passwordHelpBlock"
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col className="h5 mt-1 text-light col-8 col-lg-4">
              <Form.Group className="mb-3">
                <Form.Label>Retype Password</Form.Label>
                <Form.Control
                  type="password"
                  id="retypePassword"
                  placeholder="Retype Password"
                  value={retypePassword}
                  onChange={(e) => setRetypePassword(e.target.value)}
                  isInvalid={!!formErrors.retypePassword}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.retypePassword}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col className="h5 mt-1 text-light col-12 col-lg-4">
              <Container className="h5 text-center text-secondary">
                <small>
                  Your password must be 8-20 characters long, contain letters
                  and numbers, and must not contain spaces, special characters,
                  or emoji.
                </small>
              </Container>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col className="h5 mt-5 text-center text-light col-8 col-lg-4">
              <Button variant="danger" type="submit" size="lg">
                <span className="h5">SIGN UP</span>
              </Button>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col className="h5 text-center text-dark col-12">
              <small>{status || "Click to create user"}</small>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default App;
