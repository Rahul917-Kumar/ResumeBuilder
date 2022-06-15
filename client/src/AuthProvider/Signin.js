import React, { useContext,  useState } from "react";

import Button from "@mui/material/Button";
import { UserContext } from "../context/GlobalState";
import { Link, useNavigate } from "react-router-dom";

import { Form , Row, Col, Container} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signin() {
    const {signIn ,  setCheck} = useContext(UserContext)
    const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSignin = async(e)=>{
      e.preventDefault()
      try {
          await signIn(email , password).then(()=>{
              console.log("login succesfully");
              
          }).then(()=>{
             
               toast.success(" Login Succesfully", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }); 
            
            
          }).then(()=>{
            setCheck(true);
               setTimeout(() => {
                 navigate("/dashboard");
               }, 1500);
               
          })
           

      } catch (error) {
          toast.warn("Invalid Credentials", {
            position: "top-center",
          });
          console.log(error);
      }
  }
  
  return (
    <div className="flexforsignupandlogin">
      <Container>
        <Row>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto rounded-lg fillup signup"
          >
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "2rem" }}>Sign in</p>
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
                {/* <Form.Text className="text-muted">
                  Email format - john50@gmail.com
                </Form.Text> */}
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
                {/* <Form.Text className="text-muted">
                  Password length at least 7 character
                </Form.Text> */}
              </Form.Group>
              <Button
                variant="contained"
                onClick={handleSignin}
                fullWidth
                sx={{ p: "0.7rem" }}
              >
                <span style={{ fontSize: "1.5rem" }}>Sign in</span>
              </Button>
            </Form>
            <div className="div">
              <p>
                don’t have an account?{" "}
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Register here
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer/>
    </div>
  );
}

export default Signin;


/*
  
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleSignin}>
    Submit
  </Button>
</Form>

*/



/*

<Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "75%",
          margin: "0 auto",
          color: "primary.main",
        }}
      >
        <form>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
            }}
            color="success"
          >
            <TextField
              fullWidth
              id="standard-basic"
              label="Enter Email"
              variant="standard"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              fullWidth
              id="standard-basic"
              label="Enter Password"
              variant="standard"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" variant="outlined" onClick={handleSignin}>
              Login
            </Button>
          </Box>
        </form>
        <div>
          <GoogleButton onClick={signinWithGoogle} />
        </div>
      </Box>


*/