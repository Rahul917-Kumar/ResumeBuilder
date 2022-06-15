import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { UserContext } from "../context/GlobalState";
import {Link , useNavigate } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignUp() {
    const navigate = useNavigate()
    const { createUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp
   = async(e)=>{
      e.preventDefault( )
      try {
          await createUser(email , password).then(()=>{
              toast.success("User Registered Successfully", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              /* */
              
          }).then(()=>{
            setTimeout(()=>{
               navigate("/");
            },1500)
          })
         
          
         
      } catch (error) {
        console.log(error)
        
          toast.warn("Invalid Credentials", {
            position: "top-center",
          });
          return;
      }
  }

 
  return (
    <div className="flexforsignupandlogin">
      <div className=" container ">
        <Row>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto rounded-lg fillup signup"
          >
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "2rem" }}>Sign Up</p>
              <hr></hr>
            </div>

            <Form autocomplete="off">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text style={{ color: "#6617CB" }}>
                  Email format - john50@gmail.com
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Text style={{ color: "#6617CB" }}>
                  Password length at least 7 character
                </Form.Text>
              </Form.Group>
              <Button
                variant="contained"
                onClick={handleSignUp}
                fullWidth
                sx={{ p: "0.7rem" }}
              >
                <span style={{ fontSize: "1.5rem" }}>Sign up</span>
              </Button>
            </Form>
            <div className="div">
              <p>
                already have an account?{" "}
                <Link to="/" style={{ textDecoration: "none" }}>
                  Login here
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignUp;

