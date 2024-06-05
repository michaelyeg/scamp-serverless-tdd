import fb_logo from "./assets/images/icons8-facebook-48.png";
import gl_logo from "./assets/images/icons8-google-plus-48.png";
import li_logo from "./assets/images/icons8-linkedin-circled-48.png";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

const App = () => {
  const [message, setMessage] = useState("");

  async function handleLogin(event) {
    event.preventDefault();
    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: "eve.holt@reqres.in",
    //     password: "cityslicka",
    //   }),
    // };

    // const response = await fetch("https://reqres.in/api/login", options);
    // const resData = await response.json();

    axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then((response) => {
        if (response.status === 200) setMessage("Login successful!");
      });

    // if (resData?.token) setMessage("Login successful!");
    // console.log(resData);
    // return response.json();
  }

  return (
    <div className="App row">
      <div className="left col-8">
        <h1>Log into you account</h1>
        <span>Login using social accounts</span>
        <div className="social-icons">
          <Button variant="outline-light">
            <img src={fb_logo}></img>
          </Button>
          <Button variant="outline-light">
            <img src={gl_logo}></img>
          </Button>
          <Button variant="outline-light">
            <img src={li_logo}></img>
          </Button>
        </div>
        <div className="login-form">
          <Form className="col-12">
            <Form.Group className="mb-1" controlId="LoginForm.Email">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="LoginForm.Password">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button
              type="submit"
              onClick={handleLogin}
              style={{ width: "100%" }}
            >
              Submit
            </Button>
          </Form>
          {message && <Alert>{message}</Alert>}
        </div>
      </div>
      <div className="right col-4">
        <h2>New Here</h2>
        <p>Sign up and discover</p>
        <Button>Sign up</Button>
      </div>
    </div>
  );
};

export default App;
